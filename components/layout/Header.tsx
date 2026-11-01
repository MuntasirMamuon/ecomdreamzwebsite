"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { mainNav, site } from "@/lib/site";
import type { NavItem } from "@/lib/types";

function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || !!item.children?.some((c) => c.href === pathname);
}

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();
  const wrapperRef = useRef<HTMLLIElement>(null);

  // True while the menu is open only because the pointer is hovering it, so the
  // click that follows a hover keeps it open instead of toggling it shut.
  const openedByHover = useRef(false);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (!open) openedByHover.current = true;
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = setTimeout(() => {
      openedByHover.current = false;
      setOpen(false);
    }, 120);
  };
  const onToggle = () => {
    if (openedByHover.current) {
      openedByHover.current = false;
      setOpen(true);
      return;
    }
    setOpen((v) => !v);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        wrapperRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <li
      ref={wrapperRef}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-current={isActive(pathname, item) ? "page" : undefined}
        onClick={onToggle}
        className="flex cursor-pointer items-center gap-1.5 whitespace-nowrap border-0 bg-transparent py-[18px] font-heading text-[15px] font-semibold leading-none text-white transition-colors hover:text-brand aria-expanded:text-brand"
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2.2}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            id={menuId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-[-20px] top-full m-0 min-w-[210px] list-none rounded bg-white p-0 py-2 shadow-[0_12px_34px_rgba(0,0,0,0.18)]"
          >
            {item.children?.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === child.href ? "page" : undefined}
                  className="block px-5 py-[13px] font-heading text-[13.5px] font-semibold leading-none text-night transition-colors hover:bg-surface hover:text-brand aria-[current=page]:text-brand"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const mq = window.matchMedia("(min-width: 1025px)");
    const onResize = () => mq.matches && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/90">
      <a
        href="#main"
        className="sr-only rounded bg-white px-4 py-2 font-heading text-sm font-semibold text-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-10"
      >
        Skip to content
      </a>
      <div className="site-container flex h-[76px] items-center lgx:h-[90px] lgx:pt-[15px]">
        <div className="w-[40%] lgx:w-[15%]">
          <Link href="/" aria-label="eComDreamz home" className="inline-block" onClick={closeMenu}>
            <Image src={site.logo} alt="eComDreamz" width={120} height={46} preload className="h-auto w-[104px] lgx:w-[120px]" />
          </Link>
        </div>

        <nav aria-label="Main" className="hidden w-[60%] lgx:block">
          <ul className="m-0 flex list-none items-center justify-end gap-[clamp(28px,3.6vw,52px)] p-0">
            {mainNav.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} pathname={pathname} />
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item) ? "page" : undefined}
                    className="block whitespace-nowrap py-[18px] font-heading text-[15px] font-semibold leading-none text-white transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden w-[25%] justify-end lgx:flex">
          <a
            href={site.consultationHref}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-[10px] border-2 border-brand bg-black px-5 py-[13px] font-heading text-[14px] font-semibold leading-[1.2] text-white transition-colors hover:bg-brand"
          >
            Consultation
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls={panelId}
          onClick={() => setMenuOpen((v) => !v)}
          className="ml-auto flex size-[46px] cursor-pointer items-center justify-center rounded-[10px] border-2 border-brand bg-transparent text-white lgx:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            id={panelId}
            aria-label="Mobile"
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[calc(100dvh-76px)] overflow-y-auto bg-black/95 lgx:hidden"
          >
            <ul className="site-container m-0 list-none p-0 pb-[22px] pt-2">
              {mainNav.map((item) => (
                <li key={item.label} className="border-b border-white/12">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive(pathname, item) && !item.children ? "page" : undefined}
                    className="block py-4 font-heading text-[15px] font-semibold leading-none text-white transition-colors hover:text-brand aria-[current=page]:text-brand"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="m-0 list-none p-0 pb-3 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={closeMenu}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className="block py-2.5 font-heading text-[14px] font-medium leading-none text-white/75 transition-colors hover:text-brand aria-[current=page]:text-brand"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="site-container pb-6">
              <a
                href={site.consultationHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[10px] border-2 border-brand bg-black px-5 py-[15px] text-center font-heading text-[14px] font-semibold leading-none text-white transition-colors hover:bg-brand"
              >
                Consultation
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
