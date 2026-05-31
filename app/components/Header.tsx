"use client";

import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";

const NAV = [
  { label: "Our Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Materials", href: "#materials" },
  { label: "Process", href: "#process" },
  { label: "Areas", href: "#areas" },
  { label: "About", href: "#story" },
];

const PHONE = "425.381.7244";
const PHONE_HREF = "tel:+14253817244";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-bark/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <BrandMark tone="dark" />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-cedar text-sm font-medium tracking-wide text-bone/80 hover:text-bone"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={PHONE_HREF}
            className="group flex items-center gap-2 text-sm font-semibold text-bone"
          >
            <PhoneIcon className="h-4 w-4 text-cedar transition-transform duration-300 group-hover:-rotate-12" />
            {PHONE}
          </a>
          <a href="#quote" className="btn btn-flannel !py-2.5 !px-5 text-sm">
            Free Estimate
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 grid h-11 w-11 place-items-center rounded-md border border-white/15 text-bone lg:hidden"
        >
          <span className="flex flex-col gap-[5px]">
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-evergreen topo transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-1 flex-col justify-center gap-1 px-8 pt-24">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`border-b border-white/10 py-4 font-display text-3xl text-bone transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <a href="#quote" onClick={() => setOpen(false)} className="btn btn-flannel">
              Get a Free Estimate
            </a>
            <a href={PHONE_HREF} className="btn btn-ghost">
              Call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6.5 3.5c.6 0 1.1.4 1.3 1l.9 3c.2.6 0 1.2-.5 1.6l-1.3 1c.9 1.9 2.4 3.4 4.3 4.3l1-1.3c.4-.5 1-.7 1.6-.5l3 .9c.6.2 1 .7 1 1.3v3c0 .8-.7 1.5-1.5 1.4C9.6 19.9 4.1 14.4 5.1 5C5.1 4.2 5.8 3.5 6.5 3.5z"
        fill="currentColor"
      />
    </svg>
  );
}
