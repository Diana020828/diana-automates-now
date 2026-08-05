import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Bloque de cofundadora de Vulcano. Además de la señal de marca, refuerza el
// enlace entre entidades (Diana ↔ Vulcano) que consumen buscadores e IA.
export function VulcanoCofounder() {
  const { t } = useLanguage();

  return (
    <section id="vulcano" className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.a
          href="https://vulcanoservices.dev"
          target="_blank"
          rel="noopener me"
          // El enlace envuelve todo el bloque: sin aria-label, un lector de
          // pantalla leería los ~450 caracteres del interior como su nombre.
          aria-label={`${t.vulcano.title} — vulcanoservices.dev`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -2 }}
          className="group flex flex-col sm:flex-row gap-6 sm:gap-8 sm:items-start p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm transition-colors hover:border-primary/50"
        >
          <img
            src="/vulcano-logo.svg"
            alt={t.vulcano.logoAlt}
            width={88}
            height={88}
            loading="lazy"
            className="w-16 h-16 sm:w-[88px] sm:h-[88px] shrink-0 self-center sm:self-start"
          />

          <div className="space-y-3 min-w-0">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/30">
              {t.vulcano.label} Vulcano
            </span>

            <h2 className="text-xl sm:text-2xl font-bold leading-snug">
              {t.vulcano.title}
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t.vulcano.description}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t.vulcano.role}
            </p>

            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              {t.vulcano.cta}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
