import { PageBanner } from "@/components/ui/PageBanner";
import { legalHtml } from "@/data/legal-content";
import type { LegalSlug } from "@/lib/types";

export const legalTitles: Record<LegalSlug, string> = {
  terms: "Terms and Condition",
  privacy: "Privacy Policy",
  refund: "Refund Policy",
  cookie: "Cookie Policy",
};

/** Policy page: CMS rich text rendered verbatim from the reference legal content. */
export function LegalPage({ slug }: { slug: LegalSlug }) {
  return (
    <>
      <PageBanner title={legalTitles[slug]} />
      <section className="bg-white py-[clamp(44px,6vw,84px)]">
        <div className="mx-auto w-[min(1140px,100%-32px)]">
          <div className="rich-text max-w-[78ch] text-ink" dangerouslySetInnerHTML={{ __html: legalHtml[slug] }} />
        </div>
      </section>
    </>
  );
}
