"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, LoaderCircle, MailCheck } from "lucide-react";
import { useId, useRef, useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type FieldName = "name" | "email" | "subject" | "message";
type Errors = Partial<Record<Exclude<FieldName, "message">, string>>;
type Status = "idle" | "opening" | "handedOff";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const control =
  "w-full rounded-[12px] border bg-[#fbfbfc] px-4 font-body text-[15px] text-ink-soft outline-none transition-[border-color,background-color,box-shadow] duration-200 placeholder:text-[#8a8c92] hover:border-black/20 focus:border-brand focus:bg-white focus:shadow-[0_0_0_4px_rgb(255_74_93/0.12)]";

/**
 * Contact form. The site has no form backend, so instead of faking a successful
 * submission, a validated message is handed to the visitor's email app, addressed
 * to the studio inbox. The UI never claims the message was sent.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const busy = useRef(false);
  const id = useId();

  const validate = (data: FormData): Errors => {
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please enter your name.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    if (!String(data.get("subject") ?? "").trim()) next.subject = "Please enter a subject.";
    return next;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy.current) return; // guard against double submits
    const form = e.currentTarget;
    const data = new FormData(form);
    const next = validate(data);
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("idle");
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    busy.current = true;
    setStatus("opening");
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const subject = String(data.get("subject")).trim();
    const message = String(data.get("message") ?? "").trim();
    const body = `${message ? `${message}\n\n` : ""}— ${name}\n${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => {
      busy.current = false;
      setStatus("handedOff");
    }, 900);
  };

  const clearError = (name: FieldName) => {
    if (name !== "message" && errors[name]) setErrors((cur) => ({ ...cur, [name]: undefined }));
    if (status === "handedOff") setStatus("idle");
  };

  const field = (name: Exclude<FieldName, "message">, label: string, placeholder: string, type = "text", autoComplete?: string) => {
    const error = errors[name];
    return (
      <div>
        <label htmlFor={`${id}-${name}`} className="mb-2 block font-heading text-[13.5px] font-semibold text-ink-soft">
          {label} <span aria-hidden="true" className="text-brand">*</span>
        </label>
        <input
          id={`${id}-${name}`}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-required="true"
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-${name}-err` : undefined}
          onChange={() => clearError(name)}
          className={`${control} h-[52px] ${error ? "border-brand bg-white" : "border-black/10"}`}
        />
        {error && (
          <p id={`${id}-${name}-err`} className="m-0 mt-1.5 font-body text-[13px] text-[#c4283a]">
            {error}
          </p>
        )}
      </div>
    );
  };

  const opening = status === "opening";

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby={`${id}-title`} aria-busy={opening} className="flex flex-col gap-5">
      <div>
        <h3 id={`${id}-title`} className="m-0 font-heading text-[22px] font-bold leading-[1.25] tracking-[-0.02em] text-ink-soft sm:text-[24px]">
          Send us a message
        </h3>
        <p className="m-0 mt-1.5 font-body text-[13.5px] text-muted">
          Fields marked <span className="text-brand">*</span> are required.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Name", "Your name", "text", "name")}
        {field("email", "Email", "Your email", "email", "email")}
      </div>
      {field("subject", "Subject", "Subject")}
      <div>
        <label htmlFor={`${id}-message`} className="mb-2 block font-heading text-[13.5px] font-semibold text-ink-soft">
          Message <span className="font-medium text-muted">(optional)</span>
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          placeholder="Your message (optional)"
          onChange={() => clearError("message")}
          className={`${control} min-h-[140px] resize-y border-black/10 py-3.5 leading-[1.7]`}
        />
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 order-2 min-w-0 font-body text-[13px] leading-[1.6] text-muted sm:order-1 sm:max-w-[260px]">
          Opens your email app, addressed to {site.email}.
        </p>
        <button
          type="submit"
          disabled={opening}
          className="group order-1 inline-flex h-[54px] w-full shrink-0 cursor-pointer whitespace-nowrap items-center justify-center gap-3 rounded-full border-0 bg-brand px-8 font-heading text-[14px] font-semibold uppercase tracking-[0.06em] text-white shadow-[0_16px_34px_-16px_rgb(255_74_93/0.85)] transition-[background-color,transform,box-shadow] duration-300 hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:cursor-wait disabled:opacity-80 motion-safe:hover:-translate-y-0.5 sm:order-2 sm:w-auto"
        >
          {opening ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-[18px] motion-safe:animate-spin" />
              Opening email…
            </>
          ) : (
            <>
              Send Message
              <ArrowRight aria-hidden="true" className="size-[18px] transition-transform duration-300 motion-safe:group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>

      <div aria-live="polite">
        <AnimatePresence>
          {status === "handedOff" && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex gap-3 rounded-[14px] border border-black/[0.06] bg-surface p-4"
            >
              <MailCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
              <p className="m-0 font-body text-[13.5px] leading-[1.65] text-ink-soft/85">
                Your email app should now be open with this message ready — it’s sent once you press send there. Nothing opened?
                Email us directly at{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-brand underline-offset-2 hover:underline">
                  {site.email}
                </a>
                .
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
