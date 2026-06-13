// rings

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Rings() {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    ring1.current.scale.setScalar(1 + Math.sin(time * 0.8) * 0.03);
    ring2.current.scale.setScalar(1 + Math.sin(time * 0.8 - 0.5) * 0.03);
    ring3.current.scale.setScalar(1 + Math.sin(time * 0.8 - 1) * 0.03);
  });

  return (
    <>
      {/* first ring */}
      <mesh ref={ring1} rotation-x={-Math.PI * 0.5} position-y={-0.99}>
        <ringGeometry args={[2.2, 2.21, 128]} />
        <meshBasicMaterial color="#2e1ab6" />
      </mesh>

      {/* second ring */}
      <mesh ref={ring2} rotation-x={-Math.PI * 0.5} position-y={-0.99}>
        <ringGeometry args={[2.6, 2.61, 128]} />
        <meshBasicMaterial color="#071cd8" transparent opacity={0.4} />
      </mesh>

      {/* third ring */}
      <mesh ref={ring3} rotation-x={-Math.PI * 0.5} position-y={-0.99}>
        <ringGeometry args={[3, 3.01, 128]} />
        <meshBasicMaterial color="#090dec" transparent opacity={0.3} />
      </mesh>
    </>
  );
}
