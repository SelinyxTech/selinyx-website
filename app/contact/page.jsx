import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { PageHeader } from "@/app/components/sections/PageHeader";
import { Reveal } from "@/app/components/ui/Reveal";
import { ContactForm } from "@/app/components/sections/ContactForm";
import { company } from "@/app/lib/data";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Selinyx. Tell us about your project and our team will respond within one business day. Email contact@selinyx.com.",
};

const infoCards = [
  {
    icon: Mail,
    title: "Email us",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with our team",
    href: `https://wa.me/${company.whatsapp}`,
  },
  {
    icon: Clock,
    title: "Response time",
    value: "Within 1 business day",
  },
  {
    icon: MapPin,
    title: "Where we are",
    value: company.address,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s start a <span className="text-gradient">conversation</span>
          </>
        }
        description="Have a project, a question, or just want to explore what's possible? Drop us a line — we read every message."
      />

      <section className="relative pb-20 md:pb-28">
        {/* Soft decorative glow behind the content */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-brand-400/10 blur-3xl dark:bg-brand-500/10"
        />

        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Info */}
          <div className="space-y-4">
            {infoCards.map((card, i) => {
              const isLink = Boolean(card.href);
              const content = (
                <div
                  className={`group flex items-center gap-4 rounded-2xl border border-ink-200/60 bg-white p-5 transition-all duration-300 dark:border-white/10 dark:bg-white/[0.03] ${
                    isLink
                      ? "hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_20px_50px_-28px_rgba(124,77,255,0.45)] dark:hover:border-brand-400/40"
                      : ""
                  }`}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110 dark:bg-brand-500/10 dark:text-brand-300">
                    <card.icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink-500 dark:text-ink-400">
                      {card.title}
                    </p>
                    <p className="font-semibold text-ink-900 dark:text-white">{card.value}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={card.title} delay={i * 0.08}>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={0.3}>
              <div className="rounded-2xl border border-brand-200/60 bg-brand-50/60 p-5 dark:border-brand-400/20 dark:bg-brand-500/10">
                <p className="text-sm leading-relaxed text-brand-800 dark:text-brand-200">
                  Prefer a live chat? Use the <strong>Selinyx Assistant</strong> in the bottom-right
                  corner — it&apos;s online and ready to help.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}