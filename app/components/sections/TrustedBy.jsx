import { technologies } from "@/app/lib/data";

export function TrustedBy() {
  const items = [...technologies, ...technologies];
  return (
    <section className="border-y border-ink-200/60 bg-ink-50/50 py-10 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="container-x">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-ink-400 dark:text-ink-500">
          Powered by the technologies we trust
        </p>
        <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
            {items.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="whitespace-nowrap text-xl font-bold text-ink-400/80 transition-colors hover:text-brand-600 dark:text-ink-500 dark:hover:text-brand-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
