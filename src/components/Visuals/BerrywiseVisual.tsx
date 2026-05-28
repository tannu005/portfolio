'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const WiseBerryAvatar = ({ hovered }: { hovered: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Random playful tilt
      groupRef.current.rotation.z = Math.sin(time * 2) * 0.1;
      groupRef.current.rotation.y = Math.sin(time * 1.5) * 0.2;
      groupRef.current.rotation.x = Math.sin(time * 1) * 0.1;

      // Squash and stretch scale effect on hover
      const targetScaleX = hovered ? 1.05 : 1.0;
      const targetScaleY = hovered ? 0.95 : 1.0;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScaleX, targetScaleY, targetScaleX), 0.1);
    }
  });

  return (
    <Float speed={hovered ? 6 : 3} rotationIntensity={0.5} floatIntensity={hovered ? 2 : 1}>
      <group 
        ref={groupRef} 
        onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); document.body.style.cursor = 'auto'; }}
        scale={2.5}
        position={[0, 0, 0]}
      >
          {/* Berry Body - Premium Jelly/Glass look */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[1.2, 64, 64]} />
            <MeshDistortMaterial 
              color={hovered ? "#a855f7" : "#8b5cf6"} 
              emissive={hovered ? "#c084fc" : "#6d28d9"}
              emissiveIntensity={0.2}
              roughness={0.1}
              metalness={0.3}
              clearcoat={1}
              clearcoatRoughness={0.1}
              distort={0.1} 
              speed={2} 
            />
          </mesh>

          {/* Leaf Antenna (Makes it a berry!) */}
          <mesh position={[0, 1.15, 0]} rotation={[0.2, 0, 0.5]}>
            <coneGeometry args={[0.25, 0.8, 32]} />
            <meshPhysicalMaterial color="#34d399" roughness={0.4} clearcoat={0.5} />
          </mesh>
          
          {/* Secondary small leaf */}
          <mesh position={[0.1, 1.1, -0.1]} rotation={[-0.2, 0, -0.5]}>
            <coneGeometry args={[0.15, 0.5, 32]} />
            <meshPhysicalMaterial color="#10b981" roughness={0.4} clearcoat={0.5} />
          </mesh>

          {/* Glowing Glasses (Makes it "Wise") */}
          <group position={[0, 0.2, 1.15]} scale={1.1}>
            {/* Left Lens */}
            <mesh position={[-0.4, 0, 0]}>
              <torusGeometry args={[0.25, 0.04, 32, 100]} />
              <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.8} />
            </mesh>
            {/* Right Lens */}
            <mesh position={[0.4, 0, 0]}>
              <torusGeometry args={[0.25, 0.04, 32, 100]} />
              <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.8} />
            </mesh>
            {/* Bridge */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.8} />
            </mesh>
          </group>

          {/* Eyes (Inside Glasses) */}
          <mesh position={[-0.4, 0.2, 1.16]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
          </mesh>
          <mesh position={[0.4, 0.2, 1.16]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
          </mesh>

          {/* Cute little mouth */}
          {hovered ? (
            <mesh position={[0, -0.2, 1.18]}>
              <sphereGeometry args={[0.08, 32, 32]} />
              <meshStandardMaterial color="#fca5a5" emissive="#ef4444" emissiveIntensity={0.2} />
            </mesh>
          ) : (
            <mesh position={[0, -0.15, 1.18]} rotation={[0, 0, Math.PI]}>
              <cylinderGeometry args={[0.08, 0.08, 0.02, 32, 1, false, 0, Math.PI]} />
              <meshStandardMaterial color="#cbd5e1" emissive="#94a3b8" emissiveIntensity={0.2} />
            </mesh>
          )}
      </group>
    </Float>
  );
};

export function BerrywiseVisual() {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 10 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ overflow: 'visible' }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, 5, -5]} intensity={1} color="#f43f5e" />
        
        <WiseBerryAvatar hovered={hovered} />
        
        <Sparkles 
          count={40} 
          scale={8} 
          size={hovered ? 8 : 4} 
          speed={0.8} 
          color={hovered ? "#34d399" : "#fb7185"} 
          opacity={0.8} 
        />
      </Canvas>
    </div>
  );
}
