"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/app/lib/data";
import { Logo } from "@/app/components/ui/Logo";
import { ThemeToggle } from "@/app/components/providers/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-200/60 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/70"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-[72px]">

        <Logo />

        {/* Desktop links — plain, exactly like friend's design */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-brand-700 dark:text-white"
                    : "text-ink-600 hover:text-brand-700 dark:text-ink-300 dark:hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary hidden md:inline-flex">
            Let&apos;s Talk
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-white/70 text-ink-700 dark:border-white/15 dark:bg-white/5 dark:text-ink-100 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-center"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink-200/60 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/95 lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-white"
                        : "text-ink-700 hover:bg-ink-50 dark:text-ink-200 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
