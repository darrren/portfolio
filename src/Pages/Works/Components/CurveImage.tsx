import { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { useTexture } from "@react-three/drei"
import vertexShader from "../Shaders/vertex.glsl"
import fragmentShader from "../Shaders/fragment.glsl"

interface Props {
  image: string
  domEl: HTMLElement
  size: { width: number; height: number }
  scroll: { current: number }
}

const getScreen = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
})

function CurveImage({ image, domEl, size, scroll }: Props) {
  const mesh = useRef<THREE.Mesh>(null!)
  const material = useRef<THREE.ShaderMaterial>(null!)
  const texture = useTexture(image)
  const { camera } = useThree()
  const cam = camera as THREE.PerspectiveCamera

  const uniforms = useMemo(
    () => ({
      tMap: { value: texture },
      uPlaneSizes: { value: [0, 0] },
      uImageSizes: { value: [size.width, size.height] },
      uViewportSizes: { value: [window.innerWidth, window.innerHeight] },
      uStrength: { value: 0 },
      uVisibility: { value: 1 },
      uDirection: { value: 0.0 },
    }),
    [texture, size.width, size.height]
  )

  useFrame(() => {
    const screen = getScreen()
    const bounds = domEl.getBoundingClientRect()
    const fov = cam.fov * (Math.PI / 180)
    const vpHeight = 2 * Math.tan(fov / 2) * cam.position.z
    const vpWidth = vpHeight * cam.aspect

    const scaleX = (vpWidth * bounds.width) / screen.width
    const scaleY = (vpHeight * bounds.height) / screen.height

    mesh.current.scale.x = scaleX
    mesh.current.scale.y = scaleY

    const offsetX = (bounds.left / screen.width) * vpWidth
    const offsetY = ((bounds.top - scroll.current) / screen.height) * vpHeight

    mesh.current.position.x = -vpWidth / 2 + scaleX / 2 + offsetX
    mesh.current.position.y = vpHeight / 2 - scaleY / 2 - offsetY

    material.current.uniforms.uPlaneSizes.value = [scaleX, scaleY]
    material.current.uniforms.uViewportSizes.value = [vpWidth, vpHeight]
  })

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[1, 1, 10, 10]} />
      <shaderMaterial
        ref={material}
        transparent
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  )
}

export default CurveImage