import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Global MDX element styling — required by @next/mdx in the App Router.
 * Maps markdown to the Busy Beaver dark theme so blog prose stays on-brand
 * without pulling in a (light-themed) typography plugin.
 */
const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-14 scroll-mt-28 font-display text-3xl font-semibold text-bone sm:text-4xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 font-display text-2xl font-semibold text-bone">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 text-pretty text-lg leading-relaxed text-bone/75">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 list-disc space-y-2.5 pl-5 text-lg leading-relaxed text-bone/75 marker:text-cedar">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-2.5 pl-5 text-lg leading-relaxed text-bone/75 marker:text-cedar">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1.5">{children}</li>,
  a: ({ href = "", children }) => (
    <Link href={href} className="link-cedar font-medium text-cedar-light">
      {children}
    </Link>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-bone">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-8 border-l-2 border-cedar bg-white/[0.03] py-1 pl-6 font-display text-xl italic text-bone/90">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="mt-12 border-white/10" />,
  h1: ({ children }) => (
    <h1 className="font-display text-4xl font-semibold text-bone">{children}</h1>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
