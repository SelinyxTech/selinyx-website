import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Reveal } from "@/app/components/ui/Reveal";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We dig into your goals, users, and constraints to define what success looks like.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "We craft intuitive interfaces and a technical architecture built to scale.",
  },
  {
    icon: Code2,
    title: "Build",
    description: "Senior engineers ship in fast, transparent sprints with continuous feedback.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "We deploy, monitor, and iterate — growing the product alongside your business.",
  },
];

export function Process() {
  return (
    <section className="py-10 md:py-14 lg:py-16 2xl:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="How We Work"
          title="A proven path from idea to impact"
          description="A clear, collaborative process designed to reduce risk and ship value early."
        />

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="h-full">
              <div className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-ink-200/60 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/40">
                {/* Soft brand glow that fades in on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-brand-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <span className="relative text-sm font-bold text-brand-400/70 transition-colors duration-300 group-hover:text-brand-500 dark:text-brand-400/50 dark:group-hover:text-brand-300">
                  0{i + 1}
                </span>
                <span className="relative mt-3 grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 ease-out group-hover:scale-110 dark:bg-brand-500/10 dark:text-brand-300">
                  <step.icon
                    className="h-6 w-6 transition-transform duration-300 ease-out group-hover:-rotate-6"
                    strokeWidth={1.8}
                  />
                </span>
                <h3 className="relative mt-4 text-lg font-semibold text-ink-900 transition-colors duration-300 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
