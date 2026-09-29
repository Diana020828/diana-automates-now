import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import contentLinkedin from "@/assets/Content-linkedin-I.webp";
import websiteProject from "@/assets/Web-site.webp";
import workflowN8n from "@/assets/workflow-n8n.webp";
import cvWithIA from "@/assets/cv-wit-ia.webp";
import adesuProject from "@/assets/adesu-website.webp";
import awardsCfoproProject from "@/assets/Awards-CFOPro.webp";
import omwDashboard from "@/assets/omw-dashboard.webp";

type Project = ReturnType<typeof useLanguage>["t"]["projects"]["items"][number];

// Screenshot of each case, matched by the stable key of the translations
const IMAGES: Record<string, string> = {
  dashboard: omwDashboard,
  whatsapp: workflowN8n,
  linkedin: contentLinkedin,
  portfolio: websiteProject,
  adesu: adesuProject,
  awards: awardsCfoproProject,
  cv: cvWithIA,
};

const TONES = ["bg-lavender-soft", "bg-sage-soft", "bg-sand"];

// One case study: the screenshot drifts slightly against the scroll
// (motion useScroll) and the text enters once.
function ProjectCase({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [36, -36]);
  const reversed = index % 2 === 1;

  return (
    <m.article
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      <div
        className={`overflow-hidden rounded-blob border border-line p-5 sm:p-8 ${TONES[index % TONES.length]} ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <m.img
          style={{ y: drift }}
          src={IMAGES[project.key]}
          alt={project.title}
          loading="lazy"
          draggable={false}
          className="mx-auto max-h-[22rem] w-full rounded-2xl object-contain"
        />
      </div>

      <div>
        <span className="font-display text-6xl font-semibold leading-none text-terracotta">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">{project.title}</h2>
        <p className="mt-2 font-semibold text-clay">{project.subtitle}</p>
        <p className="mt-5 text-plum-soft">{project.description}</p>

        <p className="mt-6 text-sm font-semibold text-plum">{t.projects.resultsLabel}</p>
        <ul className="mt-2 space-y-1.5">
          {project.results.map((result) => (
            <li key={result} className="flex gap-3 text-plum-soft">
              <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-terracotta" />
              {result}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm font-semibold text-plum">{t.projects.toolsLabel}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li key={tool} className="chip">
              {tool}
            </li>
          ))}
        </ul>

        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-7">
            {project.linkKind === "code" ? t.projects.viewCode : t.projects.viewWebsite}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </m.article>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section className="pb-20 sm:pb-28" aria-label={t.projects.listLabel}>
      <div className="shell space-y-24 sm:space-y-32">
        {t.projects.items.map((project, index) => (
          <ProjectCase key={project.key} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
