import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import contentLinkedin from "@/assets/Content-linkedin-I.png";
import websiteProject from "@/assets/Web-site.png";
import workflowN8n from "@/assets/workflow-n8n.jpeg";
import cvWithIA from "@/assets/cv-wit-ia.jpeg";
import adesuProject from "@/assets/adesu-website.png";
import awardsCfoproProject from "@/assets/Awards-CFOPro.png";

export function ProjectsSection() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const projects = [
    {
      title: t.projects.linkedin.title,
      subtitle: t.projects.linkedin.subtitle,
      description: t.projects.linkedin.description,
      image: contentLinkedin,
      tools: t.projects.linkedin.tools,
      results: t.projects.linkedin.results,
    },
    {
      title: t.projects.portfolio.title,
      subtitle: t.projects.portfolio.subtitle,
      description: t.projects.portfolio.description,
      image: websiteProject,
      tools: t.projects.portfolio.tools,
      results: t.projects.portfolio.results,
      link: t.projects.portfolio.link,
    },
    {
      title: t.projects.whatsapp.title,
      subtitle: t.projects.whatsapp.subtitle,
      description: t.projects.whatsapp.description,
      image: workflowN8n,
      tools: t.projects.whatsapp.tools,
      results: t.projects.whatsapp.results,
    },
    {
      title: t.projects.cv.title,
      subtitle: t.projects.cv.subtitle,
      description: t.projects.cv.description,
      image: cvWithIA,
      tools: t.projects.cv.tools,
      results: t.projects.cv.results,
      link: t.projects.cv.link,
    },
    // Proyecto ADESU
    {
      title: language === "es" ? "ADESU: Ventaja Competitiva Contable" : "ADESU: Competitive Accounting Advantage",
      subtitle: language === "es" ? "Desarrollado con Lovable" : "Built with Lovable",
      description:
        language === "es"
          ? "Plataforma web para ADESU que transforma la contabilidad en una ventaja competitiva para empresas colombianas. Base desarrollada con Lovable, diseño moderno y enfoque en conversión."
          : "Web platform for ADESU that transforms accounting into a competitive advantage for Colombian companies. Built on Lovable, modern design and conversion-focused.",
      image: adesuProject,
      tools: [
        "Lovable",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Netlify"
      ],
      results: [
        language === "es"
          ? "+4 años ayudando a empresas a crecer"
          : "4+ years helping companies grow",
        language === "es"
          ? "Diseño enfocado en conversión"
          : "Conversion-focused design",
        language === "es"
          ? "Integración de contacto y servicios"
          : "Contact & services integration"
      ],
      link: "https://adesu.netlify.app/"
    },
    // Proyecto Awards-CFOPro
    {
      title: language === "es" ? "Awards CFOPro: Reconocimiento Empresarial" : "Awards CFOPro: Business Recognition",
      subtitle: language === "es" ? "Premios empresariales Central Florida" : "Central Florida Business Awards",
      description:
        language === "es"
          ? "Landing page para el programa de premios empresariales de Central Florida. Facilita la aplicación, networking y posicionamiento digital para empresas innovadoras."
          : "Landing page for Central Florida's business awards program. Enables application, networking, and digital positioning for innovative companies.",
      image: awardsCfoproProject,
      tools: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Netlify"
      ],
      results: [
        language === "es"
          ? "Aplicación gratuita y digital"
          : "Free digital application",
        language === "es"
          ? "Comunidad de networking"
          : "Networking community",
        language === "es"
          ? "Reconocimiento y posicionamiento local"
          : "Local recognition & positioning"
      ],
      link: "https://centralflorida.netlify.app/"
    }
  ];

  // Calcular dimensiones del contenedor - Más amplio y tarjetas más grandes
  const [containerWidth, setContainerWidth] = useState(0);
  // Caja principal más grande y tarjetas internas más amplias
  const cardWidth = containerWidth > 0 ? Math.min(containerWidth - 64, 1200) : 1200;
  const cardGap = 80;

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Calcular posición objetivo para centrar el proyecto activo
  const getTargetX = (index: number) => {
    if (containerWidth === 0) return 0;
    const centerOffset = (containerWidth - cardWidth) / 2;
    return -(index * (cardWidth + cardGap)) + centerOffset;
  };

  // Inicializar posición
  useEffect(() => {
    if (containerWidth > 0) {
      const target = getTargetX(currentIndex);
      x.set(target);
    }
  }, [containerWidth]);

  // Animar cuando cambia el índice (solo si no está arrastrando) - Animación más refinada
  useEffect(() => {
    if (containerWidth > 0 && !isDragging) {
      const target = getTargetX(currentIndex);
      animate(x, target, {
        type: "spring",
        stiffness: 280,
        damping: 35,
        mass: 0.9,
      });
    }
  }, [currentIndex, containerWidth, isDragging, x]);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Manejar inicio del drag
  const handleDragStart = () => {
    setIsDragging(true);
  };

  // Manejar fin del drag
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);

    const threshold = 100; // Píxeles mínimos para cambiar de slide
    const velocity = info.velocity.x;

    // Determinar si debe cambiar de slide basado en offset o velocidad
    if (Math.abs(info.offset.x) > threshold || Math.abs(velocity) > 500) {
      if (info.offset.x > 0 || velocity > 0) {
        // Arrastrar hacia la derecha = ir al anterior
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
      } else {
        // Arrastrar hacia la izquierda = ir al siguiente
        setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
      }
    } else {
      // Volver a la posición actual si no se supera el threshold - Animación más refinada
      const target = getTargetX(currentIndex);
      animate(x, target, {
        type: "spring",
        stiffness: 350,
        damping: 38,
        mass: 0.9,
      });
    }
  };

  // Hooks deben ser llamados siempre en el mismo orden y cantidad
  // Usamos un número máximo fijo de proyectos (por ejemplo, 10)
  const MAX_PROJECTS = 10;
  const cardScales: any[] = [];
  const cardOpacities: any[] = [];
  for (let index = 0; index < MAX_PROJECTS; index++) {
    cardScales[index] = useTransform(x, (value) => {
      if (containerWidth === 0) return 1;
      const cardCenterX = index * (cardWidth + cardGap) + cardWidth / 2;
      const cardPosition = cardCenterX + value;
      const containerCenter = containerWidth / 2;
      const distance = Math.abs(cardPosition - containerCenter);
      const maxDistance = cardWidth + cardGap;
      const scaleFactor = Math.max(0.92, 1 - (distance / maxDistance) * 0.08);
      return scaleFactor;
    });
    cardOpacities[index] = useTransform(x, (value) => {
      if (containerWidth === 0) return 1;
      const cardCenterX = index * (cardWidth + cardGap) + cardWidth / 2;
      const cardPosition = cardCenterX + value;
      const containerCenter = containerWidth / 2;
      const distance = Math.abs(cardPosition - containerCenter);
      const maxDistance = cardWidth + cardGap;
      const opacityFactor = Math.max(0.7, 1 - (distance / maxDistance) * 0.3);
      return opacityFactor;
    });
  }

  const totalWidth = projects.length * (cardWidth + cardGap) - cardGap;
  const minX = getTargetX(projects.length - 1);
  const maxX = getTargetX(0);

  return (
    <section
      id="projects"
      className="py-16 sm:py-28 lg:py-36 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-[1700px] mx-auto px-2 sm:px-16 lg:px-32 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="block">{t.projects.title}</span>
            <span className="block text-gradient">{t.projects.titleGradient}</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.projects.description
              ? t.projects.description
              : language === "es"
                ? "Explora algunos de mis proyectos destacados, donde combino creatividad, tecnología y resultados reales para resolver problemas y aportar valor."
                : "Explore some of my featured projects, where I combine creativity, technology, and real results to solve problems and deliver value."}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden"
        >
          <motion.div
            className="flex items-center cursor-grab active:cursor-grabbing"
            style={{
              x,
              width: `${totalWidth}px`,
            }}
            drag="x"
            dragConstraints={{
              left: minX,
              right: maxX,
            }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: "grabbing" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="flex-shrink-0"
                style={{
                  width: `${cardWidth}px`,
                  marginRight: index < projects.length - 1 ? `${cardGap}px` : "0",
                  scale: cardScales[index],
                  opacity: cardOpacities[index],
                }}
              >
                <div className="glass-effect rounded-2xl border border-card-border/80 shadow-large bg-background/90 backdrop-blur-xl overflow-hidden p-6 lg:p-8 h-full flex flex-col justify-center">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full items-center">
                    {/* Image Container - Ajustado */}
                    <motion.div
                      className="relative flex items-center justify-center overflow-hidden rounded-xl border border-border/60 shadow-soft bg-card min-h-[260px] lg:min-h-[320px] aspect-[16/10]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                    >
                      <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-xl" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain object-center select-none pointer-events-none"
                        draggable={false}
                      />
                      {project.link && (
                        <button
                          type="button"
                          className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-background/95 backdrop-blur-sm px-3 py-1.5 text-xs font-medium border border-border/80 shadow-lg z-10 hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.link, "_blank");
                          }}
                        >
                          <span>{
                            // Si es ADESU o Awards CFOPro, mostrar 'View website'/'Ver sitio web'
                            (project.title.includes('ADESU') || project.title.includes('Awards CFOPro'))
                              ? t.projects.viewWebsite
                              : (index === 1 ? t.projects.viewWebsite : t.projects.viewCode)
                          }</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )}
                    </motion.div>

                    {/* Content Container - Ajustado */}
                    <div className="flex flex-col justify-between gap-5 h-full overflow-hidden">
                      {/* Header Section */}
                      <div className="space-y-2">
                        <h3 className="text-2xl sm:text-3xl font-bold leading-snug tracking-normal line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-base font-semibold text-primary truncate">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description Section */}
                      <div className="flex-1 min-h-0 overflow-auto">
                        <p className="text-base text-muted-foreground leading-normal line-clamp-5">
                          {project.description}
                        </p>
                      </div>

                      {/* Tools Section */}
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                          {t.projects.toolsLabel}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.slice(0, 5).map((tool) => (
                            <Badge
                              key={tool}
                              variant="secondary"
                              className="px-3 py-1 text-xs rounded-full font-medium"
                            >
                              {tool}
                            </Badge>
                          ))}
                          {project.tools.length > 5 && (
                            <Badge variant="secondary" className="px-3 py-1 text-xs rounded-full font-medium">
                              +{project.tools.length - 5}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Results Section */}
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                          {t.projects.resultsLabel}
                        </p>
                        <div className="space-y-1.5">
                          {project.results.slice(0, 3).map((result) => (
                            <div key={result} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span className="text-xs text-muted-foreground leading-normal line-clamp-2">
                                {result}
                              </span>
                            </div>
                          ))}
                          {project.results.length > 3 && (
                            <p className="text-xs text-muted-foreground/70 italic pl-3">
                              +{project.results.length - 3} {t.projects.more}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
