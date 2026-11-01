"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState, type FormEvent } from "react";

/** Newsletter form. Demo only: nothing is sent anywhere. */
export function SubscribeForm() {
  const [status, setStatus] = useState<"idle" | "done" | "error">("idle");
  const inputId = useId();
  const statusId = useId();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus("error");
      return;
    }
    setStatus("done");
    form.reset();
  };

  return (
    <form noValidate onSubmit={onSubmit} aria-describedby={statusId} className="flex flex-col items-start">
      <label htmlFor={inputId} className="sr-only">
        Email address for newsletter
      </label>
      <input
        id={inputId}
        type="email"
        name="email"
        required
        placeholder="Your Email *"
        autoComplete="email"
        onChange={() => status !== "idle" && setStatus("idle")}
        className="h-[50px] w-full max-w-[290px] rounded-[2px] border border-[#c8c8c8] bg-transparent px-[24px] font-body text-[15px] text-white placeholder:text-white/85 focus:border-brand focus:outline-none"
      />
      <button
        type="submit"
        className="mt-[11px] h-[50px] cursor-pointer rounded-[2px] border-0 bg-brand px-[31px] font-heading text-[15px] font-bold uppercase leading-none text-white transition-colors hover:bg-white hover:text-brand"
      >
        Subscribe Now
      </button>
      <div id={statusId} aria-live="polite" className="min-h-[1px]">
        <AnimatePresence>
          {status !== "idle" && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`m-0 mt-3 font-copy text-[13.5px] leading-[1.5] ${status === "done" ? "text-[#7ddc9f]" : "text-brand"}`}
            >
              {status === "done"
                ? "Thanks for subscribing! (Demo preview — no email was sent.)"
                : "Please enter a valid email address."}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
