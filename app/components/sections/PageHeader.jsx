import { Reveal } from "@/app/components/ui/Reveal";
import { Badge } from "@/app/components/ui/Badge";

export function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-12 md:pt-44 md:pb-16">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-0 -z-10 bg-brand-radial" />
      <div className="container-x">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Badge>{eyebrow}</Badge>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink-900 dark:text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-500 dark:text-ink-300">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
