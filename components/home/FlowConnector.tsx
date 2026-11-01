"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

type Kind = "right" | "down" | "return";

const STROKE = "rgb(255 74 93 / 0.75)";
const WIDTH = 1.5;
const HEAD = 5; // arrowhead half-width and length, px
const INSET = 6; // clearance from the card edges, px
const RADIUS = 10; // corner radius for the return path, px

/**
 * One SVG per connection. It measures its own box (the grid gap it spans) and draws a
 * single path in real pixels, with the arrowhead computed from the same end point, so
 * the line always meets the arrow tip regardless of card sizes.
 */
function geometry(kind: Kind, w: number, h: number) {
  if (kind === "right") {
    const y = h / 2;
    const x0 = INSET;
    const x1 = w - INSET;
    return {
      start: [x0, y] as const,
      line: `M${x0} ${y} H${x1}`,
      head: `M${x1 - HEAD} ${y - HEAD} L${x1} ${y} L${x1 - HEAD} ${y + HEAD}`,
    };
  }
  if (kind === "down") {
    const x = w / 2;
    const y0 = INSET / 2;
    const y1 = h - INSET / 2;
    return {
      start: [x, y0] as const,
      line: `M${x} ${y0} V${y1}`,
      head: `M${x - HEAD} ${y1 - HEAD} L${x} ${y1} L${x + HEAD} ${y1 - HEAD}`,
    };
  }
  // "return": from the bottom-centre of the right card down, across the row gap,
  // and down into the top-centre of the next row's left card.
  const xs = w; // right edge = centre of card 02
  const xe = 0; // left edge = centre of card 03
  const y0 = INSET;
  const y1 = h - INSET;
  const mid = h / 2;
  const r = Math.min(RADIUS, (mid - y0) / 2, (y1 - mid) / 2);
  return {
    start: [xs, y0] as const,
    line: `M${xs} ${y0} V${mid - r} Q${xs} ${mid} ${xs - r} ${mid} H${xe + r} Q${xe} ${mid} ${xe} ${mid + r} V${y1}`,
    head: `M${xe - HEAD} ${y1 - HEAD} L${xe} ${y1} L${xe + HEAD} ${y1 - HEAD}`,
  };
}

export function FlowConnector({ kind, delay = 0 }: { kind: Kind; delay?: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const reduce = useReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setSize((cur) => (cur && cur.w === r.width && cur.h === r.height ? cur : { w: r.width, h: r.height }));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const g = size && size.w > 0 && size.h > 0 ? geometry(kind, size.w, size.h) : null;
  const viewport = { once: true, margin: "0px 0px -60px 0px" } as const;
  const lineDuration = kind === "return" ? 0.7 : 0.45;

  return (
    <svg ref={ref} className="absolute inset-0 size-full overflow-visible" fill="none" aria-hidden="true">
      {g && (
        <>
          <motion.circle
            cx={g.start[0]}
            cy={g.start[1]}
            r={2.5}
            fill={STROKE}
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.2, delay }}
          />
          <motion.path
            d={g.line}
            stroke={STROKE}
            strokeWidth={WIDTH}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={viewport}
            transition={{ duration: lineDuration, delay, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path
            d={g.head}
            stroke={STROKE}
            strokeWidth={WIDTH}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.2, delay: delay + lineDuration * 0.85 }}
          />
        </>
      )}
    </svg>
  );
}
