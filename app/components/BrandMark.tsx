import Link from "next/link";
import Image from "next/image";
import logo from "@/public/brand_transparent.png";

/**
 * Brand lockup — the transparent emblem badge + wordmark.
 * The emblem reads on both dark and light surfaces; the wordmark keeps the
 * name legible at small header sizes.
 */
export default function BrandMark({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const wordmark = tone === "dark" ? "text-bone" : "text-evergreen";
  const sub = tone === "dark" ? "text-cedar" : "text-cedar-deep";

  return (
    <Link
      href="/"
      aria-label="Busy Beaver Deck Co. — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src={logo}
        alt="Busy Beaver Deck Co. emblem"
        priority
        sizes="48px"
        className="h-12 w-12 object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:-rotate-3"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.25rem] font-semibold tracking-tight ${wordmark}`}
        >
          Busy Beaver
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] ${sub}`}
        >
          Deck Co.
        </span>
      </span>
    </Link>
  );
}
