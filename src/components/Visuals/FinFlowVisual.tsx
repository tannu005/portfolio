'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Html, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const MarketPulseCore = ({ hovered }: { hovered: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (groupRef.current && outerRingRef.current && innerRingRef.current && coreRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Mouse tracking interaction
      const targetX = state.pointer.x * 0.8;
      const targetY = -state.pointer.y * 0.8;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.1);

      // Continuous data flow rotation
      outerRingRef.current.rotation.x = time * 0.5;
      outerRingRef.current.rotation.y = time * 0.3;
      
      innerRingRef.current.rotation.x = -time * 0.4;
      innerRingRef.current.rotation.z = time * 0.6;
      
      coreRef.current.rotation.y = time * 1.2;

      // Scale effect on hover
      const baseScale = 1.1; 
      const targetScale = hovered ? baseScale * 1.15 : baseScale;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={hovered ? 4 : 2} rotationIntensity={0.5} floatIntensity={1}>
      <group 
        ref={groupRef} 
        onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); document.body.style.cursor = 'auto'; }}
        position={[0, 0, 0]}
      >
          {/* Outer Data Ring */}
          <mesh ref={outerRingRef} position={[0, 0, 0]}>
            <torusGeometry args={[1.8, 0.04, 32, 100]} />
            <meshStandardMaterial color="#4c0519" emissive="#be123c" emissiveIntensity={hovered ? 0.8 : 0.4} roughness={0.2} metalness={0.8} />
          </mesh>

          {/* Inner Data Ring */}
          <mesh ref={innerRingRef} position={[0, 0, 0]}>
            <torusGeometry args={[1.2, 0.06, 32, 100]} />
            <meshStandardMaterial color="#881337" emissive="#e11d48" emissiveIntensity={hovered ? 1.2 : 0.6} roughness={0.1} metalness={0.9} />
          </mesh>

          {/* Core Pulse Engine */}
          <mesh ref={coreRef} position={[0, 0, 0]}>
            <icosahedronGeometry args={[0.5, 1]} />
            <MeshWobbleMaterial 
              color="#ffffff" 
              emissive="#f43f5e" 
              emissiveIntensity={hovered ? 2 : 1}
              factor={hovered ? 1 : 0.5}
              speed={hovered ? 4 : 2}
              roughness={0} 
              metalness={0.5} 
            />
          </mesh>

          {/* HTML Tooltip Bubble */}
          <Html position={[0, 2.5, 0]} center zIndexRange={[100, 0]}>
            <div style={{
              background: 'rgba(20,20,20,0.95)',
              color: '#f43f5e',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              padding: '8px 16px',
              borderRadius: '999px',
              boxShadow: '0 10px 30px rgba(225, 29, 72, 0.2)',
              border: '1px solid rgba(225, 29, 72, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              pointerEvents: 'none',
              transform: hovered ? 'scale(1.1) translateY(-5px)' : 'scale(1) translateY(0)',
              opacity: hovered ? 1 : 0.85,
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              whiteSpace: 'nowrap'
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fb7185', boxShadow: '0 0 10px #fb7185' }} />
              Live Market Pulse
            </div>
          </Html>
      </group>
    </Float>
  );
};

export function FinFlowVisual() {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 10 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ overflow: 'visible' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, 5, -5]} intensity={1.5} color="#4c0519" />
        
        <MarketPulseCore hovered={hovered} />
        
        <Sparkles 
          count={150} 
          scale={10} 
          size={hovered ? 4 : 2} 
          speed={hovered ? 1.5 : 0.5} 
          color="#f43f5e" 
          opacity={hovered ? 0.9 : 0.5} 
        />
        <Sparkles 
          count={50} 
          scale={8} 
          size={hovered ? 3 : 1} 
          speed={hovered ? 2 : 1} 
          color="#ffffff" 
          opacity={hovered ? 1 : 0.3} 
        />
      </Canvas>
    </div>
  );
}
