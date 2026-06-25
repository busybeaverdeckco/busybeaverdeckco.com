import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BrandMark from "./BrandMark";
import { CITIES, PHONE, PHONE_HREF, EMAIL, SERVICES } from "../content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-bark-soft">
      {/* Flannel ribbon */}
      <div className="overflow-hidden border-b border-white/10 bg-flannel">
        <div className="marquee-track py-3 text-bone">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex shrink-0 items-center">
              {Array.from({ length: 6 }).map((__, j) => (
                <span
                  key={j}
                  className="flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
                >
                  <span className="px-6">Built Dam Good</span>
                  <span className="text-cedar-light">▪</span>
                  <span className="px-6">Busy Beaver Deck Co.</span>
                  <span className="text-cedar-light">▪</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <BrandMark tone="dark" />
            <p className="mt-6 max-w-sm text-pretty text-bone/65">
              Pacific Northwest custom deck builders. Family-owned since 2007,
              led personally by Josh Wight. Composite, Trex, TimberTech/AZEK,
              Fiberon &amp; wood — built to outlast the rain.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Licensed", "Bonded", "Insured"].map((b) => (
                <Badge key={b} variant="chip">
                  {b}
                </Badge>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="eyebrow text-cedar">Services</h3>
            <ul className="mt-5 space-y-3 text-bone/70">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <Link href="/#services" className="link-cedar">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="eyebrow mt-8 text-cedar">Resources</h3>
            <ul className="mt-5 space-y-3 text-bone/70">
              <li>
                <Link href="/blog" className="link-cedar">
                  Deck Building Blog
                </Link>
              </li>
              <li>
                <Link href="/estimate" className="link-cedar">
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + areas */}
          <div>
            <h3 className="eyebrow text-cedar">Get In Touch</h3>
            <div className="mt-5 space-y-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2.5 font-display text-2xl text-bone hover:text-cedar-light"
              >
                <Phone className="h-5 w-5 text-cedar" aria-hidden />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="link-cedar flex items-center gap-2.5 text-bone/70"
              >
                <Mail className="h-4 w-4 text-cedar" aria-hidden />
                {EMAIL}
              </a>
              <p className="flex items-center gap-2.5 text-bone/60">
                <MapPin className="h-4 w-4 text-cedar" aria-hidden />
                Snohomish, WA · Serving the Eastside
              </p>
            </div>

            <h3 className="eyebrow mt-8 text-cedar">Areas Served</h3>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-bone/60">
              {CITIES.map((c) => (
                <Link key={c} href="/#areas" className="hover:text-bone">
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-bone/50 sm:flex-row sm:items-center">
          <p>
            © 2026 Busy Beaver Deck Co. · A JWBuilders LLC company. All rights
            reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="text-cedar">▪</span> Built Dam Good in the Pacific
            Northwest
          </p>
        </div>
      </div>
    </footer>
  );
}
