"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import Podium from "./Podium";
import Rings from "./Rings";
import SShape from "./SShape";
import Dots from "./Dots";
import Lights from "./Lights";

// detects desktop (>=1024px), updates on resize
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

// smooth mouse parallax (desktop only)
// Tracks the mouse on `window` instead of the canvas — the canvas sits behind
// the page content, so it never receives its own pointer events.
function Parallax({ enabled = true }) {
  const { camera } = useThree();
  const baseX = useRef(camera.position.x);
  const baseY = useRef(camera.position.y);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  useFrame(() => {
    if (!enabled) return;
    const amt = 0.1;
    const tx = baseX.current + mouse.current.x * amt;
    const ty = baseY.current + mouse.current.y * amt;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, tx, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, ty, 0.05);
  });

  return null;
}

export default function Experience({ darkMode = true }) {
  const isDesktop = useIsDesktop();

  // Positioned to the right side for the full-screen canvas (left side stays clear for text)
  const groupPos = isDesktop ? [3, -1, -2] : [0, -0.8, -1.5];
  const groupRot = isDesktop ? [0, -0.362, 0] : [0, 0, 0];

  // floor changes with theme
  const floorTexture = useMemo(() => {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d");
    const g = ctx.createRadialGradient(
      size / 2, size / 2, 0,
      size / 2, size / 2, size / 2
    );
    if (darkMode) {
      g.addColorStop(0, "rgba(90,100,150,0.30)");
      g.addColorStop(0.5, "rgba(50,55,90,0.12)");
      g.addColorStop(1, "rgba(0,0,0,0)");
    } else {
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.55, "rgba(255,255,255,0.7)");
      g.addColorStop(1, "rgba(255,255,255,0)");
    }
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(canvas);
  }, [darkMode]);

  return (
    <>
      {/* Transparent canvas — the page background (grid + glow) shows through */}
      <Parallax enabled={isDesktop} />

      <group position={groupPos} rotation={groupRot}>
        <Dots />
        <Lights />

        {/* company logo */}
        <SShape />

        {/* podium (theme-aware) */}
        <Podium darkMode={darkMode} />

        {/* ripple rings */}
        <Rings />

        {/* floor */}
        <mesh rotation-x={-Math.PI * 0.5} position-y={-1}>
          <circleGeometry args={[5, 64]} />
          <meshBasicMaterial map={floorTexture} transparent toneMapped={false} />
        </mesh>
      </group>
    </>
  );
}
