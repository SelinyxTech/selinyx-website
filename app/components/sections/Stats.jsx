import { stats } from "@/app/lib/data";
import { AnimatedCounter } from "@/app/components/ui/AnimatedCounter";
import { Reveal } from "@/app/components/ui/Reveal";

export function Stats() {
  return (
    <section className="py-12">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-brand-gradient px-6 py-12 shadow-soft-lg sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-8 text-center text-white lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
