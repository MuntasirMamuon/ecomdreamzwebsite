import type { AccordionCard } from "@/data/home";

export const intro = {
  title: "Let Our Shopify Web Design Professionals Build Your Online Store",
  text: "Are you looking to build a Shopify website? At ecomdreamz, we’re eCommerce experts and are experienced working with Shopify and the Shopify Plus platform. Our team has Shopify design, development, and marketing experience and can walk you through customization services. We’ll review the goals for your eCommerce store and determine the best solution to meet your goals. We also have a full in-house marketing team and are ranked the leading Shopify SEO agency. Give us a call or complete an estimate request to talk with our Shopify developers or marketing experts.",
  image: "/media/2024/10/image_1-1024x768.webp",
};

export const latestProjects: AccordionCard[] = [
  {
    src: "/media/2025/08/Yana-1-1024x768-1.png",
    title: "Yana Fashions",
    text: "Yana Fashion celebrates femininity and style with a curated selection of trendy, chic clothing",
    cta: "View Website",
    href: "https://yanafashions.com/",
    external: true,
  },
  {
    src: "/media/2025/08/Silver_Corridor_ui-1-1024x683-1.png",
    title: "Silver Corridor",
    text: "Silver Corridor is an online retailer specializing in products that enhance the safety, comfort, and independence of seniors.",
    cta: "View Website",
    href: "https://silvercorridor.com/",
    external: true,
  },
  {
    src: "/media/2025/01/Macbook-Pro-Showcase-Scene-Free-psd-Mockup-scaled.jpg",
    title: "Modevia",
    text: "Your go-to destination for premium shoes, compression socks, and aids designed for comfort, support, and style",
    cta: "View Website",
    href: "https://modevia.nl/",
    external: true,
  },
  {
    src: "/media/2024/09/Holding-Hand-Smart-Phone-Mockup-vol2-2-1-scaled.webp",
    title: "Lakonia",
    text: "Lakhonia offers premium olive oil, bringing you the finest quality straight from nature to your table",
    cta: "View Website",
    href: "https://www.lakonia-imports.com/",
    external: true,
  },
];

export type WhyIcon = "thumbs" | "code" | "chart" | "users" | "coins" | "chat";

export const whyChoose: { icon: WhyIcon; title: string; text: string }[] = [
  {
    icon: "thumbs",
    title: "Full Transparency",
    text: "We believe trust and openness are key to client retention. That's why we provide detailed quotes with no hidden fees.",
  },
  {
    icon: "code",
    title: "Clean Coding",
    text: "We make certain that all of the code we write is error-free. Utilizing core web vitals data in conjunction with other code testing tools",
  },
  {
    icon: "chart",
    title: "Optimization",
    text: "We focus on optimization because even the best-designed website won't convert if it's not optimized for performance and user experience.",
  },
  {
    icon: "users",
    title: "Ecommerce Expertise",
    text: "Shopify is designed for e-commerce, providing features and tools to optimize online sales and enhance the shopping experience.",
  },
  {
    icon: "coins",
    title: "Affordable Pricing",
    text: "We offer our exceptional services at reasonable prices in order to deliver the best value for money while, also, pleasing a much larger audience.",
  },
  {
    icon: "chat",
    title: "Transparent Communication",
    text: "Our team will talk about what you anticipate from us, what metrics will be used to measure the results, and what feedback we will need from you.",
  },
];

export const benefits = {
  title: "Benefits Of Shopify Store Development",
  image: "/media/2024/10/nishan_shopify_master.webp",
  items: [
    { title: "Easy to use", text: "Shopify’s user-friendly interface makes it easy for businesses to set up and manage online stores." },
    {
      title: "Customizable",
      text: "Shopify offers a wide range of templates and themes that can be customized to match a business’s brand and style.",
    },
    { title: "Secure", text: "Shopify provides a secure and reliable online transaction platform, protecting businesses and customers." },
    { title: "Scalable", text: "As a business grows, Shopify can accommodate an increasing number of products and customers." },
    { title: "Integrations", text: "Shopify integrates with payment gateways, marketing platforms, and shipping carriers." },
  ],
};
