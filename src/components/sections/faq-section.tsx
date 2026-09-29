import { Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Native <details>: answers stay in the HTML for crawlers and work without
// JavaScript; the plus sign turns into a cross when open.
export function FaqSection() {
  const { t } = useLanguage();
  const copy = t.faq;

  return (
    <section id="preguntas" className="defer-render pb-20 sm:pb-28" aria-labelledby="faq-title">
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="kicker">{copy.kicker}</p>
          <h2 id="faq-title" className="mt-4 text-[clamp(2.2rem,4.8vw,3.8rem)] font-medium leading-[1.04]">
            {copy.title}
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {copy.items.map((item) => (
            <details key={item.q} className="group py-2">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-3 font-display text-xl font-medium text-plum sm:text-2xl [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line bg-paper transition-transform duration-300 group-open:rotate-45">
                  <Plus className="size-4 text-clay" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-5 text-plum-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
