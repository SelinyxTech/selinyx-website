"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WifiOff, Wifi } from "lucide-react";

// Tiny "no content" endpoints — a successful fetch proves real internet access.
const PING_URLS = [
  "https://www.gstatic.com/generate_204",
  "https://www.cloudflare.com/cdn-cgi/trace",
];
const CHECK_INTERVAL_MS = 5000;

export function OfflineIndicator() {
  // status: "online" | "offline" | "reconnected"
  const [status, setStatus] = useState("online");
  const statusRef = useRef("online");

  useEffect(() => {
    let cancelled = false;
    let interval;

    const setStatusSafe = (next) => {
      if (cancelled) return;
      statusRef.current = next;
      setStatus(next);
    };

    // Decide what to show given a real online/offline result
    const apply = (online) => {
      const prev = statusRef.current;
      if (online) {
        if (prev === "offline") {
          // just came back — show a brief "Back online" confirmation
          setStatusSafe("reconnected");
          setTimeout(() => {
            if (!cancelled && statusRef.current === "reconnected") setStatusSafe("online");
          }, 3000);
        } else if (prev !== "reconnected") {
          setStatusSafe("online");
        }
      } else {
        setStatusSafe("offline");
      }
    };

    // Actively verify internet access (not just a network interface)
    const probe = async () => {
      // The browser is certain there's no connection
      if (!navigator.onLine) {
        apply(false);
        return;
      }
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 4000);
        await Promise.any(
          PING_URLS.map((url) =>
            fetch(url, { mode: "no-cors", cache: "no-store", signal: controller.signal })
          )
        );
        clearTimeout(timer);
        apply(true);
      } catch {
        apply(false);
      }
    };

    probe();
    interval = setInterval(probe, CHECK_INTERVAL_MS);

    // React instantly to the browser's own events too
    const onOffline = () => apply(false);
    const onOnline = () => probe();
    window.addEventListener("offline", onOffline);
    window.addEventListener("online", onOnline);

    return () => {
      cancelled = true;
      clearInterval(interval);
      window.removeEventListener("offline", onOffline);
      window.removeEventListener("online", onOnline);
    };
  }, []);

  const visible = status !== "online";
  const offline = status === "offline";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          role="status"
          aria-live="polite"
          className="fixed left-1/2 top-4 z-[95] -translate-x-1/2"
        >
          <div
            className={`flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-semibold shadow-soft-lg backdrop-blur-xl ${
              offline
                ? "border-amber-300/60 bg-amber-50/95 text-amber-800 dark:border-amber-400/30 dark:bg-amber-500/15 dark:text-amber-200"
                : "border-emerald-300/60 bg-emerald-50/95 text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-500/15 dark:text-emerald-200"
            }`}
          >
            <span
              className={`grid h-7 w-7 place-items-center rounded-full ${
                offline
                  ? "bg-amber-500/15 text-amber-600 dark:text-amber-300"
                  : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300"
              }`}
            >
              {offline ? <WifiOff className="h-4 w-4" /> : <Wifi className="h-4 w-4" />}
            </span>
            {offline ? (
              <span>You&apos;re offline — check your connection</span>
            ) : (
              <span>Back online</span>
            )}
            {offline && <span className="ml-1 h-2 w-2 animate-pulse rounded-full bg-amber-500" />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
