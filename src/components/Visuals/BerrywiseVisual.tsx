'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, MeshDistortMaterial, Html } from '@react-three/drei';
import * as THREE from 'three';

const WiseBerryAvatar = ({ hovered }: { hovered: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Mouse tracking interaction
      // state.pointer contains normalized mouse coordinates (-1 to +1)
      const targetX = state.pointer.x * 1.2;
      const targetY = -state.pointer.y * 1.2;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.1);

      // Playful bobbing on Z axis
      groupRef.current.rotation.z = Math.sin(time * 2) * 0.05;

      // Squash and stretch scale effect on hover (now base scale is smaller)
      const baseScale = 0.75; // Reduced size significantly for portfolio layout
      const targetScaleX = hovered ? baseScale * 1.05 : baseScale;
      const targetScaleY = hovered ? baseScale * 0.95 : baseScale;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScaleX, targetScaleY, targetScaleX), 0.1);
    }
  });

  return (
    <Float speed={hovered ? 6 : 3} rotationIntensity={0.2} floatIntensity={hovered ? 1.5 : 0.8}>
      <group 
        ref={groupRef} 
        onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); document.body.style.cursor = 'auto'; }}
        position={[0, -0.5, 0]}
      >
          {/* Berry Body - Premium Jelly/Glass look */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[1.2, 64, 64]} />
            <MeshDistortMaterial 
              color={hovered ? "#fbbf24" : "#f59e0b"} 
              emissive={hovered ? "#fcd34d" : "#d97706"}
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

          {/* Mouth - Always smiling when tracking mouse! */}
          <mesh position={[0, -0.15, 1.18]} rotation={[0.2, 0, 0]}>
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshStandardMaterial color="#fca5a5" emissive="#ef4444" emissiveIntensity={0.2} />
          </mesh>

          {/* HTML Tooltip Bubble */}
          <Html position={[0, 2.0, 0]} center zIndexRange={[100, 0]}>
            <div style={{
              background: 'rgba(20,20,20,0.95)',
              color: '#f59e0b',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              padding: '8px 16px',
              borderRadius: '999px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              border: '1px solid #333',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              pointerEvents: 'none',
              transform: hovered ? 'scale(1.1) translateY(-5px)' : 'scale(1) translateY(0)',
              opacity: hovered ? 1 : 0.85,
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
              I'm Berrywise!
            </div>
          </Html>
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
          count={30} 
          scale={8} 
          size={hovered ? 6 : 3} 
          speed={0.8} 
          color={hovered ? "#fcd34d" : "#f59e0b"} 
          opacity={0.8} 
        />
      </Canvas>
    </div>
  );
}
