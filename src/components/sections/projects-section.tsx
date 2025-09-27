import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projectCrm from "@/assets/project-crm.jpg";
import projectPipeline from "@/assets/project-pipeline.jpg";
import projectInventory from "@/assets/project-inventory.jpg";

const projects = [
  {
    title: "Automatización CRM",
    subtitle: "Aumento 40% productividad",
    description: "Sistema completo de automatización de CRM que redujo tareas manuales en un 80% y aumentó la productividad del equipo de ventas.",
    image: projectCrm,
    tools: ["n8n", "Airtable", "Zapier", "Google Sheets"],
    metrics: [
      { label: "Productividad", value: "+40%", icon: TrendingUp },
      { label: "Tiempo ahorrado", value: "25h/sem", icon: BarChart3 }
    ],
    results: [
      "Automatización completa del pipeline de ventas",
      "Seguimiento automático de leads",
      "Reportes en tiempo real",
      "Integración con múltiples canales"
    ]
  },
  {
    title: "Pipeline de leads automatizado",
    subtitle: "Conversión optimizada",
    description: "Implementación de un sistema automatizado de captura, calificación y seguimiento de leads que triplicó la tasa de conversión.",
    image: projectPipeline,
    tools: ["Make", "Bubble", "Notion", "Calendly"],
    metrics: [
      { label: "Conversión", value: "+200%", icon: TrendingUp },
      { label: "Leads procesados", value: "500+/día", icon: Users }
    ],
    results: [
      "Calificación automática de leads",
      "Distribución inteligente al equipo",
      "Seguimiento personalizado",
      "Dashboard de métricas en vivo"
    ]
  },
  {
    title: "Integración sistemas de inventario",
    subtitle: "Gestión centralizada",
    description: "Conecté múltiples sistemas de inventario para crear una vista unificada y automatizar la gestión de stock en tiempo real.",
    image: projectInventory,
    tools: ["Creatio", "Supabase", "Google Apps Script", "n8n"],
    metrics: [
      { label: "Eficiencia", value: "+60%", icon: BarChart3 },
      { label: "Errores", value: "-90%", icon: TrendingUp }
    ],
    results: [
      "Sincronización automática de inventario",
      "Alertas de stock bajo",
      "Reportes de movimientos",
      "Predicción de demanda"
    ]
  }
];

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24">
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
            📈 Casos de Éxito
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="block">Proyectos que</span>
            <span className="block text-gradient">transforman negocios</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo he ayudado a empresas a optimizar sus procesos y 
            lograr resultados extraordinarios mediante automatización inteligente.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative glass-effect rounded-2xl p-2 border border-card-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-xl object-cover h-80 lg:h-96"
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm p-2 rounded-lg border border-border"
                  >
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl lg:text-4xl font-bold">
                      {project.title}
                    </h3>
                    <p className="text-xl text-primary font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((metric) => (
                    <motion.div
                      key={metric.label}
                      whileHover={{ scale: 1.05 }}
                      className="glass-effect rounded-xl p-4 border border-card-border text-center"
                    >
                      <div className="flex items-center justify-center mb-2">
                        <metric.icon className="w-5 h-5 text-primary mr-2" />
                        <span className="text-2xl font-bold text-primary">
                          {metric.value}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Tools */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">Herramientas utilizadas:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="px-3 py-1">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">Resultados obtenidos:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.results.map((result) => (
                      <div key={result} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  className="btn-primary group"
                  size="lg"
                >
                  Ver detalles completos
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20 glass-effect rounded-2xl p-12 border border-card-border"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para el siguiente proyecto de éxito?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cada proyecto es único. Trabajemos juntos para crear una solución 
            perfecta para tus necesidades específicas.
          </p>
          <Button className="btn-primary text-lg px-8 py-4 h-auto">
            Empecemos tu proyecto
          </Button>
        </motion.div>
      </div>
    </section>
  );
}