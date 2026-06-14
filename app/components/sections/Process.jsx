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
    <section className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How We Work"
          title="A proven path from idea to impact"
          description="A clear, collaborative process designed to reduce risk and ship value early."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-ink-200/60 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <span className="text-sm font-bold text-brand-400/70 dark:text-brand-400/50">
                  0{i + 1}
                </span>
                <span className="mt-3 grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                  <step.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
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
