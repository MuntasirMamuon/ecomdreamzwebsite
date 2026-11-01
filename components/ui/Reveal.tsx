"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset in px the content travels while fading in. */
  y?: number;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Subtle fade/translate-in on first scroll into view.
 * Reduced-motion users get the fade only (see MotionProvider: reducedMotion="user").
 */
export function Reveal({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
