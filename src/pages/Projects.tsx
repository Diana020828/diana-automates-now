import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { FeaturedProjectHero } from "@/components/sections/featured-project-hero";
import { ProjectsSection } from "@/components/sections/projects-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/use-seo";

export function ProjectsPage() {
  const { t } = useLanguage();
  useSeo({ title: t.pageTitles.projects, description: t.pageDescriptions.projects });

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <PageHeader
          kicker={t.projects.kicker}
          title={t.projects.title}
          titleEm={t.projects.titleEm}
          intro={t.projects.intro}
        />
        <FeaturedProjectHero />
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
