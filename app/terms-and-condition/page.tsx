import type { Metadata } from "next";
import { LegalPage, legalTitles } from "@/components/sections/LegalPage";

export const metadata: Metadata = { title: legalTitles.terms };

export default function TermsPage() {
  return <LegalPage slug="terms" />;
}
