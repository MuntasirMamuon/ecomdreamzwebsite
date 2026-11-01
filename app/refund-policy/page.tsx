import type { Metadata } from "next";
import { LegalPage, legalTitles } from "@/components/sections/LegalPage";

export const metadata: Metadata = { title: legalTitles.refund };

export default function RefundPage() {
  return <LegalPage slug="refund" />;
}
