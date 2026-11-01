import type { Metadata } from "next";
import { Achievements } from "@/components/about/Achievements";
import { ClientsFeedbackSection } from "@/components/sections/ClientsFeedbackSection";
import { ProgressBar } from "@/components/sections/ProgressBar";
import { Img } from "@/components/ui/Img";
import { PageBanner } from "@/components/ui/PageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { aboutIntro, principles } from "@/data/about";
import { testimonials } from "@/data/home";

export const metadata: Metadata = {
  title: "About Us",
  description: "eComDreamz is a diversified team of ecommerce experts focused on measurable, client-centric results.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" />

      <section aria-labelledby="about-title" className="bg-white py-[clamp(48px,7vw,96px)]">
        <div className="site-container grid items-center gap-[clamp(28px,4vw,60px)] md:grid-cols-[1fr_1.12fr]">
          <Reveal>
            <Img src={aboutIntro.image} alt="eComDreamz CEO" loading="eager" sizes="(min-width: 768px) 45vw, 100vw" className="h-auto w-full rounded-[6px]" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="about-title" className="m-0 mb-5 font-heading text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.25] text-ink-soft">
              {aboutIntro.title}
            </h2>
            {aboutIntro.paragraphs.map((p, i) => (
              <p key={i} className="m-0 font-body text-[16px] leading-[1.875] text-muted [&+p]:mt-[18px]">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <Achievements />

      <section aria-labelledby="principles-title" className="bg-white py-[clamp(48px,7vw,96px)]">
        <div className="site-container grid items-center gap-[clamp(28px,4vw,60px)] md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <h2 id="principles-title" className="m-0 mb-5 font-heading text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.25] text-ink-soft">
              {principles.title}
            </h2>
            <p className="m-0 mb-[26px] font-body text-[16px] leading-[1.875] text-muted">{principles.text}</p>
            <div className="flex flex-col gap-5">
              {principles.bars.map((b) => (
                <ProgressBar key={b.label} label={b.label} pct={b.pct} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Img src={principles.image} alt="Website design illustration" sizes="(min-width: 768px) 45vw, 100vw" className="h-auto w-full" />
          </Reveal>
        </div>
      </section>

      <ClientsFeedbackSection items={testimonials} headingId="about-feedback-title" />
    </>
  );
}
