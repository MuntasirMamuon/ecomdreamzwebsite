import type { Metadata } from "next";
import { Img } from "@/components/ui/Img";
import { PageBanner } from "@/components/ui/PageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { caseBlocks } from "@/data/case-study-content";
import type { CaseBlock } from "@/lib/types";

export const metadata: Metadata = {
  title: "Specialty Food Brand – Case Study",
  description: "How eComDreamz grew a specialty food brand to $400K in sales in just 10 months.",
};

type Section = { photo: boolean; url?: string; blocks: Exclude<CaseBlock, { kind: "sectionbg" } | { kind: "endbg" }>[] };

/** Group the flat CMS block list into plain and photo-background sections (same rules as the mockup). */
function toSections(blocks: CaseBlock[]): Section[] {
  const out: Section[] = [];
  let cur: Section | null = null;
  const flush = () => {
    if (cur && cur.blocks.length) out.push(cur);
    cur = null;
  };
  for (const b of blocks) {
    if (b.kind === "sectionbg") {
      flush();
      cur = { photo: true, url: b.url, blocks: [] };
      continue;
    }
    if (b.kind === "endbg") {
      flush();
      continue;
    }
    if (!cur) cur = { photo: false, blocks: [] };
    cur.blocks.push(b);
  }
  flush();
  return out;
}

function Block({ block, photo, eager = false }: { block: Section["blocks"][number]; photo: boolean; eager?: boolean }) {
  const flex = photo ? "min-w-0 flex-[1_1_320px]" : "w-full";
  switch (block.kind) {
    case "h":
      return (
        <h2 className={`m-0 mb-[18px] font-heading text-[clamp(24px,3.2vw,34px)] font-bold leading-[1.28] ${photo ? "text-white" : "text-ink"} ${flex}`}>
          {block.text}
        </h2>
      );
    case "img":
      return (
        <div className={`${flex} ${photo ? "" : "my-[26px]"}`}>
          <Img src={block.url} alt="" loading={eager ? "eager" : "lazy"} sizes="(min-width: 1140px) 1100px, 100vw" className="block h-auto w-full rounded-[6px]" />
        </div>
      );
    case "acc":
      return (
        <div className="my-2 flex w-full flex-col gap-2.5">
          {block.items.map((it) => (
            <details key={it.q} className="group border border-line bg-white px-[18px] py-[14px]">
              <summary className="cursor-pointer font-heading text-[15.5px] font-semibold leading-[1.5] text-ink marker:text-brand">{it.q}</summary>
              <div className="rich-text pt-2.5 text-[14.5px] leading-[1.85] text-ink" dangerouslySetInnerHTML={{ __html: it.a }} />
            </details>
          ))}
        </div>
      );
    case "t":
      return (
        <div className={flex}>
          <div className={`rich-text max-w-[78ch] ${photo ? "text-[#e4e5e8]" : "text-ink"}`} dangerouslySetInnerHTML={{ __html: block.html }} />
        </div>
      );
  }
}

export default function CaseStudyPage() {
  const sections = toSections(caseBlocks);
  return (
    <>
      <PageBanner title="Specialty Food Brand" crumb="Case Study" compact />
      {sections.map((sec, i) =>
        sec.photo ? (
          <section key={i} className="relative bg-night">
            {sec.url && (
              <div aria-hidden="true" className="absolute inset-0 opacity-25">
                <Img src={sec.url} alt="" fill sizes="100vw" className="object-cover" />
              </div>
            )}
            <Reveal className="site-container relative flex flex-wrap items-center gap-[clamp(24px,3.4vw,52px)] py-[clamp(40px,5.5vw,80px)]">
              {sec.blocks.map((b, k) => (
                <Block key={k} block={b} photo eager={i < 2} />
              ))}
            </Reveal>
          </section>
        ) : (
          <section key={i} className="bg-white">
            <Reveal className="mx-auto w-[min(1140px,100%-32px)] py-[clamp(34px,4.6vw,70px)]">
              {sec.blocks.map((b, k) => (
                <Block key={k} block={b} photo={false} />
              ))}
            </Reveal>
          </section>
        ),
      )}
    </>
  );
}
