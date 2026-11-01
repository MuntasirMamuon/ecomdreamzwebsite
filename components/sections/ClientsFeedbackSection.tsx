import { Quote } from "lucide-react";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/home";

export type Testimonial = (typeof testimonials)[number];

/**
 * Editorial review card. `wide` lays the review and client identity side by side,
 * used for the odd card on two-column (tablet) layouts.
 */
function TestimonialCard({ t, wide = false }: { t: Testimonial; wide?: boolean }) {
  return (
    <figure
      className={`group relative m-0 flex h-full flex-col overflow-hidden rounded-[20px] border border-black/[0.07] bg-white p-6 shadow-[0_1px_2px_rgba(27,29,33,0.04),0_14px_34px_-22px_rgba(27,29,33,0.25)] transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_2px_4px_rgba(27,29,33,0.04),0_28px_50px_-24px_rgba(255,74,93,0.35)] motion-reduce:transition-none sm:p-8 ${
        wide ? "md:flex-row md:items-center md:gap-10 xl:flex-col xl:items-stretch xl:gap-0" : ""
      }`}
    >
      {/* Soft accent glow, revealed on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-[radial-gradient(closest-side,rgb(255_74_93/0.14),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className={`relative flex flex-1 flex-col ${wide ? "md:flex-[1.6] xl:flex-1" : ""}`}>
        <span
          aria-hidden="true"
          className="flex size-10 items-center justify-center rounded-full bg-blush text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white"
        >
          <Quote className="size-[18px] fill-current" strokeWidth={0} />
        </span>
        <blockquote className="m-0 mt-6 flex-1">
          <p className="m-0 text-pretty font-copy text-[16px] leading-[1.8] text-ink-soft/85 sm:text-[16.5px]">{t.quote}</p>
        </blockquote>
      </div>

      <figcaption
        className={`relative mt-7 flex items-center gap-4 border-t border-black/[0.07] pt-6 ${
          wide ? "md:mt-0 md:flex-1 md:border-l md:border-t-0 md:pl-10 md:pt-0 xl:mt-7 xl:border-l-0 xl:border-t xl:pl-0 xl:pt-6" : ""
        }`}
      >
        <Img
          src={t.image}
          alt={`${t.name}, ${t.company}`}
          sizes="48px"
          className="size-12 shrink-0 rounded-full border-2 border-white object-cover shadow-[0_0_0_1px_rgba(27,29,33,0.08),0_6px_14px_-6px_rgba(27,29,33,0.35)]"
        />
        <span className="min-w-0">
          <span className="block font-heading text-[16px] font-semibold leading-[1.3] text-ink-soft">{t.name}</span>
          <span className="mt-1 block font-heading text-[13.5px] font-medium leading-[1.3] text-muted">{t.company}</span>
        </span>
      </figcaption>
    </figure>
  );
}

type ClientsFeedbackSectionProps = {
  /** Page-specific reviews; defaults to the site testimonials. */
  items?: Testimonial[];
  /** Unique id for the section heading (aria-labelledby). */
  headingId?: string;
};

/**
 * "Clients Feedback" section. Single source of truth for every page that shows
 * client reviews (design approved on the home page).
 */
export function ClientsFeedbackSection({ items = testimonials, headingId = "feedback-title" }: ClientsFeedbackSectionProps) {
  const last = items.length - 1;

  return (
    <section aria-labelledby={headingId} className="relative isolate overflow-hidden bg-surface py-[72px] md:py-[96px] xl:py-[110px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-[12%] top-[-20%] h-[60%] w-[45%] rounded-full bg-[radial-gradient(closest-side,rgb(255_74_93/0.07),transparent)]" />
        <div className="absolute -right-[10%] bottom-[-25%] h-[65%] w-[45%] rounded-full bg-[radial-gradient(closest-side,rgb(255_74_93/0.06),transparent)]" />
      </div>

      <div className="site-container">
        <Reveal y={16} className="mx-auto max-w-[640px] text-center">
          <p className="m-0 inline-flex items-center gap-3 font-heading text-[12px] font-semibold uppercase leading-none tracking-[0.18em] text-brand">
            <span aria-hidden="true" className="h-px w-8 bg-brand/60" />
            Client Experiences
            <span aria-hidden="true" className="h-px w-8 bg-brand/60" />
          </p>
          <h2
            id={headingId}
            className="m-0 mt-4 font-heading text-[clamp(32px,7.5vw,40px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink-soft md:text-[46px] xl:text-[50px]"
          >
            Clients Feedback
          </h2>
        </Reveal>

        <ul className="m-0 mt-11 grid list-none gap-5 p-0 md:mt-14 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-7">
          {items.map((t, i) => {
            const wide = i === last && items.length % 2 === 1;
            return (
              <Reveal as="li" key={t.name} delay={i * 0.1} y={28} className={`h-full ${wide ? "md:col-span-2 xl:col-span-1" : ""}`}>
                <TestimonialCard t={t} wide={wide} />
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
