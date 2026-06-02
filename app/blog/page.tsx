import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { getAllPosts } from "./posts";

const SITE_URL = "https://www.busybeaverdeckco.com";

export const metadata: Metadata = {
  title: "Deck Building Blog — PNW Outdoor Living Advice",
  description:
    "Expert deck-building advice for the Pacific Northwest from Busy Beaver Deck Co. — composite vs. wood, costs, permits, covered decks, railings and PNW weather know-how.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Deck Building Blog — Busy Beaver Deck Co.",
    description:
      "Expert deck-building advice for the Pacific Northwest — materials, cost, permits, covered decks and more. Built Dam Good.",
  },
};

// Bento rhythm: every card is the same HEIGHT (so rows always line up), and
// variety comes from WIDTH — a feature card spans two columns now and then.
// Wide cards only appear on the 3-col desktop grid; sm stays a tidy 2-up.
function bentoSpan(i: number): string {
  return i % 4 === 2 ? "lg:col-span-2" : "";
}

export default function BlogIndex() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Busy Beaver Deck Co. Blog",
    description:
      "Expert deck-building and outdoor-living advice for the Pacific Northwest.",
    url: `${SITE_URL}/blog`,
    publisher: { "@id": `${SITE_URL}/#business` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
      dateModified: p.updated ?? p.date,
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
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  const [featured, ...rest] = posts;

  return (
    <section className="relative min-h-screen overflow-hidden bg-bark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bark to-transparent" />
      <div
        className="pointer-events-none absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full opacity-[0.13] blur-3xl"
        style={{ background: "radial-gradient(circle, #b27a3c, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -left-48 top-1/3 h-[36rem] w-[36rem] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, #143324, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40 lg:pb-32">
        {/* Header */}
        <Reveal as="p" className="eyebrow text-cedar-light">
          The Build Log
        </Reveal>
        <Reveal as="h1" delay={120} className="mt-5 max-w-3xl text-bone">
          <span className="block font-display text-[clamp(2.6rem,6vw,4.4rem)] font-semibold leading-[0.98]">
            Deck advice from the
          </span>
          <span className="block font-display text-[clamp(2.6rem,6vw,4.4rem)] font-semibold italic leading-[0.98] text-cedar-light">
            crew who builds them.
          </span>
        </Reveal>
        <Reveal
          as="p"
          delay={240}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-bone/70"
        >
          Honest, Pacific Northwest–specific guidance on materials, cost,
          permits and design — written by builders who work in this rain every
          day. No fluff, no sales pitch. Just how to build outdoor living that
          lasts here.
        </Reveal>

        {/* Featured — the lead story */}
        {featured && (
          <Reveal delay={120} className="mt-16">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(min-width:1024px) 50vw, 92vw"
                  placeholder="blur"
                  className="zoom-img object-cover"
                />
              </div>
              <div>
                <p className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.12em] text-cedar">
                  <span className="text-flannel-light">Latest</span>
                  <span className="text-cedar/40">/</span>
                  <span>{featured.category}</span>
                </p>
                <h2 className="mt-5 font-display text-3xl leading-[1.05] text-bone transition-colors duration-300 group-hover:text-cedar-light sm:text-[2.6rem]">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-bone/60">
                  {featured.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cedar-light">
                  Read the post
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        {/* The rest — a clean image grid */}
        <Reveal delay={120} className="mt-20 sm:mt-24">
          <p className="eyebrow text-cedar">More From The Log</p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:auto-rows-[22rem] sm:grid-cols-2 lg:grid-cols-3 lg:[grid-auto-flow:dense]">
            {rest.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group flex flex-col overflow-hidden rounded-xl border border-white/12 bg-gradient-to-b from-white/[0.06] to-transparent transition-colors duration-300 hover:border-cedar/50 hover:from-white/[0.1] ${bentoSpan(i)}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:min-h-0 sm:flex-1">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width:1024px) 42vw, (min-width:640px) 60vw, 92vw"
                    placeholder="blur"
                    className="zoom-img object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="eyebrow text-cedar">{post.category}</p>
                  <h3 className="mt-2 line-clamp-2 text-pretty font-display text-xl leading-snug text-bone transition-colors duration-300 group-hover:text-cedar-light">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
