"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  id?: string;
  as?: "div" | "section" | "article" | "span" | "nav";
};

export function FadeIn({
  children,
  className = "",
  delayMs = 0,
  id,
  as = "div",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const refSection = useRef<HTMLElement>(null);
  const refArticle = useRef<HTMLElement>(null);
  const refSpan = useRef<HTMLSpanElement>(null);
  const refNav = useRef<HTMLElement>(null);

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const [revealed, setRevealed] = useState(false);
  const show = reducedMotion || revealed;

  useEffect(() => {
    if (reducedMotion) return;

    const el =
      as === "section"
        ? refSection.current
        : as === "article"
          ? refArticle.current
          : as === "span"
            ? refSpan.current
            : as === "nav"
              ? refNav.current
              : ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion, as]);

  const style: CSSProperties | undefined =
    !reducedMotion && delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined;

  const cn =
    `fade-in-block ${show ? "fade-in-block--visible" : ""} ${className}`.trim();

  if (as === "section") {
    return (
      <section id={id} ref={refSection} style={style} className={cn}>
        {children}
      </section>
    );
  }
  if (as === "article") {
    return (
      <article id={id} ref={refArticle} style={style} className={cn}>
        {children}
      </article>
    );
  }
  if (as === "span") {
    return (
      <span id={id} ref={refSpan} style={style} className={cn}>
        {children}
      </span>
    );
  }
  if (as === "nav") {
    return (
      <nav id={id} ref={refNav} style={style} className={cn}>
        {children}
      </nav>
    );
  }
  return (
    <div id={id} ref={ref} style={style} className={cn}>
      {children}
    </div>
  );
}
