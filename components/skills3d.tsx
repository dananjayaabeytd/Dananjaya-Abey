'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Text,
  Float,
  Environment,
  MeshDistortMaterial,
  Sparkles,
} from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { Mesh } from 'three';

interface SkillIconProps {
  position: [number, number, number];
  label: string;
}

function SkillIcon({ position, label }: SkillIconProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[1.2, 0]} />
        <MeshDistortMaterial
          color='#ffffff'
          speed={2}
          distort={0.3}
          transparent
          opacity={0.8}
        />
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.4}
          color='#ffffff'
          anchorX='center'
          anchorY='middle'
        >
          {label}
        </Text>
      </mesh>
    </Float>
  );
}

export function Skills3D() {
  const skills: { label: string; position: [number, number, number] }[] = [
    // Frontend
    { label: 'React', position: [-4, 2, 0] },
    { label: 'Next.js', position: [-2, 2, 0] },
    { label: 'Angular', position: [0, 2, 0] },
    { label: 'TailwindCSS', position: [2, 2, 0] },
    { label: 'TypeScript', position: [4, 2, 0] },

    // Backend
    { label: 'Node.js', position: [-4, 0, 0] },
    { label: 'Express', position: [-2, 0, 0] },
    { label: 'SpringBoot', position: [0, 0, 0] },
    { label: 'MongoDB', position: [2, 0, 0] },
    { label: 'PostgreSQL', position: [4, 0, 0] },

    // ML/DL
    { label: 'TensorFlow', position: [-3, -2, 0] },
    { label: 'PyTorch', position: [-1, -2, 0] },
    { label: 'scikit-learn', position: [1, -2, 0] },
    { label: 'OpenCV', position: [3, -2, 0] },

    // Cloud
    { label: 'AWS', position: [-2, -4, 0] },
    { label: 'Azure', position: [0, -4, 0] },
    { label: 'Docker', position: [2, -4, 0] },
  ];

  return (
    <div className='h-[800px] w-full'>
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        <Sparkles count={200} scale={10} size={1} speed={0.4} />
        <Environment preset='night' />

        {skills.map((skill, index) => (
          <SkillIcon
            key={index}
            position={skill.position}
            label={skill.label}
          />
        ))}
      </Canvas>
    </div>
  );
}
