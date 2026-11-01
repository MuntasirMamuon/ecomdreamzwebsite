export type LegalSlug = "terms" | "privacy" | "refund" | "cookie";

export type CaseBlock =
  | { kind: "h"; text: string }
  | { kind: "t"; html: string }
  | { kind: "img"; url: string }
  | { kind: "sectionbg"; url: string }
  | { kind: "endbg" }
  | { kind: "acc"; items: { q: string; a: string }[] };

export type PackagePlan = {
  name: string;
  price: string;
  period?: string;
  features: string[];
  href: string;
  featured?: boolean;
};

export type PackageGroup = {
  bg: string;
  title: string;
  subtitle: string;
  plans: PackagePlan[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type Faq = { q: string; a: string };
