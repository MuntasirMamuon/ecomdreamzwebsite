import type { Metadata } from "next";
import { PackagesIntro, PricingGroups } from "@/components/sections/PricingGroups";
import { PageBanner } from "@/components/ui/PageBanner";
import { packages1Groups, packagesIntro } from "@/data/packages";

export const metadata: Metadata = {
  title: "Packages",
  description: "Shopify, digital marketing and SEO pricing packages from eComDreamz.",
};

export default function PackagesPage() {
  return (
    <>
      <PageBanner title="Packages" />
      <PackagesIntro text={packagesIntro} />
      <PricingGroups groups={packages1Groups} />
    </>
  );
}
