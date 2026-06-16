import Link from "next/link";
import { Check, Rocket, TrendingUp, Building2 } from "lucide-react";
import { PageHeader } from "@/app/components/sections/PageHeader";
import { Reveal } from "@/app/components/ui/Reveal";
import { FAQ } from "@/app/components/sections/FAQ";
import { CTASection } from "@/app/components/sections/CTASection";
import { pricingTiers } from "@/app/lib/data";

// Icon per plan (aligned to pricingTiers order: Starter, Growth, Enterprise)
const tierIcons = [Rocket, TrendingUp, Building2];

export const metadata = {
  title: "Pricing",
  description:
    "Flexible engagement models from Selinyx — fixed-scope MVPs, monthly dedicated teams, and custom enterprise contracts. Transparent pricing, no surprises.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={
          <>
            Simple plans that <span className="text-gradient">scale with you</span>
          </>
        }
        description="Choose the engagement model that fits your stage. Every plan includes senior talent, transparent communication, and code you fully own."
      />

      <section className="relative pb-20 md:pb-28">
        {/* Soft decorative glow behind the cards */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-brand-400/10 blur-3xl dark:bg-brand-500/10"
        />

        <div className="container-x grid items-stretch gap-6 pt-4 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => {
            const Icon = tierIcons[i] ?? Rocket;
            return (
              <Reveal key={tier.name} delay={i * 0.1} className="h-full">
                <div
                  className={`group relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 ${
                    tier.highlighted
                      ? "border-transparent bg-brand-gradient text-white shadow-[0_32px_90px_-22px_rgba(124,77,255,0.7)] ring-1 ring-white/30 lg:shadow-[0_40px_110px_-24px_rgba(124,77,255,0.85)]"
                      : "border-ink-200/70 bg-white hover:-translate-y-2 hover:border-brand-300 hover:shadow-[0_24px_60px_-28px_rgba(124,77,255,0.45)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/40"
                  }`}
                >
                  {/* Subtle gradient ring on hover for normal cards */}
                  {!tier.highlighted && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-brand-50/0 to-brand-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-brand-500/[0.04] dark:to-transparent"
                    />
                  )}

                  {/* Most popular ribbon */}
                  {tier.highlighted && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-soft ring-1 ring-brand-100">
                      ⭐ Most popular
                    </span>
                  )}

                  {/* Plan header: icon + name */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                        tier.highlighted
                          ? "bg-white/20 text-white"
                          : "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.9} />
                    </span>
                    <h3
                      className={`text-lg font-semibold ${
                        tier.highlighted ? "text-white" : "text-ink-900 dark:text-white"
                      }`}
                    >
                      {tier.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span
                      className={`text-5xl font-bold tracking-tight ${
                        tier.highlighted ? "text-white" : "text-ink-900 dark:text-white"
                      }`}
                    >
                      {tier.price}
                    </span>
                    {tier.cadence && (
                      <span
                        className={`text-sm font-medium ${
                          tier.highlighted ? "text-white/80" : "text-ink-500 dark:text-ink-400"
                        }`}
                      >
                        {tier.cadence}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      tier.highlighted ? "text-white/85" : "text-ink-500 dark:text-ink-300"
                    }`}
                  >
                    {tier.description}
                  </p>

                  {/* CTA — kept high for clear hierarchy */}
                  <Link
                    href="/contact"
                    className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                      tier.highlighted
                        ? "bg-white text-brand-700 shadow-sm hover:brightness-95 hover:shadow-md"
                        : "btn-primary hover:shadow-lg"
                    }`}
                  >
                    {tier.cta}
                  </Link>

                  {/* Divider */}
                  <div
                    className={`my-7 h-px ${
                      tier.highlighted ? "bg-white/20" : "bg-ink-200/70 dark:bg-white/10"
                    }`}
                  />

                  {/* Features */}
                  <p
                    className={`mb-4 text-xs font-semibold uppercase tracking-wider ${
                      tier.highlighted ? "text-white/70" : "text-ink-400 dark:text-ink-500"
                    }`}
                  >
                    What&apos;s included
                  </p>
                  <ul className="flex-1 space-y-3.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                            tier.highlighted
                              ? "bg-white/20 text-white"
                              : "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300"
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span
                          className={
                            tier.highlighted ? "text-white/90" : "text-ink-600 dark:text-ink-300"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="container-x mt-10 text-center text-sm text-ink-500 dark:text-ink-400">
          Need something different? We tailor engagements to your exact needs —{" "}
          <Link href="/contact" className="font-semibold text-brand-600 dark:text-brand-300">
            let&apos;s talk
          </Link>
          .
        </p>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}