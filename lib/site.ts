import type { NavItem } from "@/lib/types";

export const site = {
  name: "eComDreamz",
  logo: "/media/2024/11/ecomDreamz_-Logo.png",
  email: "hello@ecomdreamz.com",
  whatsapp: "+8801612403021",
  whatsappHref: "https://wa.me/+8801612403021",
  consultationHref: "https://calendly.com/info-enbx",
  meetingHref: "https://calendly.com/ecomdreamz/30min",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/ecommdreamz/", icon: "facebook" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/ecomdreamz/", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/ecom_dreamz/", icon: "instagram" },
  ],
  offices: [
    {
      country: "Bangladesh",
      icon: "/media/2020/07/Srisoudho-1.svg",
      lines: ["Ecomdreamz", "Islamia Brickfield Road, Chotopol, Agrabad,  Chattogram-4100", "+8801612403021"],
    },
    {
      country: "United States",
      icon: "/media/2020/07/White-House-2.svg",
      lines: ["Ecomdreamz LLC", "5900 balcones dr, Austin, Texas, 78731, United States", "+13322535306"],
    },
  ],
  policies: [
    { label: "Terms and Condition", href: "/terms-and-condition" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
} as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/our-services" },
  {
    label: "Packages",
    href: "/packages",
    children: [
      { label: "Packages – 1", href: "/packages" },
      { label: "Packages – 2", href: "/packages-2" },
    ],
  },
  { label: "Contact Us", href: "/contacts" },
  { label: "About Us", href: "/about-us" },
  { label: "Career", href: "/career" },
];
