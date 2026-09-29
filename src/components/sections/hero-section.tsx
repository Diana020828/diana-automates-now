import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import dianaAvatar from "@/assets/diana-avatar.webp";
import { useLanguage } from "@/contexts/LanguageContext";
import { FunnelLive } from "./funnel-live";

const CALENDLY_URL = "https://calendly.com/dianapinzon/30min";

// Splits a heading line into words that rise with CSS from the first paint:
// no opacity on the LCP and no JavaScript needed to show the headline.
function RisingWords({ text, start, className }: { text: string; start: number; className?: string }) {
  return (
    <span className={`block ${className ?? ""}`}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span
            className="inline-block animate-word-rise"
            style={{ animationDelay: `${(start + index) * 70}ms` }}
          >
            {word}
          </span>
          {" "}
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const { language, t } = useLanguage();
  const copy = t.hero;
  const cv =
    language === "es"
      ? { href: "/cv-update-esp.pdf", file: "Hoja de vida Diana Pinzon.pdf" }
      : { href: "/cv-update-eng.pdf", file: "Resume Diana Pinzon.pdf" };
  const leadWords = copy.titleLead.split(" ").length;
  const midWords = copy.titleMid.split(" ").length;

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      {/* Organic colour fields behind the funnel card */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-16 size-[28rem] rounded-full bg-lavender-soft blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-0 size-[22rem] rounded-full bg-sage-soft blur-3xl" />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-7 flex items-center gap-3">
            <img
              src={dianaAvatar}
              alt="Diana Pinzon"
              width={52}
              height={52}
              className="size-[52px] rounded-full border-2 border-paper object-cover shadow-card"
            />
            <p className="text-sm font-medium text-plum-soft">{copy.eyebrow}</p>
          </div>

          <h1 className="text-[clamp(2.7rem,6vw,4.9rem)] font-medium leading-[0.98]">
            <RisingWords text={copy.titleLead} start={0} />
            <RisingWords text={copy.titleMid} start={leadWords} />
            <RisingWords text={copy.titleEm} start={leadWords + midWords} className="ink-em w-fit" />
          </h1>

          <p className="mt-7 max-w-xl text-lg text-plum-soft sm:text-xl">{copy.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-clay">
              {copy.primaryCta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <Link to="/projects" className="btn-ghost">
              {copy.secondaryCta}
            </Link>
          </div>

          {/* Real link, not a JavaScript download: the PDF stays crawlable */}
          <a
            href={cv.href}
            download={cv.file}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clay underline decoration-lavender decoration-2 underline-offset-4 hover:text-plum"
          >
            <Download className="size-4" aria-hidden="true" />
            {copy.downloadCV}
          </a>
        </div>

        <FunnelLive />
      </div>
    </section>
  );
}
