import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Let .mdx files be imported as content (posts live in /content/blog).
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    // Next.js 16 requires an explicit allowlist; 90 is for the hero.
    qualities: [75, 90],
  },
  // The estimate route reads this logo from disk to embed it inline; trace it
  // into the serverless bundle so the read works in production too.
  outputFileTracingIncludes: {
    "/api/estimate": ["./public/email-logo.png"],
  },
};

// Options left empty on purpose: no remark/rehype plugins so MDX stays
// Turbopack-compatible (function-valued plugins can't cross into Rust).
const withMDX = createMDX({});

export default withMDX(nextConfig);
