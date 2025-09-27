import { motion } from "framer-motion";
import { 
  Zap, 
  Shuffle, 
  Code2, 
  TrendingUp, 
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Automatización de procesos",
    description: "Elimino tareas repetitivas y optimizo flujos de trabajo para aumentar la eficiencia operacional de tu negocio.",
    features: ["Workflows automatizados", "Reducción de errores", "Ahorro de tiempo"]
  },
  {
    icon: Shuffle,
    title: "Integraciones entre aplicaciones",
    description: "Conecto tus herramientas y sistemas para que trabajen juntos de forma fluida y sincronizada.",
    features: ["APIs personalizadas", "Sincronización de datos", "Flujo continuo"]
  },
  {
    icon: Code2,
    title: "Desarrollo low-code/no-code",
    description: "Creo soluciones potentes sin código complejo, usando las mejores plataformas del mercado.",
    features: ["Desarrollo rápido", "Fácil mantenimiento", "Escalable"]
  },
  {
    icon: TrendingUp,
    title: "Optimización de workflows",
    description: "Analizo y mejoro tus procesos existentes para maximizar la productividad y reducir costos.",
    features: ["Análisis detallado", "Mejoras continuas", "ROI medible"]
  },
  {
    icon: MessageSquare,
    title: "Consultorías en automatización",
    description: "Te asesoro en la mejor estrategia de automatización para tu empresa y objetivos específicos.",
    features: ["Estrategia personalizada", "Roadmap detallado", "Soporte continuo"]
  }
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
          >
            🚀 Servicios Especializados
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="block">Transformo tu negocio con</span>
            <span className="block text-gradient">automatización inteligente</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde automatización de procesos hasta integraciones complejas, 
            ofrezco soluciones completas que revolucionan tu forma de trabajar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-effect rounded-2xl p-8 h-full card-hover border border-card-border">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 text-white shadow-glow"
                >
                  <service.icon className="w-8 h-8" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto text-primary hover:text-primary-glow font-medium"
                  >
                    Saber más
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            ¿Necesitas una solución personalizada?
          </p>
          <Button className="btn-primary text-lg px-8 py-4 h-auto">
            Hablemos de tu proyecto
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}