"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "motion/react";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { Img } from "@/components/ui/Img";
import { hero } from "@/data/home";

/** Parallax offset for one layer: `depth` px of travel at the pointer extremes. */
function useLayer(x: MotionValue<number>, y: MotionValue<number>, depth: number) {
  return {
    x: useTransform(x, (v) => v * depth),
    y: useTransform(y, (v) => v * depth),
  };
}

const float = (duration: number, delay = 0) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
});

/**
 * Layered growth dashboard: real Shopify analytics from the Specialty Food Brand
 * case study in a browser frame, a floating result card, a partner chip and the
 * brand's "Let's Work Together" sticker. Pointer parallax on fine pointers only.
 */
export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 60, damping: 18, mass: 0.6 });

  const windowLayer = useLayer(sx, sy, 10);
  const cardLayer = useLayer(sx, sy, 24);
  const chipLayer = useLayer(sx, sy, 16);
  const stickerLayer = useLayer(sx, sy, 30);
  const glowLayer = useLayer(sx, sy, -18);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine) and (min-width: 1025px)");
    if (!fine.matches) return;
    const section = ref.current?.closest("section");
    if (!section) return;
    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      px.set(((e.clientX - r.left) / r.width - 0.5) * 2);
      py.set(((e.clientY - r.top) / r.height - 0.5) * 2);
    };
    const onLeave = () => {
      px.set(0);
      py.set(0);
    };
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce, px, py]);

  return (
    <div ref={ref} className="relative mx-auto aspect-[1.08] w-full max-w-[600px] lgx:mr-[-72px] lgx:max-w-none">
      {/* Ambient glow + rings */}
      <motion.div aria-hidden="true" style={glowLayer} className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-[18%] top-[8%] size-[78%] rounded-full bg-[radial-gradient(circle,rgb(255_74_93/0.32),rgb(255_74_93/0)_68%)] blur-2xl"
          animate={{ scale: [1, 1.08, 1], x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-1/2 top-1/2 size-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
        <div className="absolute left-1/2 top-1/2 size-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
      </motion.div>

      {/* Browser window with live analytics */}
      <motion.figure style={windowLayer} className="absolute right-0 top-[10%] m-0 w-[92%] [perspective:1600px]">
        <div className="overflow-hidden rounded-[18px] border border-white/12 bg-[#0e0f13] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.02)] [transform:rotateY(-8deg)_rotateX(3deg)] [transform-origin:left_center]">
          <div className="flex h-[34px] items-center gap-[7px] border-b border-white/8 px-4 sm:h-[40px]">
            <span className="size-[9px] rounded-full bg-brand" />
            <span className="size-[9px] rounded-full bg-white/25" />
            <span className="size-[9px] rounded-full bg-white/15" />
            <span className="ml-3 hidden h-[22px] flex-1 items-center rounded-full bg-white/[0.06] px-3 font-heading text-[11px] font-medium text-white/55 sm:flex">
              Shopify Analytics · Specialty Food Brand
            </span>
          </div>
          <div className="relative aspect-[3/2] bg-[#f1f1f1]">
            <Img
              src={hero.visual.dashboard}
              alt="Shopify analytics for the Specialty Food Brand: $404,459 in total sales and 5,777 orders"
              fill
              loading="eager"
              sizes="(min-width: 1025px) 560px, 90vw"
              className="object-cover object-left-top"
            />
          </div>
          <figcaption className="sr-only">Results from the Specialty Food Brand case study.</figcaption>
        </div>
      </motion.figure>

      {/* Shopify Partner chip */}
      <motion.div style={chipLayer} className="absolute left-[4%] top-[2%] z-10 sm:left-[8%]">
        <motion.div
          {...float(7, 0.4)}
          className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.55)] sm:px-4"
        >
          <Img src={hero.visual.partnerLogo} alt="Shopify Partner" sizes="96px" className="h-[22px] w-auto sm:h-[26px]" />
        </motion.div>
      </motion.div>

      {/* Case-study result card */}
      <motion.div style={cardLayer} className="absolute bottom-[6%] left-0 z-10 w-[66%] sm:w-[54%] lgx:left-[-6%]">
        <motion.div {...float(8)}>
          <Link
            href={hero.visual.caseHref}
            className="group block rounded-[16px] border border-black/5 bg-white p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:-translate-y-1 sm:p-4"
          >
            <span className="flex items-start justify-between gap-3">
              <span>
                <span className="block font-heading text-[10px] font-semibold uppercase tracking-[0.06em] text-muted sm:text-[11px] sm:tracking-[0.12em]">
                  {hero.visual.caseLabel}
                </span>
                <span className="mt-1 block font-heading text-[17px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink-soft sm:text-[22px]">
                  {hero.visual.caseResult}
                </span>
                <span className="mt-0.5 block font-heading text-[12px] font-medium text-muted sm:text-[13px]">{hero.visual.caseNote}</span>
              </span>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blush text-brand transition-colors group-hover:bg-brand group-hover:text-white sm:size-9">
                <TrendingUp aria-hidden="true" className="size-4" />
              </span>
            </span>
            <span className="relative mt-2 block aspect-[921/353] overflow-hidden rounded-[8px] sm:mt-3">
              <Img src={hero.visual.chart} alt="" fill sizes="(min-width: 1025px) 300px, 55vw" className="object-cover" />
            </span>
            <span className="mt-2 flex items-center gap-1 font-heading text-[11px] font-semibold text-brand sm:text-[12px]">
              View case study
              <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Brand sticker */}
      <motion.div style={stickerLayer} className="absolute bottom-[14%] right-[1%] z-10 w-[22%] max-w-[124px] sm:bottom-[16%] lgx:right-[-2%]">
        <Link href={hero.stickerHref} aria-label="Let’s work together — contact us" className="block rounded-full transition-transform duration-300 hover:scale-105">
          <Img
            src={hero.sticker}
            alt=""
            sizes="124px"
            loading="eager"
            className="h-auto w-full drop-shadow-[0_16px_30px_rgba(255,74,93,0.35)] motion-safe:animate-[spin_20s_linear_infinite]"
          />
        </Link>
      </motion.div>
    </div>
  );
}
