import { Reveal } from "@/components/ui/Reveal";
import type { PackageGroup } from "@/lib/types";

/**
 * Pricing tables from the packages mockup. When a plan has no explicit
 * `featured` flag, the middle plan of each group is highlighted (as in the mockup).
 * "Buy Now" links go to the live store checkout — nothing is processed here.
 */
export function PricingGroups({ groups }: { groups: PackageGroup[] }) {
  return (
    <>
      {groups.map((group) => {
        const id = `pkg-${group.title.toLowerCase().replace(/[^a-z]+/g, "-")}`;
        return (
          <section key={group.title} aria-labelledby={id} style={{ background: group.bg }} className="py-[clamp(44px,6vw,84px)]">
            <div className="site-container">
              <h2 id={id} className="m-0 mb-3 text-center font-heading text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.2] text-ink-soft">
                {group.title}
              </h2>
              <p className="mx-auto mb-[clamp(26px,3.2vw,44px)] mt-0 max-w-[720px] text-center font-body text-[16px] leading-[1.875] text-muted">
                {group.subtitle}
              </p>
              <ul className="m-0 grid list-none items-stretch gap-[clamp(18px,2.4vw,30px)] p-0 md:grid-cols-2 lgx:grid-cols-3">
                {group.plans.map((plan, i) => {
                  const featured = plan.featured ?? i === 1;
                  const ink = featured ? "text-white" : "text-ink";
                  const period = plan.period?.replace("/", "").trim();
                  return (
                    <Reveal
                      as="li"
                      key={plan.name}
                      delay={(i % 3) * 0.06}
                      className={`flex flex-col gap-[18px] border border-line p-[clamp(28px,3.2vw,40px)] text-center shadow-[0_0_3px_rgba(0,0,0,0.14)] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(0,0,0,0.14)] ${
                        featured ? "bg-brand" : "bg-white"
                      }`}
                    >
                      <h3 className={`m-0 font-heading text-[20px] font-bold leading-[1.3] ${ink}`}>{plan.name}</h3>
                      <p className={`m-0 font-heading text-[clamp(34px,4vw,46px)] font-bold leading-[1.1] ${ink}`}>
                        <sup className="relative top-[-0.6em] align-baseline text-[0.5em]">$</sup> {plan.price.replace("$", "").trim()}
                      </p>
                      {period && <p className={`m-0 font-body text-[15px] leading-none ${ink}`}>{period}</p>}
                      <h4 className={`m-0 pt-1.5 font-heading text-[18px] font-bold leading-none ${ink}`}>Features</h4>
                      <ul className="m-0 flex flex-1 list-none flex-col gap-3 p-0">
                        {plan.features.map((f) => (
                          <li key={f} className={`font-body text-[15px] leading-[1.7] ${ink}`}>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={plan.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-[40px] border border-brand bg-white px-[26px] py-[18px] text-center font-heading text-[13px] font-semibold uppercase leading-none tracking-[0.05em] text-brand transition-colors hover:bg-brand hover:text-white"
                      >
                        Buy Now<span className="sr-only">: {plan.name} package (opens checkout on ecomdreamz.com)</span>
                      </a>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          </section>
        );
      })}
    </>
  );
}

export function PackagesIntro({ text }: { text: string }) {
  return (
    <section className="bg-white pt-[clamp(40px,5vw,72px)]">
      <div className="mx-auto w-[min(1000px,100%-32px)]">
        <p className="m-0 text-center font-body text-[16px] leading-[1.9] text-muted">{text}</p>
      </div>
    </section>
  );
}
