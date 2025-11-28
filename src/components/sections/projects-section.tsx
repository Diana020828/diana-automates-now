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

export function ProjectsSection() {
  const { t } = useLanguage();
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
  ];

  // Calcular dimensiones del contenedor - Más largo y rectangular
  const [containerWidth, setContainerWidth] = useState(0);
  const cardWidth = containerWidth > 0 ? Math.min(containerWidth - 16, 2400) : 2400;
  const cardGap = 100;

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

  // Animar cuando cambia el índice (solo si no está arrastrando)
  useEffect(() => {
    if (containerWidth > 0 && !isDragging) {
      const target = getTargetX(currentIndex);
      animate(x, target, {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
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
      // Volver a la posición actual si no se supera el threshold
      const target = getTargetX(currentIndex);
      animate(x, target, {
        type: "spring",
        stiffness: 400,
        damping: 35,
      });
    }
  };

  // Crear transformaciones para cada tarjeta
  // Calculamos cardCenterX dinámicamente dentro de useTransform para que sea reactivo
  const cardTransforms = projects.map((_, index) => {
    const scale = useTransform(x, (value) => {
      if (containerWidth === 0) return 1;
      const cardCenterX = index * (cardWidth + cardGap) + cardWidth / 2;
      const cardPosition = cardCenterX + value;
      const containerCenter = containerWidth / 2;
      const distance = Math.abs(cardPosition - containerCenter);
      const maxDistance = cardWidth + cardGap;
      const scaleFactor = Math.max(0.88, 1 - (distance / maxDistance) * 0.12);
      return scaleFactor;
    });
    
    const opacity = useTransform(x, (value) => {
      if (containerWidth === 0) return 1;
      const cardCenterX = index * (cardWidth + cardGap) + cardWidth / 2;
      const cardPosition = cardCenterX + value;
      const containerCenter = containerWidth / 2;
      const distance = Math.abs(cardPosition - containerCenter);
      const maxDistance = cardWidth + cardGap;
      const opacityFactor = Math.max(0.5, 1 - (distance / maxDistance) * 0.5);
      return opacityFactor;
    });

    return { scale, opacity };
  });

  const totalWidth = projects.length * (cardWidth + cardGap) - cardGap;
  const minX = getTargetX(projects.length - 1);
  const maxX = getTargetX(0);

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-[95vw] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block">{t.projects.title}</span>
            <span className="block text-gradient">{t.projects.titleGradient}</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mt-4">
            {t.projects.subtitle}
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
            {projects.map((project, index) => {
              const { scale, opacity } = cardTransforms[index];
              return (
                <motion.div
                  key={project.title}
                  className="flex-shrink-0"
                  style={{
                    width: `${cardWidth}px`,
                    marginRight: index < projects.length - 1 ? `${cardGap}px` : "0",
                    scale,
                    opacity,
                  }}
                >
                  <div className="glass-effect rounded-3xl border border-card-border/80 shadow-large bg-background/90 backdrop-blur-xl overflow-hidden" style={{ height: '580px', padding: '20px' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] gap-5 h-full" style={{ height: '100%' }}>
                      {/* Image side - Altura reducida con espacio en bordes */}
                      <motion.div
                        className="relative flex overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.4 }}
                        style={{ height: '100%', maxHeight: '100%', paddingTop: '16px', paddingBottom: '16px' }}
                      >
                        <div className="absolute -inset-3 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
                        <div className={`relative w-full rounded-xl sm:rounded-2xl border border-border/60 shadow-soft flex items-center justify-center overflow-hidden ${
                          index === 2 || index === 3
                            ? "bg-black"
                            : "bg-card"
                        }`} style={{ padding: '10px', height: 'calc(100% - 32px)', maxHeight: 'calc(100% - 32px)' }}>
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="select-none pointer-events-none"
                            draggable={false}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            style={{ 
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              objectPosition: 'center',
                              display: 'block',
                              maxWidth: '100%',
                              maxHeight: '100%'
                            }}
                          />
                          {project.link && (
                            <motion.button
                              type="button"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-background/95 px-3 py-1.5 text-xs font-medium border border-border/80 shadow-lg z-10 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.link, "_blank");
                              }}
                            >
                              <span>{index === 1 ? t.projects.viewWebsite : t.projects.viewCode}</span>
                              <ExternalLink className="w-3 h-3" />
                            </motion.button>
                          )}
                        </div>
                      </motion.div>

                      {/* Content side - Mejor distribución y organización */}
                      <div className="flex flex-col h-full overflow-hidden justify-between" style={{ height: '100%', maxHeight: '100%' }}>
                        {/* Header - Más grande y compacto */}
                        <div className="flex-shrink-0 overflow-hidden" style={{ marginBottom: '16px' }}>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-2" style={{ 
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>
                            {project.title}
                          </h3>
                          <p className="text-sm sm:text-base font-semibold text-primary" style={{ 
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}>
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Description - Más espacio y tamaño aumentado */}
                        <div className="flex-1 overflow-hidden" style={{ marginBottom: '16px', minHeight: '0' }}>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" style={{ 
                            display: '-webkit-box',
                            WebkitLineClamp: 7,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}>
                            {project.description}
                          </p>
                        </div>

                        {/* Tools - Mejor organizado */}
                        <div className="flex-shrink-0 overflow-hidden" style={{ marginBottom: '16px' }}>
                          <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wide mb-2">{t.projects.toolsLabel}</p>
                          <div className="flex flex-wrap gap-2 overflow-hidden">
                            {project.tools.slice(0, 6).map((tool) => (
                              <Badge
                                key={tool}
                                variant="secondary"
                                className="px-3 py-1 text-xs rounded-full font-medium"
                              >
                                {tool}
                              </Badge>
                            ))}
                            {project.tools.length > 6 && (
                              <Badge variant="secondary" className="px-3 py-1 text-xs rounded-full font-medium">
                                +{project.tools.length - 6}
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Results - Mejor organizado */}
                        <div className="flex-shrink-0 overflow-hidden">
                          <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wide mb-2">{t.projects.resultsLabel}</p>
                          <div className="space-y-1.5 overflow-hidden">
                            {project.results.slice(0, 4).map((result) => (
                              <div key={result} className="flex items-start gap-2">
                                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-muted-foreground leading-snug" style={{ 
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden'
                                }}>{result}</span>
                              </div>
                            ))}
                            {project.results.length > 4 && (
                              <div className="text-xs text-muted-foreground/70 italic pl-3.5">
                                +{project.results.length - 4} más
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
