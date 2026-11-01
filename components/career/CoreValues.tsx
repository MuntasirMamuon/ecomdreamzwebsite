import { Handshake, HeartHandshake, Lightbulb, Smile, TrendingUp, UsersRound, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { coreValues } from "@/data/career";

type CoreValue = (typeof coreValues)[number];

// One consistent icon per value, in the same order as data/career.ts.
const icons: LucideIcon[] = [Lightbulb, HeartHandshake, UsersRound, TrendingUp, Handshake, Smile];

/** Informational value card (not a link). */
function CoreValueCard({ value, index }: { value: CoreValue; index: number }) {
  const Icon = icons[index] ?? Lightbulb;
  return (
    <article className="group relative flex h-full flex-col rounded-[20px] border border-black/[0.06] bg-white p-6 shadow-[0_1px_2px_rgba(27,29,33,0.04),0_14px_32px_-24px_rgba(27,29,33,0.3)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-brand/30 hover:shadow-[0_2px_4px_rgba(27,29,33,0.04),0_24px_46px_-24px_rgba(255,74,93,0.36)] motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-8 lg:p-7 xl:p-8">
      <div className="flex items-start justify-between">
        <span className="flex size-14 items-center justify-center rounded-[16px] border border-brand/10 bg-blush text-brand transition-[background-color,border-color] duration-300 group-hover:border-brand/20 group-hover:bg-brand/15">
          <Icon aria-hidden="true" className="size-[26px] transition-transform duration-300 ease-out motion-safe:group-hover:scale-110" strokeWidth={1.75} />
        </span>
        <span aria-hidden="true" className="font-heading text-[13px] font-semibold tabular-nums tracking-[0.08em] text-ink-soft/30 transition-colors duration-300 group-hover:text-brand/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="m-0 mt-7 text-balance font-heading text-[19px] font-bold leading-[1.3] tracking-[-0.01em] text-ink-soft md:text-[20px] lg:text-[19px] xl:text-[20px]">{value.title}</h3>
      <p className="m-0 mt-3 font-copy text-[15.5px] leading-[1.7] text-muted">{value.text}</p>
    </article>
  );
}

export function CoreValues() {
  return (
    <section aria-labelledby="values-title" className="relative isolate overflow-hidden bg-surface py-[72px] md:py-[96px] xl:py-[110px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-[10%] top-[-20%] h-[55%] w-[42%] rounded-full bg-[radial-gradient(closest-side,rgb(255_74_93/0.07),transparent)]" />
        <div className="absolute -right-[10%] bottom-[-25%] h-[60%] w-[42%] rounded-full bg-[radial-gradient(closest-side,rgb(255_74_93/0.06),transparent)]" />
      </div>

      <div className="wide-container">
        <Reveal y={16} className="mx-auto max-w-[640px] text-center">
          <p className="m-0 inline-flex items-center gap-3 font-heading text-[12px] font-semibold uppercase leading-none tracking-[0.18em] text-brand">
            <span aria-hidden="true" className="h-px w-8 bg-brand/60" />
            What Drives Us
            <span aria-hidden="true" className="h-px w-8 bg-brand/60" />
          </p>
          <h2
            id="values-title"
            className="m-0 mt-4 font-heading text-[clamp(32px,7.5vw,40px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink-soft md:text-[46px] xl:text-[50px]"
          >
            Our Core Values
          </h2>
        </Reveal>

        <ul className="m-0 mt-11 grid list-none gap-5 p-0 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-7">
          {coreValues.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 0.07} y={22} className="h-full">
              <CoreValueCard value={v} index={i} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
