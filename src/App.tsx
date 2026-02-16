import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Contact from "@/pages/Contact";
import IdeaPost from "@/pages/IdeaPost";
import Ideas from "@/pages/Ideas";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";
import ProjectDetail from "@/pages/ProjectDetail";
import Studio from "@/pages/Studio";
import Team from "@/pages/Team";
import Terms from "@/pages/Terms";
import Work from "@/pages/Work";
import { EASING_PRIMARY, EASING_SECONDARY, MOTION_DURATION, MOTION_OFFSET, reducedMotionDuration, reducedMotionValue } from "@/lib/motion";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: {
            opacity: 0,
            y: reducedMotionValue(shouldReduceMotion, MOTION_OFFSET.page),
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: reducedMotionDuration(shouldReduceMotion, MOTION_DURATION.pageIn),
              ease: EASING_PRIMARY,
            },
          },
          exit: {
            opacity: 0,
            y: 0,
            transition: {
              duration: reducedMotionDuration(shouldReduceMotion, MOTION_DURATION.pageOut),
              ease: EASING_SECONDARY,
            },
          },
        }}
        style={{ willChange: "transform, opacity" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/ideas/:slug" element={<IdeaPost />} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
