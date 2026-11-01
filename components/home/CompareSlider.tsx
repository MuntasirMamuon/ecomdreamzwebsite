"use client";

import { useId, useState } from "react";
import { Img } from "@/components/ui/Img";

type CompareSliderProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

/** Before/after image comparison. Drag, click or use the arrow keys (native range input). */
export function CompareSlider({ before, after, beforeAlt, afterAlt }: CompareSliderProps) {
  const [pct, setPct] = useState(50);
  const inputId = useId();

  return (
    <div className="relative aspect-square w-full select-none overflow-hidden rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
      <Img src={after} alt={afterAlt} fill sizes="(min-width: 1025px) 670px, 100vw" className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
        <Img src={before} alt={beforeAlt} fill sizes="(min-width: 1025px) 670px, 100vw" className="object-cover" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white" style={{ left: `${pct}%` }} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 flex size-[38px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-[6px] rounded-full border-[3px] border-white"
        style={{ left: `${pct}%` }}
      >
        <span className="h-0 w-0 border-y-[5px] border-r-[6px] border-y-transparent border-r-white" />
        <span className="h-0 w-0 border-y-[5px] border-l-[6px] border-y-transparent border-l-white" />
      </div>

      <label htmlFor={inputId} className="sr-only">
        Compare before and after images
      </label>
      <input
        id={inputId}
        type="range"
        min={0}
        max={100}
        value={pct}
        onChange={(e) => setPct(Number(e.target.value))}
        aria-valuetext={`${pct}% before image`}
        className="peer absolute inset-0 m-0 size-full cursor-ew-resize appearance-none opacity-0"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[22px] ring-brand ring-offset-2 peer-focus-visible:ring-2" />
    </div>
  );
}
