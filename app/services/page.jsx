import { PageHeader } from "@/app/components/sections/PageHeader";
import { Reveal } from "@/app/components/ui/Reveal";
import { ServiceCard } from "@/app/components/ui/ServiceCard";
import { Process } from "@/app/components/sections/Process";
import { CTASection } from "@/app/components/sections/CTASection";
import { services } from "@/app/lib/data";

export const metadata = {
  title: "Services",
  description:
    "Explore Selinyx services: AI & machine learning, custom software, web & mobile development, cloud solutions, data engineering, automation, DevOps, and IT consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Everything you need to{" "}
            <span className="text-gradient">build, launch &amp; scale</span>
          </>
        }
        description="Nine end-to-end capabilities under one roof. Mix and match what you need — or let us own the whole journey from idea to growth."
      />

      <section className="pb-12 md:pb-20">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={service.slug} id={service.slug} className="scroll-mt-28 h-full">
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <ServiceCard service={service} showFeatures />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <Process />
      <CTASection />
    </>
  );
}
