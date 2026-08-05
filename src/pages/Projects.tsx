import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeaturedProjectHero } from "@/components/sections/featured-project-hero";
import { ProjectsSection } from "@/components/sections/projects-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/use-seo";

export function ProjectsPage() {
  const { t } = useLanguage();
  useSeo({ title: t.pageTitles.projects, description: t.pageDescriptions.projects });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-20 pb-12">
        {/* Hero del proyecto destacado */}
        <FeaturedProjectHero />

        {/* Carrusel con el resto de proyectos */}
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
