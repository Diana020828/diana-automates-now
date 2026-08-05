import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { VulcanoCofounder } from "@/components/sections/vulcano-cofounder";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/use-seo";

const Index = () => {
  const { t } = useLanguage();
  useSeo({ title: t.pageTitles.home, description: t.pageDescriptions.home });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <HeroSection />
        <VulcanoCofounder />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
