"use client";

import { AnimatePresence, motion, type PanInfo } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useId, useState } from "react";
import { Img } from "@/components/ui/Img";

type Slide = { src: string; name: string };

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
  center: { x: 0 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
};

export function TalentSlider({ slides, initialIndex = 0 }: { slides: Slide[]; initialIndex?: number }) {
  const [[index, dir], setState] = useState<[number, number]>([initialIndex, 0]);
  const liveId = useId();
  const slide = slides[index];

  const paginate = (step: number) =>
    setState(([i]) => [(i + step + slides.length) % slides.length, step]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -400) paginate(1);
    else if (info.offset.x > 60 || info.velocity.x > 400) paginate(-1);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Our team"
      className="relative"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") paginate(-1);
        if (e.key === "ArrowRight") paginate(1);
      }}
    >
      <div className="relative aspect-[768/1012] w-full overflow-hidden bg-[#111]">
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={slide.src}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={onDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${slide.name}`}
          >
            <Img src={slide.src} alt={`${slide.name}, eComDreamz team member`} fill draggable={false} sizes="(min-width: 1025px) 540px, 100vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
      </div>

      {[
        { step: -1, label: "Previous team member", Icon: ChevronLeft, pos: "left-[25px]" },
        { step: 1, label: "Next team member", Icon: ChevronRight, pos: "right-[25px]" },
      ].map(({ step, label, Icon, pos }) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          aria-controls={liveId}
          onClick={() => paginate(step)}
          className={`absolute top-1/2 ${pos} z-10 flex size-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 bg-[#d6d6d6]/90 text-[#555] transition-colors hover:bg-white`}
        >
          <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
        </button>
      ))}

      <p id={liveId} aria-live="polite" className="sr-only">
        Showing {slide.name}, {index + 1} of {slides.length}
      </p>
    </div>
  );
}
