import * as THREE from "three";
import { useMemo } from "react";

// soft glowing ring texture (fake bloom, no post-processing)
function useRingGlow(rgb = "160,90,255") {
  return useMemo(() => {
    const size = 512;
    const c = document.createElement("canvas");
    c.width = c.height = size;
    const ctx = c.getContext("2d");
    const cx = size / 2;
    const g = ctx.createRadialGradient(cx, cx, 0, cx, cx, cx);
    g.addColorStop(0.0, `rgba(${rgb},0)`);
    g.addColorStop(0.655, `rgba(${rgb},0)`);
    g.addColorStop(0.675, `rgba(${rgb},0.5)`);
    g.addColorStop(0.69, `rgba(${rgb},1)`);
    g.addColorStop(0.705, `rgba(${rgb},0.5)`);
    g.addColorStop(0.74, `rgba(${rgb},0)`);
    g.addColorStop(1.0, `rgba(${rgb},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(c);
  }, [rgb]);
}

export default function Podium({ darkMode = true }) {
  const ringGlow = useRingGlow();

  // steps switch color with theme
  const stepColor = darkMode ? "#221f3c" : "#f0edf7";

  return (
    <>
      {/* bottom step */}
      <mesh position-y={-1}>
        <cylinderGeometry args={[2, 2, 0.3, 64]} />
        <meshStandardMaterial
          color={stepColor}
          roughness={0.4}
          metalness={0.45}
        />
      </mesh>

      {/* middle step */}
      <mesh position-y={-0.85}>
        <cylinderGeometry args={[1.6, 1.6, 0.3, 64]} />
        <meshStandardMaterial
          color={stepColor}
          roughness={0.4}
          metalness={0.45}
        />
      </mesh>

      {/* top step */}
      <mesh position-y={-0.7}>
        <cylinderGeometry args={[1.2, 1.2, 0.3, 64]} />
        <meshStandardMaterial
          color={stepColor}
          roughness={0.4}
          metalness={0.45}
        />
      </mesh>

      {/* soft glow halo — DARK MODE ONLY */}
      {darkMode && (
        <mesh position-y={-0.68} rotation-x={-Math.PI * 0.5}>
          <planeGeometry args={[4.2, 4.2]} />
          <meshBasicMaterial
            map={ringGlow}
            transparent
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      )}

      {/* core ring — ALWAYS shown: glows in dark, subtle in light */}
      <mesh position-y={-0.685} rotation-x={-Math.PI * 0.5}>
        <ringGeometry args={[1.4, 1.46, 80]} />
        <meshBasicMaterial
          color={darkMode ? "#ece0ff" : "#a99fd0"}
          toneMapped={!darkMode}
          transparent
          opacity={darkMode ? 1 : 0.65}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
