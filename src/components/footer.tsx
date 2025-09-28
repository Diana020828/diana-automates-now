import { motion } from "framer-motion";
import { Heart, Code2 } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer inline-block"
            onClick={scrollToTop}
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">Diana Pinzon</h3>
            <p className="text-muted-foreground">
              AI Solutions & Process Automation Specialist
            </p>
          </motion.div>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I implement AI solutions and process automation for companies using N8n and Zapier. 
            I create intelligent workflows that integrate CRM systems, lead generation tools, 
            and administrative platforms to eliminate manual processes and drive operational efficiency.
          </p>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/50 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© 2024 Diana Pinzon. All rights reserved.</span>
            </div>

            {/* Back to top */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="glass-effect px-4 py-2 rounded-lg border border-card-border hover:border-primary/50 transition-colors text-sm text-muted-foreground hover:text-primary group"
            >
              <span className="group-hover:-translate-y-1 transition-transform inline-block">⬆</span>
              <span className="ml-2">Back to top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}