import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { loadStore } from "@/app/lib/loadStore";

useGLTF.preload("./SShape.glb");

export default function SShape() {
  const { scene } = useGLTF("./SShape.glb");
  const ref = useRef();
  const startTime = useRef(null);
  const done = useRef(false);

  // Only start the intro spin once the Preloader has revealed the site,
  // so the spin isn't wasted while hidden behind the loader.
  const revealedRef = useRef(loadStore.getState().revealed);
  useEffect(
    () => loadStore.subscribe((s) => (revealedRef.current = s.revealed)),
    []
  );

  // apply purple material to all parts
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set("#5b3fd4");
      child.material.roughness = 0.2;
      child.material.metalness = 0.4;
      child.material.envMapIntensity = 2.5;
    }
  });

  // one-time spin — begins after the preloader hands off
  useFrame((state) => {
    if (done.current) return;
    if (!revealedRef.current) return; // hold until the site is revealed
    if (startTime.current === null) startTime.current = state.clock.elapsedTime;

    const elapsed = state.clock.elapsedTime - startTime.current;
    const duration = 1.2;                 // spin length (seconds)
    const finalY = -Math.PI * 0.5;        // resting angle
    const p = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // ease-out = smooth landing

    ref.current.rotation.y = finalY - (1 - eased) * Math.PI * 2;

    if (p >= 1) done.current = true;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={2}
      position-y={0.7}
      rotation-y={-Math.PI * 0.5}
    />
  );
}
