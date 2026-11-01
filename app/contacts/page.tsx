import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Img } from "@/components/ui/Img";
import { PageBanner } from "@/components/ui/PageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Chat with eComDreamz on WhatsApp, email hello@ecomdreamz.com or schedule a call.",
};

const cards = [
  { href: site.whatsappHref, title: "Chat With Us", value: site.whatsapp, Icon: MessageCircle, external: true, hint: "on WhatsApp" },
  { href: `mailto:${site.email}`, title: "Mail Us", value: site.email, Icon: Mail, external: false, hint: "by email" },
];

export default function ContactsPage() {
  return (
    <>
      <PageBanner title="Contacts" />

      <section aria-labelledby="contact-title" className="relative isolate overflow-hidden bg-surface py-[64px] md:py-[88px] xl:py-[104px]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-[10%] top-[-15%] h-[55%] w-[45%] rounded-full bg-[radial-gradient(closest-side,rgb(255_74_93/0.07),transparent)]" />
          <div className="absolute -right-[8%] bottom-[-20%] h-[60%] w-[45%] rounded-full bg-[radial-gradient(closest-side,rgb(255_74_93/0.06),transparent)]" />
        </div>

        <div className="site-container flex flex-col gap-10 md:gap-12 lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-start lg:gap-x-12 xl:gap-x-16">
          {/* Left column: details + photo. `contents` below lg lets the form sit between them on mobile. */}
          <div className="contents lg:flex lg:flex-col lg:gap-10">
          {/* Contact details */}
          <div className="order-1">
            <Reveal y={16}>
              <p className="m-0 inline-flex items-center gap-3 font-heading text-[12px] font-semibold uppercase leading-none tracking-[0.18em] text-brand">
                <span aria-hidden="true" className="h-px w-8 bg-brand/60" />
                Get In Touch
              </p>
              <h2
                id="contact-title"
                className="m-0 mt-4 font-heading text-[clamp(30px,8vw,34px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink-soft md:text-[40px] xl:text-[46px]"
              >
                Contact Details
              </h2>
              <p className="m-0 mt-5 max-w-[520px] text-pretty font-body text-[16px] leading-[1.8] text-muted">
                Give us a call or text by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.{" "}
                <a
                  href={site.consultationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 whitespace-nowrap bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat pb-px font-semibold text-brand transition-[background-size] duration-300 hover:bg-[length:100%_1.5px] focus-visible:bg-[length:100%_1.5px]"
                >
                  Schedule a Call
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>{" "}
                with us.
              </p>
            </Reveal>

            <ul className="m-0 mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {cards.map(({ href, title, value, Icon, external, hint }, i) => (
                <Reveal as="li" key={title} delay={0.08 + i * 0.08} y={18}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={`${title} ${hint}: ${value}${external ? " (opens in a new tab)" : ""}`}
                    className="group relative flex h-full items-center gap-4 rounded-[16px] border border-black/[0.07] bg-white p-4 shadow-[0_1px_2px_rgba(27,29,33,0.04),0_12px_28px_-22px_rgba(27,29,33,0.3)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-brand/30 hover:shadow-[0_2px_4px_rgba(27,29,33,0.04),0_22px_40px_-22px_rgba(255,74,93,0.38)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-safe:hover:-translate-y-1 sm:p-5 xl:flex-col xl:items-start xl:gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-blush text-brand transition-[background-color,color,transform] duration-300 group-hover:bg-brand group-hover:text-white motion-safe:group-hover:-rotate-6"
                    >
                      <Icon className="size-[22px]" strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-heading text-[15.5px] font-bold leading-[1.3] text-ink-soft">{title}</span>
                      <span className="mt-1 block break-words font-body text-[14.5px] leading-[1.4] text-muted">{value}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="ml-auto size-[18px] shrink-0 text-ink-soft/30 transition-[color,transform] duration-300 group-hover:text-brand motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 xl:absolute xl:right-5 xl:top-5"
                    />
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Team photograph: transparent cut-out rising out of a soft backdrop */}
          <Reveal y={24} delay={0.1} className="order-3 lg:-mt-14">
            <figure className="relative m-0 mx-auto w-full max-w-[460px] lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 top-[22%] rounded-[24px] border border-black/[0.05] bg-[linear-gradient(160deg,#ffffff_0%,#fdecec_100%)]"
              >
                <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(rgb(255_74_93/0.18)_1.2px,transparent_1.4px)] [background-size:14px_14px] [mask-image:linear-gradient(to_top,#000,transparent_70%)]" />
              </div>
              <Img
                src="/media/2024/10/office_employee_img_transparent-1-min.webp"
                alt="Two eComDreamz team members reviewing work together on a laptop"
                loading="eager"
                sizes="(min-width: 1024px) 460px, 92vw"
                className="relative h-auto w-full [clip-path:inset(-50%_0_0_0_round_0_0_24px_24px)]"
              />
            </figure>
          </Reveal>
          </div>

          {/* Contact form */}
          <Reveal y={24} delay={0.15} className="order-2 lg:sticky lg:top-[120px]">
            <div className="relative overflow-hidden rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_2px_4px_rgba(27,29,33,0.03),0_30px_60px_-36px_rgba(27,29,33,0.35)] sm:p-9">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-[#ff8794] to-brand" />
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
