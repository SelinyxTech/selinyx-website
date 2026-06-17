"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

import Podium from "./Podium";
import Rings from "./Rings";
import SShape from "./SShape";
import Dots from "./Dots";
import Lights from "./Lights";

// Detects screen tier: mobile / tablet / laptop / desktop. Updates on resize.
function useScreenTier() {
  const [tier, setTier] = useState("desktop");
  useEffect(() => {
    const getTier = () => {
      const w = window.innerWidth;
      if (w < 768) return "mobile";
      if (w < 1024) return "tablet";
      if (w < 1440) return "laptop";
      return "desktop";
    };
    const update = () => setTier(getTier());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return tier;
}

// Smooth mouse parallax (desktop + laptop only).
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

// 3D anchor points where each card floats around the S (local space).
// Order = your cards array: [AI, Software, Cloud, UI/UX]
// NOTE: tune these 4 points by eye to frame your S nicely.
const cardAnchors = [
  [-1.75,  2.5, 0], // AI Solutions  — lifted up & inward so it clears the heading text
  [ 1.75,  2.5, 0], // Software Development
  [-2,    -0.1, 0], // Cloud Engineering
  [ 2,    -0.1, 0], // UI/UX Design
];

export default function Experience({ darkMode = true, revealed = false, cards = [] }) {
  const tier = useScreenTier();
  const isBigScreen = tier === "laptop" || tier === "desktop";

  // Position + rotation + scale per screen tier.
  const config = {
    desktop: { pos: [3,   -1,   -2  ], rot: [0, -0.362, 0], scale: 1.0 },
    laptop:  { pos: [2.6, -1, -2], rot: [0, -0.362, 0], scale: 0.8 },
    tablet:  { pos: [0,   -0.9, -1.5], rot: [0,  0,     0], scale: 0.7 },
    mobile:  { pos: [0,   -0.8, -1.5], rot: [0,  0,     0], scale: 0.6 },
  };
  const { pos: groupPos, rot: groupRot, scale: groupScale } = config[tier];

  // Floor texture changes with theme.
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
      <Parallax enabled={isBigScreen} />

      {/* 3D scene (rotated) */}
      <group position={groupPos} rotation={groupRot} scale={groupScale}>
        <Dots />
        <Lights />
        <SShape />
        <Podium darkMode={darkMode} />
        <Rings />
        <mesh rotation-x={-Math.PI * 0.5} position-y={-1}>
          <circleGeometry args={[5, 64]} />
          <meshBasicMaterial map={floorTexture} transparent toneMapped={false} />
        </mesh>
      </group>

      {/* Floating cards — SAME position + scale as the S, NO rotation.
          They auto-track the S at EVERY screen size and stay readable. */}
      {isBigScreen && cards.length > 0 && (
        <group position={groupPos} scale={groupScale}>
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Html
                key={card.title}
                position={cardAnchors[i]}
                center
                zIndexRange={[20, 0]}
              >
                <div
                  className="w-56"
                  style={{
                    opacity: revealed ? 1 : 0,
                    transform: `translateY(${revealed ? "0px" : "24px"}) scale(${revealed ? groupScale : groupScale * 0.9})`,
                    transition: "opacity .5s ease, transform .5s ease",
                    transitionDelay: `${0.5 + i * 0.12}s`,
                    transformOrigin: "center center",
                  }}
                >
                  <div
                    className="animate-float glass-card rounded-2xl p-4"
                    style={{ animationDelay: `${i * 0.7}s` }}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${card.accent} text-white shadow-md`}
                      >
                        <Icon className="h-[1.35rem] w-[1.35rem]" strokeWidth={2} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold leading-snug text-ink-900 dark:text-white">
                          {card.title}
                        </p>
                        <p className="mt-1 text-xs font-medium leading-tight text-ink-500 dark:text-ink-400">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Html>
            );
          })}
        </group>
      )}
    </>
  );
}