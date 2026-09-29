import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const STEP_TONES = ["bg-lavender-soft", "bg-sage-soft", "bg-sand", "bg-paper"];

// Winding path drawn as the reader scrolls (GSAP ScrollTrigger, loaded on
// demand). Each step lights up when the line reaches it. Without JavaScript or
// with reduced motion, the path is complete and every step is visible.
export function LeadJourney() {
  const { t } = useLanguage();
  const copy = t.journey;
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [reached, setReached] = useState(copy.steps.length);

  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    if (!section || !path) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let revert: (() => void) | undefined;

    const start = () => Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
      .then(([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        const length = path.getTotalLength();
        const context = gsap.context(() => {
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          setReached(0);
          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              end: "bottom 70%",
              scrub: 0.6,
              onUpdate: (self) => {
                const next = Math.min(
                  copy.steps.length,
                  Math.floor(self.progress * copy.steps.length + 0.25),
                );
                setReached((current) => (current === next ? current : next));
              },
            },
          });
        }, section);
        revert = () => context.revert();
      })
      .catch((error: unknown) => {
        console.error("Failed to load GSAP for the lead journey", error);
      });

    // GSAP is only downloaded when the section approaches the viewport, so it
    // never competes with the first render of the page.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        void start();
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(section);

    return () => {
      cancelled = true;
      observer.disconnect();
      revert?.();
    };
  }, [copy.steps.length]);

  return (
    <section ref={sectionRef} className="defer-render py-20 sm:py-28" aria-labelledby="journey-title">
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="kicker">{copy.kicker}</p>
          <h2 id="journey-title" className="mt-4 text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[1.02]">
            {copy.title} <span className="ink-em">{copy.titleEm}</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-plum-soft">{copy.intro}</p>

          <svg
            viewBox="0 0 320 260"
            className="mt-10 hidden w-full max-w-sm lg:block"
            aria-hidden="true"
          >
            <path
              d="M20 20 C 140 10, 260 40, 240 90 S 60 120, 80 170 S 280 200, 300 240"
              fill="none"
              stroke="#DDD0BA"
              strokeWidth={10}
              strokeLinecap="round"
            />
            <path
              ref={pathRef}
              d="M20 20 C 140 10, 260 40, 240 90 S 60 120, 80 170 S 280 200, 300 240"
              fill="none"
              stroke="#D2553A"
              strokeWidth={10}
              strokeLinecap="round"
            />
          </svg>
        </div>

        <ol className="space-y-5">
          {copy.steps.map((step, index) => {
            const lit = index < reached;
            return (
              <li
                key={step.title}
                className={`rounded-blob border p-7 transition-[transform,border-color,box-shadow] duration-500 sm:p-9 ${
                  STEP_TONES[index]
                } ${lit ? "border-plum/40 shadow-lift lg:-translate-y-1" : "border-line"}`}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className={`font-display text-5xl font-semibold leading-none transition-colors duration-500 ${
                      lit ? "text-terracotta" : "text-plum-soft"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="text-3xl font-medium">{step.title}</h3>
                </div>
                <p className="mt-4 max-w-lg text-plum-soft">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
