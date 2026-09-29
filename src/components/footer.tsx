import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/dianapinzonreyes" },
  { label: "GitHub", href: "https://github.com/Diana020828" },
  { label: "Vulcano", href: "https://vulcanoservices.dev" },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="defer-render bg-plum text-cream">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Link to="/" className="font-display text-4xl font-medium text-cream sm:text-5xl">
            Diana <span className="italic text-lavender">Pinzon</span>
          </Link>
          <p className="mt-3 text-cream/80">{t.footer.subtitle}</p>
          <p className="mt-5 max-w-md text-sm text-cream/70">{t.footer.description}</p>
        </div>

        <div className="flex flex-col justify-between gap-8 md:items-end">
          <div className="flex flex-col gap-2 md:items-end">
            <a
              href="mailto:dianapinzon577@gmail.com"
              className="font-display text-xl text-cream underline decoration-lavender decoration-2 underline-offset-4 hover:text-lavender"
            >
              dianapinzon577@gmail.com
            </a>
            <a
              href="https://calendly.com/dianapinzon/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/85 hover:text-lavender"
            >
              {t.nav.book}
            </a>
          </div>
          <ul className="flex flex-wrap gap-2">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-cream/25 px-4 py-2 text-sm hover:border-lavender hover:text-lavender"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <p className="shell py-5 text-sm text-cream/60">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
