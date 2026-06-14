"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/app/components/ui/Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-12">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-ink-200/60 bg-white p-8 dark:border-white/10 dark:bg-white/[0.03] sm:p-12">
            <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-brand-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-accent-500/10 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                  <Mail className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
                  Stay ahead of the curve
                </h3>
                <p className="mt-2 text-ink-500 dark:text-ink-300">
                  Get product insights, engineering tips, and AI trends delivered to your inbox.
                  No spam — unsubscribe anytime.
                </p>
              </div>

              <div>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300"
                  >
                    <CheckCircle2 className="h-6 w-6 shrink-0" />
                    <p className="text-sm font-medium">
                      You&apos;re subscribed! Watch your inbox for the next edition.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-full border border-ink-200 bg-white px-5 py-3 text-sm text-ink-800 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    />
                    <button type="submit" className="btn-primary shrink-0">
                      Subscribe
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
