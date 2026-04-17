"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home", match: (p: string) => p === "/" },
  { href: "/my-projects", label: "My Projects", match: (p: string) => p === "/my-projects" },
  { href: "/specialties", label: "Specialties", match: (p: string) => p === "/specialties" },
  { href: "/testimonials", label: "Testimonials", match: (p: string) => p === "/testimonials" },
] as const;

function NavLinks({
  className,
  onNavigate,
  layout = "horizontal",
}: {
  className?: string;
  onNavigate?: () => void;
  layout?: "horizontal" | "vertical";
}) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label="Main">
      {nav.map((item) => {
        const active = item.match(pathname);
        const activeCls =
          layout === "vertical"
            ? "border-l-2 border-secondary pl-3 font-bold text-secondary"
            : "border-b-2 border-secondary pb-1 font-bold text-secondary";
        const idleCls =
          "text-on-surface-variant hover:bg-surface-container-low hover:text-primary";
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`rounded-md px-1 py-2 transition-colors duration-300 ${
              active ? activeCls : idleCls
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <div className="min-w-0 rounded-md bg-surface-container-low px-3 py-2">
          <Link
            href="/"
            className="font-headline text-xl font-black tracking-tighter text-primary"
            onClick={() => setOpen(false)}
          >
            Duncan McKee
          </Link>
        </div>

        <NavLinks className="hidden items-center gap-6 font-headline text-sm font-bold tracking-tight md:flex" />

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/#contact"
            className="rounded-md bg-linear-to-br from-primary to-primary-container px-6 py-2 text-sm font-headline font-bold text-white opacity-90 shadow-sm transition-all duration-150 hover:scale-[0.98] hover:opacity-100"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-outline-variant/40 text-primary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-outline-variant/30 bg-surface-container-low px-4 py-4 md:hidden"
        >
          <NavLinks
            layout="vertical"
            className="flex flex-col gap-1 font-headline text-base font-bold"
            onNavigate={() => setOpen(false)}
          />
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-linear-to-br from-primary to-primary-container px-6 py-3 text-center font-headline font-bold text-white"
          >
            Get in touch
          </Link>
        </div>
      ) : null}
    </header>
  );
}
