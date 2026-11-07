"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Laptop() {
  const laptopRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = -0.2 + Math.sin(state.clock.elapsedTime * 0.45) * 0.16;
    }
  });

  const metal = new THREE.MeshStandardMaterial({
    color: "#aab8cc",
    metalness: 0.8,
    roughness: 0.25,
  });

  const keyboardMaterial = new THREE.MeshStandardMaterial({
    color: "#263449",
    metalness: 0.25,
    roughness: 0.4,
  });

  return (
    <Float speed={1.2} floatIntensity={0.16} rotationIntensity={0.025}>
      <group ref={laptopRef} rotation={[-0.08, 0, 0]} scale={0.9}>
        {/* بدنه لپ‌تاپ */}
        <mesh position={[0, -0.08, 0]} material={metal}>
          <boxGeometry args={[3.5, 0.14, 2.2]} />
        </mesh>

        {/* سطح کیبورد */}
        <mesh position={[0, 0.001, -0.22]} material={keyboardMaterial}>
          <boxGeometry args={[2.75, 0.025, 0.88]} />
        </mesh>

        {/* کلیدها */}
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 13 }).map((_, col) => (
            <mesh
              key={`${row}-${col}`}
              position={[-1.2 + col * 0.2, 0.017, -0.56 + row * 0.16]}
              material={keyboardMaterial}
            >
              <boxGeometry args={[0.16, 0.018, 0.115]} />
            </mesh>
          )),
        )}

        {/* تاچ‌پد */}
        <mesh position={[0, 0.003, 0.63]} material={metal}>
          <boxGeometry args={[0.85, 0.012, 0.42]} />
        </mesh>

        {/* لولاهای کوچک، بدون میله پشت */}
        {[-0.95, 0.95].map((x) => (
          <mesh key={x} position={[x, -0.005, -1.035]} material={metal}>
            <boxGeometry args={[0.42, 0.07, 0.09]} />
          </mesh>
        ))}

        {/* نمایشگر بازتر */}
        <group position={[0, 0, -1.02]} rotation={[-0.12, 0, 0]}>
          {/* قاب نمایشگر */}
          <mesh position={[0, 1.05, -0.035]}>
            <boxGeometry args={[3.35, 2.1, 0.1]} />
            <meshStandardMaterial color="#8495ad" metalness={0.8} roughness={0.22} />
          </mesh>

          {/* صفحه مشکی */}
          <mesh position={[0, 1.05, 0.022]}>
            <planeGeometry args={[3.13, 1.88]} />
            <meshBasicMaterial color="#080d19" />
          </mesh>

          {/* نور آبی ملایم پشت نوشته */}
          <mesh position={[0, 1.05, 0.028]}>
            <planeGeometry args={[3.1, 1.85]} />
            <meshBasicMaterial color="#0b1730" />
          </mesh>

          {/* تنها نوشته روی صفحه */}
          <Text
            position={[0, 1.05, 0.045]}
            fontSize={0.31}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            textAlign="center"
            letterSpacing={0.015}
            outlineWidth={0.003}
            outlineColor="#60a5fa"
          >
            aliashouri.ir
          </Text>

          {/* دوربین کوچک بالای نمایشگر */}
          <mesh position={[0, 2.075, 0.022]}>
            <sphereGeometry args={[0.022, 16, 16]} />
            <meshBasicMaterial color="#111827" />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="h-[350px] w-full md:h-[500px]">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 2.1, 7], fov: 40 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1.5} />

        <directionalLight position={[3, 5, 4]} intensity={2.5} />

        <pointLight position={[-3, 2, 3]} intensity={30} color="#3b82f6" />

        <Laptop />

        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
}
