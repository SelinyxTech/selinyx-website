"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/app/lib/data";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5500);
    return () => clearInterval(id);
  }, [paused, count]);

  const t = testimonials[index];

  return (
    <section className="bg-ink-50/50 py-20 dark:bg-white/[0.02] md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by teams that ship"
          description="Don't just take our word for it — here's what our partners say about working with Selinyx."
        />

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[18rem] sm:min-h-[16rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-8 sm:p-10"
              >
                <Quote className="h-10 w-10 text-brand-300 dark:text-brand-500/50" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-lg leading-relaxed text-ink-700 dark:text-ink-100">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-semibold text-ink-900 dark:text-white">{t.name}</p>
                    <p className="text-sm text-ink-500 dark:text-ink-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-white text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-brand-gradient" : "w-2 bg-ink-300 dark:bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-white text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
