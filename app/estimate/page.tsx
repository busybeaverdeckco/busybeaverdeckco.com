import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Reveal from "../components/Reveal";
import EstimateForm from "./EstimateForm";
import { PHONE, PHONE_HREF, EMAIL } from "../content";

import emblem from "@/public/brand_transparent.png";

export const metadata: Metadata = {
  title: "Free Estimate",
  description:
    "Request a free, no-pressure deck estimate from Busy Beaver Deck Co. Tell Josh about your space and get an honest, itemized estimate. Serving the Eastside & Snohomish County.",
  alternates: { canonical: "https://www.busybeaverdeckco.com/estimate" },
};

export default function EstimatePage() {
  return (
    <section className="topo relative min-h-screen overflow-hidden bg-bark">
      {/* Atmospheric cedar glow + bottom fade */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "radial-gradient(circle, #b27a3c, transparent 70%)" }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bark to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          {/* ============ LEFT — the pitch rail ============ */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal as="p" className="eyebrow text-cedar-light">
              Free Estimate
            </Reveal>

            <Reveal as="h1" delay={120} className="mt-5 text-bone">
              <span className="block font-display text-[clamp(2.7rem,6vw,4.6rem)] font-semibold leading-[0.95]">
                Let&apos;s draw up
              </span>
              <span className="block font-display text-[clamp(2.7rem,6vw,4.6rem)] font-semibold italic leading-[0.95] text-cedar-light">
                your build.
              </span>
            </Reveal>

            <Reveal as="p" delay={260} className="mt-7 max-w-md text-pretty text-lg leading-relaxed text-bone/70">
              Fill out the build order below. Josh reads every one himself and
              follows up within one business day with an honest, itemized
              estimate — no salesman, no phone tag, no pressure.
            </Reveal>

            <Reveal delay={360} className="mt-10 flex flex-wrap gap-2">
              {["Licensed", "Bonded", "Insured", "Since 2007"].map((b) => (
                <Badge key={b} variant="chip">
                  {b}
                </Badge>
              ))}
            </Reveal>

            <Reveal delay={440} className="mt-12 flex items-center gap-6 border-t border-white/10 pt-8">
              <Image
                src={emblem}
                alt="Busy Beaver Deck Co. emblem"
                className="h-20 w-20 shrink-0 object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
                sizes="80px"
              />
              <div className="space-y-2">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-cedar">
                  Rather talk it through?
                </p>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2.5 font-display text-2xl text-bone transition-colors hover:text-cedar-light"
                >
                  <Phone className="h-5 w-5 text-cedar" aria-hidden />
                  {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="link-cedar flex items-center gap-2.5 text-sm text-bone/65"
                >
                  <Mail className="h-4 w-4 text-cedar" aria-hidden />
                  {EMAIL}
                </a>
              </div>
            </Reveal>
          </div>

          {/* ============ RIGHT — the build order ============ */}
          <Reveal variant="right" delay={120}>
            <EstimateForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
