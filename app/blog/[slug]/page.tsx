import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "../../components/Reveal";
import { getPost, getRelatedPosts, POSTS } from "../posts";

const SITE_URL = "https://www.busybeaverdeckco.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: ["Josh Wight"],
      images: [{ url: post.image.src, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image.src],
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);
  const related = getRelatedPosts(slug);
  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image.src}`,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    articleSection: post.category,
    author: {
      "@type": "Person",
      name: "Josh Wight",
      url: SITE_URL,
    },
    publisher: { "@id": `${SITE_URL}/#business` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    isPartOf: { "@id": `${SITE_URL}/blog#blog` },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
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
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <article className="relative overflow-hidden bg-bark">
      {[articleLd, faqLd, breadcrumbLd].map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      {/* ===================== HERO ===================== */}
      <header className="relative">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-bark/72" />
          <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/55 to-bark/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-5 pb-14 pt-36 sm:px-8 sm:pt-44">
          <Link
            href="/blog"
            className="link-cedar inline-flex items-center gap-2 text-sm font-semibold text-cedar-light"
          >
            <ArrowLeft className="h-4 w-4" />
            All posts
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <Badge variant="tag">{post.category}</Badge>
          </div>
          <h1 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,3.6rem)] font-semibold leading-[1.02] text-bone">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-bone/60">
            <span className="font-medium text-bone/80">By Josh Wight</span>
            <span className="text-cedar">▪</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="text-cedar">▪</span>
            <span>{post.readMin} min read</span>
          </div>
        </div>
      </header>

      {/* ===================== BODY ===================== */}
      <div className="relative z-10 mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <div className="mdx-body">
          <Post />
        </div>

        {/* FAQ */}
        {post.faqs.length > 0 && (
          <section className="mt-16 border-t border-white/10 pt-12">
            <p className="eyebrow text-cedar">Common Questions</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-bone">
              Frequently asked
            </h2>
            <Accordion multiple className="mt-8 flex flex-col gap-4">
              {post.faqs.map((f, i) => (
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
          </section>
        )}

        {/* CTA */}
        <aside className="mt-16 overflow-hidden rounded-xl border border-cedar/30 bg-gradient-to-br from-evergreen-700 to-bark-soft p-8 sm:p-10">
          <p className="eyebrow text-cedar-light">Free, No-Pressure Estimate</p>
          <h2 className="mt-3 font-display text-3xl text-bone sm:text-4xl">
            Thinking about a deck? Let&apos;s talk.
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-bone/75">
            You meet Josh. Tell us about your space and get an
            honest, itemized estimate for a deck built dam good for the Pacific
            Northwest.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {["Licensed, bonded & insured", "Family-owned since 2007", "5-star reputation"].map(
              (point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-bone/70">
                  <Check className="h-4 w-4 text-cedar" aria-hidden />
                  {point}
                </li>
              )
            )}
          </ul>
          <Link
            href="/estimate"
            className={cn(buttonVariants({ variant: "flannel", size: "brand" }), "mt-8")}
          >
            Get a Free Estimate
          </Link>
        </aside>
      </div>

      {/* ===================== RELATED ===================== */}
      {related.length > 0 && (
        <section className="border-t border-white/10 bg-bark-soft py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="flex items-end justify-between gap-6">
              <h2 className="font-display text-3xl text-bone sm:text-4xl">
                Keep reading
              </h2>
              <Link
                href="/blog"
                className="link-cedar hidden items-center gap-2 text-sm font-semibold text-cedar-light sm:inline-flex"
              >
                All posts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal
                  key={p.slug}
                  delay={i * 80}
                  className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1.5 hover:border-cedar/40"
                >
                  <Link href={`/blog/${p.slug}`} className="flex h-full flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="(min-width:1024px) 31vw, (min-width:640px) 46vw, 92vw"
                        placeholder="blur"
                        className="zoom-img object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="eyebrow text-cedar">{p.category}</span>
                      <h3 className="mt-3 font-display text-lg leading-snug text-bone">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
