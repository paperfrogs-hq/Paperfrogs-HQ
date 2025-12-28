import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      <div className="absolute inset-0 gradient-glow animate-glow-pulse" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-coral/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: "2s"
      }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: "4s"
      }} />
      </div>
      <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `linear-gradient(hsl(var(--coral) / 0.4) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--coral) / 0.4) 1px, transparent 1px)`,
      backgroundSize: '80px 80px',
      transform: 'perspective(500px) rotateX(60deg)',
      transformOrigin: 'center top',
      maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
    }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full border border-coral/30 text-coral text-sm font-medium bg-coral/5">
              We build tools for things that matter
            </span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">Paperfrogs<span className="text-gradient"> HQ</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="text-xl md:text-2xl text-foreground/80 mb-4 font-light">
            Think • Build • Evolve
          </motion.p>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.7
        }} className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            We are the parent company behind multiple digital products, platforms, and experiments.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products">
              <Button variant="hero" size="xl">
                Explore Products
              </Button>
            </a>
            <a href="#about">
              <Button variant="heroOutline" size="xl">
                About PaperFrogs
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1.2
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.a href="#about" animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-coral transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>;
};
