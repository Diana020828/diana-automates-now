import { motion } from "framer-motion";
import { ArrowRight, Download, Eye, Code, Zap, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import dianaProfile from "@/assets/diana-profile.jpg";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const downloadCV = () => {
    const link = document.createElement('a');
    if (language === 'es') {
      link.href = '/cv-update-esp.pdf';
      link.download = 'hoja de vida Diana Pinzon.pdf';
    } else {
      link.href = '/cv-update-eng.pdf';
      link.download = 'Resume Diana Pinzon.pdf';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero-section min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 sm:space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/15 text-primary rounded-full text-xs sm:text-sm font-medium border border-primary/30 shadow-soft"
              >
                {t.hero.badge}
              </motion.span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block">{t.hero.title}</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button
                onClick={() => navigate("/projects")}
                className="btn-primary group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto"
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {t.hero.viewProjects}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={downloadCV}
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {t.hero.downloadCV}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-border/50"
            >
              <div className="text-center p-3 rounded-lg bg-card/50 border border-card-border/50">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-primary" />
                <div className="text-xs sm:text-sm text-muted-foreground">{t.hero.stats.frontend}</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/50 border border-card-border/50">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-accent" />
                <div className="text-xs sm:text-sm text-muted-foreground">{t.hero.stats.automation}</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/50 border border-card-border/50">
                <PenTool className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-primary" />
                <div className="text-xs sm:text-sm text-muted-foreground">{t.hero.stats.content}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-8 lg:mt-0"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl sm:rounded-3xl blur-2xl opacity-20 animate-glow-pulse"></div>
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={dianaProfile}
                alt="Diana - Frontend Developer & Automation Specialist"
                className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto rounded-2xl sm:rounded-3xl shadow-large border-4 border-primary/20"
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-card glass-effect p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-primary/20"
            >
              <div className="text-lg sm:text-2xl">⚡</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-card glass-effect p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-accent/20"
            >
              <div className="text-lg sm:text-2xl">🚀</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
