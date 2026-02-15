import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Minus } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background noise-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-coral/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coral/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[70vh] bg-gradient-to-b from-transparent via-border/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full py-32 lg:py-0">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-coral" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em]">
                Building the future
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[clamp(3rem,8vw,7rem)] font-black text-foreground leading-[0.9] tracking-tighter mb-8"
            >
              Paper
              <br />
              frogs
              <span className="text-gradient"> HQ</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-md leading-relaxed mb-10"
            >
              The parent company behind multiple digital products, platforms, and experiments.
              We think, build, and evolve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <a href="#products">
                <Button variant="hero" size="lg">
                  Explore Products
                </Button>
              </a>
              <a href="#about">
                <Button variant="heroOutline" size="lg">
                  About Us
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="lg:col-span-5 hidden lg:flex flex-col items-end gap-6"
          >
            <div className="space-y-4 text-right">
              {["Think", "Build", "Evolve"].map((word, i) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.15 }}
                  className="flex items-center gap-4 justify-end"
                >
                  <span className="text-6xl font-black text-foreground/[0.04] tracking-tighter">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Minus size={16} className="text-coral/50" />
                  <span className="text-xl font-medium text-foreground/40">{word}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={14} />
        </motion.a>
      </motion.div>
    </section>
  );
};
