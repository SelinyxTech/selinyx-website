"use client";

import { motion } from "framer-motion";
import { company } from "@/app/lib/data";

export function WhatsAppButton() {
  const href = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hi Selinyx! I'd like to discuss a project."
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ y: -3 }}
      className="group fixed bottom-[4.75rem] left-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-soft-lg"
    >
      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]/60" />
      <svg viewBox="0 0 32 32" className="relative h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3.2c-7.1 0-12.86 5.76-12.86 12.86 0 2.27.6 4.49 1.73 6.44L3.1 28.8l6.48-1.69a12.8 12.8 0 0 0 6.45 1.74h.01c7.1 0 12.86-5.76 12.86-12.86 0-3.44-1.34-6.67-3.77-9.1a12.78 12.78 0 0 0-9.09-3.69zm0 23.4h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.04 1.06 1.08-3.94-.25-.4a10.66 10.66 0 0 1-1.63-5.66c0-5.9 4.8-10.7 10.71-10.7 2.86 0 5.55 1.12 7.57 3.14a10.62 10.62 0 0 1 3.13 7.57c0 5.9-4.8 10.7-10.71 10.7zm5.87-8.01c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.91-1.79-2.23-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.43 5.45 4.81.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z" />
      </svg>
    </motion.a>
  );
}
