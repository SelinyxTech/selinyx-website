import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/app/components/sections/PageHeader";
import { Reveal } from "@/app/components/ui/Reveal";
import { CTASection } from "@/app/components/sections/CTASection";
import { projects } from "@/app/lib/data";

export const metadata = {
  title: "Portfolio",
  description:
    "Selected work from Selinyx — AI chatbot platforms, analytics dashboards, SaaS products, e-commerce platforms, and enterprise automation. Real projects, real results.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            Work that delivers <span className="text-gradient">real results</span>
          </>
        }
        description="A look at products we've designed and engineered for startups and enterprises — and the measurable impact they created."
      />

      <section className="pb-12 md:pb-20">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.1} className="h-full">
              <article className="group h-full overflow-hidden rounded-3xl border border-ink-200/60 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.03]">
                {/* Preview */}
                <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute left-4 top-4 flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-white/40" />
                    <span className="h-3 w-3 rounded-full bg-white/40" />
                    <span className="h-3 w-3 rounded-full bg-white/40" />
                  </div>
                  <div className="absolute inset-0 grid place-items-center">
                    <project.icon
                      className="h-20 w-20 text-white/90 transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.3}
                    />
                  </div>
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {project.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ink-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink-200 bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-ink-200/60 pt-5 dark:border-white/10">
                    <div className="flex gap-8">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="text-xl font-bold text-gradient">{m.value}</p>
                          <p className="text-xs text-ink-500 dark:text-ink-400">{m.label}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      aria-label={`Discuss a project like ${project.title}`}
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-colors hover:bg-brand-gradient hover:text-white dark:bg-white/5 dark:text-brand-300"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
