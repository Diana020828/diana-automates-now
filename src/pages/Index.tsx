import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageTitle } from "@/hooks/use-page-title";

const Index = () => {
  const { t } = useLanguage();
  usePageTitle(t.pageTitles.home);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Navbar />

      <main>
        <HeroSection />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Index;
