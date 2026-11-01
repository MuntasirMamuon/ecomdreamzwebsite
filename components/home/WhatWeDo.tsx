import { ProcessFlow } from "@/components/home/ProcessFlow";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { ShapeDivider } from "@/components/ui/ShapeDivider";
import { whatWeDo } from "@/data/home";

export function WhatWeDo() {
  return (
    <section aria-labelledby="process-title" className="relative overflow-hidden bg-surface-alt">
      <ShapeDivider name="cityscape-layer" position="bottom" className="h-[60px] md:h-[91px]" />

      <div className="wide-container relative grid gap-y-10 pb-[110px] pt-[72px] [grid-template-areas:'head'_'img'_'flow'] md:gap-y-12 md:pb-[150px] md:pt-[96px] xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] xl:grid-rows-[auto_1fr] xl:gap-x-16 xl:gap-y-10 xl:pt-[110px] xl:[grid-template-areas:'img_head'_'img_flow']">
        <Reveal y={16} className="[grid-area:head] xl:self-end">
          <p className="m-0 inline-flex items-center gap-3 font-heading text-[12px] font-semibold uppercase leading-none tracking-[0.18em] text-brand">
            <span aria-hidden="true" className="h-px w-8 bg-brand/60" />
            Our Process
          </p>
          <h2
            id="process-title"
            className="m-0 mt-4 font-heading text-[clamp(30px,8vw,36px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink-soft md:text-[42px] xl:text-[50px]"
          >
            {whatWeDo.title}
          </h2>
        </Reveal>

        <Reveal y={28} className="relative [grid-area:img] xl:self-center">
          {/* Brand dot-grid accent peeking from behind the photo */}
          <span
            aria-hidden="true"
            className="absolute -bottom-5 -left-5 size-32 rounded-[18px] bg-[radial-gradient(rgb(255_74_93/0.45)_1.4px,transparent_1.6px)] [background-size:12px_12px] md:-bottom-6 md:-left-6 md:size-40"
          />
          <figure className="group relative m-0 aspect-[4/3] overflow-hidden rounded-[24px] bg-ink-soft shadow-[0_30px_60px_-32px_rgba(27,29,33,0.55)] md:aspect-[16/9] xl:aspect-[754/823]">
            <Img
              src={whatWeDo.image}
              alt="The eComDreamz team gathered around a laptop at the office"
              fill
              sizes="(min-width: 1280px) 520px, (min-width: 768px) 92vw, 100vw"
              className="object-cover object-[50%_30%] transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]"
            />
            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
            <span aria-hidden="true" className="absolute left-5 top-5 h-[3px] w-12 rounded-full bg-brand" />
          </figure>
        </Reveal>

        <div className="[grid-area:flow]">
          <ProcessFlow steps={whatWeDo.steps} />
        </div>
      </div>
    </section>
  );
}
