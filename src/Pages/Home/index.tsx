import { useRef, useState, memo, useMemo, useEffect, useCallback, Suspense, forwardRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, OrbitControls, Sphere, Stats } from "@react-three/drei";
import { LayerMaterial, Color, Depth, Noise } from "lamina";
import { EffectComposer, Bloom, DepthOfField, N8AO, Noise as N, TiltShift2, ToneMapping } from "@react-three/postprocessing";
import { useControls } from "leva";
import * as THREE from "three";
import { Physics, RigidBody } from "@react-three/rapier";

// COMPONENTS
import Layout from "@/Components/Layout"
import { Model } from "@/Components/balloon"

import "./styles.scss";

function Striplight(props: any) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}

const Scene = memo(() => {
  const { gl, viewport } = useThree();
  const meshRef: any = useRef();
  const [domEl, setDomEl] = useState();

  // const { brushSize, brushHardness, brushStrength, brushColor } = useControls(
  //   "Brush Settings",
  //   {
  //     brushSize: { value: 0.1, min: 0.01, max: 0.5, label: "Size" },
  //     brushHardness: { value: 0.5, min: 0.1, max: 1, label: "Hardness" },
  //     brushStrength: { value: 0.5, min: 0.1, max: 1, label: "Strength" },
  //     brushColor: { value: { r: 255, g: 255, b: 0 }, label: "Color" },
  //   },
  //   { order: 1, collapsed: true }
  // );

  const onBeforeCompile = useCallback((shader: any) => {
    shader.vertexShader =
      `
      uniform mat4 uMatrixWorld;
      varying vec3 vWorldPosition;
      varying vec2 vUv;
    ` + shader.vertexShader;

    shader.vertexShader = shader.vertexShader.replace("{", `{ vUv = uv;`);
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `#include <begin_vertex>
      vWorldPosition = (uMatrixWorld * vec4(transformed,1.)).xyz;
    `
    );

    shader.fragmentShader =
      `
      varying vec2 vUv;
    ` + shader.fragmentShader;

    shader.fragmentShader = shader.fragmentShader.replace(
      "}",
      `
      gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);

      return;
    }`
    );

    // shader.uniforms.uMatrixWorld = { value: meshRef.current.matrixWorld };
    // shader.uniforms.uBrushColor = {
    //   value: [brushColor.r / 255, brushColor.g / 255, brushColor.b / 255],
    // };
    // shader.uniforms.uBrushSize = { value: brushSize };
    // shader.uniforms.uBrushHardness = { value: brushHardness };
    // shader.uniforms.uBrushStrength = { value: brushStrength };
    // shader.uniforms.uCursorPosition = { value: new THREE.Vector3(0, 0, 0) };
    // shader.uniforms.uOriginalTexture = { value: model.material.map }; //{ value: originalTexture };

    // uvMaterialRef.current.userData.shader = shader;
  }, []);

  useFrame(({ gl }) => {
    // if (isDrawing.current) drawing();
    // const shader = uvMaterialRef.current?.userData.shader;
    // if (shader) {
    //   shader.uniforms.uBrushColor = {
    //     value: [brushColor.r / 255, brushColor.g / 255, brushColor.b / 255],
    //   };
    //   shader.uniforms.uBrushSize = { value: brushSize };
    //   shader.uniforms.uBrushHardness = { value: brushHardness };
    //   shader.uniforms.uBrushStrength = { value: brushStrength };
    // }
    // uvMeshRef.current.material.needsUpdate = true;
  });

  const onPointerDown = useCallback(() => {}, []);
  const onPointerMove = useCallback((e: any) => {
    // const shader = uvMaterialRef.current?.userData.shader;
    // if (shader)
    //   shader.uniforms.uCursorPosition = {
    //     value: new THREE.Vector3(e.point.x, e.point.y, e.point.z),
    //   };
  }, []);

  return (
    <>
      <Physics gravity={[0, 0, 0]} debug={false} timeStep={1 / 30}>
        <Model position={[0, 0, 0]} scale={[1, 1, 1]} />
        <RigidBody
          type="fixed"
          colliders="trimesh"
          name="floor"
          includeInvisible
          // position={[0, 1, 0]}
          // rotation={[Math.PI * 1.5, 0, 0]}
        >
          <mesh
            scale={[viewport.width * 0.12, viewport.height * 0.1, 1]}
            visible={false}
          >
            <sphereGeometry args={[5, 64]} />
            <meshStandardMaterial color="#ffb385" />
          </mesh>
        </RigidBody>
      </Physics>
      {/* <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial />
      </mesh> */}
      {/* <Html
        wrapperClass="leading"
        position={[0, -0.9, 0]}
        distanceFactor={10}
        center
        zIndexRange={[10, 0]}
        // occlude="blending"
      >
        <p>I'm a Front-End Developer</p>
      </Html> */}
    </>
  );
});

export default function Home() {
  const orbitControlsRef: any = useRef();

  return (
    <Layout>
      <div className="canvas">
      <Canvas
        shadows
        flat
        linear
        camera={{
          fov: 55,
          near: 0.1,
          far: 200,
        }}
        dpr={[0.5, 1]}
        gl={{
          antialias: false,
          // preserveDrawingBuffer: true,
        }}
      >
        <color attach="background" args={["#555"]} />
        <Stats />
        <Suspense fallback={<></>}>
          <Scene />
        </Suspense>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <EffectComposer>
          {/* <N8AO aoRadius={0.5} intensity={1} /> */}
          <DepthOfField
            target={[0, 0, 1]}
            focalLength={0.05}
            bokehScale={5}
            height={600}
          />
          <Bloom
            luminanceThreshold={0.75}
            luminanceSmoothing={0.1}
            // intensity={5.5}
          />
          {/* <TiltShift2 blur={0.1} /> */}
          <N opacity={0.04} />
          {/* <ToneMapping /> */}
        </EffectComposer>
        {/* <Environment preset="dawn" background blur={0.4} /> */}
        <Environment background={false} resolution={64}>
          <Striplight position={[10, 2, 0]} scale={[1, 3, 10]} />
          <Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} />
          <mesh scale={70}>
            <sphereGeometry args={[1, 64, 64]} />
            <LayerMaterial side={THREE.BackSide}>
              <Color color="blue" alpha={1} mode="normal" />
              <Depth
                colorA="#00ffff"
                colorB="#ff8f00"
                alpha={0.5}
                mode="normal"
                near={0}
                far={300}
                origin={[100, 100, 100]}
              />
              <Noise mapping="local" type="curl" scale={0.5} mode="reflect" />
            </LayerMaterial>
          </mesh>
        </Environment>
        {/* <OrbitControls ref={orbitControlsRef} /> */}
      </Canvas>
      </div>
      <div className="relative flex justify-center items-center min-h-[100svh] pointer-events-none">
        <p className="leading text-base text-white mt-52 md:mt-72">I'm a Front-End Developer</p>
      </div>
      <div className="min-h-[100svh]"></div>
    </Layout>
  )
}
