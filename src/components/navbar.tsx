import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const CALENDLY_URL = "https://calendly.com/dianapinzon/30min";

// Floating pill navigation. Home sections are reached through hash links
// (ScrollToTop resolves them after a route change); Cases is its own page.
export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigation = [
    { name: t.nav.home, to: "/" },
    { name: t.nav.services, to: "/#servicios" },
    { name: t.nav.cases, to: "/projects" },
    { name: t.nav.about, to: "/#sobre-mi" },
    { name: t.nav.contact, to: "/#contacto" },
  ];
  const isCurrent = (to: string) => to === pathname;
  const otherLanguage = language === "en" ? "es" : "en";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label={t.nav.label}
        className={`mx-auto flex max-w-[1240px] items-center justify-between gap-3 rounded-full border py-2 pl-5 pr-2 transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled || open ? "border-line bg-paper/95 shadow-card backdrop-blur" : "border-transparent bg-transparent"
        }`}
      >
        <Link to="/" className="font-display text-xl font-semibold text-plum">
          Diana <span className="italic text-clay">Pinzon</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                aria-current={isCurrent(item.to) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isCurrent(item.to) ? "bg-plum text-cream" : "text-plum hover:bg-sand"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setLanguage(otherLanguage)}
            className="grid min-h-11 min-w-11 place-items-center rounded-full border border-line text-xs font-semibold uppercase text-plum hover:border-plum"
            // The accessible name starts with the visible text ("en"/"es")
            aria-label={`${otherLanguage} — ${t.nav.switchLanguage}`}
          >
            {otherLanguage}
          </button>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center rounded-full bg-clay px-5 text-sm font-semibold text-cream transition-colors hover:bg-plum sm:inline-flex"
          >
            {t.nav.book}
          </a>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="grid min-h-11 min-w-11 place-items-center rounded-full text-plum hover:bg-sand lg:hidden"
            aria-label={t.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="surface mx-auto mt-2 max-w-[1240px] p-2 lg:hidden"
          >
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                aria-current={isCurrent(item.to) ? "page" : undefined}
                className={`block rounded-2xl px-4 py-3 font-display text-xl ${
                  isCurrent(item.to) ? "bg-lavender-soft text-plum" : "text-plum hover:bg-sand"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-clay mt-2 w-full">
              {t.nav.book}
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
