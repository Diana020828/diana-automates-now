import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ToolsSection } from "@/components/sections/tools-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

const Index = () => {
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
        <ProjectsSection />
        <ToolsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
