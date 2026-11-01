"use client";

import { motion } from "motion/react";
import { CodeXml, Lightbulb, Rocket, Workflow, type LucideIcon } from "lucide-react";
import { FlowConnector } from "@/components/home/FlowConnector";
import type { whatWeDo } from "@/data/home";

type Step = (typeof whatWeDo)["steps"][number];

// Presentation only; the step titles and descriptions come unchanged from data/home.ts.
const meta: { label: string; Icon: LucideIcon }[] = [
  { label: "Discover", Icon: Lightbulb },
  { label: "Design", Icon: Workflow },
  { label: "Develop", Icon: CodeXml },
  { label: "Deliver", Icon: Rocket },
];

const ease = [0.22, 1, 0.36, 1] as const;
const inView = { once: true, margin: "0px 0px -60px 0px" } as const;

/** Card for a single workflow step. */
function ProcessStep({ step, index }: { step: Step; index: number }) {
  const { label, Icon } = meta[index] ?? meta[0];
  return (
    <article className="group relative h-full rounded-[18px] border border-black/[0.06] bg-white p-6 shadow-[0_1px_2px_rgba(27,29,33,0.04),0_14px_30px_-24px_rgba(27,29,33,0.3)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-brand/30 hover:shadow-[0_2px_4px_rgba(27,29,33,0.04),0_24px_44px_-24px_rgba(255,74,93,0.38)] motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <span className="flex size-12 items-center justify-center rounded-[14px] bg-blush text-brand transition-[background-color,color,transform] duration-300 ease-out group-hover:bg-brand group-hover:text-white motion-safe:group-hover:-translate-y-0.5">
          <Icon aria-hidden="true" className="size-[22px]" strokeWidth={1.75} />
        </span>
        <span className="font-heading text-[11.5px] font-semibold uppercase leading-none tracking-[0.14em] text-muted">
          <span className="text-brand">{String(index + 1).padStart(2, "0")}</span>
          <span aria-hidden="true" className="mx-1.5 text-ink-soft/25">
            /
          </span>
          {label}
        </span>
      </div>
      <h3 className="m-0 mt-6 font-heading text-[19px] font-bold leading-[1.3] tracking-[-0.01em] text-ink-soft md:text-[20px]">{step.title}</h3>
      <p className="m-0 mt-2.5 font-copy text-[15.5px] leading-[1.7] text-muted">{step.text}</p>
    </article>
  );
}

/** Horizontal arrow in the column gap, level with the icon centres: 01 → 02 and 03 → 04 (two-column layouts). */
function AcrossConnector({ delay }: { delay: number }) {
  return (
    <span aria-hidden="true" className="absolute left-full top-[52px] hidden h-4 w-10 -translate-y-1/2 md:block">
      <FlowConnector kind="right" delay={delay} />
    </span>
  );
}

/** Path in the row gap from the centre of step 02 down to the centre of step 03 (two-column layouts). */
function ReturnConnector({ delay }: { delay: number }) {
  return (
    <span aria-hidden="true" className="absolute right-1/2 top-full hidden h-12 w-[calc(100%+2.5rem)] md:block">
      <FlowConnector kind="return" delay={delay} />
    </span>
  );
}

/** Vertical arrow between stacked cards, under the icon column (single-column layout). */
function DownConnector({ delay }: { delay: number }) {
  return (
    <span aria-hidden="true" className="absolute left-[48px] top-full h-6 w-4 -translate-x-1/2 md:hidden">
      <FlowConnector kind="down" delay={delay} />
    </span>
  );
}

export function ProcessFlow({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative m-0 grid list-none gap-6 p-0 md:grid-cols-2 md:gap-x-10 md:gap-y-12">
      {steps.map((step, i) => (
        <motion.li
          key={step.title}
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.55, delay: i * 0.1, ease }}
        >
          <ProcessStep step={step} index={i} />
          {i % 2 === 0 && i < steps.length - 1 && <AcrossConnector delay={0.25 + i * 0.1} />}
          {i === 1 && steps.length > 2 && <ReturnConnector delay={0.45} />}
          {i < steps.length - 1 && <DownConnector delay={0.2 + i * 0.1} />}
        </motion.li>
      ))}
    </ol>
  );
}
