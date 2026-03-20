import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { skills } from '../../data/portfolio'

interface SkillOrbProps {
  position: [number, number, number]
  color: string
  name: string
  description: string
  onHover: (name: string, description: string) => void
  onUnhover: () => void
}

function SkillOrb({ position, color, name, description, onHover, onUnhover }: SkillOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const size = 0.15

  useFrame((state) => {
    if (!meshRef.current) return
    const pulse = 1.0 + Math.sin(state.clock.elapsedTime * 2 + position[1]) * 0.05
    meshRef.current.scale.setScalar(hovered ? 1.5 : pulse)
  })

  // suppress unused warning
  void name

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => { setHovered(true); onHover(name, description) }}
        onPointerOut={() => { setHovered(false); onUnhover() }}
      >
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.4 : 0.5}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </mesh>
      {hovered && (
        <mesh>
          <torusGeometry args={[size * 1.6, 0.015, 8, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.6} />
        </mesh>
      )}
    </group>
  )
}

interface SkillOrbsProps {
  onSelect: (name: string, description: string) => void
  onDeselect: () => void
}

export default function SkillOrbs({ onSelect, onDeselect }: SkillOrbsProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.18
  })

  const positions: [number, number, number][] = skills.map((_, i) => {
    const angle = (i / skills.length) * Math.PI * 4
    const helixY = (i / skills.length) * 7 - 3.5
    const radius = 2.2 + Math.cos(i * 0.7) * 0.4
    return [Math.cos(angle) * radius, helixY, Math.sin(angle) * radius]
  })

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <SkillOrb
          key={skill.name}
          position={positions[i]}
          color={skill.color}
          name={skill.name}
          description={skill.description}
          onHover={onSelect}
          onUnhover={onDeselect}
        />
      ))}

      {skills.slice(0, -1).map((_, i) => {
        const start = new THREE.Vector3(...positions[i])
        const end = new THREE.Vector3(...positions[i + 1])
        const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
        const length = start.distanceTo(end)
        const dir = new THREE.Vector3().subVectors(end, start).normalize()
        const quaternion = new THREE.Quaternion()
        quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir)
        return (
          <mesh key={`spine-${i}`} position={[mid.x, mid.y, mid.z]} quaternion={quaternion}>
            <cylinderGeometry args={[0.008, 0.008, length, 4]} />
            <meshBasicMaterial color="#00f5ff" transparent opacity={0.15} />
          </mesh>
        )
      })}

      <ambientLight intensity={0.4} />
      <pointLight position={[6, 6, 6]} color="#00f5ff" intensity={2} />
      <pointLight position={[-6, -6, 6]} color="#ff00aa" intensity={2} />
    </group>
  )
}
