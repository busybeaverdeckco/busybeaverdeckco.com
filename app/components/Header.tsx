"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import logo from "@/public/logo_transparent.png";

const NAV = [
  { label: "About", href: "/#story" },
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "Areas", href: "/#areas" },
  { label: "Blog", href: "/blog" },
];

const PHONE = "(425) 381-7244";
const PHONE_HREF = "tel:+14253817244";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-bark/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          aria-label="Busy Beaver Deck Co. — home"
          className="inline-flex items-center gap-3"
        >
          <Image
            src={logo}
            alt="Busy Beaver Deck Co."
            priority
            sizes="48px"
            className="h-12 w-12 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.25rem] font-semibold tracking-tight text-bone">
              Busy Beaver
            </span>
            <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-cedar">
              Deck Co.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-cedar text-sm font-medium tracking-wide text-bone/80 hover:text-bone"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={PHONE_HREF}
            className="group flex items-center gap-2 text-sm font-semibold text-bone"
          >
            <Phone className="h-4 w-4 text-cedar transition-transform duration-300 group-hover:-rotate-12" />
            {PHONE}
          </a>
          <Link
            href="/estimate"
            className={cn(buttonVariants({ variant: "flannel", size: "brand" }), "!py-2.5 !px-5 text-sm")}
          >
            Free Estimate
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
