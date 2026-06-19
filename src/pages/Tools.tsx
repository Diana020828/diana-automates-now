import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ToolsSection } from "@/components/sections/tools-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageTitle } from "@/hooks/use-page-title";

export function ToolsPage() {
  const { t } = useLanguage();
  usePageTitle(t.pageTitles.tools);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Navbar />

      <main className="pt-20 pb-12">
        <ToolsSection />
      </main>

      <Footer />
    </motion.div>
  );
}


