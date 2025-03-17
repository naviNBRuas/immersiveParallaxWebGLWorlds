import { useRef, useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Stars, useScroll, Float } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

const FloatingObject = ({ position, color, speed, scale = 1 }: { 
  position: [number, number, number], 
  color: string, 
  speed: number,
  scale?: number 
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  const hovered = useRef(false);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2;
    mesh.current.rotation.y = Math.cos(state.clock.elapsedTime * speed) * 0.2;
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    
    if (hovered.current) {
      mesh.current.scale.setScalar(scale * 1.2 + Math.sin(state.clock.elapsedTime * 8) * 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh 
        ref={mesh} 
        position={position}
        scale={scale}
        onPointerOver={() => (hovered.current = true)}
        onPointerOut={() => (hovered.current = false)}
      >
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.3} 
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export const Scene = () => {
  const { camera } = useThree();
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    camera.position.set(0, 0, 10);
  }, [camera]);

  useFrame(() => {
    if (!groupRef.current) return;
    const scrollOffset = scroll.offset;
    camera.position.y = -scrollOffset * 30;
    groupRef.current.rotation.y += 0.001;
    
    // Add subtle camera movement
    camera.position.x = Math.sin(scroll.offset * Math.PI) * 2;
    camera.lookAt(0, -scrollOffset * 30, 0);
  });

  return (
    <>
      <color attach="background" args={['#000']} />
      <fog attach="fog" args={['#000', 10, 50]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight
        position={[0, 10, 0]}
        angle={0.5}
        penumbra={1}
        intensity={2}
        castShadow
      />
      
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      <ParticleField />
      
      <group ref={groupRef}>
        <FloatingObject position={[-4, 0, 0]} color="#ff3366" speed={0.5} scale={1.5} />
        <FloatingObject position={[4, -5, -2]} color="#33ff66" speed={0.7} />
        <FloatingObject position={[-2, -10, 1]} color="#3366ff" speed={0.6} scale={1.2} />
        <FloatingObject position={[3, -15, -1]} color="#ffcc33" speed={0.8} />
        <FloatingObject position={[-3, -20, 2]} color="#cc33ff" speed={0.5} scale={1.3} />
        <FloatingObject position={[4, -25, -2]} color="#ff9933" speed={0.6} />
        <FloatingObject position={[-4, -30, 1]} color="#33ccff" speed={0.7} scale={1.4} />
      </group>

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.5}
          luminanceSmoothing={0.9}
          intensity={1.5}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.002, 0.002]}
        />
      </EffectComposer>
    </>
  );
};