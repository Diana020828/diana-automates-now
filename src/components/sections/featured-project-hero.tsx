import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import flujoPostgresVideo from "@/assets/Flujo-posgress.mp4";
import flujoPoster from "@/assets/Flujo-posgress-poster.webp";

export function FeaturedProjectHero() {
  const { language, t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  const project = {
    title: language === "es" ? "Automatización de Flujo PostgreSQL" : "PostgreSQL Flow Automation",
    subtitle: language === "es" ? "Integración de base de datos con N8N" : "Database Integration with N8N",
    description:
      language === "es"
        ? "Flujo de automatización que conecta PostgreSQL con diferentes servicios para sincronización de datos en tiempo real. Incluye triggers automáticos, transformación de datos y notificaciones."
        : "Automation workflow connecting PostgreSQL with different services for real-time data synchronization. Includes automatic triggers, data transformation, and notifications.",
    video: flujoPostgresVideo,
    tools: ["N8N", "PostgreSQL", "Docker", "API REST", "Webhooks"],
    results: [
      language === "es"
        ? "Sincronización de datos en tiempo real"
        : "Real-time data synchronization",
      language === "es"
        ? "Automatización de triggers de base de datos"
        : "Database trigger automation",
      language === "es"
        ? "Integración sin código"
        : "No-code integration",
    ],
  };

  // Reproducir solo cuando el vídeo entra en pantalla. Con `autoPlay` el
  // navegador ignoraba `preload` y descargaba los 524 KB del MP4 en la carga
  // inicial, compitiendo por ancho de banda con el LCP de la página.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // El navegador puede bloquear la reproducción automática:
            // los controles nativos siguen disponibles para el usuario.
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
    <section className="relative w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Sin fade en el contenedor: está above-the-fold y retrasaba el LCP */}
        <div className="text-center mb-6 sm:mb-8">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30 mb-4"
          >
            ⭐ {language === "es" ? "Proyecto Destacado" : "Featured Project"}
          </motion.span>
        </div>

        {/* Solo transform, sin opacity: esta tarjeta contiene el h1 de la
            página y animarla desde opacity:0 impedía que contara como LCP. */}
        <motion.div
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-effect rounded-3xl border border-card-border/80 shadow-large bg-background/90 backdrop-blur-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Video Container */}
            <div className="relative w-full aspect-video lg:aspect-auto lg:min-h-[450px] bg-black/5">
              <div className="absolute inset-0 bg-gradient-primary opacity-5 blur-3xl" />
              <video
                ref={videoRef}
                src={project.video}
                poster={flujoPoster}
                muted
                loop
                playsInline
                controls
                preload="none"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient for better text contrast on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:hidden pointer-events-none" />
            </div>

            {/* Content Container */}
            <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                  {project.title}
                </h1>
                <p className="text-lg font-semibold text-primary">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Tools */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                  {t.projects.toolsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="px-4 py-1.5 text-sm rounded-full font-medium"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                  {t.projects.resultsLabel}
                </p>
                <div className="space-y-2">
                  {project.results.map((result) => (
                    <div key={result} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
