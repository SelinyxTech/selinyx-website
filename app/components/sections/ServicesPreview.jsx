"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/app/lib/data";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { ServiceCard } from "@/app/components/ui/ServiceCard";
import { Reveal } from "@/app/components/ui/Reveal";
import { staggerFast, fadeUp } from "@/app/lib/animations";

export function ServicesPreview() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title="Services We Offer"
          description="End-to-end digital solutions tailored to your business — from intelligent AI products to rock-solid cloud infrastructure."
        />

        <ServiceGrid />

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <Link href="/services" className="btn-ghost">
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceGrid() {
  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.slice(0, 6).map((service) => (
        <motion.div key={service.slug} variants={fadeUp} className="h-full">
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  );
}
