import { m } from "framer-motion";
import { Globe, PenTool, Target, Workflow } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ICONS = [Workflow, Target, Globe, PenTool];
const TONES = ["bg-lavender-soft", "bg-sage-soft", "bg-sand", "bg-paper"];

// Each service leads with the outcome for the client and who it is for; the
// deliverables come after.
export function ServicesSection() {
  const { t } = useLanguage();
  const copy = t.services;

  return (
    <section id="servicios" className="defer-render py-20 sm:py-28" aria-labelledby="services-title">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="kicker">{copy.kicker}</p>
            <h2 id="services-title" className="mt-4 text-[clamp(2.2rem,4.8vw,3.8rem)] font-medium leading-[1.04]">
              {copy.title} <span className="ink-em">{copy.titleEm}</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg text-plum-soft lg:justify-self-end">{copy.intro}</p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {copy.list.map((service, index) => {
            const Icon = ICONS[index];
            return (
              <m.li
                key={service.title}
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col rounded-blob border border-line p-7 sm:p-9 ${TONES[index]}`}
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl border border-plum/15 bg-paper">
                    <Icon className="size-5 text-clay" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-semibold text-clay">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-medium leading-tight sm:text-3xl">{service.title}</h3>
                <p className="mt-3 font-display text-xl italic text-clay">{service.outcome}</p>
                <ul className="mt-5 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3 text-plum-soft">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-terracotta" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 text-sm text-plum">
                  <span className="font-semibold">{copy.idealLabel}</span> {service.idealFor}
                </p>
              </m.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
