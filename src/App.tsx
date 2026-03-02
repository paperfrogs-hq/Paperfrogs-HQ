import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";
import ProjectDetail from "@/pages/ProjectDetail";
import Studio from "@/pages/Studio";
import Team from "@/pages/Team";
import Terms from "@/pages/Terms";
import Work from "@/pages/Work";

const queryClient = new QueryClient();
const EASING = [0.22, 1, 0.36, 1] as const;

const LegacyWorkProjectRedirect = () => {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={slug ? `/projects/${slug}` : "/projects"} replace />;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const rm = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: rm ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: rm ? 0 : -10 }}
        transition={{
          duration: rm ? 0.1 : 0.42,
          ease: EASING,
        }}
        style={{ willChange: "transform, opacity" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/work" element={<Navigate to="/projects" replace />} />
          <Route path="/work/:slug" element={<LegacyWorkProjectRedirect />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/ideas" element={<Navigate to="/studio" replace />} />
          <Route path="/ideas/:slug" element={<Navigate to="/studio" replace />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
        <CustomCursor />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
