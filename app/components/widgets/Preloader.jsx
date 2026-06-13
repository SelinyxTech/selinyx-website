"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { loadStore } from "@/app/lib/loadStore";

// Minimum time the loader stays up (avoids a jarring flash on fast loads)
const MIN_VISIBLE_MS = 900;
// Hard failsafe — never trap the user behind the loader
const MAX_VISIBLE_MS = 9000;

export default function Preloader() {
  const [shown, setShown] = useState(0); // displayed %
  const [hidden, setHidden] = useState(false);

  // refs read inside the animation loop
  const storeRef = useRef(loadStore.getState());
  const windowLoadedRef = useRef(false);
  const startRef = useRef(Date.now());

  useEffect(() => {
    // 1) subscribe to the real 3D loading progress
    const unsub = loadStore.subscribe((s) => {
      storeRef.current = s;
    });

    // 2) the browser's real "everything downloaded" signal
    if (document.readyState === "complete") {
      windowLoadedRef.current = true;
    } else {
      const onLoad = () => (windowLoadedRef.current = true);
      window.addEventListener("load", onLoad);
      var cleanupLoad = () => window.removeEventListener("load", onLoad);
    }

    // lock scroll while the loader is up
    document.body.style.overflow = "hidden";

    let raf;
    const tick = () => {
      const s = storeRef.current;
      const elapsed = Date.now() - startRef.current;
      const windowLoaded = windowLoadedRef.current;

      // Everything that must finish before we reveal the site
      const threeReady = !s.has3D || (!s.active && s.progress >= 100);
      const allReady = windowLoaded && threeReady && elapsed >= MIN_VISIBLE_MS;

      // Build an HONEST target from real signals
      let target;
      if (s.has3D) {
        // The 3D model is the heavy asset — track its real progress
        target = s.progress;
        if (target >= 100 && !windowLoaded) target = 99; // hold until page is fully ready
      } else {
        // No 3D on this page — the real signal is the window load event
        target = windowLoaded ? 100 : 90;
      }
      if (target >= 100 && !allReady) target = 99; // never hit 100 until truly ready
      if (elapsed > MAX_VISIBLE_MS) target = 100; // failsafe

      setShown((cur) => {
        const next = cur + (target - cur) * 0.09;
        return target - next < 0.4 ? target : next;
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (cleanupLoad) cleanupLoad();
      unsub();
      document.body.style.overflow = "";
    };
  }, []);

  // Reveal the site once we've reached 100%
  useEffect(() => {
    if (shown >= 99.7 && !hidden) {
      const t = setTimeout(() => {
        setHidden(true);
        document.body.style.overflow = "";
        // Let entrance animations (Hero text, etc.) start playing now
        loadStore.setRevealed(true);
      }, 420);
      return () => clearTimeout(t);
    }
  }, [shown, hidden]);

  const pct = Math.min(100, Math.round(shown));

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] grid place-items-center bg-white dark:bg-ink-950"
        >
          {/* soft brand glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-3xl" />

          <div className="relative flex flex-col items-center">
            {/* logo with a pulsing ring */}
            <div className="relative grid h-20 w-20 place-items-center">
              <motion.span
                className="absolute inset-0 rounded-2xl bg-brand-gradient opacity-30 blur-md"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-brand-gradient">
                <Image
                  src="/logo.png"
                  alt="Selinyx"
                  width={44}
                  height={44}
                  priority
                  className="h-11 w-11 object-contain"
                />
              </div>
            </div>

            <p className="mt-6 text-lg font-bold tracking-tight text-ink-900 dark:text-white">
              Selinyx
            </p>

            {/* real progress bar */}
            <div className="mt-5 h-1.5 w-56 overflow-hidden rounded-full bg-ink-200/70 dark:bg-white/10">
              <motion.div
                className="h-full rounded-full bg-brand-gradient"
                style={{ width: `${pct}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            <div className="mt-3 flex w-56 items-center justify-between text-xs font-medium text-ink-500 dark:text-ink-400">
              <span>Loading experience</span>
              <span className="tabular-nums">{pct}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
