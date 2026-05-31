"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Variant = "up" | "left" | "right" | "scale";

/**
 * Lightweight scroll-reveal. Adds `.is-visible` when the element enters the
 * viewport; supports a stagger delay and directional variants. No deps.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  once = true,
}: {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Screenshot/QA mode: render the settled state immediately.
    if (typeof window !== "undefined" && window.location.search.includes("shot")) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-variant={variant}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
