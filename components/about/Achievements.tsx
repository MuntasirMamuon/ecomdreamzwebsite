import { CountUp } from "@/components/about/CountUp";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { aboutStats } from "@/data/about";
import { careerStats } from "@/data/career";

type Achievement = {
  index: number;
  label: string;
  text: string;
  metric?: { value: number; suffix: string; display: string };
};

/** Verified figures already published on the Career page (215 / 340 / 7+ / 10), matched by label. */
function metricFor(label: string): Achievement["metric"] {
  const stat = careerStats.find((s) => s.label === label);
  const match = stat?.value.match(/^(\d+)(\D*)$/);
  if (!stat || !match) return undefined;
  return { value: Number(match[1]), suffix: match[2], display: stat.value };
}

const items: Achievement[] = aboutStats.map((s, index) => ({ index, label: s.label, text: s.text, metric: metricFor(s.label) }));

// Divider lines per layout: stacked (top rules), 2×2 grid, single row of four.
const dividers = [
  "",
  "border-t sm:border-l sm:border-t-0",
  "border-t",
  "border-t sm:border-l",
];

function AchievementItem({ item }: { item: Achievement }) {
  return (
    <div className="group relative grid h-full grid-cols-[88px_minmax(0,1fr)] gap-x-5 px-1 py-6 sm:block sm:px-7 sm:py-9 lg:px-6 lg:py-2 xl:px-7">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-[18px] bg-[radial-gradient(120%_80%_at_50%_0%,rgb(255_74_93/0.09),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div>
        <div className="flex items-center gap-3">
          <span className="font-heading text-[12px] font-semibold uppercase tabular-nums leading-none tracking-[0.18em] text-brand">
            {String(item.index + 1).padStart(2, "0")}
          </span>
          <span aria-hidden="true" className="h-px w-6 bg-brand/50 transition-[width,background-color] duration-300 ease-out group-hover:w-14 group-hover:bg-brand motion-reduce:transition-none sm:w-8" />
        </div>
        {item.metric && (
          <p className="m-0 mt-3 font-heading text-[38px] font-extrabold leading-none tracking-[-0.03em] text-white sm:mt-5 sm:text-[48px] xl:text-[56px]">
            <span aria-hidden="true">
              <CountUp value={item.metric.value} suffix={item.metric.suffix} />
            </span>
            <span className="sr-only">{item.metric.display}</span>
          </p>
        )}
      </div>
      <div>
        <h2 className="m-0 font-heading text-[21px] font-bold leading-[1.25] tracking-[-0.01em] text-white transition-colors duration-300 group-hover:text-[#ffd9dd] sm:mt-4 sm:text-[22px] lg:text-[20px] xl:text-[22px]">
          {item.label}
        </h2>
        <p className="m-0 mt-2 max-w-[300px] font-body text-[14.5px] leading-[1.65] text-white/65 sm:mt-2.5 sm:text-[15px] sm:leading-[1.7]">{item.text}</p>
      </div>
    </div>
  );
}

export function Achievements() {
  return (
    <section aria-label="eComDreamz in numbers" className="relative isolate overflow-hidden bg-[#0b0c0f]">
      {/* Existing photo kept as a faint texture under a near-black wash */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Img src="/media/2020/09/bg1-faq.jpg" alt="" fill sizes="100vw" className="object-cover opacity-[0.14] grayscale" />
        <div className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.06)_1px,transparent_1.2px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,#000,transparent)]" />
        <div className="absolute left-1/2 top-0 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgb(255_74_93/0.16),transparent)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <ul className="site-container m-0 grid list-none p-0 py-6 sm:grid-cols-2 sm:py-8 lg:grid-cols-4 lg:py-[72px] xl:py-[84px]">
        {items.map((item, i) => (
          <Reveal
            as="li"
            key={item.label}
            delay={i * 0.08}
            y={20}
            className={`border-white/10 ${dividers[i]} lg:border-t-0 ${i > 0 ? "lg:border-l" : "lg:border-l-0"}`}
          >
            <AchievementItem item={item} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
