import type { Metadata } from "next";
import { LegalPage, legalTitles } from "@/components/sections/LegalPage";

export const metadata: Metadata = { title: legalTitles.privacy };

export default function PrivacyPage() {
  return <LegalPage slug="privacy" />;
}
