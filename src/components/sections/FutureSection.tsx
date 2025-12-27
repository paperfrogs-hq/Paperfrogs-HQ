import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
export const FutureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="future" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 gradient-glow opacity-50" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={isInView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.8
        }} className="mb-8">
            <div className="w-20 h-20 rounded-full bg-coral/10 flex items-center justify-center mx-auto">
              <Sparkles className="w-10 h-10 text-coral" />
            </div>
          </motion.div>

          <motion.span initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-coral text-sm font-medium uppercase tracking-widest mb-4 block">
            The Future
          </motion.span>

          <motion.h2 initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">PaperFrogs is just getting started.</motion.h2>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We have more ideas than we can count. New products. New experiments. 
            New ways to make the web a better place. Stay curious.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="px-4 py-2 rounded-full border border-border bg-secondary/30">
              Open source experiments
            </span>
            <span className="px-4 py-2 rounded-full border border-border bg-secondary/30">
              Production-ready tools
            </span>
            <span className="px-4 py-2 rounded-full border border-border bg-secondary/30">
              Research prototypes
            </span>
          </motion.div>
        </div>
      </div>
    </section>;
};