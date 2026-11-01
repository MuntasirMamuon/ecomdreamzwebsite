import type { Metadata } from "next";
import { LegalPage, legalTitles } from "@/components/sections/LegalPage";

export const metadata: Metadata = { title: legalTitles.cookie };

export default function CookiePage() {
  return <LegalPage slug="cookie" />;
}
