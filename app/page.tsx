import { Clients } from "@/components/home/Clients";
import { CompareSection } from "@/components/home/CompareSection";
import { Hero } from "@/components/home/Hero";
import { Partners } from "@/components/home/Partners";
import { PromoVideo } from "@/components/home/PromoVideo";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Talents } from "@/components/home/Talents";
import { Testimonials } from "@/components/home/Testimonials";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { ImageAccordion } from "@/components/sections/ImageAccordion";
import { QuoteCta } from "@/components/sections/QuoteCta";
import { caseStudies, promoVideo } from "@/data/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <CompareSection />
      <Testimonials />
      <ServicesGrid />
      <PromoVideo src={promoVideo} />
      <Clients />
      <Talents />
      <WhatWeDo />
      <QuoteCta variant="live" />

      <section aria-labelledby="cases-title" className="bg-white pb-[50px] pt-[25px]">
        <h2
          id="cases-title"
          className="site-container m-0 pb-[50px] text-center font-heading text-[28px] font-bold leading-[1.2] text-ink md:text-[36px] lgx:text-[38px]"
        >
          Explore Our Recent Case Studies
        </h2>
        <div className="grid gap-[10px] px-4 md:grid-cols-2 md:px-0">
          {caseStudies.map((group) => (
            <ImageAccordion key={group[0].title} items={group} sizes="(min-width: 768px) 38vw, 100vw" />
          ))}
        </div>
      </section>
    </>
  );
}
