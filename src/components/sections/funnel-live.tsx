import { useEffect, useRef, useState } from "react";
import {
  LayoutGroup,
  m,
  useInView,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { CalendarCheck, Database, MessageCircle, MousePointerClick } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Time each stage stays active, and the pause before the next lead arrives
const STAGE_MS = 1100;
const REST_MS = 1600;
const STAGE_ICONS = [MousePointerClick, Database, MessageCircle, CalendarCheck];

// Starting totals of the simulated day; the card labels them as an example
const SEED = { captured: 24, replied: 24, booked: 9 };

function RollingNumber({ value }: { value: number }) {
  const spring = useSpring(value, { stiffness: 90, damping: 18 });
  const rounded = useTransform(spring, (latest) => Math.round(latest).toString());

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <m.span className="tabular-nums">{rounded}</m.span>;
}

function DrawnCheck() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <m.path
        d="M5 12.5l4.2 4.2L19 7"
        fill="none"
        stroke="#A63C24"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      />
    </svg>
  );
}

// Hero hook: a lead travels through the funnel (form → CRM → WhatsApp → call)
// while the day's counters roll up. It only runs while visible, and with
// reduced motion it shows the finished state.
export function FunnelLive() {
  const { t } = useLanguage();
  const copy = t.funnel;
  const reducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.3 });
  const [lead, setLead] = useState(0);
  const [stage, setStage] = useState(reducedMotion ? copy.stages.length - 1 : 0);
  const [totals, setTotals] = useState(SEED);

  useEffect(() => {
    if (reducedMotion || !inView) return;

    const last = copy.stages.length - 1;
    const delay = stage === last ? REST_MS : STAGE_MS;
    const timer = window.setTimeout(() => {
      if (stage === last) {
        setLead((current) => (current + 1) % copy.leads.length);
        setStage(0);
        setTotals((current) => ({ ...current, captured: current.captured + 1 }));
        return;
      }
      const next = stage + 1;
      setStage(next);
      if (next === 2) setTotals((current) => ({ ...current, replied: current.replied + 1 }));
      if (next === last) setTotals((current) => ({ ...current, booked: current.booked + 1 }));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [stage, inView, reducedMotion, copy.stages.length, copy.leads.length]);

  const name = copy.leads[lead];
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div ref={rootRef} className="surface grain relative overflow-hidden p-5 sm:p-7">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="font-display text-lg font-semibold text-plum">{copy.title}</p>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-soft px-2.5 py-1 text-xs font-semibold text-plum">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sage opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-sage" />
            </span>
            {copy.live}
          </span>
          <span className="rounded-full border border-line px-2.5 py-1 text-xs text-plum-soft">
            {copy.note}
          </span>
        </div>
      </div>

      <LayoutGroup>
        <ol className="relative space-y-2.5" aria-label={copy.title}>
          {/* Rail joining the stages */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[1.35rem] top-6 w-0.5 rounded-full bg-line"
          />
          {copy.stages.map((item, index) => {
            const Icon = STAGE_ICONS[index];
            const done = index < stage;
            const active = index === stage;
            return (
              <li
                key={item.title}
                className={`relative flex items-center gap-3.5 rounded-2xl px-2 py-2.5 transition-colors duration-300 ${
                  active ? "bg-lavender-soft" : done ? "bg-sage-soft/60" : "bg-transparent"
                }`}
              >
                <span
                  className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                    active || done
                      ? "border-plum bg-paper text-plum"
                      : "border-line bg-cream text-plum-soft"
                  }`}
                >
                  <Icon className="size-[1.1rem]" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold leading-tight text-plum">{item.title}</span>
                  <span className="block text-sm leading-snug text-plum-soft">{item.detail}</span>
                </span>
                <span className="flex w-9 shrink-0 justify-end sm:w-24">
                  {active ? (
                    <m.span
                      layoutId="funnel-lead"
                      transition={{ type: "spring", stiffness: 260, damping: 26 }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-plum p-1 text-xs font-semibold text-cream sm:pr-2.5"
                    >
                      <span className="grid size-5 place-items-center rounded-full bg-clay text-[0.6rem] text-cream">
                        {initials}
                      </span>
                      {/* Narrow screens show only the initials: the steps need the width */}
                      <span className="sr-only sm:not-sr-only">{name}</span>
                    </m.span>
                  ) : done ? (
                    <DrawnCheck />
                  ) : null}
                </span>
              </li>
            );
          })}
        </ol>
      </LayoutGroup>

      <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4">
        {(
          [
            ["captured", totals.captured],
            ["replied", totals.replied],
            ["booked", totals.booked],
          ] as const
        ).map(([key, value]) => (
          <div key={key} className="flex min-w-0 flex-col-reverse">
            <dt className="mt-1 text-xs leading-snug text-plum-soft">{copy.counters[key]}</dt>
            <dd className="font-display text-3xl font-semibold leading-none text-plum sm:text-4xl">
              <RollingNumber value={value} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
