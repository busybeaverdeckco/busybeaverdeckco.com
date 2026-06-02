import Image from "next/image";
import Link from "next/link";
import { Star, ArrowDown, ArrowRight, Check, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Reveal from "./components/Reveal";
import {
  CITIES,
  SERVICES,
  PROCESS,
  TESTIMONIALS,
} from "./content";
import { getAllPosts } from "./blog/posts";

import heroImg from "@/public/IMG_0204_hires.webp";
import aboutMe from "@/public/aboutme.webp";
import waterDeck from "@/public/6EBD2166-12E8-4E80-AAED-302F0518B08E.webp";
import aerialFireTable from "@/public/130ADCD4-1DF7-4C4B-9D98-1F75CC140BF7.webp";
import hillsideEstate from "@/public/71D53941-A7BE-4AD7-9DAF-C1CE089A5AAB.webp";
import modernDeck from "@/public/6831FDE7-589A-4FEF-82A9-A996954D97A3.webp";
import umbrellaDining from "@/public/IMG_0405.webp";
import stairDeck from "@/public/IMG_0384.webp";
import coveredKitchen from "@/public/IMG_0211.webp";
import pergolaDeck from "@/public/IMG_0213.webp";
import ctaCollage from "@/public/A3B26245-A525-428B-ACC6-2C619E94C2BB.webp";
import brandBadge from "@/public/brand_transparent.png";

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

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Luxury multi-level composite deck on a Pacific Northwest waterfront at dusk"
            fill
            preload
            loading="eager"
            fetchPriority="high"
            quality={90}
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="hero-scrim absolute inset-0" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20">
          <Reveal as="p" className="eyebrow flex flex-wrap items-center gap-3 text-cedar-light">
            <Stars />
            <span className="text-bone/90">Family-Owned in the PNW · Since 2007</span>
          </Reveal>

          <Reveal as="h1" delay={120} className="mt-6 max-w-4xl text-bone">
            <span className="display-fluid block font-display font-semibold">
              Luxury outdoor living,
            </span>
            <span className="display-fluid block font-display font-semibold italic text-cedar-light">
              built dam good.
            </span>
          </Reveal>

          <Reveal
            as="p"
            delay={260}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-bone/80"
          >
            Custom composite, Trex, TimberTech/AZEK, Fiberon &amp; wood decks for
            the Eastside and Snohomish County — engineered to outlast the rain
            and look stunning doing it.
          </Reveal>

          <Reveal delay={400} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/estimate" className={buttonVariants({ variant: "flannel", size: "brand" })}>
              Get a Free Estimate
            </Link>
            <a href="#work" className={buttonVariants({ variant: "ghostBrand", size: "brand" })}>
              See Our Work
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </Reveal>
        </div>
      </section>

      {/* =============================== STORY =========================== */}
      <section id="story" className="relative overflow-hidden bg-stone text-evergreen">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:py-32">
          <Reveal variant="left">
            <p className="eyebrow text-flannel">Meet the Builder</p>
            <h2 className="mt-5 max-w-md text-4xl text-evergreen sm:text-5xl">
              You work directly with me — not a salesman.
            </h2>
            <div className="mt-7 space-y-5 text-pretty text-lg leading-relaxed text-evergreen/75">
              <p>
                Hi, I&apos;m Joshua Wight, owner of Busy Beaver Deck Co. Born and
                raised on the Eastside of Lake Washington, I&apos;ve spent nearly
                two decades helping homeowners create beautiful outdoor living
                spaces throughout the Greater Seattle area.
              </p>
              <p>
                As a husband, father of two, and local business owner, I
                understand the importance of building things the right way. Every
                project we take on gets the same care, craftsmanship, and
                attention to detail I&apos;d expect at my own home.
              </p>
              <p>
                Formerly known as PNW Deck Pros, our company was built on a simple
                philosophy: outstanding workmanship, honest communication, fair
                pricing, and a finished product homeowners are proud to show off
                for years to come.
              </p>
              <p>
                We specialize in custom and standard deck construction — composite,
                hardwood, and cedar decks, railings, covered structures, and
                complete outdoor living spaces — working with industry-leading
                products from Trex, TimberTech/AZEK, Fiberon, FastenMaster, CAMO,
                and Simpson Strong-Tie.
              </p>
              <p>
                Our reputation has been built through hard work, word-of-mouth
                referrals, and five-star service from start to finish. We show up
                when we say we will, keep job sites clean, communicate clearly, and
                stand behind our work.
              </p>
              <p>
                Today we proudly serve homeowners throughout Snohomish, Lake
                Stevens, Monroe, Mill Creek, Woodinville, Maltby, Kirkland,
                Bellevue, Mercer Island, Redmond, Issaquah, Sammamish, Bothell,
                Kenmore, and Lake Forest Park.
              </p>
              <p>
                When you hire Busy Beaver Deck Co., you&apos;re not hiring a
                salesman. You&apos;re hiring a local contractor with nearly 20
                years of hands-on experience who genuinely cares about the quality
                of the finished product.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Snohomish local", "Family-owned", "Hands-on owner", "No subs hiding the work"].map(
                (chip) => (
                  <Badge key={chip} variant="chipLight">
                    {chip}
                  </Badge>
                )
              )}
            </div>

            <p className="mt-9 font-display text-2xl italic text-flannel">
              “Built Dam Good.”
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-evergreen/60">
              — Josh Wight, Owner
            </p>
          </Reveal>

          <Reveal variant="right" delay={120} className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Builder portrait */}
              <div className="relative aspect-[5/6] overflow-hidden rounded-xl shadow-[0_50px_90px_-40px_rgba(20,40,30,0.55)]">
                <Image
                  src={aboutMe}
                  alt="Josh Wight, owner of Busy Beaver Deck Co., with his wife in the Pacific Northwest"
                  fill
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  placeholder="blur"
                  className="object-cover object-top"
                />
              </div>
              {/* Transparent brand emblem, pinned like a shop sticker */}
              <Image
                src={brandBadge}
                alt="Busy Beaver Deck Co. — Built Dam Good emblem"
                className="absolute -bottom-8 -left-4 w-32 -rotate-6 object-contain drop-shadow-[0_30px_55px_rgba(20,40,30,0.55)] sm:-bottom-10 sm:-left-8 sm:w-48"
                sizes="12rem"
                placeholder="blur"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================== SERVICES ========================= */}
      <section id="services" className="topo relative overflow-hidden bg-bark-soft py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-cedar">What We Build</p>
            <h2 className="mt-4 text-4xl text-bone sm:text-5xl">
              One crew. Every kind of outdoor space.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 80}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-cedar/40"
              >
                <span className="absolute inset-x-0 top-0 h-px w-0 bg-cedar transition-all duration-500 group-hover:w-full" />
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-semibold text-cedar/70">
                    0{i + 1}
                  </span>
                  {s.tag && <Badge variant="tag">{s.tag}</Badge>}
                </div>
                <h3 className="mt-6 text-2xl text-bone">{s.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-bone/65">
                  {s.blurb}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== OUR WORK ========================= */}
      <section id="work" className="relative bg-bark py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-cedar">Selected Work</p>
            <h2 className="mt-4 text-4xl text-bone sm:text-5xl">
              Decks that earn the view.
            </h2>
            <p className="mt-5 text-pretty text-lg text-bone/65">
              A look at recent builds across the Eastside and Snohomish County —
              composite, covered, multi-level and waterfront.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {[
              { img: waterDeck, cap: "Water-view deck with cable railing", city: "Mukilteo" },
              { img: aerialFireTable, cap: "Aerial deck with fire table", city: "Blackman Lake, Snohomish" },
              { img: hillsideEstate, cap: "Lakefront estate deck", city: "Blackman Lake, Snohomish" },
              { img: modernDeck, cap: "Modern low-profile deck", city: "Sahalee Country Club, Sammamish" },
              { img: umbrellaDining, cap: "Backyard deck & dining", city: "Woodinville" },
              { img: stairDeck, cap: "Multi-level deck with stairs", city: "Snohomish" },
              { img: pergolaDeck, cap: "Cable-rail deck & pergola", city: "Mercer Island" },
            ].map((tile, i) => (
              <figure
                key={tile.cap}
                className="group relative block break-inside-avoid overflow-hidden rounded-lg border border-white/10"
              >
                <Image
                  src={tile.img}
                  alt={`${tile.cap} — ${tile.city}, WA`}
                  sizes="(min-width:1024px) 31vw, (min-width:640px) 46vw, 92vw"
                  placeholder="blur"
                  className="zoom-img h-auto w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/85 via-bark/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="eyebrow text-cedar-light">{tile.city}, WA</span>
                  <p className="mt-1 font-display text-xl text-bone">{tile.cap}</p>
                </figcaption>
              </figure>
            ))}
          </Reveal>

          <Reveal delay={160} className="mt-10">
            <Link href="/estimate" className={buttonVariants({ variant: "cedar", size: "brand" })}>
              Start Your Project
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============================== MATERIALS ======================== */}
      <section id="materials" className="relative overflow-hidden bg-evergreen-700 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal variant="left" className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-[0_50px_90px_-40px_rgba(0,0,0,0.7)]">
              <Image
                src={coveredKitchen}
                alt="Covered deck with outdoor kitchen and lake view at golden hour"
                fill
                sizes="(min-width:1024px) 38rem, 90vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-4 -top-4 hidden rotate-3 rounded-lg border border-cedar/40 bg-bark/90 px-5 py-4 backdrop-blur sm:block">
              <p className="font-display text-3xl text-cedar-light">25-yr</p>
              <p className="text-xs uppercase tracking-[0.12em] text-bone/60">
                fade &amp; stain warranties
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120} className="order-1 lg:order-2">
            <p className="eyebrow text-cedar">Built For The Rain</p>
            <h2 className="mt-4 text-4xl text-bone sm:text-5xl">
              Premium materials.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-bone/70">
              Our climate punishes a cheap deck. We build with the industry&apos;s
              best composite products and go above and beyond building our structures, so
              your investment looks and performs for decades.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Trex, TimberTech/AZEK & Fiberon composite — no rot, no splinters, minimal upkeep",
                "Structurally superior framing with Simpson Strong-Tie hardware & proper drainage",
                "Hidden fasteners, crisp picture-frame borders & clean, intentional detailing",
                "Manufacturer-backed fade, stain & structural warranties on every build",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-bone/80">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-cedar" aria-hidden />
                  <span className="text-pretty">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* =============================== PROCESS ========================= */}
      <section id="process" className="topo relative overflow-hidden bg-bark-soft py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-cedar">How We Work</p>
            <h2 className="mt-4 text-4xl text-bone sm:text-5xl">
              Four steps. Zero surprises.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal
                key={step.no}
                delay={i * 90}
                className="group relative bg-bark-soft p-8 transition-colors duration-500 hover:bg-evergreen"
              >
                <span className="font-display text-6xl font-semibold text-cedar/30 transition-colors duration-500 group-hover:text-cedar">
                  {step.no}
                </span>
                <h3 className="mt-4 text-2xl text-bone">{step.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-bone/65">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================ AREAS ========================== */}
      <section id="areas" className="relative overflow-hidden bg-evergreen py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="left">
            <p className="eyebrow text-cedar">Where We Build</p>
            <h2 className="mt-4 text-4xl text-bone sm:text-5xl">
              Proudly local to the Eastside &amp; Snohomish County.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-bone/70">
              We don&apos;t just work here — we live here. That local knowledge
              shows up in everything from drainage and sun exposure to the way a
              deck should sit on a lakefront lot or a forested hillside.
            </p>
            <Link
              href="/estimate"
              className={cn(buttonVariants({ variant: "flannel", size: "brand" }), "mt-8")}
            >
              Check Availability In Your Area
            </Link>
          </Reveal>

          <Reveal variant="right" delay={120} className="flex flex-wrap content-start gap-3">
            {CITIES.map((c) => (
              <Link
                key={c}
                href="/estimate"
                className="group flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-4 py-2.5 text-bone/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-cedar/50 hover:text-bone"
              >
                <MapPin className="h-4 w-4 text-cedar transition-transform duration-300 group-hover:scale-125" aria-hidden />
                {c}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============================ TESTIMONIALS ======================= */}
      <section id="reviews" className="relative overflow-hidden bg-stone py-20 text-evergreen sm:py-24 lg:py-32">
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
              <span className="text-evergreen/60">· 32 reviews</span>
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

      {/* =============================== BLOG ============================ */}
      <section id="blog" className="topo relative overflow-hidden bg-bark-soft py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-cedar">From The Build Log</p>
              <h2 className="mt-4 text-4xl text-bone sm:text-5xl">
                PNW deck advice, straight from the crew.
              </h2>
            </div>
            <Link
              href="/blog"
              className="link-cedar hidden items-center gap-2 font-semibold text-cedar-light md:inline-flex"
            >
              Read the blog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal
                key={post.slug}
                delay={i * 80}
                className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1.5 hover:border-cedar/40"
              >
                <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(min-width:1024px) 31vw, (min-width:640px) 46vw, 92vw"
                      placeholder="blur"
                      className="zoom-img object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="eyebrow text-cedar">{post.category}</span>
                    <h3 className="mt-3 font-display text-xl leading-snug text-bone">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-bone/60">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-cedar-light">
                      {post.readMin} min read
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="mt-10 md:hidden">
            <Link href="/blog" className={buttonVariants({ variant: "cedar", size: "brand" })}>
              Read the Blog
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =============================== CTA ============================= */}
      <section id="quote" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={ctaCollage}
            alt="Collection of luxury Pacific Northwest decks at sunset"
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-bark/82" />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/40 to-bark/70" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 lg:py-36">
          <Reveal as="p" className="eyebrow text-cedar-light">
            Free, No-Pressure Estimate
          </Reveal>
          <Reveal as="h2" delay={100} className="mt-5 text-bone">
            <span className="display-fluid font-display">
              Let&apos;s build something{" "}
              <span className="font-semibold italic text-cedar-light">dam good.</span>
            </span>
          </Reveal>
          <Reveal as="p" delay={220} className="mx-auto mt-7 max-w-xl text-pretty text-lg text-bone/80">
            Tell Josh about your space and get an honest, itemized estimate.
            No high-pressure sales — just a real plan from the builder himself.
          </Reveal>
          <Reveal delay={340} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/estimate"
              className={cn(buttonVariants({ variant: "flannel", size: "brand" }), "text-base")}
            >
              Request Your Estimate
            </Link>
            <a
              href="#story"
              className={cn(buttonVariants({ variant: "ghostBrand", size: "brand" }), "text-base")}
            >
              Meet the Builder
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
