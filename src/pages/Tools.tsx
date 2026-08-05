import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ToolsSection } from "@/components/sections/tools-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/use-seo";

export function ToolsPage() {
  const { t } = useLanguage();
  useSeo({ title: t.pageTitles.tools, description: t.pageDescriptions.tools });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-20 pb-12">
        <ToolsSection />
      </main>

      <Footer />
    </div>
  );
}


