import Link from "next/link";
import { CompareSlider } from "@/components/home/CompareSlider";
import { Reveal } from "@/components/ui/Reveal";
import { compare } from "@/data/home";

export function CompareSection() {
  return (
    <section aria-labelledby="compare-title" className="bg-white pb-[55px] pt-10 md:py-[50px]">
      <div className="mx-auto grid w-[min(1170px,100%-32px)] items-center gap-0 lgx:grid-cols-[minmax(0,672fr)_minmax(0,470fr)] lgx:gap-x-[28px]">
        <Reveal>
          <CompareSlider before={compare.before} after={compare.after} beforeAlt="Ecommerce website design mockup" afterAlt="Winning the ecommerce race illustration" />
        </Reveal>
        <Reveal delay={0.1} className="text-center lgx:text-left">
          <h2
            id="compare-title"
            className="m-0 pb-5 pt-[30px] font-heading text-[26px] font-bold leading-[1.2] text-ink-soft md:pb-[22px] md:pt-[35px] md:text-[32px] lgx:pt-0 lgx:text-[34px]"
          >
            {compare.title}
          </h2>
          <p className="m-0 pb-[30px] font-copy text-[16px] leading-[30px] text-ink md:pb-10">{compare.text}</p>
          <Link
            href={compare.cta.href}
            className="inline-flex h-[50px] items-center rounded-[2px] bg-brand px-[31px] font-copy text-[15px] font-bold uppercase leading-none text-white transition-colors hover:bg-night"
          >
            {compare.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
