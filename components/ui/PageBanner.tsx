import Link from "next/link";

type PageBannerProps = {
  title: string;
  crumb?: string;
  /** Slightly smaller title for long headings (case study). */
  compact?: boolean;
};

/** Dark title band used by the inner-page mockups ("EcomDreamz Site.dc.html"). */
export function PageBanner({ title, crumb = title, compact = false }: PageBannerProps) {
  return (
    <section className="flex min-h-[clamp(220px,26vw,400px)] items-center justify-center bg-banner px-5 pb-[60px] pt-[150px] text-center">
      <div>
        <h1
          className={`m-0 mb-3.5 font-heading font-bold text-white ${
            compact ? "text-[clamp(28px,4.2vw,48px)] leading-[1.2]" : "text-[clamp(32px,5vw,56px)] leading-[1.15]"
          }`}
        >
          {title}
        </h1>
        <nav aria-label="Breadcrumb">
          <ol className="m-0 flex list-none items-center justify-center gap-2 p-0 font-heading text-[13px] font-semibold uppercase leading-none tracking-[0.1em] text-white/60">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
