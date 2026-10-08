import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import Index from "@/pages/Index";
import Work from "@/pages/Work";
import ProjectDetail from "@/pages/ProjectDetail";
import Studio from "@/pages/Studio";
import Team from "@/pages/Team";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

const LegacyProject = () => {
  const { slug } = useParams();
  return <Navigate to={slug ? `/products/${slug}` : "/products"} replace />;
};

export default function App() {
  return <BrowserRouter><Routes>
    <Route path="/" element={<Index />} />
    <Route path="/products" element={<Work />} />
    <Route path="/products/:slug" element={<ProjectDetail />} />
    <Route path="/projects" element={<Navigate to="/products" replace />} />
    <Route path="/projects/:slug" element={<LegacyProject />} />
    <Route path="/work" element={<Navigate to="/products" replace />} />
    <Route path="/work/:slug" element={<LegacyProject />} />
    <Route path="/studio" element={<Studio />} />
    <Route path="/team" element={<Team />} />
    <Route path="/ideas" element={<Navigate to="/studio" replace />} />
    <Route path="/ideas/:slug" element={<Navigate to="/studio" replace />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="*" element={<NotFound />} />
  </Routes></BrowserRouter>;
}
