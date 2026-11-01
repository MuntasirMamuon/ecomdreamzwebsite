"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import type { Faq } from "@/lib/types";

type FaqAccordionProps = {
  items: Faq[];
  /**
   * "arrow": the live career/services accordion (grey boxes, arrow icon, two columns).
   * "plus": the single-column +/– variant from the services mockup.
   */
  variant?: "arrow" | "plus";
  /** Split items into two independent columns (career layout). */
  columns?: 1 | 2;
  defaultOpen?: number | null;
};

function FaqItem({ faq, open, onToggle, variant }: { faq: Faq; open: boolean; onToggle: () => void; variant: "arrow" | "plus" }) {
  const id = useId();
  const arrow = variant === "arrow";

  return (
    <div
      className={
        arrow
          ? "border border-[#dddddd] bg-faq"
          : `overflow-hidden rounded-[6px] border border-line-soft ${open ? "bg-[#fafafb]" : "bg-white"}`
      }
    >
      <h3 className="m-0">
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={onToggle}
          className={
            arrow
              ? "flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-5 py-[10px] text-left font-heading text-[15px] font-semibold leading-[30px] text-ink-soft transition-colors hover:text-brand aria-expanded:text-brand"
              : "flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-[clamp(18px,2.2vw,28px)] py-[22px] text-left font-heading text-[16px] font-semibold leading-[1.5] text-ink-soft transition-colors hover:text-brand aria-expanded:text-brand"
          }
        >
          <span>{faq.q}</span>
          {arrow ? (
            <ArrowRight aria-hidden="true" className={`size-[18px] shrink-0 text-ink transition-transform duration-300 ${open ? "rotate-90" : ""}`} strokeWidth={1.75} />
          ) : open ? (
            <Minus aria-hidden="true" className="size-5 shrink-0 text-brand" strokeWidth={2.5} />
          ) : (
            <Plus aria-hidden="true" className="size-5 shrink-0 text-brand" strokeWidth={2.5} />
          )}
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-a`}
            role="region"
            aria-labelledby={`${id}-q`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className={
                arrow
                  ? "rich-text px-5 pb-[18px] font-copy text-[15px] leading-[1.8] text-ink [&_a]:text-brand [&_p]:m-0"
                  : "rich-text px-[clamp(18px,2.2vw,28px)] pb-6 text-[15px] leading-[1.85] text-muted [&_p]:m-0"
              }
              dangerouslySetInnerHTML={{ __html: faq.a }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqAccordion({ items, variant = "arrow", columns = 1, defaultOpen = null }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const toggle = (i: number) => setOpen((cur) => (cur === i ? null : i));
  const gap = variant === "arrow" ? "gap-[10px]" : "gap-3";

  if (columns === 2) {
    const half = Math.ceil(items.length / 2);
    const cols = [items.slice(0, half), items.slice(half)];
    return (
      <div className="grid items-start gap-[10px] md:grid-cols-2 md:gap-x-10">
        {cols.map((col, c) => (
          <div key={c} className={`flex flex-col ${gap}`}>
            {col.map((faq, k) => {
              const i = c * half + k;
              return <FaqItem key={faq.q} faq={faq} variant={variant} open={open === i} onToggle={() => toggle(i)} />;
            })}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${gap}`}>
      {items.map((faq, i) => (
        <FaqItem key={faq.q} faq={faq} variant={variant} open={open === i} onToggle={() => toggle(i)} />
      ))}
    </div>
  );
}
