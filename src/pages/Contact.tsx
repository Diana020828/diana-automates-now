import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/sections/contact-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/use-seo";

export function ContactPage() {
  const { t } = useLanguage();
  useSeo({ title: t.pageTitles.contact, description: t.pageDescriptions.contact });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-20 pb-12">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}


