import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ToolsMarquee } from "@/components/sections/tools-marquee";
import { ProblemSection } from "@/components/sections/problem-section";
import { LeadJourney } from "@/components/sections/lead-journey";
import { ServicesSection } from "@/components/sections/services-section";
import { OmwCase } from "@/components/sections/omw-case";
import { AboutSection } from "@/components/sections/about-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/use-seo";

// The home page tells the whole story in the order a client decides:
// hook → problem → how → what → proof → who → doubts → contact.
const Index = () => {
  const { t } = useLanguage();
  useSeo({ title: t.pageTitles.home, description: t.pageDescriptions.home });

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <HeroSection />
        <ToolsMarquee />
        <ProblemSection />
        <LeadJourney />
        <ServicesSection />
        <OmwCase />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
