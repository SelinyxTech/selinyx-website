import { Target, Compass } from "lucide-react";
import { PageHeader } from "@/app/components/sections/PageHeader";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Reveal } from "@/app/components/ui/Reveal";
import { Stats } from "@/app/components/sections/Stats";
import { CTASection } from "@/app/components/sections/CTASection";
import { coreValues, whyChoose } from "@/app/lib/data";

export const metadata = {
  title: "About Us",
  description:
    "Selinyx is an AI-native technology company helping startups and businesses turn ideas into scalable products. Learn about our vision, mission, and values.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            We turn ambitious ideas into{" "}
            <span className="text-gradient">products that scale</span>
          </>
        }
        description="Selinyx is an AI-native technology company. We partner with founders and enterprises to design, build, and grow software that moves their business forward."
      />

      {/* Vision & Mission */}
      <section className="py-10 md:py-14 lg:py-16 2xl:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-ink-200/60 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/40">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white transition-transform duration-300 ease-out group-hover:scale-110">
                <Compass className="h-6 w-6" />
              </span>
              <h2 className="relative mt-5 text-2xl font-bold text-ink-900 transition-colors duration-300 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">Our Vision</h2>
              <p className="mt-3 leading-relaxed text-ink-500 dark:text-ink-300">
                A world where every business — regardless of size — can harness cutting-edge
                technology and artificial intelligence to compete, grow, and delight their
                customers. We exist to make world-class engineering accessible.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-ink-200/60 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/40">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-brand-500 text-white transition-transform duration-300 ease-out group-hover:scale-110">
                <Target className="h-6 w-6" />
              </span>
              <h2 className="relative mt-5 text-2xl font-bold text-ink-900 transition-colors duration-300 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">Our Mission</h2>
              <p className="mt-3 leading-relaxed text-ink-500 dark:text-ink-300">
                To transform ideas into scalable software, AI-powered products, and digital
                experiences that drive real, measurable growth — delivered with transparency,
                speed, and uncompromising quality.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose Selinyx */}
      <section className="py-10 md:py-14 lg:py-16 2xl:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Selinyx"
            title="Why teams choose us"
            description="We combine the speed of a startup with the rigor of an enterprise engineering team."
          />
          <div className="mt-8 grid gap-5 md:mt-10 lg:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <div className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-ink-200/60 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/40">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-brand-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 ease-out group-hover:scale-110 dark:bg-brand-500/10 dark:text-brand-300">
                    <point.icon className="h-6 w-6 transition-transform duration-300 ease-out group-hover:-rotate-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="relative mt-4 font-semibold text-ink-900 transition-colors duration-300 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* Core values */}
      <section className="py-10 md:py-14 lg:py-16 2xl:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Core Values"
            title="The principles we build on"
            description="These values shape every decision we make and every line of code we ship."
          />
          <div className="mt-8 grid gap-5 md:mt-10 lg:mt-12 sm:grid-cols-2">
            {coreValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="group relative flex h-full cursor-pointer gap-5 overflow-hidden rounded-2xl border border-ink-200/60 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/40">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-brand-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white transition-transform duration-300 ease-out group-hover:scale-110">
                    <value.icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <div className="relative">
                    <h3 className="font-semibold text-ink-900 transition-colors duration-300 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">{value.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
