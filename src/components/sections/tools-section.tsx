import { motion } from "framer-motion";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const tools = [
  {
    name: "n8n",
    category: "Automatización",
    description: "Plataforma de automatización de workflows autohosteada y extensible para conectar sistemas complejos.",
    logo: "https://docs.n8n.io/favicon.ico",
    color: "from-red-500 to-pink-600"
  },
  {
    name: "Zapier",
    category: "Integración",
    description: "Conecta miles de aplicaciones para automatizar flujos de trabajo sin programación.",
    logo: "https://zapier.com/favicon.ico",
    color: "from-orange-500 to-yellow-500"
  },
  {
    name: "Make",
    category: "Automatización",
    description: "Plataforma visual para crear automatizaciones poderosas con integraciones avanzadas.",
    logo: "https://www.make.com/favicon.ico", 
    color: "from-purple-500 to-blue-600"
  },
  {
    name: "Creatio",
    category: "CRM/BPM",
    description: "Plataforma no-code para CRM, marketing automation y gestión de procesos empresariales.",
    logo: "https://www.creatio.com/favicon.ico",
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "Cursor",
    category: "Desarrollo",
    description: "Editor de código con IA integrada para desarrollo más eficiente y inteligente.",
    logo: "https://cursor.sh/favicon.ico",
    color: "from-gray-600 to-gray-800"
  },
  {
    name: "Lovable",
    category: "Desarrollo",
    description: "Plataforma para crear aplicaciones web modernas de forma rápida y eficiente.",
    logo: "https://lovable.dev/favicon.ico",
    color: "from-pink-500 to-red-500"
  },
  {
    name: "Supabase",
    category: "Backend",
    description: "Backend como servicio con base de datos, autenticación y APIs en tiempo real.",
    logo: "https://supabase.com/favicon.ico",
    color: "from-green-500 to-teal-600"
  },
  {
    name: "Airtable",
    category: "Base de datos",
    description: "Base de datos colaborativa que combina la simplicidad de una hoja de cálculo con la potencia de una database.",
    logo: "https://airtable.com/favicon.ico",
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "Bubble",
    category: "No-code",
    description: "Plataforma no-code para crear aplicaciones web completas sin programación.",
    logo: "https://bubble.io/favicon.ico",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Notion",
    category: "Productividad",
    description: "Workspace todo-en-uno para notas, bases de datos, wikis y gestión de proyectos.",
    logo: "https://notion.so/favicon.ico",
    color: "from-gray-700 to-black"
  },
  {
    name: "Google Apps Script",
    category: "Automatización",
    description: "Plataforma de desarrollo en la nube para automatizar y extender Google Workspace.",
    logo: "https://www.google.com/favicon.ico",
    color: "from-blue-500 to-green-500"
  }
];

const categories = [
  { name: "Todas", count: tools.length },
  { name: "Automatización", count: tools.filter(t => t.category === "Automatización").length },
  { name: "Desarrollo", count: tools.filter(t => t.category === "Desarrollo").length },
  { name: "Integración", count: tools.filter(t => t.category === "Integración").length },
  { name: "No-code", count: tools.filter(t => t.category === "No-code").length }
];

export function ToolsSection() {
  return (
    <section id="herramientas" className="py-24">
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
            🔧 Stack Tecnológico
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="block">Herramientas que</span>
            <span className="block text-gradient">dominó a la perfección</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabajo con las mejores plataformas low-code y no-code del mercado para 
            crear soluciones robustas, escalables y fáciles de mantener.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect px-6 py-3 rounded-full border border-card-border hover:border-primary/50 transition-colors group"
            >
              <span className="text-foreground group-hover:text-primary font-medium">
                {category.name}
              </span>
              <span className="ml-2 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <TooltipProvider>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <Tooltip key={tool.name}>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="glass-effect rounded-2xl p-6 border border-card-border group-hover:border-primary/50 transition-all duration-300 text-center h-full">
                      {/* Logo */}
                      <div className="relative mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                        />
                        <div className="relative w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-medium">
                          <img 
                            src={tool.logo} 
                            alt={`${tool.name} logo`}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement!.innerHTML = `
                                <div class="w-8 h-8 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                  ${tool.name.charAt(0)}
                                </div>
                              `;
                            }}
                          />
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>

                      {/* Category Badge */}
                      <span className="inline-block text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                        {tool.category}
                      </span>

                      {/* Glow effect on hover */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none blur-xl`}
                        whileHover={{ scale: 1.1 }}
                      />
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs">
                  <div className="space-y-2">
                    <p className="font-medium">{tool.name}</p>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: "Herramientas dominadas", value: "11+", desc: "Plataformas especializadas" },
            { label: "Años de experiencia", value: "5+", desc: "En automatización" },
            { label: "Integraciones creadas", value: "200+", desc: "Conexiones exitosas" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="glass-effect rounded-2xl p-8 text-center border border-card-border"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1, type: "spring" }}
                className="text-4xl md:text-5xl font-bold text-gradient mb-2"
              >
                {stat.value}
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            ¿No ves la herramienta que necesitas? No te preocupes, siempre estoy 
            aprendiendo nuevas tecnologías para ofrecer las mejores soluciones.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-8 py-4 text-lg"
          >
            Hablemos de tu stack tecnológico
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}