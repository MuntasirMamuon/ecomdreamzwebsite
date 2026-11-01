import { TalentSlider } from "@/components/home/TalentSlider";
import { Reveal } from "@/components/ui/Reveal";
import { talents } from "@/data/home";

export function Talents() {
  return (
    <section aria-labelledby="talents-title" className="bg-black py-[60px] md:pb-[89px] md:pt-[90px]">
      <div className="site-container grid items-center gap-10 md:grid-cols-2 md:gap-10">
        <Reveal>
          <h2 id="talents-title" className="m-0 font-heading text-[28px] font-bold leading-[1.2] text-white md:text-[36px] lgx:text-[38px]">
            {talents.title}
          </h2>
          <p className="m-0 mt-5 font-copy text-[16px] leading-[30px] text-white">{talents.text}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <TalentSlider slides={talents.slides} initialIndex={talents.initialIndex} />
        </Reveal>
      </div>
    </section>
  );
}
