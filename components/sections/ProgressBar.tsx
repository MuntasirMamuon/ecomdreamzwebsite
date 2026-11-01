"use client";

import { motion } from "motion/react";

/** Labelled skill bar that fills when scrolled into view. */
export function ProgressBar({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div className="mb-2 flex justify-between font-heading text-[14px] font-semibold leading-[1.4] text-ink-soft">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div role="progressbar" aria-label={label} aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} className="h-1.5 overflow-hidden rounded-[3px] bg-[#e8e8ec]">
        <motion.div
          className="h-full bg-brand"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
