import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/app/components/ui/Reveal";

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink-900 px-6 py-16 text-center dark:bg-white/[0.04] sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-80" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Let&apos;s build something that drives{" "}
                <span className="text-gradient">real growth</span>
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                Tell us about your idea. We&apos;ll turn it into a scalable product your customers
                love — and your business depends on.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Start your project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
