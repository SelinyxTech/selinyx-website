"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ArrowUpRight, LayoutGrid, Sparkles } from "lucide-react";
import * as THREE from "three";
import { Loader, useProgress } from "@react-three/drei";
import { heroCards, technologies } from "@/app/lib/data";
import { staggerContainer, fadeUp } from "@/app/lib/animations";
import { loadStore } from "@/app/lib/loadStore";
import Experience from "@/app/components/three/selinyx-scene/Experience";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

const cameraSetting = { fov: 45, near: 0.1, far: 200, position: [0, 0.5, 7] };

// Cards positioned (viewport %) to FRAME the 3D S-shape — desktop only.
const cardPositions = [
  "top-[20%] left-[53%]",
  "top-[20%] right-[13%]",
  "bottom-[30%] left-[53%]",
  "bottom-[30%] right-[13%]",
];

// Wide screens = >= 1280px (xl). The 3D + floating cards are tuned for large
// monitors, so we only mount them here; smaller laptops get the clean text hero.
function useIsWide() {
  const [isWide, setIsWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const update = () => setIsWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isWide;
}

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isWide = useIsWide();
  useEffect(() => setMounted(true), []);

  // Report the real 3D asset loading progress to the global Preloader
  const { progress, active } = useProgress();
  useEffect(() => {
    loadStore.setProgress(progress, active);
  }, [progress, active]);
  useEffect(() => {
    // Only ask the preloader to wait for the 3D when it actually renders (wide screens)
    loadStore.setHas3D(isWide);
  }, [isWide]);

  // Wait for the Preloader to finish before playing entrance animations,
  // otherwise they play hidden behind the loader and the user never sees them.
  const [revealed, setRevealed] = useState(loadStore.getState().revealed);
  useEffect(() => loadStore.subscribe((s) => setRevealed(s.revealed)), []);

  // Until mounted, assume the default (dark) theme to avoid a flash
  const darkMode = mounted ? resolvedTheme === "dark" : true;

  return (
    <section className="relative overflow-hidden xl:min-h-screen">

      {/* ── Background effects (behind everything) ───────────── */}
      <div
        className="absolute inset-0 -z-20 bg-grid"
        style={{ maskImage: "radial-gradient(80% 60% at 50% 0%, black, transparent)" }}
      />
      <div className="absolute inset-0 -z-20 bg-brand-radial" />
      <div className="pointer-events-none absolute -left-40 top-20 -z-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute right-0 top-40 -z-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl sm:h-96 sm:w-96" />

      {/* ── Full-screen 3D canvas — WIDE SCREENS ONLY ────────── */}
      {isWide && (
        <div className="absolute inset-0 -z-10">
          <Canvas
            camera={cameraSetting}
            dpr={[1, 2]}
            gl={{
              antialias: true,
              alpha: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              outputColorSpace: THREE.SRGBColorSpace,
            }}
            style={{ background: "transparent" }}
          >
            <Suspense fallback={null}>
              <Experience darkMode={darkMode} />
            </Suspense>
          </Canvas>
          <Loader />
        </div>
      )}

      {/* ── Content (block on mobile, left column on desktop) ── */}
      <div className="container-x relative z-10 flex flex-col justify-center pt-28 pb-16 md:pt-36 xl:min-h-screen xl:pt-0 xl:pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={revealed ? "show" : "hidden"}
          className="w-full max-w-xl xl:-mt-12"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur dark:border-brand-400/20 dark:bg-white/5 dark:text-brand-300">
              <Sparkles className="h-3.5 w-3.5" />
              Welcome to Selinyx
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            We Build Digital Solutions That Drive{" "}
            <span className="text-gradient">Real Growth</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg"
          >
            Transforming ideas into scalable software, AI-powered products, and digital
            experiences. From strategy to execution, Selinyx delivers solutions that create
            lasting impact.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-gradient text-white">
                <LayoutGrid className="h-3.5 w-3.5" />
              </span>
              View Portfolio
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12">
            <p className="text-sm font-medium text-ink-400 dark:text-ink-400">
              Trusted by 200+ businesses worldwide
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
              {technologies.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="text-sm font-semibold text-ink-400 transition-colors hover:text-brand-600 dark:text-ink-500 dark:hover:text-brand-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── WIDE SCREENS: floating cards overlay framing the 3D ── */}
      {isWide && (
        <div className="pointer-events-none absolute inset-0 z-10 hidden xl:block">
          {heroCards.slice(0, 4).map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              animate={revealed ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.9 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
              className={`pointer-events-auto absolute ${cardPositions[i]} w-52`}
            >
              <div
                className="animate-float glass-card rounded-2xl px-4 py-3.5"
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${card.accent} text-white shadow-sm`}
                  >
                    <card.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-tight text-ink-900 dark:text-white">
                      {card.title}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-ink-500 dark:text-ink-400">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

    </section>
  );
}
