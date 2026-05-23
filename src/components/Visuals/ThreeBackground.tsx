'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Icosahedron, Box, TorusKnot, Stars } from '@react-three/drei';
import React, { useRef } from 'react';
import * as THREE from 'three';

// Proactive WebGL support check
const isWebGLAvailable = () => {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

// 1: LendSwift - Vault Core
function LendSwiftScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#f59e0b" />
      <Icosahedron ref={meshRef} args={[2, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2d1b00" wireframe />
      </Icosahedron>
      <Icosahedron args={[1.5, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" transparent opacity={0.2} />
      </Icosahedron>
    </>
  );
}

// 2: Stock Screener - Data Monoliths
const screenerBoxes = [...Array(8)].map((_, i) => ({
  key: i,
  height: 2 + Math.random() * 2,
  zPos: (Math.random() - 0.5) * 2,
}));

function ScreenerScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime * 2 + i) * 0.5;
      });
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#22c55e" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#ef4444" />
      {screenerBoxes.map((b, i) => (
        <Box key={b.key} args={[0.4, b.height, 0.4]} position={[-3 + i * 0.9, 0, b.zPos]}>
          <meshStandardMaterial color={i % 2 === 0 ? "#22c55e" : "#ef4444"} transparent opacity={0.8} />
        </Box>
      ))}
    </group>
  );
}

// 3: Navix AI - Neural Node
function NavixScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#a855f7" />
      <Sphere ref={meshRef} args={[2, 32, 32]}>
        <MeshDistortMaterial color="#a855f7" attach="material" distort={0.5} speed={2} wireframe />
      </Sphere>
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
    </>
  );
}

// 4: NewsAI - Vector Swarm
function NewsAIScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} color="#f59e0b" intensity={2} />
      <TorusKnot ref={meshRef} args={[1.5, 0.4, 128, 16]}>
        <meshStandardMaterial color="#f59e0b" wireframe />
      </TorusKnot>
    </>
  );
}

// 5: GIS - Wireframe Earth
function GISScene() {
  const earthRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 3, 5]} intensity={1.5} color="#22c55e" />
      <Sphere ref={earthRef} args={[2, 32, 32]}>
        <meshStandardMaterial color="#22c55e" wireframe transparent opacity={0.5} />
      </Sphere>
      <Sphere args={[1.9, 32, 32]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
    </>
  );
}

// 6: ScreenGuard - Scanner Sphere
function ScreenGuardScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#f59e0b" />
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshStandardMaterial color="#111" wireframe={false} />
      </Sphere>
      <Icosahedron args={[2.1, 2]}>
        <meshStandardMaterial color="#f59e0b" wireframe transparent opacity={0.3} />
      </Icosahedron>
    </>
  );
}

const EmptyScene = () => null;

export function ThreeBackground({ projectId }: { projectId: number }) {
  const [mounted, setMounted] = React.useState(false);
  const [webglSupported, setWebglSupported] = React.useState(true);
  const [inView, setInView] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
    setWebglSupported(isWebGLAvailable());
    
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '300px' } // Load slightly before it comes into view
    );
    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => observer.disconnect();
  }, []);

  if (!mounted || !webglSupported) {
    return <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'transparent' }} />;
  }

  let SceneComponent: React.FC = EmptyScene;

  switch (projectId) {
    case 1: SceneComponent = LendSwiftScene; break;
    case 2: SceneComponent = ScreenerScene; break;
    case 3: SceneComponent = NavixScene; break;
    case 4: SceneComponent = NewsAIScene; break;
    case 5: SceneComponent = GISScene; break;
    case 6: SceneComponent = ScreenGuardScene; break;
    default: SceneComponent = EmptyScene;
  }

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      {inView && (
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ powerPreference: 'low-power' }}>
          <SceneComponent />
        </Canvas>
      )}
    </div>
  );
}
