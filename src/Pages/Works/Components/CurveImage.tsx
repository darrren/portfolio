import { useRef, useMemo, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { useTexture } from "@react-three/drei"
import vertexShader from "../Shaders/vertex.glsl"
import fragmentShader from "../Shaders/fragment.glsl"

export interface PlaneRect {
  cx: number
  cy: number
  w: number
  h: number
}

export const planeRects: (PlaneRect | null)[] = []

interface Props {
  image: string
  domEl: HTMLElement
  size: { width: number; height: number }
  scroll: { current: number }
  index: number
  selected: boolean
  onSelect: (index: number) => void
  totalHeight: number
}

const getScreen = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
})

function CurveImage({ image, domEl, size, scroll, index, selected, onSelect, totalHeight }: Props) {
  const mesh = useRef<THREE.Mesh>(null!)
  const geometry = useRef<THREE.PlaneGeometry>(null!)
  const material = useRef<THREE.ShaderMaterial>(null!)
  const texture = useTexture(image)
  const { camera } = useThree()
  const cam = camera as THREE.PerspectiveCamera
  const progress = useRef(0)
  const hoverProgress = useRef(0)
  const hovered = useRef(false)
  const pointerTarget = useRef({ x: 0.5, y: 0.5 })
  const rgbShift = useRef(0)
  const prevScroll = useRef(scroll.current)
  const scrollScale = useRef(1)

  const uniforms = useMemo(
    () => ({
      tMap: { value: texture },
      uPlaneSizes: { value: [0, 0] },
      uImageSizes: { value: [size.width, size.height] },
      uVisibility: { value: 1 },
      uDirection: { value: 0.0 },
      uTime: { value: 0 },
      uHover: { value: 0 },
      uPointer: { value: [0.5, 0.5] },
      uRGBShift: { value: 0 },
      uScale: { value: 1 },
    }),
    [texture, size.width, size.height]
  )

  useEffect(() => {
    return () => {
      planeRects[index] = null
    }
  }, [index])

  useFrame((state) => {
    const target = selected ? 1 : 0
    progress.current += (target - progress.current) * 0.08
    const t = progress.current

    const hoverTarget = hovered.current ? 1 : 0
    hoverProgress.current += (hoverTarget - hoverProgress.current) * 0.1
    material.current.uniforms.uTime.value = state.clock.elapsedTime
    material.current.uniforms.uHover.value = hoverProgress.current
    material.current.uniforms.uPointer.value = [
      pointerTarget.current.x,
      pointerTarget.current.y,
    ]

    // RGB split driven by scroll velocity: sign follows direction, eased to 0
    const scrollSpeed = scroll.current - prevScroll.current
    prevScroll.current = scroll.current
    const rgbTarget = Math.max(-0.5, Math.min(0.5, scrollSpeed * 0.02))
    rgbShift.current += (rgbTarget - rgbShift.current) * 0.08
    material.current.uniforms.uRGBShift.value = rgbShift.current

    // Scroll-driven scale via shader: images subtly grow while scrolling, ease back to 1
    const scrollScaleTarget = 1 + Math.min(Math.abs(scrollSpeed) * 0.008, 1.12)
    scrollScale.current += (scrollScaleTarget - scrollScale.current) * 0.06
    material.current.uniforms.uScale.value = scrollScale.current

    const screen = getScreen()
    const bounds = domEl.getBoundingClientRect()
    const fov = cam.fov * (Math.PI / 180)
    const vpHeight = 2 * Math.tan(fov / 2) * cam.position.z
    const vpWidth = vpHeight * cam.aspect

    // Rest transform: the slide projected onto the viewport
    const restSX = (vpWidth * bounds.width) / screen.width
    const restSY = (vpHeight * bounds.height) / screen.height
    const restX =
      -vpWidth / 2 + restSX / 2 + (bounds.left / screen.width) * vpWidth
    let restY =
      vpHeight / 2 -
      restSY / 2 -
      ((bounds.top - scroll.current) / screen.height) * vpHeight

    // Infinite loop wrap: reposition item to the other side when off-screen
    if (totalHeight > 0) {
      const totalVP = (totalHeight / screen.height) * vpHeight
      const k = Math.round(restY / totalVP)
      restY -= k * totalVP
    }

    // Expanded transform: moved to the center of the screen
    const aspect = bounds.width / bounds.height
    const expW = Math.min(vpWidth * 0.5, vpHeight * 0.62 * aspect)
    const expH = expW / aspect
    const expX = 0
    const expY = vpHeight * 0.09

    const scaleX = restSX + (expW - restSX) * t
    const scaleY = restSY + (expH - restSY) * t
    const posX = restX + (expX - restX) * t
    const posY = restY + (expY - restY) * t

    mesh.current.scale.x = scaleX
    mesh.current.scale.y = scaleY
    mesh.current.position.x = posX
    mesh.current.position.y = posY
    mesh.current.position.z = t * 1.0
    mesh.current.renderOrder = t > 0.01 ? 2 : 0

    material.current.uniforms.uPlaneSizes.value = [scaleX, scaleY]

    const zFac = (cam.position.z - mesh.current.position.z) / cam.position.z
    const vpw = vpWidth * zFac
    const vph = vpHeight * zFac

    const geom = geometry.current
    if (geom) {
      const pos = geom.attributes.position as THREE.BufferAttribute
      const scaleY = mesh.current.scale.y
      const uDistort = 1 - t
      for (let i = 0, l = pos.count; i < l; i++) {
        const viewY = pos.getY(i) * scaleY + mesh.current.position.y
        const distortion = Math.sin((viewY / vpHeight) * Math.PI + Math.PI / 2)
        pos.setZ(i, distortion * 0.48 * uDistort)
      }
      pos.needsUpdate = true
      geom.computeVertexNormals()
      geom.computeBoundingSphere()
      geom.computeBoundingBox()
    }

    planeRects[index] = {
      cx: (posX / vpw + 0.5) * screen.width,
      cy: (0.5 - posY / vph) * screen.height,
      w: (scaleX / vpw) * screen.width,
      h: (scaleY / vph) * screen.height,
    }
  })

  return (
    <>
      <mesh
        ref={mesh}
        onClick={(e) => {
          e.stopPropagation()
          onSelect(index)
        }}
        onPointerOver={(e) => {
          hovered.current = true
          if (e.uv) {
            // pointerTarget.current.x = e.uv.x
            // pointerTarget.current.y = e.uv.y
          }
          document.body.style.cursor = "pointer"
        }}
        onPointerMove={(e) => {
          if (e.uv) {
            // pointerTarget.current.x = e.uv.x
            // pointerTarget.current.y = e.uv.y
          }
        }}
        onPointerOut={() => {
          hovered.current = false
          document.body.style.cursor = ""
        }}
      >
        <planeGeometry ref={geometry} args={[1, 1, 20, 20]} />
        <shaderMaterial
          ref={material}
          // transparent
          // side={THREE.DoubleSide}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    </>
  )
}

export default CurveImage