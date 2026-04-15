import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

function Orb() {
  return (
    <Float speed={2.2} rotationIntensity={0.7} floatIntensity={1.2}>
      <Sphere args={[1.65, 128, 128]} scale={1.35}>
        <MeshDistortMaterial
          color="#79f7ff"
          attach="material"
          distort={0.38}
          speed={1.8}
          roughness={0.08}
          metalness={0.72}
          emissive="#0b7a93"
          emissiveIntensity={0.9}
          transparent
          opacity={0.92}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
      <ambientLight intensity={1.1} />
      <directionalLight position={[2, 3, 4]} intensity={2} />
      <Orb />
    </Canvas>
  );
}
