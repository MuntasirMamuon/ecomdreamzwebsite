import type { Metadata } from "next";
import { PackagesIntro, PricingGroups } from "@/components/sections/PricingGroups";
import { PageBanner } from "@/components/ui/PageBanner";
import { packagesIntro } from "@/data/packages";
import { packages2Groups } from "@/data/packages-2";

export const metadata: Metadata = {
  title: "Packages – 2",
  description: "Shopify, digital marketing and SEO pricing packages from eComDreamz.",
};

export default function Packages2Page() {
  return (
    <>
      <PageBanner title="Packages" crumb="Packages – 2" />
      <PackagesIntro text={packagesIntro} />
      <PricingGroups groups={packages2Groups} />
    </>
  );
}
