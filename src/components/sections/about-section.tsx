import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import dianaProfile from "@/assets/diana-profile.webp";
import { useLanguage } from "@/contexts/LanguageContext";

// Who Diana is: the psychology + data background is her differentiator, and
// the Vulcano card links both entities for search engines and AI assistants.
export function AboutSection() {
  const { t } = useLanguage();
  const copy = t.about;

  return (
    <section id="sobre-mi" className="defer-render py-20 sm:py-28" aria-labelledby="about-title">
      <div className="shell grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <m.div
          initial={{ rotate: -4, y: 24, opacity: 0 }}
          whileInView={{ rotate: -2, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div aria-hidden="true" className="absolute -inset-3 rounded-[2.75rem] bg-lavender" />
          <img
            src={dianaProfile}
            alt={copy.portraitAlt}
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-[2.25rem] object-cover"
          />
        </m.div>

        <div>
          <p className="kicker">{copy.kicker}</p>
          <h2 id="about-title" className="mt-4 text-[clamp(2.2rem,4.8vw,3.8rem)] font-medium leading-[1.04]">
            {copy.title} <span className="ink-em">{copy.titleEm}</span>
          </h2>
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-6 max-w-2xl text-lg text-plum-soft">
              {paragraph}
            </p>
          ))}
          <ul className="mt-7 flex flex-wrap gap-2">
            {copy.facts.map((fact) => (
              <li key={fact} className="chip">
                {fact}
              </li>
            ))}
          </ul>

          {/* Stretched-link card: the link is the visible CTA, and its ::after
              covers the card so the whole block stays clickable */}
          <div className="group relative mt-10 flex flex-col gap-5 rounded-blob border border-line bg-sage-soft p-6 transition-shadow focus-within:shadow-lift hover:shadow-lift sm:flex-row sm:items-center sm:p-8">
            <img
              src="/vulcano-logo.svg"
              alt={copy.logoAlt}
              width={72}
              height={72}
              loading="lazy"
              className="size-16 shrink-0 rounded-2xl bg-paper p-2.5"
            />
            <div className="min-w-0">
              <p className="text-sm text-plum-soft">{copy.vulcanoLabel}</p>
              <p className="font-display text-2xl font-medium text-plum">{copy.vulcanoTitle}</p>
              <p className="mt-2 text-sm text-plum-soft">{copy.vulcanoBody}</p>
              <a
                href="https://vulcanoservices.dev"
                target="_blank"
                rel="noopener me"
                className="mt-3 inline-flex items-center gap-1.5 font-semibold text-clay after:absolute after:inset-0 after:rounded-blob after:content-['']"
              >
                {copy.vulcanoCta}
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
