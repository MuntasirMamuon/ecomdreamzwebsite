import type { CSSProperties } from "react";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { partners } from "@/data/home";

export function Partners() {
  return (
    <section aria-labelledby="partners-title" className="mt-[25px] bg-white">
      <div className="site-container">
        <h2
          id="partners-title"
          className="m-0 pb-5 pt-[30px] text-center font-heading text-[28px] font-bold leading-[1.2] text-ink-soft md:pt-[25px] md:text-[37px]"
        >
          Proud to Partner with
        </h2>
        <ul className="m-0 grid list-none grid-cols-3 items-center gap-x-5 gap-y-6 p-0 pb-5 pt-[15px] md:grid-cols-6">
          {partners.map((p, i) => (
            <Reveal as="li" key={p.src} delay={i * 0.05} y={12} className="flex justify-center">
              <Img
                src={p.src}
                alt={p.alt}
                sizes="(min-width: 768px) 160px, 30vw"
                style={{ "--w": `${p.width}%`, "--wm": `${p.widthMobile}%` } as CSSProperties}
                className="h-auto w-(--wm) md:w-(--w)"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
