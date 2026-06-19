import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeaturedProjectHero } from "@/components/sections/featured-project-hero";
import { ProjectsSection } from "@/components/sections/projects-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageTitle } from "@/hooks/use-page-title";

export function ProjectsPage() {
  const { t } = useLanguage();
  usePageTitle(t.pageTitles.projects);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Navbar />

      <main className="pt-20 pb-12">
        {/* Hero del proyecto destacado */}
        <FeaturedProjectHero />

        {/* Carrusel con el resto de proyectos */}
        <ProjectsSection />
      </main>

      <Footer />
    </motion.div>
  );
}
