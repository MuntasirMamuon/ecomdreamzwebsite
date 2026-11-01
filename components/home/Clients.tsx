import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/data/home";

export function Clients() {
  return (
    <section aria-labelledby="clients-title" className="bg-white pt-[50px] md:pb-[84px] md:pt-[89px]">
      <div className="site-container">
        <div className="grid gap-5 md:grid-cols-2">
          <h2 id="clients-title" className="m-0 font-heading text-[28px] font-bold leading-[1.2] text-ink md:text-[36px] lgx:text-[38px]">
            Our Clients <br />
            Partners in Success
          </h2>
          <p className="m-0 font-copy text-[16px] leading-[30px] text-ink md:pl-[10px]">
            We’ve proudly worked with over <strong>215+ clients</strong>, delivering tailored solutions across various industries.
          </p>
        </div>
        <ul className="m-0 mb-[50px] mt-[34px] grid list-none grid-cols-3 gap-x-[14px] gap-y-[14px] p-0 sm:grid-cols-4 md:mt-[54px] md:gap-x-[29px] md:gap-y-[29px] lgx:grid-cols-6">
          {clients.map((c, i) => (
            <Reveal as="li" key={c.src} delay={(i % 6) * 0.05} y={14}>
              <Img src={c.src} alt={c.alt} sizes="(min-width: 1025px) 162px, 30vw" className="h-auto w-full" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
