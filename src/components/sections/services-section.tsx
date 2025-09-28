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
    title: "Process Automation",
    description: "I eliminate repetitive tasks and optimize workflows to increase the operational efficiency of your business.",
    features: ["Automated workflows", "Error reduction", "Time savings"]
  },
  {
    icon: Shuffle,
    title: "Application Integrations",
    description: "I connect your tools and systems so they work together smoothly and synchronized.",
    features: ["Custom APIs", "Data synchronization", "Continuous flow"]
  },
  {
    icon: Code2,
    title: "Low-code/No-code Development",
    description: "I create powerful solutions without complex code, using the best platforms in the market.",
    features: ["Rapid development", "Easy maintenance", "Scalable"]
  },
  {
    icon: TrendingUp,
    title: "Workflow Optimization",
    description: "I analyze and improve your existing processes to maximize productivity and reduce costs.",
    features: ["Detailed analysis", "Continuous improvements", "Measurable ROI"]
  },
  {
    icon: MessageSquare,
    title: "Automation Consulting",
    description: "I advise you on the best automation strategy for your company and specific objectives.",
    features: ["Custom strategy", "Detailed roadmap", "Continuous support"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
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
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/15 text-accent rounded-full text-xs sm:text-sm font-medium border border-accent/30 shadow-soft"
          >
            🚀 Specialized Services
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="block">Transform your business with</span>
            <span className="block text-gradient">intelligent automation</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From process automation to complex integrations, 
            I offer complete solutions that revolutionize your way of working.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full card-hover border border-card-border shadow-soft hover:shadow-medium">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 text-primary shadow-soft hover:shadow-glow transition-all duration-300"
                >
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-card-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto text-primary hover:text-primary-glow font-medium text-sm sm:text-base"
                  >
                    Learn more
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
            Need a custom solution?
          </p>
          <Button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto">
            Let's talk about your project
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}