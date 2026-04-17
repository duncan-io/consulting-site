import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { specialties } from "@/lib/specialties";

export const metadata: Metadata = {
  title: "Specialties",
  description:
    "Website strategy, CRO, SEO, reputation management, PPC strategy, and email strategy—in depth.",
};

export default function SpecialtiesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
      <FadeIn as="section" className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Specialties
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          How I work with teams
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600">
          Each area below includes what I typically help with and the outcomes
          clients aim for. Use the list to jump ahead.
        </p>
      </FadeIn>

      <FadeIn as="nav" className="mt-12" aria-label="Specialties" delayMs={60}>
        <p className="text-sm font-medium text-zinc-500">On this page</p>
        <ol className="mt-3 flex flex-wrap gap-2">
          {specialties.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </FadeIn>

      <div className="mt-16 space-y-20">
        {specialties.map((s, i) => (
          <FadeIn
            key={s.id}
            as="section"
            id={s.id}
            delayMs={40 * i}
            className="scroll-mt-28"
          >
            <div className="border-t border-zinc-200 pt-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                {s.title}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600">
                {s.overview}
              </p>

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    What I help with
                  </h3>
                  <ul className="mt-4 space-y-3 text-zinc-700">
                    {s.helpWith.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    Typical outcomes
                  </h3>
                  <ul className="mt-4 space-y-3 text-zinc-700">
                    {s.outcomes.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

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
