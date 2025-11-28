import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Brain, Link2, Gauge, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function ServicesPage() {
  const { t } = useLanguage();

  useEffect(() => {
    // Cargar CSS de Calendly
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Cargar script de Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // Ocultar/eliminar cualquier badge de Calendly que aparezca
    const hideCalendlyBadge = () => {
      const badge = document.querySelector('.calendly-badge-widget, [data-calendly-badge]');
      if (badge) {
        (badge as HTMLElement).style.display = 'none';
      }
      
      const calendlyElements = document.querySelectorAll('[class*="calendly"], [id*="calendly"]');
      calendlyElements.forEach((el) => {
        const element = el as HTMLElement;
        if (element.textContent?.includes('Book a free consultation') || 
            element.textContent?.includes('powered by Calendly')) {
          element.style.display = 'none';
        }
      });
    };

    hideCalendlyBadge();
    const interval = setInterval(hideCalendlyBadge, 500);

    const observer = new MutationObserver(hideCalendlyBadge);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearInterval(interval);
      observer.disconnect();
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleBookConsultation = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/dianapinzon/30min",
      });
    }
  };

  const services = [
    {
      key: 'automation' as const,
      icon: Workflow,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      key: 'ai' as const,
      icon: Brain,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      key: 'integration' as const,
      icon: Link2,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      key: 'strategy' as const,
      icon: Gauge,
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Navbar />

      <main className="pt-20 pb-16">
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6 mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30">
                  <Sparkles className="w-4 h-4" />
                  {t.services.badge}
                </span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                {t.services.title}
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t.services.subtitle}
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {services.map((service, index) => {
                const serviceData = t.services[service.key];
                const Icon = service.icon;
                
                return (
                  <motion.div
                    key={service.key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group relative"
                  >
                    <div className={`relative h-full glass-effect rounded-3xl p-8 border border-card-border/80 hover:border-primary/50 transition-all duration-300 overflow-hidden ${service.gradient}`}>
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      {/* Content */}
                      <div className="relative z-10 space-y-4">
                        {/* Icon and Title */}
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {serviceData.title}
                            </h2>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {serviceData.description}
                        </p>

                        {/* Items */}
                        <div className="space-y-2.5 pt-2">
                          {serviceData.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-16 pt-12 border-t border-border/50"
            >
              <div className="max-w-2xl mx-auto space-y-6">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t.services.cta.text}
                </p>
                <Button
                  onClick={handleBookConsultation}
                  className="btn-primary px-10 py-6 text-lg sm:text-xl font-semibold group"
                  size="lg"
                >
                  {t.services.cta.button}
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}
