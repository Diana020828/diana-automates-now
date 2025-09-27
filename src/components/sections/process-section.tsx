import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Search, 
  Lightbulb, 
  Settings, 
  TestTube, 
  Rocket, 
  HeadphonesIcon,
  CheckCircle
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulta inicial y análisis de necesidades",
    description: "Realizamos una reunión detallada para entender tus objetivos, desafíos actuales y expectativas del proyecto.",
    details: [
      "Análisis de requerimientos específicos",
      "Definición de objetivos y KPIs",
      "Evaluación de recursos disponibles",
      "Estimación de tiempos y costos"
    ],
    duration: "1-2 días"
  },
  {
    number: "02",
    icon: Search,
    title: "Auditoría de procesos actuales",
    description: "Mapeo completo de tus flujos de trabajo existentes para identificar oportunidades de mejora y automatización.",
    details: [
      "Mapeo de procesos actuales",
      "Identificación de cuellos de botella",
      "Análisis de herramientas existentes",
      "Documentación de flujos de trabajo"
    ],
    duration: "3-5 días"
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Diseño de la solución de automatización",
    description: "Creación de la arquitectura y diseño de los flujos automatizados adaptados a tus necesidades específicas.",
    details: [
      "Arquitectura de la solución",
      "Selección de herramientas óptimas",
      "Diseño de flujos de trabajo",
      "Plan de implementación detallado"
    ],
    duration: "2-3 días"
  },
  {
    number: "04",
    icon: Settings,
    title: "Implementación y configuración",
    description: "Desarrollo y configuración de las automatizaciones usando las mejores herramientas low-code y no-code.",
    details: [
      "Configuración de integraciones",
      "Desarrollo de automatizaciones",
      "Personalización de interfaces",
      "Configuración de notificaciones"
    ],
    duration: "5-10 días"
  },
  {
    number: "05",
    icon: TestTube,
    title: "Pruebas y optimización",
    description: "Testing exhaustivo del sistema para garantizar funcionamiento perfecto antes del lanzamiento oficial.",
    details: [
      "Pruebas de funcionamiento",
      "Optimización de rendimiento",
      "Validación con datos reales",
      "Ajustes y refinamientos"
    ],
    duration: "2-3 días"
  },
  {
    number: "06",
    icon: Rocket,
    title: "Entrega y capacitación",
    description: "Lanzamiento oficial del sistema con capacitación completa para tu equipo y documentación detallada.",
    details: [
      "Lanzamiento del sistema",
      "Capacitación del equipo",
      "Documentación completa",
      "Guías de uso y mantenimiento"
    ],
    duration: "1-2 días"
  },
  {
    number: "07",
    icon: HeadphonesIcon,
    title: "Soporte continuo",
    description: "Acompañamiento post-implementación para resolver dudas, realizar ajustes y garantizar el éxito a largo plazo.",
    details: [
      "Soporte técnico continuo",
      "Monitoreo de rendimiento",
      "Actualizaciones y mejoras",
      "Consultoría estratégica"
    ],
    duration: "Ongoing"
  }
];

export function ProcessSection() {
  return (
    <section id="proceso" className="py-24 bg-muted/30">
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
            className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
          >
            🎯 Mi Metodología
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="block">Un proceso probado para</span>
            <span className="block text-gradient">el éxito garantizado</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sigo una metodología estructurada de 7 pasos que garantiza resultados 
            excepcionales en cada proyecto de automatización.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden lg:block"></div>

          <div className="space-y-8 lg:space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-glow hidden lg:block z-10"
                />

                {/* Step number and icon */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <div className="glass-effect rounded-2xl p-8 border border-card-border text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-6">
                      <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl text-white shadow-glow mr-4">
                        <step.icon className="w-10 h-10" />
                      </div>
                      <div className="text-6xl font-bold text-primary/20">
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">Actividades clave:</p>
                    <div className="grid gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + detailIndex * 0.1 }}
                          className="flex items-center"
                        >
                          <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="glass-effect rounded-2xl p-12 border border-card-border">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para comenzar tu transformación?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Iniciemos con una consulta gratuita para analizar tu situación actual 
              y diseñar la estrategia perfecta de automatización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-4 text-lg rounded-xl"
              >
                Agendar consulta gratuita
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}