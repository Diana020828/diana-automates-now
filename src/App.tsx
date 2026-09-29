import { Suspense, lazy } from "react";
import { LazyMotion, MotionConfig } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load de páginas para mejor rendimiento
const ProjectsPage = lazy(() => import("./pages/Projects").then(module => ({ default: module.ProjectsPage })));

// Componente de carga mientras se cargan las páginas
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="size-10 animate-spin rounded-full border-2 border-line border-t-clay"></div>
  </div>
);

// Animation features download after the first render (see lib/motion-features)
const loadMotionFeatures = () => import("./lib/motion-features").then((module) => module.default);

const App = () => (
  <LanguageProvider>
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projects" element={<ProjectsPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </MotionConfig>
    </LazyMotion>
  </LanguageProvider>
);

export default App;
