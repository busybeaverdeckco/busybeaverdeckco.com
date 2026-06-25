import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, Phone, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import waterDeck from "@/public/6EBD2166-12E8-4E80-AAED-302F0518B08E.webp";
import aerialFireTable from "@/public/130ADCD4-1DF7-4C4B-9D98-1F75CC140BF7.webp";
import modernDeck from "@/public/6831FDE7-589A-4FEF-82A9-A996954D97A3.webp";
import stairDeck from "@/public/IMG_0384.webp";
import hillsideEstate from "@/public/71D53941-A7BE-4AD7-9DAF-C1CE089A5AAB.webp";
import estateHotTub from "@/public/2DD40DB3-1C04-4CDB-9404-3B935B9A5CF2.webp";
import coveredFireplace from "@/public/85C2E439-104E-4849-8BE0-98AE2F1B5F6B.webp";
import duskLights from "@/public/IMG_0394.webp";
import lakeLounge from "@/public/64D34DC9-6785-4148-9C85-8D1B3540570E.webp";
import Reveal from "../../components/Reveal";
import {
  CITIES,
  DECK_SERVICES,
  PHONE,
  PHONE_HREF,
  TESTIMONIALS,
  type City,
} from "../../content";

const SITE_URL = "https://www.busybeaverdeckco.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};

  const url = `${SITE_URL}/deck-builder/${city.slug}`;
  const title = `Deck Builder in ${city.name}, WA — Trex, Composite & Custom Decks`;
  const description = `Custom deck builder serving ${city.name}, ${city.county}. Trex, TimberTech/AZEK, Fiberon & composite decks engineered for Pacific Northwest rain. Family-owned since 2007. Free estimates — call ${PHONE}.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [
        {
          url: "/IMG_0204.jpg",
          alt: `Custom composite deck built in ${city.name}, WA`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/IMG_0204.jpg"],
    },
  };
}

const GALLERY = [
  { img: waterDeck, cap: "Water-view deck with cable railing" },
  { img: aerialFireTable, cap: "Multi-level deck with fire table" },
  { img: modernDeck, cap: "Modern low-profile composite deck" },
  { img: stairDeck, cap: "Multi-level deck with stairs" },
];

// City hero pool — distinct from the homepage hero and rotated per city so
// neighboring city pages don't share the same banner.
const HERO_POOL = [
  hillsideEstate,
  estateHotTub,
  coveredFireplace,
  duskLights,
  lakeLounge,
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex gap-0.5 text-cedar ${className}`}
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-[1em] w-[1em] fill-current" strokeWidth={0} />
      ))}
    </span>
  );
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const cityIndex = CITIES.findIndex((c) => c.slug === slug);
  const heroImg = HERO_POOL[cityIndex % HERO_POOL.length];
  const url = `${SITE_URL}/deck-builder/${city.slug}`;

  const faqs = [
    {
      q: `Do you build decks in ${city.name}?`,
      a: `Yes. Busy Beaver Deck Co. is a local deck builder serving ${city.name} and the surrounding ${city.county} area, including ${city.neighborhoods.slice(0, 3).join(", ")} and nearby neighborhoods. We design and build composite, Trex, TimberTech/AZEK, Fiberon, PVC and wood decks.`,
    },
    {
      q: `What's the best decking material for ${city.name}'s climate?`,
      a: `For our wet Pacific Northwest climate we usually recommend capped composite (Trex, Fiberon) or capped polymer/PVC (TimberTech AZEK). They resist the moss, rot and mildew that plague wood here and need almost no maintenance — just an occasional rinse.`,
    },
    {
      q: `How much does a new deck cost in ${city.name}?`,
      a: `Every deck is priced to the project — size, material, height, railings and site access all matter. After a free sit-down with Josh you'll get an honest, itemized estimate with no high-pressure sales. Call ${PHONE} to get started.`,
    },
    {
      q: `Are you licensed, bonded and insured?`,
      a: `Yes — Busy Beaver Deck Co. is fully licensed, bonded and insured in Washington, and family-owned since 2007. You work directly with the owner, Josh Wight, not a salesman.`,
    },
  ];

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: "Deck builder",
    name: `Deck Builder in ${city.name}, WA`,
    description: `Custom deck design and construction in ${city.name}, ${city.county} — composite, Trex, TimberTech/AZEK, Fiberon, PVC and wood decks built for the Pacific Northwest.`,
    url,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: `${city.name}, WA` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Deck services",
      itemListElement: DECK_SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name },
      })),
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `Deck Builder in ${city.name}`,
        item: url,
      },
    ],
  };

  return (
    <div className="relative bg-bark">
      {[serviceLd, faqLd, breadcrumbLd].map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      {/* ============================== HERO ============================== */}
      <section className="relative flex min-h-[78svh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt={`Custom composite deck built by Busy Beaver Deck Co. near ${city.name}, WA`}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="object-cover object-center"
          />
        </div>
        <div className="hero-scrim absolute inset-0" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pb-20">
          <Reveal as="p" className="eyebrow flex flex-wrap items-center gap-3 text-cedar-light">
            <Stars />
            <span className="text-bone/90">Serving {city.name}, WA · Since 2007</span>
          </Reveal>

          <Reveal as="h1" delay={120} className="mt-6 max-w-4xl text-bone">
            <span className="display-fluid block font-display font-semibold">
              Deck Builder in {city.name}
            </span>
            <span className="display-fluid block font-display font-semibold italic text-cedar-light">
              built dam good.
            </span>
          </Reveal>

          <Reveal
            as="p"
            delay={260}
            className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-bone/85"
          >
            Serving homeowners in {city.name}. {city.intro}
          </Reveal>

          <Reveal delay={400} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/estimate"
              className={buttonVariants({ variant: "flannel", size: "brand" })}
            >
              Get a Free Estimate
            </Link>
            <a
              href={PHONE_HREF}
              className={buttonVariants({ variant: "ghostBrand", size: "brand" })}
            >
              <Phone className="h-4 w-4" aria-hidden />
              {PHONE}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============================= SERVICES ========================== */}
      <section className="topo relative overflow-hidden bg-bark-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-cedar">What We Build in {city.name}</p>
            <h2 className="mt-4 text-4xl text-bone sm:text-5xl">
              Every kind of deck, done right.
            </h2>
            <p className="mt-5 text-pretty text-lg text-bone/65">
              From composite and Trex installs to full custom outdoor living —
              here&apos;s what we build for {city.name} homeowners.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DECK_SERVICES.map((s, i) => (
              <Reveal
                key={s.name}
                delay={(i % 3) * 80}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-cedar/40"
              >
                <span className="absolute inset-x-0 top-0 h-px w-0 bg-cedar transition-all duration-500 group-hover:w-full" />
                <h3 className="text-xl text-bone">{s.name}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-bone/65">{s.blurb}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== GALLERY ========================== */}
      <section className="relative bg-bark py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-cedar">Recent Work</p>
            <h2 className="mt-4 text-4xl text-bone sm:text-5xl">
              Decks near {city.name}.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((tile) => (
              <figure
                key={tile.cap}
                className="group relative block overflow-hidden rounded-lg border border-white/10"
              >
                <Image
                  src={tile.img}
                  alt={`${tile.cap} — built for a home near ${city.name}, WA`}
                  sizes="(min-width:1024px) 23vw, (min-width:640px) 46vw, 92vw"
                  placeholder="blur"
                  className="zoom-img h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/85 via-bark/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-lg text-bone">{tile.cap}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CLIMATE + NEIGHBORHOODS =================== */}
      <section className="relative overflow-hidden bg-evergreen-700 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal variant="left">
            <p className="eyebrow text-cedar">Built For Our Climate</p>
            <h2 className="mt-4 text-4xl text-bone sm:text-5xl">
              Engineered for {city.name} rain.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-bone/75">
              Nine months of Pacific Northwest rain will find every shortcut in a
              cheap deck. We build with capped composite, proper drainage and
              Simpson Strong-Tie hardware so your {city.name} deck looks and
              performs for decades.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Capped composite & PVC that resists moss, rot and splinters",
                "Structurally superior framing with proper drainage & flashing",
                "Hidden fasteners and crisp picture-frame borders",
                "Manufacturer-backed fade, stain & structural warranties",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-bone/80">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-cedar" aria-hidden />
                  <span className="text-pretty">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <p className="eyebrow text-cedar">Neighborhoods We Serve</p>
            <h2 className="mt-4 text-3xl text-bone sm:text-4xl">
              Local to {city.name}.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-bone/70">
              We build throughout {city.name} and the wider {city.county} area,
              including:
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {city.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-4 py-2.5 text-bone/80"
                >
                  <MapPin className="h-4 w-4 text-cedar" aria-hidden />
                  {n}
                </span>
              ))}
            </div>
            <Link
              href="/estimate"
              className={cn(buttonVariants({ variant: "flannel", size: "brand" }), "mt-9")}
            >
              Check Availability In {city.name}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =========================== TESTIMONIALS ======================== */}
      <section className="relative overflow-hidden bg-stone py-20 text-evergreen sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-flannel">Five-Star Reputation</p>
              <h2 className="mt-4 max-w-xl text-4xl text-evergreen sm:text-5xl">
                Neighbors who&apos;d hire us again.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Stars className="text-xl text-flannel" />
              <span className="font-display text-2xl text-evergreen">5.0</span>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 100}
                className="flex flex-col rounded-lg border border-evergreen/10 bg-white/55 p-8 shadow-[0_30px_60px_-40px_rgba(20,40,30,0.5)]"
              >
                <Stars className="text-flannel" />
                <p className="mt-5 flex-1 text-pretty text-lg leading-relaxed text-evergreen/85">
                  “{t.quote}”
                </p>
                <div className="mt-6 border-t border-evergreen/10 pt-5">
                  <p className="font-display text-xl text-evergreen">{t.name}</p>
                  <p className="mt-1 text-sm text-evergreen/60">{t.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================ FAQ =========================== */}
      <section className="topo relative overflow-hidden bg-bark-soft py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-cedar">Common Questions</p>
            <h2 className="mt-3 text-4xl text-bone sm:text-5xl">
              Decks in {city.name}, answered.
            </h2>
          </Reveal>

          <Accordion multiple className="mt-10 flex flex-col gap-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={i}
                className="rounded-lg border border-white/10 bg-white/[0.02] px-6 transition-colors hover:border-cedar/30"
              >
                <AccordionTrigger className="items-start gap-4 py-6 font-display text-xl text-bone hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                  {f.q}
                  <span className="mt-1 shrink-0 text-xl leading-none text-cedar transition-transform duration-300 group-aria-expanded/accordion-trigger:rotate-45">
                    +
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-pretty text-base leading-relaxed text-bone/70">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ================================ CTA =========================== */}
      <section className="relative overflow-hidden bg-evergreen py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal as="p" className="eyebrow text-cedar-light">
            Free, No-Pressure Estimate
          </Reveal>
          <Reveal as="h2" delay={100} className="mt-5 text-bone">
            <span className="display-fluid font-display">
              Ready for a deck in {city.name}?{" "}
              <span className="font-semibold italic text-cedar-light">
                Let&apos;s build it.
              </span>
            </span>
          </Reveal>
          <Reveal
            as="p"
            delay={220}
            className="mx-auto mt-7 max-w-xl text-pretty text-lg text-bone/80"
          >
            Tell Josh about your space and get an honest, itemized estimate — from
            the builder himself, not a salesman.
          </Reveal>
          <Reveal
            delay={340}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/estimate"
              className={cn(buttonVariants({ variant: "flannel", size: "brand" }), "text-base")}
            >
              Request Your Estimate
            </Link>
            <a
              href={PHONE_HREF}
              className={cn(buttonVariants({ variant: "ghostBrand", size: "brand" }), "text-base")}
            >
              <Phone className="h-4 w-4" aria-hidden />
              {PHONE}
            </a>
          </Reveal>

          <Reveal delay={420} className="mt-10">
            <Link
              href="/blog"
              className="link-cedar inline-flex items-center gap-2 text-sm font-semibold text-cedar-light"
            >
              Read our PNW deck-building blog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
