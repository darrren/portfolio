import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import vertexShader from "../Shaders/vertex.glsl";
import fragmentShader from "../Shaders/fragment.glsl";

interface Props {
  scale?: [number, number, number];
}

function ScanWireframe({ scale = [1, 1, 1] }: Props) {
  const material = useRef<THREE.ShaderMaterial>(null!);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScanSpeed: { value: 0.18 },
      uActive: { value: 0.6 },
      uTailLength: { value: 0.38 },
      uColor: { value: new THREE.Color("#8bd8ff") },
      uScanIntensity: { value: 2.2 },
    }),
    []
  );

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh scale={scale}>
      <sphereGeometry args={[5, 16, 16]} />
      <shaderMaterial
        ref={material}
        transparent
        depthWrite={false}
        wireframe
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default ScanWireframe;