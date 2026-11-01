"use client";

import { animate } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Renders the final number on the server (correct without JS), then counts up
 * once when scrolled into view. Skipped for reduced motion or if already on screen.
 */
export function CountUp({ value, suffix = "", duration = 1.4 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return; // already visible: keep final value

    el.textContent = `0${suffix}`;
    let stop: (() => void) | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const controls = animate(0, value, {
          duration,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => {
            el.textContent = `${Math.round(v)}${suffix}`;
          },
        });
        stop = () => controls.stop();
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      stop?.();
      el.textContent = `${value}${suffix}`;
    };
  }, [value, suffix, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
