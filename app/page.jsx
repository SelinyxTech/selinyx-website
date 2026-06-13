import Hero from "@/app/components/sections/Hero";
import { TrustedBy } from "@/app/components/sections/TrustedBy";
import { ServicesPreview } from "@/app/components/sections/ServicesPreview";
import { Stats } from "@/app/components/sections/Stats";
import { Process } from "@/app/components/sections/Process";
import { Testimonials } from "@/app/components/sections/Testimonials";
import { FAQ } from "@/app/components/sections/FAQ";
import { Newsletter } from "@/app/components/sections/Newsletter";
import { CTASection } from "@/app/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesPreview />
      <Stats />
      <Process />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <CTASection />
    </>
  );
}
