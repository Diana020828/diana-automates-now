import type { ReactNode } from "react";

type PageHeaderProps = {
  kicker: string;
  title: string;
  titleEm?: string;
  intro?: string;
  children?: ReactNode;
};

// Shared head of the interior pages. The h1 is the LCP candidate: it renders
// without opacity animation so it paints as soon as the page mounts.
export function PageHeader({ kicker, title, titleEm, intro, children }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden pb-12 pt-32 sm:pb-16 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 size-96 rounded-full bg-lavender-soft blur-3xl" />
      <div className="shell relative">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.7rem,6.5vw,5.2rem)] font-medium leading-[1]">
          {title}
          {titleEm ? (
            <>
              {" "}
              <span className="ink-em">{titleEm}</span>
            </>
          ) : null}
        </h1>
        {intro ? <p className="mt-6 max-w-2xl text-lg text-plum-soft sm:text-xl">{intro}</p> : null}
        {children}
      </div>
    </header>
  );
}
