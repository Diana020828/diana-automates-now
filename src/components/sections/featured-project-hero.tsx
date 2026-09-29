import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import flujoPostgresVideo from "@/assets/Flujo-posgress.mp4";
import flujoPoster from "@/assets/Flujo-posgress-poster.webp";

export function FeaturedProjectHero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const project = t.projects.postgres;

  // Play only while the video is on screen. With autoPlay the browser ignored
  // preload and downloaded the 524 KB MP4 up front, competing with the LCP.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay can be blocked: the native controls stay available
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pb-20 sm:pb-28" aria-labelledby="featured-title">
      <div className="shell">
        <div className="grid overflow-hidden rounded-[2.75rem] bg-plum text-cream lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative aspect-video bg-plum lg:aspect-auto lg:min-h-[28rem]">
            <video
              ref={videoRef}
              src={flujoPostgresVideo}
              poster={flujoPoster}
              muted
              loop
              playsInline
              controls
              preload="none"
              className="size-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-5 p-8 sm:p-10">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-lavender">
              <span aria-hidden="true" className="size-2 rounded-full bg-terracotta" />
              {t.projects.featuredLabel}
            </p>
            <h2 id="featured-title" className="text-3xl font-medium leading-tight text-cream sm:text-4xl">
              {project.title}
            </h2>
            <p className="font-semibold text-lavender">{project.subtitle}</p>
            <p className="text-cream/85">{project.description}</p>

            <div>
              <p className="text-sm font-semibold text-cream">{t.projects.resultsLabel}</p>
              <ul className="mt-2 space-y-1.5">
                {project.results.map((result) => (
                  <li key={result} className="flex gap-3 text-cream/85">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-terracotta" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="flex flex-wrap gap-2" aria-label={t.projects.toolsLabel}>
              {project.tools.map((tool) => (
                <li key={tool} className="rounded-full border border-cream/25 px-3 py-1 text-sm">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
