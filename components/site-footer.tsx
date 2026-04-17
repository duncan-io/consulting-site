import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full border-t border-white/5 bg-primary py-12 text-sm tracking-wide text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-8">
        <div className="text-center font-headline text-lg font-bold text-white sm:text-left">
          Duncan McKee
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/specialties"
            className="text-slate-400 transition-transform duration-200 hover:translate-x-0.5 hover:text-white"
          >
            Specialties
          </Link>
          <Link
            href="/testimonials"
            className="text-slate-400 transition-transform duration-200 hover:translate-x-0.5 hover:text-white"
          >
            Testimonials
          </Link>
          <Link
            href="/my-projects"
            className="text-slate-400 transition-transform duration-200 hover:translate-x-0.5 hover:text-white"
          >
            My Projects
          </Link>
        </div>
        <p className="text-center text-slate-400 sm:text-right">
          © {new Date().getFullYear()} Duncan McKee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
