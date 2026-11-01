import type { Metadata } from "next";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ImageAccordion } from "@/components/sections/ImageAccordion";
import { QuoteCta } from "@/components/sections/QuoteCta";
import { Img } from "@/components/ui/Img";
import { PageBanner } from "@/components/ui/PageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { serviceIcons, whyIcons } from "@/components/ui/icons";
import { faqs } from "@/data/faqs";
import { services } from "@/data/home";
import { benefits, intro, latestProjects, whyChoose } from "@/data/services-page";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Shopify store setup, custom theme & app development, ecommerce marketing, email marketing, content creation and creative design.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" />

      <section aria-labelledby="offer-title" className="bg-white py-[clamp(48px,7vw,96px)]">
        <div className="site-container">
          <h2 id="offer-title" className="m-0 mb-[clamp(28px,3.5vw,48px)] text-center font-heading text-[clamp(25px,3.4vw,42px)] font-bold leading-[1.2] text-ink-soft">
            Services we offer
          </h2>
          <ul className="m-0 grid list-none gap-[clamp(18px,2.4vw,30px)] p-0 md:grid-cols-2 lgx:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              return (
                <Reveal
                  as="li"
                  key={s.title}
                  delay={(i % 3) * 0.06}
                  className="rounded-[6px] border border-line-soft bg-white p-[clamp(26px,3vw,38px)] transition-shadow duration-300 hover:shadow-[0_20px_44px_rgba(27,29,33,0.1)]"
                >
                  <span className="mb-[22px] flex size-[70px] items-center justify-center rounded-full bg-blush text-brand">
                    <Icon aria-hidden="true" className="size-[30px]" />
                  </span>
                  <h3 className="m-0 mb-4 font-heading text-[clamp(17px,1.8vw,20px)] font-bold leading-[1.4] text-ink-soft">{s.title}</h3>
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 font-body text-[14.5px] leading-[1.7] text-muted">
                        <span aria-hidden="true" className="flex-none text-brand">
                          √
                        </span>
                        <span>{pt.replace(/^√\s?/, "")}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="intro-title" className="bg-surface py-[clamp(48px,7vw,96px)]">
        <div className="site-container grid items-center gap-[clamp(28px,4vw,60px)] md:grid-cols-2">
          <Reveal>
            <h2 id="intro-title" className="m-0 mb-5 text-pretty font-heading text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.25] text-ink-soft">
              {intro.title}
            </h2>
            <p className="m-0 font-body text-[16px] leading-[1.875] text-muted">{intro.text}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Img src={intro.image} alt="Shopify web design team at work" sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full rounded-[6px]" />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="projects-title" className="bg-white pb-[clamp(30px,5vw,50px)] pt-[clamp(48px,8vw,80px)]">
        <div className="site-container">
          <h2 id="projects-title" className="m-0 mb-[clamp(24px,3vw,40px)] font-heading text-[clamp(25px,3.4vw,38px)] font-bold leading-[1.25] text-ink">
            Our Latest Projects
          </h2>
          <ImageAccordion items={latestProjects} heightClass="md:h-[clamp(320px,46vw,520px)]" sizes="(min-width: 768px) 45vw, 100vw" />
        </div>
      </section>

      <QuoteCta variant="mockup" />

      <section aria-labelledby="why-title" className="bg-white py-[clamp(48px,7vw,96px)]">
        <div className="site-container">
          <h2 id="why-title" className="m-0 mb-4 text-center font-heading text-[clamp(25px,3.4vw,42px)] font-bold leading-[1.2] text-ink-soft">
            Why Choose Ecomdreamz For Shopify Dropshipping Services
          </h2>
          <p className="mx-auto mb-[clamp(28px,3.5vw,48px)] mt-0 max-w-[720px] text-center font-body text-[16px] leading-[1.875] text-muted">
            Choose Ecomdreamz for Shopify dropshipping to boost your online sales. We offer expert solutions tailored to streamline and enhance your e-commerce business.
          </p>
          <ul className="m-0 grid list-none gap-[clamp(18px,2.4vw,30px)] p-0 md:grid-cols-2 lgx:grid-cols-3">
            {whyChoose.map((w, i) => {
              const Icon = whyIcons[w.icon];
              return (
                <Reveal
                  as="li"
                  key={w.title}
                  delay={(i % 3) * 0.06}
                  className="border border-line bg-white p-[clamp(26px,3vw,36px)] shadow-[0_0_3px_rgba(0,0,0,0.18)] transition-shadow duration-300 hover:shadow-[0_10px_26px_rgba(0,0,0,0.12)]"
                >
                  <span className="mb-[22px] flex size-[70px] items-center justify-center rounded-full bg-blush text-brand">
                    <Icon aria-hidden="true" className="size-[30px]" />
                  </span>
                  <h3 className="m-0 mb-3 font-heading text-[18px] font-bold leading-[1.4] text-ink-soft">{w.title}</h3>
                  <p className="m-0 mb-[18px] font-body text-[14.5px] leading-[1.8] text-ink">{w.text}</p>
                  <span aria-hidden="true" className="font-heading text-[13px] font-semibold uppercase tracking-[0.06em] text-brand">
                    → Learn More
                  </span>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="benefits-title" className="bg-night-alt py-[clamp(48px,7vw,90px)]">
        <div className="site-container grid items-center gap-[clamp(28px,4vw,60px)] md:grid-cols-[1.13fr_1fr]">
          <div>
            <h2 id="benefits-title" className="m-0 mb-7 font-heading text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.25] text-white">
              {benefits.title}
            </h2>
            <ol className="m-0 flex list-none flex-col gap-[22px] p-0">
              {benefits.items.map((b, i) => (
                <Reveal as="li" key={b.title} delay={i * 0.05} className="flex items-start gap-4 rounded-[6px] bg-night-card px-6 py-[22px]">
                  <span aria-hidden="true" className="flex size-[34px] flex-none items-center justify-center rounded-full bg-brand font-heading text-[13px] font-bold leading-none text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="m-0 mb-1.5 font-heading text-[18px] font-bold leading-[1.4] text-white">{b.title}</h3>
                    <p className="m-0 font-body text-[14.5px] leading-[1.8] text-[#c3c5cb]">{b.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={0.1}>
            <Img src={benefits.image} alt="Shopify master at eComDreamz" sizes="(min-width: 768px) 45vw, 100vw" className="h-auto w-full rounded-[6px]" />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="bg-white py-[clamp(48px,7vw,96px)]">
        <div className="mx-auto w-[min(900px,100%-32px)]">
          <h2 id="faq-title" className="m-0 mb-[clamp(26px,3.2vw,44px)] text-center font-heading text-[clamp(25px,3.4vw,42px)] font-bold leading-[1.2] text-ink-soft">
            Most Popular Questions
          </h2>
          <FaqAccordion items={faqs} variant="plus" defaultOpen={0} />
        </div>
      </section>
    </>
  );
}
