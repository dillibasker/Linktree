import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, PresentationControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Simple sphere component for the background
function Sphere({ position, scale, color, speed = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
      meshRef.current.rotation.x = time * 0.5 * speed;
      meshRef.current.rotation.z = time * 0.5 * speed;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.8} />
    </mesh>
  );
}

// Torus component for floating rings
function Torus({ position, scale, color, rotation, speed = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.3 * speed;
      meshRef.current.rotation.y = time * 0.2 * speed;
      meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
    </mesh>
  );
}

// Main scene component
function Scene({ theme }) {
  const isDark = theme === 'dark';

  return (
    <>
      <ambientLight intensity={isDark ? 0.1 : 0.4} />
      <directionalLight position={[10, 10, 5]} intensity={isDark ? 0.2 : 0.4} />
      <directionalLight position={[-10, -10, -5]} intensity={isDark ? 0.1 : 0.2} color={isDark ? "#9333ea" : "#8b5cf6"} />
      
      <PresentationControls
        global
        snap
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 8, Math.PI / 8]}
        azimuth={[-Math.PI / 6, Math.PI / 6]}
        config={{ mass: 2, tension: 400 }}
        cursor={false}
      >
        <Float rotationIntensity={0.2} floatIntensity={0.5} speed={2}>
          <Sphere position={[-6, -2, -10]} scale={2} color={isDark ? "#6d28d9" : "#8b5cf6"} speed={0.5} />
          <Sphere position={[7, 0, -12]} scale={3} color={isDark ? "#00b3b3" : "#00CED1"} speed={0.3} />
          <Sphere position={[-5, 5, -8]} scale={1.5} color={isDark ? "#ca8a04" : "#eab308"} speed={0.7} />
          
          <Torus position={[4, -3, -6]} scale={1.5} color={isDark ? "#4c1d95" : "#7c3aed"} rotation={[Math.PI / 4, 0, 0]} speed={0.4} />
          <Torus position={[-3, 2, -4]} scale={1} color={isDark ? "#008080" : "#00e6e6"} rotation={[0, Math.PI / 4, 0]} speed={0.6} />
          <Torus position={[0, -4, -9]} scale={2} color={isDark ? "#a16207" : "#facc15"} rotation={[Math.PI / 3, Math.PI / 5, 0]} speed={0.2} />
        </Float>
      </PresentationControls>
      
      <Environment preset={isDark ? "night" : "sunset"} />
    </>
  );
}

// Main exported component
export default function ThreeBackground({ theme }) {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: theme === 'dark' ? 0.8 : 1.2
        }}
      >
        <Scene theme={theme} />
      </Canvas>
    </div>
  );
}