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
import ScanWireframe from "@/Pages/Home/Components/ScanWireframe"
import { Model } from "@/Components/balloon"

// HOOKS
import { useMediaQuery } from '@/Hooks/use-media-query'

import "./styles.scss";

function Striplight(props: any) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}

const Scene = memo(({ resetTrigger = 0, onResetTrigger }: { resetTrigger?: number; onResetTrigger?: () => void }) => {
  const { gl, viewport } = useThree();
  const meshRef: any = useRef();
  const [domEl, setDomEl] = useState();
  const isMobile = useMediaQuery("(max-width: 767px)")

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
  }, []);

  return (
    <>
      <Physics gravity={[0, 0, 0]} debug={false} timeStep={1 / 30}>
        <Model position={[0, 0, 0]} scale={[1, 1, 1]} resetTrigger={resetTrigger} onResetTrigger={onResetTrigger} />
        <RigidBody
          type="fixed"
          colliders="trimesh"
          name="floor"
          includeInvisible
        >
          <ScanWireframe
            scale={[viewport.width * 0.12, viewport.height * 0.1, isMobile ? 1 : 3]}
          />
        </RigidBody>
      </Physics>
    </>
  );
});

export default function Home() {
  const orbitControlsRef: any = useRef();
  const { isInit } = UseHookstate(globalState)
  const [resetTrigger, setResetTrigger] = useState(0);

  const handleReset = () => {
    setResetTrigger((prev) => prev + 1);
  };

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
          // shadows
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
          {process.env.NODE_ENV === "development" && <Stats />}
          <Suspense fallback={<></>}>
            <Scene resetTrigger={resetTrigger} onResetTrigger={handleReset} />
          </Suspense>
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <EffectComposer multisampling={0}>
            <DepthOfField
              target={[0, 0, 1]}
              focalLength={0.05}
              bokehScale={5}
              height={192}
            />
            <Bloom
              luminanceThreshold={0.75}
              luminanceSmoothing={0.1}
            />
            <N opacity={0.12} blendFunction={BlendFunction.MULTIPLY} />
          </EffectComposer>
          {/* <Environment preset="dawn" background blur={0.4} /> */}
          <Environment background={false} resolution={64}>
            <Striplight position={[10, 2, 0]} scale={[1, 3, 10]} />
            <Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} />
            <mesh scale={70}>
              <sphereGeometry args={[1, 32, 16]} />
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
        <button
          onClick={handleReset}
          className="absolute bottom-14 md:bottom-20 right-6 z-10 px-4 py-2 text-[10px] md:text-xs tracking-widest text-white border border-white/40 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/15 transition"
        >
          Reset Position
        </button>
        <p className="absolute bottom-5 left-0 w-full text-[10px] md:text-xs text-neutral-400 text-center tracking-widest">Copyright © {new Date().getFullYear()} Darren Chan. All rights reserved.</p>
      </div>
    </Layout>
  )
}
