import { m } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const TONES = ["bg-lavender-soft", "bg-sage-soft", "bg-sand"];

// The pains a client recognises before hearing any solution
export function ProblemSection() {
  const { t } = useLanguage();
  const copy = t.problem;

  return (
    <section id="problema" className="defer-render pt-20 sm:pt-28" aria-labelledby="problem-title">
      <div className="shell">
        <p className="kicker">{copy.kicker}</p>
        <h2 id="problem-title" className="mt-4 max-w-3xl text-[clamp(2.2rem,4.8vw,3.8rem)] font-medium leading-[1.04]">
          {copy.title} <span className="ink-em">{copy.titleEm}</span>
        </h2>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {copy.items.map((item, index) => (
            <m.li
              key={item.title}
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-blob border border-line p-7 ${TONES[index]}`}
            >
              <span className="font-display text-5xl font-semibold leading-none text-terracotta">
                {index + 1}
              </span>
              <h3 className="mt-5 text-2xl font-medium leading-tight">{item.title}</h3>
              <p className="mt-3 text-plum-soft">{item.body}</p>
            </m.li>
          ))}
        </ol>

        <p className="mt-8 font-display text-2xl italic text-clay">{copy.closing}</p>
      </div>
    </section>
  );
}
