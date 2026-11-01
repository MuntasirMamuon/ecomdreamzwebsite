import type { Metadata } from "next";
import { CoreValues } from "@/components/career/CoreValues";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { careerIntro, careerStats, employeeFeedback, openings } from "@/data/career";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Career",
  description: "Build your career with eComDreamz — current openings, core values and what our team says.",
};

// Built from the full-page career screenshot (no title band on the live page).
export default function CareerPage() {
  return (
    <>
      <section aria-labelledby="career-title" className="bg-white pt-[107px] lgx:pt-[120px]">
        <div className="site-container grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <Reveal>
            <h1 id="career-title" className="m-0 font-heading text-[28px] font-bold leading-[48px] text-ink-soft md:text-[38px]">
              {careerIntro.title}
            </h1>
            <p className="m-0 mt-5 font-copy text-[16px] leading-[30px] text-ink md:mt-[100px]">{careerIntro.text}</p>
            <a
              href={careerIntro.cta.href}
              className="mt-5 inline-flex h-[48px] items-center rounded-[30px] border-2 border-brand bg-white px-[20px] font-copy text-[14px] font-medium leading-none text-brand transition-colors hover:bg-brand hover:text-white"
            >
              {careerIntro.cta.label}
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <Img src={careerIntro.image} alt="The eComDreamz team on a company outing" sizes="(min-width: 768px) 550px, 100vw" preload className="h-auto w-full rounded-[10px]" />
          </Reveal>
        </div>
      </section>

      <section aria-label="eComDreamz in numbers" className="bg-white pb-[107px] pt-[90px]">
        <ul className="mx-auto m-0 grid w-[min(1160px,100%-32px)] list-none grid-cols-1 gap-y-12 p-0 sm:grid-cols-2 lgx:grid-cols-4">
          {careerStats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 0.07} className="flex flex-col items-center px-[10px] text-center">
              <span className="flex size-[154px] items-center justify-center rounded-full bg-white font-heading text-[34px] font-black leading-none tracking-[-0.02em] text-ink shadow-[0_0_24px_rgba(0,0,0,0.12)]">
                {s.value}
              </span>
              <h2 className="m-0 mt-[27px] font-heading text-[18px] font-bold leading-[1.4] text-ink">{s.label}</h2>
              <p className="m-0 mt-[17px] max-w-[230px] font-copy text-[16px] leading-[24px] text-ink">{s.text}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section id="current-opening" aria-labelledby="openings-title" className="scroll-mt-[90px] bg-night-alt pb-[110px] pt-[70px]">
        <div className="site-container text-center">
          <h2 id="openings-title" className="m-0 font-heading text-[28px] font-bold leading-[48px] text-white md:text-[38px]">
            {openings.title}
          </h2>
          <p className="m-0 mt-5 font-copy text-[16px] leading-[1.6] text-white">{openings.text}</p>
        </div>
        <div className="mx-auto mt-[22px] w-[min(1140px,100%-32px)] border border-white/70 px-[30px] py-[30px] text-left font-body text-[16px] leading-[1.9] text-[#77797e]">
          {openings.empty}
        </div>
      </section>

      <CoreValues />

      <section aria-labelledby="feedback-name" className="bg-white px-5 pb-5 md:px-0 md:pb-[50px] md:pt-[60px]">
        <div className="wide-container grid items-center md:grid-cols-[30%_30%_40%]">
          <Reveal>
            <h2 id="feedback-name" className="m-0 pb-2.5 text-center font-heading text-[28px] font-bold leading-[48px] text-ink-soft md:pb-0 md:text-left md:text-[38px]">
              {employeeFeedback.name}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Img src={employeeFeedback.image} alt={employeeFeedback.name} sizes="(min-width: 768px) 360px, 100vw" className="h-auto w-full" />
          </Reveal>
          <Reveal delay={0.16} className="pl-5 pt-5 md:pl-5 md:pt-2.5">
            <figure className="m-0">
              <p className="m-0 ml-0 flex items-center gap-2 font-copy text-[22px] font-extralight leading-[1.4] text-ink-quote md:text-[28px]">
                <span aria-hidden="true" className="font-copy text-[24px] font-black leading-none">❝</span>
                {employeeFeedback.heading}
                <span aria-hidden="true" className="font-copy text-[24px] font-black leading-none">❞</span>
              </p>
              <div aria-hidden="true" className="mx-auto mt-[8px] h-[3px] w-[103px] bg-ink-quote md:ml-[118px]" />
              <blockquote className="m-0 mt-[14px]">
                <p className="m-0 font-copy text-[18px] font-light leading-[1.7] text-ink-quote">{employeeFeedback.text}</p>
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="career-faq-title" className="bg-white pb-[60px] md:pb-[70px]">
        <div className="mx-auto w-[min(1100px,100%-32px)]">
          <h2 id="career-faq-title" className="m-0 mt-[50px] pb-[40px] text-center font-heading text-[26px] font-bold leading-[1.2] text-ink-soft md:text-[30px]">
            Most Popular Questions
          </h2>
          <FaqAccordion items={faqs} variant="arrow" columns={2} />
        </div>
      </section>
    </>
  );
}
