import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export function ServiceCard({ service, showFeatures = false }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200/60 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/40">
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${service.accent} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
      />
      <span
        className={`mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-soft`}
      >
        <service.icon className="h-6 w-6" strokeWidth={1.8} />
      </span>

      <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
        {service.description}
      </p>

      {showFeatures && (
        <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-1.5 text-xs text-ink-600 dark:text-ink-300">
              <Check className="h-3.5 w-3.5 shrink-0 text-brand-500" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <Link
        href={`/services#${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors group-hover:gap-2.5 dark:text-brand-300"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-all" />
      </Link>
    </div>
  );
}
