import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

type QuoteCtaProps = {
  /**
   * "live": home page as captured in the screenshots (white eyebrow, white-bordered buttons).
   * "mockup": the services-page variant from "EcomDreamz Site.dc.html" (red eyebrow, borderless buttons).
   */
  variant?: "live" | "mockup";
};

export function QuoteCta({ variant = "live" }: QuoteCtaProps) {
  const live = variant === "live";
  const button =
    "inline-flex h-[56px] items-center justify-center rounded-[40px] px-[60px] font-heading text-[14px] font-semibold leading-none transition-colors";

  return (
    <section aria-labelledby={`quote-title-${variant}`} className={`relative overflow-hidden bg-night ${live ? "my-[50px]" : ""}`}>
      <Img src="/media/maxbizz/bg2-value.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
      <Reveal className="site-container relative py-[60px] text-center md:pb-[111px] md:pt-[106px]">
        <p
          className={`m-0 font-copy text-[16px] font-bold leading-[1.3] md:text-[18px] ${live ? "text-white" : "font-heading text-[15px] font-semibold text-brand md:text-[15px]"}`}
        >
          Need Assistance?
        </p>
        <h2
          id={`quote-title-${variant}`}
          className="m-0 mt-[14px] font-heading text-[30px] font-bold leading-[1.2] text-white md:text-[38px]"
        >
          Contact Us For A Free Quote
        </h2>
        <div className="mt-[30px] flex flex-wrap justify-center gap-5 md:mt-[34px]">
          <a
            href={`mailto:${site.email}`}
            className={`${button} uppercase ${live ? "border-[3px] border-white bg-brand text-white hover:bg-night" : "bg-brand text-white hover:bg-night"}`}
          >
            Email Us
          </a>
          <a
            href={site.meetingHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${button} ${live ? "border-[3px] border-white bg-night text-white hover:bg-brand" : "bg-night uppercase text-white hover:bg-brand"}`}
          >
            Book a Meeting
          </a>
        </div>
      </Reveal>
    </section>
  );
}
