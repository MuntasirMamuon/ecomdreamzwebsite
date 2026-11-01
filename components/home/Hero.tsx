import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroVisual } from "@/components/home/HeroVisual";
import { Img } from "@/components/ui/Img";
import { ShapeDivider } from "@/components/ui/ShapeDivider";
import { hero } from "@/data/home";
import styles from "./hero.module.css";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  let wordIndex = 0;

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-black">
      {/* Background: masked grid, brand glow, soft vignette */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className={`absolute inset-0 ${styles.grid}`} />
        <div className="absolute -right-[10%] -top-[20%] h-[80%] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgb(255_74_93/0.22),transparent)]" />
        <div className="absolute -bottom-[30%] -left-[15%] h-[70%] w-[60%] rounded-full bg-[radial-gradient(closest-side,rgb(34_40_48/0.9),transparent)]" />
        <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-black to-transparent" />
      </div>

      <div className="site-container grid items-center gap-x-12 gap-y-14 pb-[110px] pt-[118px] md:pb-[150px] md:pt-[150px] lgx:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lgx:gap-x-10 lgx:pb-[150px] lgx:pt-[148px]">
        <div className="max-w-[640px]">
          <p
            className={`m-0 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] py-2 pl-2.5 pr-3 font-heading text-[11.5px] font-semibold leading-none tracking-[0.01em] text-white/85 min-[360px]:pl-3 min-[360px]:pr-4 min-[360px]:text-[12.5px] min-[360px]:tracking-[0.02em] sm:text-[13.5px] ${styles.rise}`}
            style={delay(0)}
          >
            <span aria-hidden="true" className="size-2 rounded-full bg-brand shadow-[0_0_0_4px_rgb(255_74_93/0.2)]" />
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="m-0 mt-6 text-balance font-heading text-[clamp(32px,9.6vw,46px)] font-extrabold leading-[1.06] tracking-[-0.035em] text-white md:text-[clamp(46px,6.4vw,64px)] lgx:text-[clamp(48px,4.1vw,60px)]"
          >
            {hero.titleLines.map((line, li) => (
              <span key={li} className="lgx:block">
                {line.map((part) =>
                  part.text.split(" ").map((word) => {
                    const i = wordIndex++;
                    return (
                      <span key={`${li}-${i}`}>
                        <span className={styles.wordMask}>
                          <span className={`${styles.word} ${part.accent ? styles.accent : ""}`} style={delay(120 + i * 70)}>
                            {word}
                          </span>
                        </span>{" "}
                      </span>
                    );
                  }),
                )}
              </span>
            ))}
          </h1>

          <p
            className={`m-0 mt-6 max-w-[540px] text-pretty font-copy text-[16px] leading-[1.75] text-white/70 md:text-[18px] ${styles.rise}`}
            style={delay(820)}
          >
            {hero.description}
          </p>

          <div className={`mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 ${styles.rise}`} style={delay(960)}>
            <Link
              href={hero.primaryCta.href}
              className="group inline-flex h-[58px] items-center justify-between gap-4 rounded-full bg-brand pl-7 pr-2 font-heading text-[15px] font-semibold text-white shadow-[0_18px_40px_-16px_rgb(255_74_93/0.85)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_22px_46px_-14px_rgb(255_74_93/0.9)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:justify-start"
            >
              {hero.primaryCta.label}
              <span className="flex size-[42px] items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight aria-hidden="true" className="size-5" strokeWidth={2.25} />
              </span>
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="group inline-flex h-[58px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-7 font-heading text-[15px] font-semibold text-white transition-colors duration-300 hover:border-white/45 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {hero.secondaryCta.label}
              <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className={`mt-10 flex flex-wrap items-center gap-x-4 gap-y-4 sm:gap-x-6 ${styles.rise}`} style={delay(1100)}>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="flex -space-x-2 sm:-space-x-2.5" aria-hidden="true">
                {hero.trust.avatars.map((src) => (
                  <Img key={src} src={src} alt="" sizes="40px" className="size-8 rounded-full border-2 border-black bg-white/10 object-cover sm:size-10" />
                ))}
              </div>
              <p className="m-0 font-heading leading-tight">
                <span className="block text-[17px] font-bold text-white sm:text-[18px]">{hero.trust.stats[0].value}</span>
                <span className="block text-[12px] font-medium text-white/55 sm:text-[12.5px]">{hero.trust.stats[0].label}</span>
              </p>
            </div>
            <span aria-hidden="true" className="hidden h-9 w-px bg-white/15 sm:block" />
            <p className="m-0 font-heading leading-tight">
              <span className="block text-[17px] font-bold text-white sm:text-[18px]">{hero.trust.stats[1].value}</span>
              <span className="block text-[12px] font-medium text-white/55 sm:text-[12.5px]">{hero.trust.stats[1].label}</span>
            </p>
          </div>
        </div>

        <div className={styles.visualIn} style={delay(450)}>
          <HeroVisual />
        </div>
      </div>

      <ShapeDivider name="drop" position="bottom" className="h-[60px] w-[283%] md:h-[100px] md:w-[calc(100%+1.3px)]" />
    </section>
  );
}
