import Image from "next/image";
import Link from "next/link";
import { Mail, MessagesSquare } from "lucide-react";
import { SubscribeForm } from "@/components/layout/SubscribeForm";
import { socialIcons } from "@/components/ui/BrandIcons";
import { ShapeDivider } from "@/components/ui/ShapeDivider";
import { paymentBadges } from "@/data/payment-badges";
import { site } from "@/lib/site";

const columnHeading = "m-0 font-heading text-[16px] font-bold uppercase leading-[1.2] text-white";

export function Footer() {
  return (
    <footer className="relative bg-black text-white">
      <ShapeDivider name="wave-brush" position="top" className="h-[44px] md:h-[80px]" />

      <div className="wide-container grid grid-cols-1 gap-x-0 gap-y-10 pb-[52px] pt-[96px] sm:grid-cols-2 md:pt-[110px] lgx:grid-cols-[1.05fr_0.95fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="eComDreamz home" className="inline-block">
            <Image src={site.logo} alt="eComDreamz" width={120} height={46} className="h-auto w-[120px]" />
          </Link>
          <p className="m-0 mt-5 font-copy text-[18px] font-bold leading-[1.4] text-white">Building Brands, Scaling Dreams</p>
          <p className="m-0 mt-[12px] max-w-[310px] font-copy text-[16px] leading-[1.8] text-white">
            Helping e-commerce business grow, scale and thrive&nbsp;
          </p>
          <ul className="m-0 mt-[22px] flex list-none gap-[13px] p-0">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                    className="flex size-[34px] items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-white hover:text-brand"
                  >
                    <Icon className="size-[13px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className={columnHeading}>Policies</h2>
          <ul className="m-0 mt-[50px] flex list-none flex-col gap-[16px] p-0">
            {site.policies.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="font-copy text-[16px] leading-[24px] text-white transition-colors hover:text-brand">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={columnHeading}>Contacts</h2>
          <ul className="m-0 mt-[52px] flex list-none flex-col gap-[16px] p-0">
            <li>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-[21px]">
                <MessagesSquare aria-hidden="true" className="mt-px size-[22px] shrink-0 text-brand" strokeWidth={2} />
                <span className="font-copy text-[16px] leading-[24px] text-white transition-colors group-hover:text-brand">
                  Chat With Us
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="group flex items-start gap-[20px]">
                <Mail aria-hidden="true" className="mt-px size-[22px] shrink-0 text-brand" strokeWidth={2} />
                <span className="font-copy text-[16px] leading-[30px] text-white">
                  <span className="block leading-[24px] transition-colors group-hover:text-brand">Mail Us</span>
                  <span className="block font-medium">{site.email}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={columnHeading}>Subscribe</h2>
          <div className="mt-[42px]">
            <SubscribeForm />
          </div>
        </div>
      </div>

      <div className="border border-white/10">
        <div className="mx-auto flex flex-col items-center gap-8 px-4 py-[16px] md:flex-row md:items-start md:justify-center md:gap-0">
          {site.offices.map((office) => (
            <address key={office.country} className="flex w-full max-w-[373px] flex-col items-center text-center not-italic">
              <Image src={office.icon} alt="" width={50} height={35} unoptimized className="h-[40px] w-auto" />
              <h2 className="m-0 mt-[8px] font-copy text-[20px] font-bold leading-[1.4] text-white">{office.country}</h2>
              <p className="m-0 mt-[6px] max-w-[320px] font-copy text-[15px] leading-[28px] text-white">
                {office.lines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>
          ))}
        </div>
      </div>

      <div className="wide-container">
        <h2 className="m-0 pt-[28px] text-center font-body text-[20px] font-bold leading-[1.7] text-white">We Accept</h2>
        <ul aria-label="Accepted payment methods" className="m-0 flex list-none flex-wrap justify-center gap-[10px] p-0 pb-[18px] pt-[18px] sm:gap-4 sm:pb-[32px] sm:pt-[22px]">
          {paymentBadges.map((badge) => (
            <li
              key={badge.label}
              title={badge.label}
              className="flex h-[34px] w-[48px] items-center justify-center rounded-[8px] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.07)] sm:h-[35px] sm:w-[50px]"
            >
              <span className="sr-only">{badge.label}</span>
              <span
                aria-hidden="true"
                className="flex h-[18px] w-[26px] items-center justify-center sm:h-[24px] sm:w-[36px] [&>svg]:size-full"
                dangerouslySetInnerHTML={{ __html: badge.svg }}
              />
            </li>
          ))}
        </ul>
        <p className="m-0 border-t border-white/10 py-[34px] text-center font-copy text-[16px] leading-[1.6] text-white">
          © 2026 – All Rights Reserved By eComDreamz
        </p>
      </div>
    </footer>
  );
}
