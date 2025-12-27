import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { FutureSection } from "@/components/sections/FutureSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <TeamSection />
      <PhilosophySection />
      <FutureSection />
      <Footer />
    </main>
  );
};

export default Index;
