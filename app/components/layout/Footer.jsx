import Link from "next/link";
import { Mail, MapPin, Twitter, Linkedin, Github, Dribbble } from "lucide-react";
import { Logo } from "@/app/components/ui/Logo";
import { footerColumns, company } from "@/app/lib/data";

const socialLinks = [
  { icon: Twitter, href: company.social.twitter, label: "Twitter" },
  { icon: Linkedin, href: company.social.linkedin, label: "LinkedIn" },
  { icon: Github, href: company.social.github, label: "GitHub" },
  { icon: Dribbble, href: company.social.dribbble, label: "Dribbble" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-200/60 bg-ink-50/60 dark:border-white/10 dark:bg-ink-950">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
              We build digital solutions that drive real growth — transforming ideas into
              scalable software, AI-powered products, and digital experiences.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-ink-600 transition-colors hover:text-brand-700 dark:text-ink-300 dark:hover:text-white"
              >
                <Mail className="h-4 w-4 text-brand-500" />
                {company.email}
              </a>
              <p className="flex items-center gap-3 text-ink-600 dark:text-ink-300">
                <MapPin className="h-4 w-4 text-brand-500" />
                {company.address}
              </p>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-900 dark:text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-500 transition-colors hover:text-brand-700 dark:text-ink-300 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-ink-200/60 pt-8 dark:border-white/10 sm:flex-row">
          <p className="text-sm text-ink-500 dark:text-ink-400">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-white text-ink-600 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-300 dark:hover:text-white"
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
