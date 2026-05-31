import Link from "next/link";

/**
 * Typographic brand lockup — a confident "BB" badge + wordmark.
 * The full mascot badge (brand.jpg) lives in the story section on its
 * natural cream ground; here we keep a clean, premium lockup that reads
 * on both dark and light surfaces.
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
      <span className="relative grid h-11 w-11 place-items-center rounded-md bg-flannel shadow-[0_8px_18px_-10px_rgba(0,0,0,0.8)] ring-1 ring-inset ring-white/15 transition-transform duration-500 group-hover:-rotate-3">
        <span className="font-display text-[1.15rem] font-bold leading-none text-bone">
          BB
        </span>
        <span className="absolute -right-0.5 -top-0.5 text-[0.55rem] text-cedar-light">
          ★
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.25rem] font-semibold tracking-tight ${wordmark}`}
        >
          Busy Beaver
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.32em] ${sub}`}
        >
          Deck Co.
        </span>
      </span>
    </Link>
  );
}
