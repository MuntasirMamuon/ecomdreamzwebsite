import { Check, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { serviceIcons } from "@/components/ui/icons";
import { services } from "@/data/home";

type Service = (typeof services)[number];

/** The CMS copy prefixes each point with "√"; the card draws its own check icon instead. */
const pointText = (pt: string) => pt.replace(/^√\s*/, "");

/** Informational service card (not a link): icon tile, index, title and checked points. */
function ServiceCard({ service, index, Icon }: { service: Service; index: number; Icon: LucideIcon }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-black/[0.06] bg-[#f8f8fa] p-6 transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out hover:border-brand/35 hover:bg-white hover:shadow-[0_2px_4px_rgba(27,29,33,0.04),0_26px_48px_-26px_rgba(255,74,93,0.4)] motion-safe:hover:-translate-y-1.5 motion-reduce:transition-none sm:p-8">
      {/* Accent line drawn along the top edge on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand to-[#ff8794] transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
      />
      {/* Soft spotlight behind the icon on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-10 size-48 rounded-full bg-[radial-gradient(closest-side,rgb(255_74_93/0.1),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between">
        <span className="flex size-14 items-center justify-center rounded-[16px] border border-brand/10 bg-blush text-brand transition-[background-color,color,transform] duration-300 ease-out group-hover:bg-brand group-hover:text-white motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:-rotate-6">
          <Icon aria-hidden="true" className="size-[26px]" strokeWidth={1.75} />
        </span>
        <span aria-hidden="true" className="font-heading text-[13px] font-semibold tabular-nums tracking-[0.08em] text-ink-soft/30 transition-colors duration-300 group-hover:text-brand/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative m-0 mt-7 text-balance font-heading text-[20px] font-bold leading-[1.25] tracking-[-0.015em] text-ink-soft md:text-[21px] lg:text-[22px]">
        {service.title}
      </h3>

      <ul className="relative m-0 mt-5 flex list-none flex-col gap-3 p-0">
        {service.points.map((pt) => (
          <li key={pt} className="flex gap-3 font-copy text-[15px] leading-[1.6] text-muted">
            <span aria-hidden="true" className="mt-[3px] flex size-[18px] shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
              <Check className="size-3" strokeWidth={3} />
            </span>
            <span>{pointText(pt)}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ServicesGrid() {
  return (
    <section aria-labelledby="services-title" className="bg-white py-[72px] md:py-[96px] xl:py-[110px]">
      <div className="wide-container">
        <Reveal y={16} className="mx-auto max-w-[680px] text-center">
          <p className="m-0 inline-flex items-center gap-3 font-heading text-[12px] font-semibold uppercase leading-none tracking-[0.18em] text-brand">
            <span aria-hidden="true" className="h-px w-8 bg-brand/60" />
            Our Expertise
            <span aria-hidden="true" className="h-px w-8 bg-brand/60" />
          </p>
          <h2
            id="services-title"
            className="m-0 mt-4 font-heading text-[clamp(32px,7.5vw,40px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink-soft md:text-[46px] xl:text-[50px]"
          >
            Services we offer
          </h2>
          <p className="mx-auto m-0 mt-4 max-w-[600px] text-pretty font-copy text-[16px] leading-[1.7] text-muted md:text-[17px]">
            End-to-end eCommerce solutions, thoughtfully built for growing brands.
          </p>
        </Reveal>

        <ul className="m-0 mt-11 grid list-none gap-5 p-0 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-7">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 0.08} y={24} className="h-full">
              <ServiceCard service={s} index={i} Icon={serviceIcons[s.icon]} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
