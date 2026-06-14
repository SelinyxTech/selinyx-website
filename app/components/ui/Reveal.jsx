"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/app/lib/animations";

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
