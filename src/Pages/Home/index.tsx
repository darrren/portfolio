import { useRef, useState, memo, useMemo, useEffect, useCallback, Suspense, forwardRef } from "react";
import { useHookstate as UseHookstate } from '@hookstate/core'
import globalState from '@/Stores/state'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, OrbitControls, Sphere, Stats } from "@react-three/drei";
import { LayerMaterial, Color, Depth, Noise } from "lamina";
import { EffectComposer, Bloom, DepthOfField, N8AO, Noise as N, TiltShift2, ToneMapping } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing"
import { useControls } from "leva";
import * as THREE from "three";
import { Physics, RigidBody } from "@react-three/rapier";
import { motion } from 'motion/react'

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
            <sphereGeometry args={[5, 16, 16]} />
            <meshStandardMaterial color="#8bd8ff" wireframe />
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
  const { isInit } = UseHookstate(globalState)

  const container = {
    hidden: { y: 20 },
    visible: (i = 1) => ({
      y: 0,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i + 2.5 },
    }),
  };

  const child = {
    hidden: {
      y: 20,
    },
    visible: {
      y: 0,
      transition: {
        easing: [0.6, 0.01, -0.05, 0.9],
      //   type: "spring",
      //   damping: 12,
      //   stiffness: 200,
      },
    },
  };

  return (
    <Layout>
      <div className="wrapper">
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
            alpha: true,
            // preserveDrawingBuffer: true,
          }}
        >
          {/* <color attach="background" args={["#555"]} /> */}
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
            <N opacity={0.12} blendFunction={BlendFunction.MULTIPLY} />
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
          {isInit && <motion.p
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative overflow-hidden leading text-base text-white mt-60 md:mt-72 tracking-widest"
          >
            {Array.from("I'm a Senior Front-End Developer").map((letter, index) => (
              <motion.span
                key={index}
                style={{ display: "inline-block" }}
                variants={child}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.p>}
        </div>
        {/* <div className="min-h-[100svh]"></div> */}
      </div>
    </Layout>
  )
}
