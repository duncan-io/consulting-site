import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What clients and partners say about working with Duncan McKee.",
};

export default function TestimonialsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
      <FadeIn as="section" className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Testimonials
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          What people say
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600">
          Honest feedback from people I’ve worked with.
        </p>
      </FadeIn>

      <FadeIn as="section" className="mt-16" delayMs={60}>
        <ul className="space-y-8">
          {testimonials.map((t, i) => (
            <li key={t.id}>
              <FadeIn delayMs={40 + i * 50}>
                <figure className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6 sm:p-8">
                  <blockquote>
                    <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                      “{t.quote}”
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-zinc-200/80 pt-6">
                    <p className="font-semibold text-foreground">{t.author}</p>
                    {(t.role || t.company) && (
                      <p className="mt-1 text-sm text-zinc-600">
                        {[t.role, t.company].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </figcaption>
                </figure>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn as="section" className="mt-24 border-t border-zinc-200 pt-16">
        <p className="text-sm font-medium text-zinc-500">Overview</p>
        <Link
          href="/"
          className="mt-2 inline-flex text-lg font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary-strong hover:underline"
        >
          ← Back to home
        </Link>
      </FadeIn>
    </main>
  );
}
