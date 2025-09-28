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
    category: "Automation",
    description: "Self-hosted and extensible workflow automation platform for connecting complex systems.",
    logo: "https://docs.n8n.io/favicon.ico",
    color: "from-red-500 to-pink-600"
  },
  {
    name: "Zapier",
    category: "Integration",
    description: "Connects thousands of applications to automate workflows without programming.",
    logo: "https://zapier.com/favicon.ico",
    color: "from-orange-500 to-yellow-500"
  },
  {
    name: "Creatio",
    category: "CRM/BPM",
    description: "No-code platform for CRM, marketing automation and enterprise process management.",
    logo: "https://www.creatio.com/favicon.ico",
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "Cursor",
    category: "Development",
    description: "Code editor with integrated AI for more efficient and intelligent development.",
    logo: "https://cursor.sh/favicon.ico",
    color: "from-gray-600 to-gray-800"
  },
  {
    name: "Supabase",
    category: "Backend",
    description: "Backend as a service with database, authentication and real-time APIs.",
    logo: "https://supabase.com/favicon.ico",
    color: "from-green-500 to-teal-600"
  },
  {
    name: "Notion",
    category: "Productivity",
    description: "All-in-one workspace for notes, databases, wikis and project management.",
    logo: "https://notion.so/favicon.ico",
    color: "from-gray-700 to-black"
  },
  {
    name: "Google Apps Script",
    category: "Automation",
    description: "Cloud development platform for automating and extending Google Workspace.",
    logo: "https://www.google.com/favicon.ico",
    color: "from-blue-500 to-green-500"
  }
];

const categories = [
  { name: "All", count: tools.length },
  { name: "Automation", count: tools.filter(t => t.category === "Automation").length },
  { name: "Development", count: tools.filter(t => t.category === "Development").length },
  { name: "Integration", count: tools.filter(t => t.category === "Integration").length },
  { name: "Productivity", count: tools.filter(t => t.category === "Productivity").length }
];

export function ToolsSection() {
  return (
    <section id="tools" className="py-24">
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
            className="inline-block px-4 py-2 bg-accent/15 text-accent rounded-full text-sm font-medium border border-accent/30 shadow-soft"
          >
            🔧 Tech Stack
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="block">Tools I</span>
            <span className="block text-gradient">Master Perfectly</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I work with the best low-code and no-code platforms in the market to 
            create robust, scalable and easy-to-maintain solutions.
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
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
                    <div className="glass-effect rounded-2xl p-6 border border-card-border group-hover:border-primary/50 transition-all duration-300 text-center h-full shadow-soft hover:shadow-medium">
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
            { label: "Tools Mastered", value: "7+", desc: "Specialized platforms" },
            { label: "Years Experience", value: "2+", desc: "In automation" },
            { label: "Integrations Created", value: "50+", desc: "Successful connections" }
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
            Don't see the tool you need? Don't worry, I'm always 
            learning new technologies to offer the best solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-8 py-4 text-lg"
          >
            Let's talk about your tech stack
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}