import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* First Row: Name and Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-border/50"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer text-center sm:text-left"
            onClick={scrollToTop}
          >
            <h3 className="text-xl font-bold text-gradient mb-1">{t.footer.title}</h3>
            <p className="text-sm text-muted-foreground">
              {t.footer.subtitle}
            </p>
          </motion.div>

          <p className="text-sm text-muted-foreground text-center sm:text-right max-w-md">
            {t.footer.description}
          </p>
        </motion.div>

        {/* Second Row: Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
        >
          <div className="flex items-center gap-6">
            {/* Email */}
            <motion.a
              href="mailto:dianapinzon577@gmail.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>dianapinzon577@gmail.com</span>
            </motion.a>

            {/* Teléfono eliminado por privacidad */}
          </div>

          <div className="text-sm text-muted-foreground">
            <span>{t.footer.copyright}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
