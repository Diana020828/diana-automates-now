import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projectCrm from "@/assets/project-crm.jpg";
import projectPipeline from "@/assets/project-pipeline.jpg";
import projectInventory from "@/assets/project-inventory.jpg";

const projects = [
  {
    title: "CRM Automation",
    subtitle: "40% productivity increase",
    description: "Complete CRM automation system that reduced manual tasks by 80% and increased sales team productivity.",
    image: projectCrm,
    tools: ["n8n", "Zapier", "Google Sheets", "ClickUp"],
    metrics: [
      { label: "Productivity", value: "+40%", icon: TrendingUp },
      { label: "Time saved", value: "25h/week", icon: BarChart3 }
    ],
    results: [
      "Complete sales pipeline automation",
      "Automatic lead tracking",
      "Real-time reports",
      "Multi-channel integration"
    ]
  },
  {
    title: "Automated Lead Pipeline",
    subtitle: "Optimized conversion",
    description: "Implementation of an automated lead capture, qualification and tracking system that tripled conversion rates.",
    image: projectPipeline,
    tools: ["n8n", "Notion", "LinkedIn Sales Navigator", "Apollo"],
    metrics: [
      { label: "Conversion", value: "+200%", icon: TrendingUp },
      { label: "Leads processed", value: "500+/day", icon: Users }
    ],
    results: [
      "Automatic lead qualification",
      "Intelligent team distribution",
      "Personalized follow-up",
      "Live metrics dashboard"
    ]
  },
  {
    title: "Inventory Systems Integration",
    subtitle: "Centralized management",
    description: "Connected multiple inventory systems to create a unified view and automate real-time stock management.",
    image: projectInventory,
    tools: ["Creatio", "Supabase", "Google Apps Script", "n8n"],
    metrics: [
      { label: "Efficiency", value: "+60%", icon: BarChart3 },
      { label: "Errors", value: "-90%", icon: TrendingUp }
    ],
    results: [
      "Automatic inventory synchronization",
      "Low stock alerts",
      "Movement reports",
      "Demand prediction"
    ]
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/15 text-primary rounded-full text-xs sm:text-sm font-medium border border-primary/30 shadow-soft"
          >
            📈 Success Cases
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="block">Projects that</span>
            <span className="block text-gradient">transform businesses</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how I've helped companies optimize their processes and 
            achieve extraordinary results through intelligent automation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="absolute inset-0 bg-gradient-primary rounded-xl sm:rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative glass-effect rounded-xl sm:rounded-2xl p-2 border border-card-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-lg sm:rounded-xl object-cover h-64 sm:h-80 lg:h-96"
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-card/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-md sm:rounded-lg border border-border"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Content */}
              <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                      {project.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-primary font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {project.metrics.map((metric) => (
                    <motion.div
                      key={metric.label}
                      whileHover={{ scale: 1.05 }}
                      className="glass-effect rounded-lg sm:rounded-xl p-3 sm:p-4 border border-card-border text-center"
                    >
                      <div className="flex items-center justify-center mb-1 sm:mb-2">
                        <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-1 sm:mr-2" />
                        <span className="text-lg sm:text-2xl font-bold text-primary">
                          {metric.value}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Tools */}
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm font-medium text-foreground">Tools used:</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm font-medium text-foreground">Results achieved:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                    {project.results.map((result) => (
                      <div key={result} className="flex items-start">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  className="btn-primary group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 h-auto"
                >
                  View complete details
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
          className="text-center mt-16 sm:mt-20 glass-effect rounded-xl sm:rounded-2xl p-8 sm:p-12 border border-card-border"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Ready for your next success project?
          </h3>
          <p className="text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Every project is unique. Let's work together to create a perfect 
            solution for your specific needs.
          </p>
          <Button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto">
            Start your project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}