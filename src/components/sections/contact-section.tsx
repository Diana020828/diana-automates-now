import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CALENDLY_URL = "https://calendly.com/dianapinzon/30min";

const SOCIAL = [
  { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/in/dianapinzonreyes", handle: "@dianapinzonreyes" },
  { icon: Github, name: "GitHub", href: "https://github.com/Diana020828", handle: "@Diana020828" },
];

// Closing section of the home page. Booking is a plain link (no Calendly
// widget script), with email and social channels beside it.
export function ContactSection() {
  const { t } = useLanguage();
  const copy = t.contact;

  return (
    <section id="contacto" className="defer-render pb-20 sm:pb-28" aria-labelledby="contact-title">
      <div className="shell grid gap-5 lg:grid-cols-[1.35fr_1fr]">
        <div className="grain relative overflow-hidden rounded-[2.75rem] bg-lavender px-7 py-12 sm:px-12 sm:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-terracotta/30 blur-2xl" />
          <p className="kicker relative">{copy.kicker}</p>
          <h2 id="contact-title" className="relative mt-4 text-[clamp(2.6rem,6vw,4.8rem)] font-medium leading-[1]">
            {copy.title} <span className="italic text-clay">{copy.titleEm}</span>
          </h2>
          <p className="relative mt-6 max-w-xl text-lg text-plum">{copy.body}</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-clay relative mt-9">
            {copy.bookCall}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <p className="relative mt-3 text-sm text-plum">{copy.bookHint}</p>
        </div>

        <div className="grid content-start gap-5">
          <a
            href="mailto:dianapinzon577@gmail.com"
            className="surface flex items-center gap-4 p-6 transition-shadow hover:shadow-lift"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sage-soft">
              <Mail className="size-5 text-plum" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-plum-soft">
                {copy.emailLabel} · {copy.emailHint}
              </span>
              <span className="block break-all font-display text-xl text-plum">dianapinzon577@gmail.com</span>
            </span>
          </a>

          <div className="surface flex items-center gap-4 p-6">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sand">
              <MapPin className="size-5 text-plum" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm text-plum-soft">{copy.locationLabel}</span>
              <span className="block font-display text-xl text-plum">{copy.location}</span>
              <span className="block text-sm text-plum-soft">{copy.timezone}</span>
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {SOCIAL.map(({ icon: Icon, name, href, handle }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="surface flex items-center gap-3 p-5 transition-shadow hover:shadow-lift"
              >
                <Icon className="size-5 text-clay" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-plum">{name}</span>
                  <span className="block text-sm text-plum-soft">{handle}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
