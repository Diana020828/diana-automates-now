import { useState } from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// category usa una clave estable en inglés; la etiqueta visible se traduce
type ToolCategory = "Automation" | "Development" | "Integration" | "Productivity";

const tools: {
  name: string;
  category: ToolCategory;
  description: string;
  logo: string;
  color: string;
}[] = [
  {
    name: "n8n",
    category: "Automation",
    description: "Self-hosted and extensible workflow automation platform for connecting complex systems.",
    logo: "https://docs.n8n.io/favicon.ico",
    color: "from-red-500 to-pink-600"
  },
  {
    name: "Zapier",
    category: "Automation",
    description: "Connects thousands of applications to automate workflows without programming.",
    logo: "https://zapier.com/favicon.ico",
    color: "from-orange-500 to-yellow-500"
  },
  {
    name: "GoHighLevel",
    category: "Automation",
    description: "All-in-one CRM and marketing platform for pipelines, follow-ups and automated touchpoints.",
    logo: "https://www.google.com/s2/favicons?domain=gohighlevel.com&sz=64",
    color: "from-blue-600 to-indigo-700"
  },
  {
    name: "HubSpot",
    category: "Automation",
    description: "CRM and marketing automation for nurturing workflows, email campaigns and behavior-based sequences.",
    logo: "https://www.hubspot.com/favicon.ico",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Webflow",
    category: "Development",
    description: "Visual platform to build and ship marketing pages and funnels with forms and tracking.",
    logo: "https://webflow.com/favicon.ico",
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "React",
    category: "Development",
    description: "Library for building fast, component-based web interfaces and internal apps.",
    logo: "https://react.dev/favicon.ico",
    color: "from-cyan-400 to-blue-500"
  },
  {
    name: "Astro",
    category: "Development",
    description: "Web framework for content-driven sites with excellent performance out of the box.",
    logo: "https://astro.build/favicon.svg",
    color: "from-orange-500 to-purple-600"
  },
  {
    name: "Python",
    category: "Development",
    description: "Language for data analysis and automation, used with Pandas for large datasets.",
    logo: "https://www.python.org/static/favicon.ico",
    color: "from-yellow-400 to-blue-600"
  },
  {
    name: "Power BI",
    category: "Development",
    description: "Business intelligence tool for dashboards and data visualization with SQL.",
    logo: "https://powerbi.microsoft.com/favicon.ico",
    color: "from-yellow-400 to-orange-500"
  },
  {
    name: "Supabase",
    category: "Integration",
    description: "Backend as a service with database, authentication and real-time APIs.",
    logo: "https://supabase.com/favicon.ico",
    color: "from-green-500 to-teal-600"
  },
  {
    name: "Apollo",
    category: "Integration",
    description: "Sales intelligence and prospecting platform for building qualified lead lists.",
    logo: "https://www.apollo.io/favicon.ico",
    color: "from-purple-500 to-fuchsia-600"
  },
  {
    name: "LinkedIn Sales Navigator",
    category: "Integration",
    description: "Advanced prospecting and lead targeting across LinkedIn for B2B outreach.",
    logo: "https://www.linkedin.com/favicon.ico",
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "ClickUp",
    category: "Productivity",
    description: "Project management and CRM hub to keep operations organized and reproducible.",
    logo: "https://clickup.com/favicon.ico",
    color: "from-pink-500 to-purple-600"
  },
  {
    name: "GitHub",
    category: "Productivity",
    description: "Version control and collaboration platform for shipping and maintaining code.",
    logo: "https://www.google.com/s2/favicons?domain=github.com&sz=64",
    color: "from-gray-600 to-gray-900"
  }
];

// Las categorías se traducen; key se usa para filtrar (null = todas)
const getCategories = (t) => [
  { key: null as ToolCategory | null, name: t.toolsSection.categories.all, count: tools.length },
  { key: "Automation" as const, name: t.toolsSection.categories.automation, count: tools.filter(tl => tl.category === "Automation").length },
  { key: "Development" as const, name: t.toolsSection.categories.development, count: tools.filter(tl => tl.category === "Development").length },
  { key: "Integration" as const, name: t.toolsSection.categories.integration, count: tools.filter(tl => tl.category === "Integration").length },
  { key: "Productivity" as const, name: t.toolsSection.categories.productivity, count: tools.filter(tl => tl.category === "Productivity").length }
];

export function ToolsSection() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const categories = getCategories(t);
  const [activeCategory, setActiveCategory] = useState<ToolCategory | null>(null);
  const visibleTools = activeCategory ? tools.filter(tl => tl.category === activeCategory) : tools;

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
            {t.toolsSection.badge}
          </motion.span>
          
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="block">{t.toolsSection.title}</span>
            <span className="block text-gradient">{t.toolsSection.titleGradient}</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.toolsSection.description}
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
          {categories.map((category) => {
            const isActive = activeCategory === category.key;
            return (
              <motion.button
                key={category.name}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                aria-pressed={isActive}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`glass-effect px-6 py-3 rounded-full border transition-colors group ${
                  isActive ? "border-primary bg-primary/10" : "border-card-border hover:border-primary/50"
                }`}
              >
                <span className={`font-medium ${isActive ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                  {category.name}
                </span>
                <span className="ml-2 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Tools Grid */}
        <TooltipProvider>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
            {visibleTools.map((tool, index) => (
              <Tooltip key={tool.name}>
                <TooltipTrigger asChild>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3) }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group"
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
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {t.toolsSection.stats.map((stat, index) => (
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
            {t.toolsSection.cta.text}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-8 py-4 text-lg sm:text-xl font-semibold tracking-tight"
            onClick={() => navigate("/contact")}
          >
            {t.toolsSection.cta.button}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}