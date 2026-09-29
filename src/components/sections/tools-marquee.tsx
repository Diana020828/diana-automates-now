import { useLanguage } from "@/contexts/LanguageContext";

const TOOLS = [
  "n8n",
  "GoHighLevel",
  "Zapier",
  "HubSpot",
  "Apollo",
  "LinkedIn Sales Navigator",
  "Instantly",
  "SalesHandy",
  "Webflow",
  "React",
  "Astro",
  "OpenAI API",
];

// Infinite strip of platforms. The list is rendered twice so the -50% loop is
// seamless; the copy is hidden from assistive technology.
export function ToolsMarquee() {
  const { t } = useLanguage();

  return (
    <section aria-label={t.toolsLabel} className="border-y border-line bg-paper py-5">
      <p className="shell mb-3 text-sm text-plum-soft">{t.toolsLabel}</p>
      <div className="group overflow-hidden">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex shrink-0 items-center gap-10 pr-10"
            >
              {TOOLS.map((tool) => (
                <li key={tool} className="flex items-center gap-10 whitespace-nowrap font-display text-2xl text-plum sm:text-3xl">
                  {tool}
                  <span aria-hidden="true" className="size-2 rounded-full bg-terracotta" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
