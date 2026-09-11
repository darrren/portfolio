import { memo, useEffect, useRef, useState, Suspense } from "react"
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber"
import { Environment, Lightformer, useGLTF, useTexture, Stats } from "@react-three/drei"
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier"
import { MeshLineGeometry, MeshLineMaterial } from "meshline"
import * as THREE from "three"

// HOOKS
import { useMediaQuery } from '@/Hooks/use-media-query'

extend({ MeshLineGeometry, MeshLineMaterial })

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: any
    meshLineMaterial: any
  }
}

interface BadgeGLTF {
  nodes: {
    card: THREE.Mesh
    clip: THREE.Mesh
    clamp: THREE.Mesh
  }
  materials: {
    base: THREE.MeshStandardMaterial
    metal: THREE.MeshStandardMaterial
  }
}

const SEGMENT_PROPS = {
  type: "dynamic",
  canSleep: true,
  colliders: false,
  angularDamping: 2,
  linearDamping: 2,
} as const

const capture = (e: any) =>
  (e.nativeEvent.currentTarget as HTMLElement | null)?.setPointerCapture(
    e.pointerId
  )
const release = (e: any) =>
  (e.nativeEvent.currentTarget as HTMLElement | null)?.releasePointerCapture(
    e.pointerId
  )

interface BandProps {
  dragged: false | THREE.Vector3
  onDrag: (v: false | THREE.Vector3) => void
}

function Band({ dragged, onDrag }: BandProps) {
  const band = useRef<any>(null)
  const fixed = useRef<any>(null)
  const j1 = useRef<any>(null)
  const j2 = useRef<any>(null)
  const j3 = useRef<any>(null)
  const card = useRef<any>(null)

  const vec = new THREE.Vector3()
  const ang = new THREE.Vector3()
  const rot = new THREE.Vector3()
  const dir = new THREE.Vector3()

  const { nodes, materials } = useGLTF(
  "../badge/tag.glb"
) as unknown as BadgeGLTF
  const textureTag = useTexture("../badge/tag.jpg")
  const textureBand = useTexture("../badge/band.jpg")
  const { width, height } = useThree((state) => state.size)
  const isMobile = useMediaQuery("(max-width: 767px)") as any

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  )
  const [hovered, hover] = useState(false)

  useRopeJoint(fixed, j1, [
    [0, 0, 0],
    [0, 0, 0],
    1,
  ])
  useRopeJoint(j1, j2, [
    [0, 0, 0],
    [0, 0, 0],
    1,
  ])
  useRopeJoint(j2, j3, [
    [0, 0, 0],
    [0, 0, 0],
    1,
  ])
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ])

  useEffect(() => {
    if (!hovered) return
    document.body.style.cursor = dragged ? "grabbing" : "grab"
    return () => {
      document.body.style.cursor = "auto"
    }
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      })
    }

    if (fixed.current) {
      ;[j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        )
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (10 + clampedDistance * (50 - 10))
        )
      })

      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.lerped)
      curve.points[2].copy(j1.current.lerped)
      curve.points[3].copy(fixed.current.translation())
      band.current.geometry.setPoints(curve.getPoints(32))

      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z })
    }
  })

  textureTag.flipY = false
  textureTag.wrapS = textureTag.wrapT = THREE.RepeatWrapping
  textureBand.wrapS = textureBand.wrapT = THREE.RepeatWrapping

  useEffect(() => {
    console.log('band mounted')
  }, [])

  return (
    <>
      <group position={isMobile ? [0, 4, 0] : [2.5, 4, 0]}>
        <RigidBody ref={fixed} {...SEGMENT_PROPS} type="fixed" />
        <RigidBody
          position={[0.5, 0, 0]}
          ref={j1}
          {...(SEGMENT_PROPS as any)}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1, 0, 0]}
          ref={j2}
          {...(SEGMENT_PROPS as any)}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1.5, 0, 0]}
          ref={j3}
          {...(SEGMENT_PROPS as any)}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[isMobile ? 0.5 : 2, 0, 0]}
          ref={card}
          {...(SEGMENT_PROPS as any)}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => {
              release(e)
              onDrag(false)
            }}
            onPointerDown={(e) => {
              capture(e)
              onDrag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              )
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={textureTag}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.5}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={[width, height]}
          useMap
          map={textureBand}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  )
}

const Badge = memo(function Badge() {
  const [dragged, drag] = useState<false | THREE.Vector3>(false)

  return (
    <Canvas
      // flat
      // linear
      camera={{ position: [0, 0, 13], fov: 25 }}
      dpr={[0.5, 1]}
      gl={{
        antialias: false,
        alpha: true,
        // preserveDrawingBuffer: true,
      }}>
      {process.env.NODE_ENV === "development" && <Stats />}
      <ambientLight intensity={Math.PI} />
      <Suspense fallback={<></>}>
        <Physics
          gravity={[0, -40, 0]}
          interpolate={!dragged}
          timeStep={1 / 30}
          numSolverIterations={8}
        >
          <Band dragged={dragged} onDrag={drag} />
        </Physics>
      </Suspense>
      <Environment background={false} resolution={64} blur={0.75}>
        {/* <color attach="background" args={["#0a0a0a"]} /> */}
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </Canvas>
  )
})

useGLTF.preload("../badge/tag.glb")
useTexture.preload("../badge/texture.jpg")
useTexture.preload("../badge/band.jpg")

export default Badge