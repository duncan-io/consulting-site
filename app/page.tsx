import Link from "next/link";
import { ContactFormCta } from "@/components/contact-form-cta";
import { FadeIn } from "@/components/fade-in";
import { SpecialtyIcon } from "@/components/specialty-icon";
import { specialties } from "@/lib/specialties";
import { testimonials } from "@/lib/testimonials";

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] ?? "";
  const b = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return (a + b).toUpperCase() || "?";
}

export default function Home() {
  return (
    <main className="w-full flex-1">
      <FadeIn
        as="section"
        className="home-hero flex w-full flex-col items-center px-4 pb-16 pt-16 text-center sm:px-8 md:pb-24 md:pt-28"
      >
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-8">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Digital marketing consultant
          </p>
          <h1 className="font-headline text-balance text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-primary sm:text-5xl md:text-[3.5rem]">
           Digital Strategy That Actually Works
          </h1>
          <p className="mx-auto max-w-lg text-lg text-on-surface-variant">
            I help teams and businesses build custom digital strategies to drive measurable growth
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/specialties"
              className="inline-flex items-center justify-center rounded-md bg-linear-to-br from-primary to-primary-container px-8 py-4 font-headline font-bold text-white shadow-[0_20px_40px_-5px_rgba(26,28,31,0.06)] transition-opacity hover:opacity-90"
            >
              Explore specialties
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-outline-variant px-8 py-4 font-headline font-semibold text-primary transition-colors hover:bg-surface-container-low"
            >
              Contact me
            </Link>
          </div>
        </div>
      </FadeIn>

      <FadeIn
        as="section"
        id="specialties"
        className="scroll-mt-28 bg-surface-container-low px-4 py-16 sm:px-8 sm:py-24"
        delayMs={80}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:gap-12">
            <div className="md:w-1/2">
              <h2 className="font-headline text-[1.75rem] tracking-tight text-primary">
                What I can do for you
              </h2>
              <p className="mt-3 text-on-surface-variant">
                These are the ways I help teams win and businesses grow. Click on one to learn more.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {specialties.map((item, i) => (
              <li key={item.id}>
                <FadeIn delayMs={60 + i * 40}>
                  <Link
                    href={`/specialties#${item.id}`}
                    className={`group relative flex h-full flex-col gap-6 overflow-hidden rounded-xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_-5px_rgba(26,28,31,0.04)] transition-shadow hover:shadow-[0_24px_48px_-8px_rgba(26,28,31,0.08)] sm:p-10`}
                  >
                    {i === 1 ? (
                      <div
                        className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-secondary/5"
                        aria-hidden
                      />
                    ) : null}
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container">
                      <SpecialtyIcon id={item.id} />
                    </div>
                    <h3 className="font-headline text-xl font-bold text-primary group-hover:text-primary-strong">
                      {item.title}
                    </h3>
                    <p className="flex-grow text-on-surface-variant">
                      {item.summary}
                    </p>
                    <span className="mt-auto inline-flex items-center font-headline text-sm font-bold text-secondary transition-transform group-hover:translate-x-0.5">
                      Read more
                      <span className="ml-1" aria-hidden>
                        →
                      </span>
                    </span>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      <FadeIn
        as="section"
        id="testimonials"
        className="scroll-mt-28 px-4 py-16 sm:px-8 sm:py-24"
        delayMs={100}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 md:mb-16">
            <h2 className="font-headline text-[1.75rem] tracking-tight text-primary">
              What people say
            </h2>
            <p className="mt-3 max-w-2xl text-on-surface-variant">
              A few words from clients and partners. More on the testimonials
              page.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <li key={t.id}>
                <FadeIn delayMs={60 + i * 50}>
                  <figure className="relative flex h-full flex-col gap-8 rounded-xl border border-outline-variant/40 bg-surface-container-highest/50 p-8 backdrop-blur-md sm:p-10">
                    <span
                      className="pointer-events-none absolute right-8 top-8 font-serif text-4xl text-primary/10"
                      aria-hidden
                    >
                      ”
                    </span>
                    <blockquote className="relative z-10">
                      <p className="text-lg italic text-on-surface-variant">
                        “{t.quote}”
                      </p>
                    </blockquote>
                    <figcaption className="mt-auto flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/15 to-primary-container/20 font-headline text-sm font-bold text-primary">
                        {initialsFromName(t.author)}
                      </span>
                      <div>
                        <p className="font-headline font-bold text-primary">
                          {t.author}
                        </p>
                        {(t.role || t.company) && (
                          <p className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.05em] text-on-surface-variant">
                            {[t.role, t.company].filter(Boolean).join(" · ")}
                          </p>
                        )}
                      </div>
                    </figcaption>
                  </figure>
                </FadeIn>
              </li>
            ))}
          </ul>

          <Link
            href="/testimonials"
            className="group mt-10 inline-flex items-center font-headline text-sm font-bold text-secondary transition-colors hover:text-primary"
          >
            All testimonials
            <span className="ml-1 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </FadeIn>

      <FadeIn as="section" id="contact" className="scroll-mt-28" delayMs={120}>
        <ContactFormCta />
      </FadeIn>
    </main>
  );
}
