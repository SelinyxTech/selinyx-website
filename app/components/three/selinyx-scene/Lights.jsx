import { Environment, Lightformer } from '@react-three/drei'

export default function Lights() {
  return (
    <Environment resolution={256}>

      {/* top light - main */}
      <Lightformer
        intensity={3}
        rotation-x={Math.PI / 2}
        position={[0, 4, 1]}
        scale={[6, 6, 1]}
      />

      {/* front light */}
      <Lightformer
        intensity={2}
        position={[0, 1, 4]}
        scale={[6, 6, 1]}
      />

      {/* edge highlight - right */}
      <Lightformer
        intensity={4}
        position={[3, 2, 2]}
        scale={[2, 5, 1]}
      />

      {/* edge highlight - left */}
      <Lightformer
        intensity={2}
        rotation-y={Math.PI / 2}
        position={[-4, 1, 0]}
        scale={[8, 3, 1]}
      />

      {/* blue glow from below - reflects on logo underside */}
      <Lightformer
        intensity={3}
        color="#6b8cff"
        rotation-x={-Math.PI / 2}
        position={[0, -3, 0]}
        scale={[4, 4, 1]}
      />

    </Environment>
  )
}
