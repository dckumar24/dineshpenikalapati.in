import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function FloatingGeometry() {
  const blackholeRef = useRef<THREE.Mesh>(null)
  const accretionDiskRef = useRef<THREE.Group>(null)
  const orbitingStarsRef = useRef<THREE.Group>(null)
  const groupRef = useRef<THREE.Group>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { size } = useThree()

  // Track mouse for camera interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / size.width) * 2 - 1,
        y: -(e.clientY / size.height) * 2 + 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [size])

  useFrame((state) => {
    const t = state.clock.elapsedTime

    // Black hole pulsing effect
    if (blackholeRef.current) {
      const pulse = 1 + Math.sin(t * 0.5) * 0.1
      blackholeRef.current.scale.setScalar(pulse)
    }

    // Accretion disk rapid rotation - keep horizontal
    if (accretionDiskRef.current) {
      accretionDiskRef.current.rotation.z = t * 2
      accretionDiskRef.current.rotation.x = 0 // Keep horizontal
    }

    // Stars orbiting and spiraling into black hole
    if (orbitingStarsRef.current) {
      const children = orbitingStarsRef.current.children
      children.forEach((star, index) => {
        const speed = 0.3 + (index / children.length) * 0.5
        const angle = (t * speed + (index / children.length) * Math.PI * 2) % (Math.PI * 2)
        const initialRadius = 8 + (index / children.length) * 3
        const spiralFactor = (t * 0.1) % 1 // 0 to 1 cycle every 10 seconds
        const currentRadius = initialRadius * (1 - spiralFactor * 0.7) // Shrink from initial to 30%
        
        ;(star as THREE.Mesh).position.x = Math.cos(angle) * currentRadius
        ;(star as THREE.Mesh).position.z = Math.sin(angle) * currentRadius
        ;(star as THREE.Mesh).position.y = Math.sin(angle * 2) * (currentRadius * 0.4)
        
        // Scale down as it approaches
        const scale = 1 - spiralFactor * 0.8
        ;(star as THREE.Mesh).scale.setScalar(Math.max(0.1, scale))
      })
    }

    // Group rotation for overall effect
    if (groupRef.current) {
      groupRef.current.rotation.y += (mousePos.x * 0.3 - groupRef.current.rotation.y) * 0.02
      groupRef.current.rotation.x += (mousePos.y * 0.3 - groupRef.current.rotation.x) * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      {/* Starfield background */}
      {Array.from({ length: 100 }).map((_, i) => {
        const angle = (i / 100) * Math.PI * 2
        const radius = 15 + Math.random() * 10
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = (Math.random() - 0.5) * 10
        return (
          <mesh key={`star-${i}`} position={[x, y, z]}>
            <sphereGeometry args={[0.05, 4, 4]} />
            <meshBasicMaterial color="#ffffff" toneMapped={false} />
          </mesh>
        )
      })}

      {/* Stars orbiting and spiraling into black hole */}
      <group ref={orbitingStarsRef}>
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh key={`orbit-star-${i}`} position={[8, 0, 0]}>
            <sphereGeometry args={[0.15, 8, 8]} />
            <meshBasicMaterial
              color={`hsl(${i * 30}, 100%, 50%)`}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>

      {/* Event Horizon - Black Hole */}
      <mesh ref={blackholeRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          color="#000000"
          emissive="#1a0033"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.2}
          toneMapped={false}
        />
      </mesh>

      {/* Event Horizon Glow Ring */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.3, 0.15, 32, 200]} />
        <meshBasicMaterial
          color="#ff6600"
          transparent
          opacity={0.8}
          toneMapped={false}
        />
      </mesh>

      {/* Accretion Disk - multiple rotating rings */}
      <group ref={accretionDiskRef}>
        {/* Main hot disk */}
        <mesh>
          <torusGeometry args={[3, 0.3, 32, 200]} />
          <meshStandardMaterial
            color="#ffaa00"
            emissive="#ff6600"
            emissiveIntensity={1.5}
            metalness={0.8}
            roughness={0.3}
            toneMapped={false}
          />
        </mesh>

        {/* Outer cooler disk */}
        <mesh>
          <torusGeometry args={[4.5, 0.25, 32, 256]} />
          <meshStandardMaterial
            color="#ff4400"
            emissive="#ff2200"
            emissiveIntensity={0.8}
            metalness={0.6}
            roughness={0.4}
            toneMapped={false}
          />
        </mesh>

        {/* Dust/debris disk */}
        <mesh rotation={[0.2, 0, 0]}>
          <torusGeometry args={[5.5, 0.4, 32, 300]} />
          <meshStandardMaterial
            color="#cc3300"
            emissive="#aa2200"
            emissiveIntensity={0.5}
            metalness={0.4}
            roughness={0.6}
            transparent
            opacity={0.7}
            toneMapped={false}
          />
        </mesh>
      </group>

      {/* Light bending effect - rings around black hole */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[2, 0.08, 16, 128]} />
        <meshBasicMaterial
          color="#00ff88"
          transparent
          opacity={0.3}
          toneMapped={false}
        />
      </mesh>

      {/* Lens flare effect - light being bent */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[6, 32, 32]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </mesh>

      {/* Intense lighting from black hole */}
      <pointLight position={[0, 0, 0]} color="#ff6600" intensity={4} distance={20} />
      <pointLight position={[3, 3, 3]} color="#00ffff" intensity={2} distance={15} />
      <pointLight position={[-3, -3, -3]} color="#00ff00" intensity={1.5} distance={15} />
      <ambientLight intensity={0.4} />
    </group>
  )
}
