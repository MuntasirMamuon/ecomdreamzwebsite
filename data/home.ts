// Home page content — copy taken verbatim from the live page (Elementor export, page 1023).

export const hero = {
  eyebrow: "Performance-Driven Ecommerce Agency",
  title: "Your Trusted Digital Partner for Developing & Growing Every Day",
  // Controlled line breaks for the desktop headline; `accent` words get the brand gradient.
  titleLines: [
    [{ text: "Your Trusted" }],
    [{ text: "Digital Partner for" }],
    [{ text: "Developing &", accent: true }],
    [{ text: "Growing", accent: true }, { text: "Every Day" }],
  ],
  // Composed from existing site copy (services intro + footer tagline).
  description:
    "We’re eCommerce experts in Shopify design, development and marketing — helping e-commerce businesses grow, scale and thrive.",
  primaryCta: { label: "Let’s Work Together", href: "/contacts" },
  secondaryCta: { label: "Explore More", href: "/our-services" },
  trust: {
    avatars: ["/media/2024/09/Client_1.png", "/media/2024/09/Client_3.png", "/media/2024/09/image788.png"],
    stats: [
      { value: "215+", label: "Clients worldwide" },
      { value: "7+", label: "Years of experience" },
    ],
  },
  visual: {
    dashboard: "/media/2024/11/Screenshot_40.png",
    chart: "/media/2024/11/Screenshot_514.png",
    partnerLogo: "/media/2024/10/Shopify_Partner-2.webp",
    caseLabel: "Specialty Food Brand",
    caseResult: "$0 → $400K",
    caseNote: "in 10 months",
    caseHref: "/specialty-food-brand",
  },
  sticker: "/media/2024/10/Sticker-1-scaled-1-2-1.webp",
  stickerHref: "/contacts",
};

// `width` is the logo width as a percentage of its column (desktop / mobile).
export const partners = [
  { src: "/media/2024/10/Shopify_Partner-2.webp", alt: "Shopify Partner", width: 67, widthMobile: 55 },
  { src: "/media/2024/10/Pinrterst-2.webp", alt: "Pinterest Partners", width: 71, widthMobile: 55 },
  { src: "/media/2024/10/Klavio-2.webp", alt: "Klaviyo", width: 60, widthMobile: 55 },
  { src: "/media/2024/04/Tiktok_Partner.png", alt: "TikTok Marketing Partner", width: 85, widthMobile: 60 },
  { src: "/media/2024/10/Google_PArtner-2.webp", alt: "Google Partner", width: 64, widthMobile: 55 },
  { src: "/media/2024/10/meta-2.webp", alt: "Meta Business Partner", width: 70, widthMobile: 55 },
];

export const compare = {
  before: "/media/2024/10/Ecommerce_Website-scaled-1.webp",
  after: "/media/2024/10/wining_race-scaled-1.webp",
  title: "High-End Shopify Web Design for E-Commerce Growth",
  text: "Looking for a high-end Shopify agency to boost your e-commerce business? We specialize in driving growth and scaling Shopify stores. Our expert team enhances your online presence, increases conversions, and helps your business thrive in the digital world",
  cta: { label: "Explore More", href: "/our-services" },
};

export const testimonials = [
  {
    quote:
      "From concept to launch, the team at EcomDreamz made everything feel effortless. Their design skills are amazing, and their communication is even better. My sales have already started improving!",
    image: "/media/2024/09/Client_1.png",
    name: "Geeta Bihari",
    company: "Silver Corridor",
  },
  {
    quote:
      "I was completely new to dropshipping, but EcomDreamz guided me through every step. They set up my store, helped me choose products, and gave me the confidence to run my business.Highly recommended",
    image: "/media/2024/09/Client_3.png",
    name: "Abdullah",
    company: "Stage OF Joy",
  },
  {
    quote:
      "I hired EcomDreamz to redesign my e-commerce store, and I couldn’t be happier. Not only does the site look amazing, but the user experience is also smoother. I’ve seen a clear boost in conversions since the launch",
    image: "/media/2024/09/image788.png",
    name: "Effie Busnach",
    company: "The Waken",
  },
];

export type ServiceIcon = "check" | "edit" | "cart" | "mail" | "atom" | "media";

export const services: { icon: ServiceIcon; title: string; points: string[] }[] = [
  {
    icon: "check",
    title: "Shopify Store Setup And Configuration",
    points: [
      "√ Comprehensive Store Setup, Including Domain Integration And Payment Gateway Setup",
      "√ Theme Installation And Customization For A Unique Look And Feel",
      "√ Initial Product Catalog Setup",
    ],
  },
  {
    icon: "edit",
    title: "Custom Shopify Theme & App Development",
    points: [
      "√ Design And Development Of Custom, Branded Themes & App",
      "√ Mobile-Responsive Design To Ensure A Seamless Shopping Experience",
      "√ User Experience (UX) Optimization For Higher Conversions",
    ],
  },
  {
    icon: "cart",
    title: "Ecommerce Marketing",
    points: [
      "√ Market Research And Competitor Analysis To Formulate A Winning Strategy",
      "√ Paid Ads Campaigns ( Google Ads, Facebook Ads)",
      "√ Social Media Marketing To Build Brand Presence And Attract Customers.",
    ],
  },
  {
    icon: "mail",
    title: "Email Marketing",
    points: [
      "√ Tailored email marketing strategies designed to match your brand’s voice and engage your customers",
      "√ Eye-catching and mobile-responsive email templates to ensure high engagement across all devices",
      "√ Customized Audience Manage",
    ],
  },
  {
    icon: "atom",
    title: "Content Creation",
    points: [
      "√ Tailoring content with relevant keywords to improve search engine rankings and organic traffic",
      "√ Developing captivating posts and visual content for platforms like Instagram, Facebook",
    ],
  },
  {
    icon: "media",
    title: "Creative Design",
    points: [
      "√Eye-catching social media graphics",
      "√ Website banners and promotional materials",
      "√ Intro and outro creation for branding videos",
      "√ Engaging promotional videos for products and services",
      "√ Engaging Ad Creatives",
    ],
  },
];

export const promoVideo = "https://ecomdreamz.com/wp-content/uploads/2024/09/Ecom-portfolio-F2.mp4";

export const clients = [
  ["Cosy-For-Her-1", "Cosy For Her"],
  ["Elite-Super-Mall-1", "Elite Super Mall"],
  ["Glamour-Grace", "Glamour Grace"],
  ["Levelup-1", "Levelup Fashion"],
  ["PURC-Nature", "PURC Nature"],
  ["Lovescales-1", "Lovescales"],
  ["Neocrafty-2", "Neocrafty"],
  ["Fitzone-1", "Fitzone"],
  ["Fancy-Cozy", "Fancy Cozy"],
  ["Lakonia-1", "Lakonia Imports"],
  ["Echo-Luxy", "Echo Luxe"],
  ["Essenly-1", "Essenly"],
].map(([file, alt]) => ({ src: `/media/2024/10/${file}.webp`, alt }));

export const talents = {
  title: "Meet Our Talents",
  text: "In our opinion, success comes from collaboration. We encourage cooperation and idea sharing in our open-concept office. Our purpose is to solve complicated challenges creatively through debates and conversations. In order to encourage one another and strive toward creating cutting-edge solutions, we don’t have walls or cubicles dividing us",
  // Slide order follows the live slider.
  slides: [
    { src: "/media/2025/02/Employee_Indivisuals_Tawsif-min-768x1012.webp", name: "Tawsif" },
    { src: "/media/2025/09/Employee_Indivisuals_farjuk_ahmed-768x1012.jpg", name: "Farjuk Ahmed" },
    { src: "/media/2026/05/Employee-Indivisuals-Suhana-768x1012.jpg", name: "Suhana" },
    { src: "/media/2025/01/Employee_Indivisuals_Sazzad-768x1012.webp", name: "Sazzad" },
    { src: "/media/2026/05/Employee-Indivisuals-Mokaroma-768x1012.jpg", name: "Mokaroma" },
    { src: "/media/2026/05/Employee-Indivisuals-Prionty-Barua-768x1012.jpg", name: "Prionty Barua" },
    { src: "/media/2025/01/Employee_Indivisuals_Mahbub-768x1012.webp", name: "Mahbub" },
    { src: "/media/2026/05/Employee-Indivisuals-Mohammad-Hasan-768x1012.jpg", name: "Mohammad Hasan" },
    { src: "/media/2025/01/Employee_Indivisuals_Mamun-768x1012.webp", name: "Mamun" },
  ],
  // The reference screenshot was captured on the second slide.
  initialIndex: 1,
};

export const whatWeDo = {
  title: "What we do",
  image: "/media/2024/10/office_employee_img.webp",
  steps: [
    {
      src: "/media/2024/09/idea.gif",
      title: "Needs Idea & Requirement",
      text: "We gather your ideas and requirements to align with your business goals",
    },
    {
      src: "/media/2024/09/analytics.gif",
      title: "Analysis And Design",
      text: "We analyze your needs and craft a customized strategy for optimal results",
    },
    {
      src: "/media/2024/09/solution-1.gif",
      title: "Solution Development",
      text: "Our team develops efficient, scalable solutions aligned to your project’s requirements.",
    },
    {
      src: "/media/2024/09/file-delivery.gif",
      title: "Execution & Delivery",
      text: "We execute the plan and deliver seamless, high-quality results on time",
    },
  ],
};

export type AccordionCard = {
  src: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  external: boolean;
};

export const caseStudies: AccordionCard[][] = [
  [
    {
      src: "/media/2025/01/Silver_Corridor_ui.png",
      title: "Silver Corridor",
      text: "Silver Corridor is an online retailer specializing in products designed to enhance the safety, comfort, and independence of seniors",
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
  ],
  [
    {
      src: "/media/2025/01/Stage_of_joy_ui.png",
      title: "Stage Of Joy",
      text: "A multi-niche ecommerce store providing a wide variety of high-quality, versatile products for diverse lifestyles.",
      cta: "View Website",
      href: "https://stageofjoy.com/",
      external: true,
    },
    {
      src: "/media/2024/09/Holding-Hand-Smart-Phone-Mockup-vol2-2-1-scaled.webp",
      title: "Specialty Food Brand To $400K In 10 Months",
      text: "In November 2023, we partnered with a passionate entrepreneur to transform their struggling specialty food import business into a thriving e-commerce success. Their business was barely getting by, but we knew we could turn things around",
      cta: "View Details",
      href: "/specialty-food-brand",
      external: false,
    },
  ],
];
