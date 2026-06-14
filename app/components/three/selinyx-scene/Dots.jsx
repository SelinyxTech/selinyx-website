import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// ball settings - radius, speed, startAngle
const ballData = [
  { radius: 1.5, speed: 1, start: 0 },
  { radius: 2, speed: 0.7, start: 2 },
  { radius: 2.5, speed: 0.5, start: 4 },
  { radius: 1.5, speed: 1, start: Math.PI },
  { radius: 2, speed: 0.7, start: 2 + Math.PI },
  { radius: 2.5, speed: 0.5, start: 4 + Math.PI },
]

// ring sizes
const ringData = [1.5, 2, 2.5]

export default function Dots() {

  // create refs for all balls
  const balls = useRef([])

  useFrame((state) => {
    const time = state.clock.elapsedTime

    ballData.forEach((data, i) => {
      const angle = time * data.speed + data.start
      balls.current[i].position.x = Math.cos(angle) * data.radius
      balls.current[i].position.y = 1 + Math.sin(angle) * data.radius
    })
  })

  return <>

    {/* orbit rings - looped */}
    {ringData.map((radius, i) => (
      <mesh key={i} position-y={1} position-z={-1}>
        <ringGeometry args={[radius, radius + 0.01, 128]} />
        <meshBasicMaterial color="#c8c0ff" transparent opacity={0.25} side={2} />
      </mesh>
    ))}

    {/* balls - looped */}
    {ballData.map((data, i) => (
      <mesh
        key={i}
        ref={(el) => (balls.current[i] = el)}
        position={[data.radius, 1, -1]}
      >
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="#6b4ce6" metalness={0.3} roughness={0.2} />
      </mesh>
    ))}

  </>
}
