import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import contentLinkedin from "@/assets/Content-linkedin-I.png";
import websiteProject from "@/assets/Web-site.png";
import workflowN8n from "@/assets/workflow-n8n.jpeg";
import cvWithIA from "@/assets/cv-wit-ia.jpeg";

const projects = [
  {
    title: "LinkedIn Content Creation",
    subtitle: "AI-powered content strategy",
    description: "Professional content development for LinkedIn using AI and Canva to create attractive visual pieces that increase engagement and professional visibility.",
    image: contentLinkedin,
    tools: ["OpenAI API", "Canva", "LinkedIn", "Content Strategy"],
    results: [
      "Content optimized for engagement",
      "Professional visual pieces",
      "Automated content strategy",
      "Consistent personal branding"
    ]
  },
  {
    title: "Portfolio Website",
    subtitle: "Modern web development",
    description: "Development of a modern and responsive portfolio website using Tailwind CSS, Vite and React, deployed for free on GitHub Pages with SEO optimization.",
    image: websiteProject,
    tools: ["React", "Tailwind CSS", "Vite", "GitHub Pages"],
    results: [
      "Responsive and modern design",
      "Complete SEO optimization",
      "Automated deployment",
      "Optimized performance"
    ]
  },
  {
    title: "WhatsApp Customer Service Bot",
    subtitle: "Intelligent automation",
    description: "Automated chat system for WhatsApp using EvolutionAPI, self-hosted N8N with Docker, Redis for conversation management and OpenAI for message processing and audio transcription.",
    image: workflowN8n,
    tools: ["N8N", "Docker", "Redis", "EvolutionAPI", "OpenAI API"],
    results: [
      "24/7 automated customer service",
      "Voice note transcription",
      "Intelligent AI responses",
      "No WhatsApp Business costs"
    ]
  },
  {
    title: "CV Builder with AI",
    subtitle: "ATS-optimized resumes",
    description: "Software that collects user information, generates CVs in ATS-compatible format and automatically improves texts using AI to maximize chances of passing recruitment filters.",
    image: cvWithIA,
    tools: ["OpenAI API", "React", "PDF Generation", "ATS Optimization"],
    results: [
      "ATS-compatible format",
      "Automatic copy improvement",
      "Professional PDF generation",
      "Keyword optimization"
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

                {(project.title === "Portfolio Website" || project.title === "CV Builder with AI") && (
                  <Button 
                    onClick={() => {
                      if (project.title === "Portfolio Website") {
                        window.open("https://cfopro.github.io/portfoliocfopro/", "_blank");
                      } else if (project.title === "CV Builder with AI") {
                        window.open("https://github.com/Diana020828/word-craft-pro", "_blank");
                      }
                    }}
                    className="btn-primary group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 h-auto"
                  >
                    {project.title === "Portfolio Website" ? "View Website" : "View Code"}
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}