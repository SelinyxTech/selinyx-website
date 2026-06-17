import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/app/components/sections/PageHeader";
import { Reveal } from "@/app/components/ui/Reveal";
import { CTASection } from "@/app/components/sections/CTASection";
import { projects } from "@/app/lib/data";

export const metadata = {
  title: "What We Build",
  description:
    "Examples of the kinds of products Selinyx designs and engineers — AI chatbot platforms, analytics dashboards, SaaS products, e-commerce, and enterprise automation. Detailed case studies coming soon.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Build"
        title={
          <>
            Solutions we design, build &amp;{" "}
            <span className="text-gradient">ship at scale</span>
          </>
        }
        description="A look at the kinds of products our team designs and engineers. Detailed case studies coming soon — until then, see what we can build for you."
      />

      <section className="pb-10 md:pb-14 lg:pb-16 2xl:pb-20">
        <div className="container-x grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200/60 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.03]">
                {/* Preview */}
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute left-4 top-4 flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-white/40" />
                    <span className="h-3 w-3 rounded-full bg-white/40" />
                    <span className="h-3 w-3 rounded-full bg-white/40" />
                  </div>
                  <div className="absolute inset-0 grid place-items-center">
                    <project.icon
                      className="h-16 w-16 text-white/90 transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.3}
                    />
                  </div>
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {project.category}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-ink-900 dark:text-white">{project.title}</h3>
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

                  <div className="mt-auto flex items-center justify-end pt-6">
                    <Link
                      href="/contact"
                      aria-label={`Discuss a project like ${project.title}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-300"
                    >
                      Discuss a project
                      <ArrowUpRight className="h-4 w-4" />
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
