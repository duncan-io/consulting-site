import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { currentProjects } from "@/lib/current-projects";

export const metadata: Metadata = {
  title: "What I’m working on",
  description:
    "Current web projects—work in progress, stack, and links when available.",
};

export default function WorkingOnPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
      <FadeIn as="section" className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          What I’m working on
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Current web projects
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600">
          A snapshot of what I’m building in the open—two active projects with
          room to grow. Details and links live in each card.
        </p>
      </FadeIn>

      <FadeIn as="section" className="mt-16" delayMs={60}>
        <ul className="grid gap-6 sm:grid-cols-2">
          {currentProjects.map((project, i) => (
            <li key={project.id}>
              <FadeIn delayMs={40 + i * 50}>
                <article className="flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                    <div className="flex min-w-0 items-center gap-3">
                      <h2 className="text-xl font-semibold tracking-tight text-foreground">
                        {project.title}
                      </h2>
                      {project.logo ? (
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          width={180}
                          height={48}
                          className="h-8 w-auto max-w-[120px] shrink-0 object-contain object-left sm:h-9 sm:max-w-[140px]"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : null}
                    </div>
                    {project.status ? (
                      <span className="shrink-0 rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 text-xs font-medium text-zinc-600">
                        {project.status}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
                    {project.summary}
                  </p>
                  {project.stack && project.stack.length > 0 ? (
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                      {project.stack.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-zinc-200/80 px-2.5 py-0.5 text-xs font-medium text-zinc-700"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                      >
                        View site
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-300 px-5 text-sm font-medium text-foreground transition-colors hover:bg-zinc-100"
                      >
                        Repository
                      </a>
                    ) : null}
                    {!project.liveUrl && !project.repoUrl ? (
                      <p className="text-sm text-zinc-500">Links coming soon</p>
                    ) : null}
                  </div>
                </article>
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
