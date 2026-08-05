import { Suspense, lazy } from "react";
import { MotionConfig } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load de páginas para mejor rendimiento
const ServicesPage = lazy(() => import("./pages/Services").then(module => ({ default: module.ServicesPage })));
const ProjectsPage = lazy(() => import("./pages/Projects").then(module => ({ default: module.ProjectsPage })));
const ToolsPage = lazy(() => import("./pages/Tools").then(module => ({ default: module.ToolsPage })));
const ContactPage = lazy(() => import("./pages/Contact").then(module => ({ default: module.ContactPage })));

// Componente de carga mientras se cargan las páginas
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="diana-portfolio-theme">
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/tools" element={<ToolsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </MotionConfig>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;
