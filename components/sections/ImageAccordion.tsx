import Link from "next/link";
import { Img } from "@/components/ui/Img";
import type { AccordionCard } from "@/data/home";

type ImageAccordionProps = {
  items: AccordionCard[];
  /** Tailwind height classes for the desktop row. */
  heightClass?: string;
  sizes?: string;
  headingLevel?: "h3" | "h4";
};

/**
 * Port of the Happy Addons "Image Accordion" (hover behaviour): panels share the
 * row and the hovered/focused panel widens to reveal its copy. On small screens
 * the panels stack and the copy is always visible.
 */
export function ImageAccordion({ items, heightClass = "md:h-[500px]", sizes = "(min-width: 768px) 50vw, 100vw", headingLevel: Heading = "h3" }: ImageAccordionProps) {
  return (
    <ul className={`group/acc m-0 flex list-none flex-col gap-[10px] p-0 md:flex-row ${heightClass}`}>
      {items.map((item) => (
        <li
          key={item.title}
          className="group/item relative h-[420px] overflow-hidden rounded-[10px] bg-[#eee] transition-[flex-grow] duration-500 ease-out md:h-auto md:flex-1 md:hover:grow-[3] md:focus-within:grow-[3] motion-reduce:transition-none"
        >
          <Img src={item.src} alt="" fill sizes={sizes} className="object-cover" />
          <div className="absolute inset-0 flex flex-col items-start justify-end bg-linear-to-b from-[#02010157] from-[60%] to-black p-[24px] opacity-100 transition-opacity duration-500 md:p-[30px] md:opacity-0 md:group-focus-within/item:opacity-100 md:group-hover/item:opacity-100">
            <Heading className="m-0 font-copy text-[22px] font-bold leading-[1.3] text-white md:text-[26px]">{item.title}</Heading>
            <p className="m-0 mt-[10px] max-w-[460px] font-copy text-[15px] leading-[1.6] text-white md:text-[16px]">{item.text}</p>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[20px] inline-block rounded-[3px] bg-brand px-[25px] py-[8px] font-copy text-[15px] leading-[1.6] text-white transition-colors hover:bg-white hover:text-ink"
              >
                {item.cta}
                <span className="sr-only"> for {item.title} (opens in a new tab)</span>
              </a>
            ) : (
              <Link
                href={item.href}
                className="mt-[20px] inline-block rounded-[3px] bg-brand px-[25px] py-[8px] font-copy text-[15px] leading-[1.6] text-white transition-colors hover:bg-white hover:text-ink"
              >
                {item.cta}
                <span className="sr-only">: {item.title}</span>
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
