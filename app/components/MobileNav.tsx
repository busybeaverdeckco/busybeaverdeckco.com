"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV = [
  { label: "About", href: "/#story" },
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "Blog", href: "/blog" },
];

const PHONE = "(425) 381-7244";
const PHONE_HREF = "tel:+14253817244";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-bone transition-colors hover:border-cedar/50 hover:text-cedar-light lg:hidden"
      >
        <Menu className="h-5 w-5" aria-hidden />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="border-white/10 bg-evergreen p-0 text-bone sm:max-w-xs"
      >
        <SheetTitle className="sr-only">Site navigation</SheetTitle>

        <div className="topo flex h-full flex-col px-8 pt-20 pb-[max(2rem,env(safe-area-inset-bottom))]">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <SheetClose
                key={item.href}
                nativeButton={false}
                render={
                  <Link
                    href={item.href}
                    className="border-b border-white/10 py-4 font-display text-3xl text-bone transition-colors hover:text-cedar-light"
                  >
                    {item.label}
                  </Link>
                }
              />
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 pt-10">
            <Link
              href="/estimate"
              onClick={close}
              className={buttonVariants({ variant: "flannel", size: "brand" })}
            >
              Get a Free Estimate
            </Link>
            <a
              href={PHONE_HREF}
              onClick={close}
              className={buttonVariants({ variant: "ghostBrand", size: "brand" })}
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {PHONE}
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
