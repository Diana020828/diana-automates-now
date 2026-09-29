import { useRef } from "react";
import { Link } from "react-router-dom";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import omwDashboard from "@/assets/omw-dashboard.webp";
import omwAppointments from "@/assets/omw-appointments.webp";
import omwBilling from "@/assets/omw-billing.webp";
import { useLanguage } from "@/contexts/LanguageContext";

// Featured case: three screenshots of the OMW dashboard that drift apart at
// different speeds while the section scrolls by (motion useScroll).
export function OmwCase() {
  const { t } = useLanguage();
  const project = t.projects.items[0];
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const back = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [40, -40]);
  const front = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [90, -70]);

  return (
    <section ref={ref} id="casos" className="defer-render bg-plum py-20 text-cream sm:py-28" aria-labelledby="case-title">
      <div className="shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-lavender">
            <span aria-hidden="true" className="size-2 rounded-full bg-terracotta" />
            {t.featured.kicker}
          </p>
          <h2 id="case-title" className="mt-4 text-[clamp(2.2rem,4.5vw,3.6rem)] font-medium leading-[1.05] text-cream">
            {project.title}
          </h2>
          <p className="mt-3 text-lg text-lavender">{project.subtitle}</p>
          <p className="mt-6 max-w-xl text-cream/85">{project.description}</p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {project.results.map((result) => (
              <li key={result} className="rounded-full border border-cream/25 px-3 py-1 text-sm text-cream">
                {result}
              </li>
            ))}
          </ul>
          <Link
            to="/projects"
            className="btn mt-8 bg-cream text-plum hover:bg-lavender"
          >
            {t.featured.cta}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="relative min-h-[22rem] sm:min-h-[30rem]">
          <img
            src={omwDashboard}
            alt={project.title}
            width={1440}
            height={900}
            loading="lazy"
            className="w-full rounded-3xl border border-cream/15 shadow-lift"
          />
          <m.img
            style={{ y: back }}
            src={omwAppointments}
            alt=""
            width={1430}
            height={796}
            loading="lazy"
            className="absolute -left-4 top-[46%] w-[62%] -rotate-3 rounded-2xl border-4 border-cream shadow-lift sm:-left-8"
          />
          <m.img
            style={{ y: front }}
            src={omwBilling}
            alt=""
            width={1395}
            height={526}
            loading="lazy"
            className="absolute -right-3 top-[62%] w-[58%] rotate-2 rounded-2xl border-4 border-lavender shadow-lift sm:-right-6"
          />
        </div>
      </div>
    </section>
  );
}
