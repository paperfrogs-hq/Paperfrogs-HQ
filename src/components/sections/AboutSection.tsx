import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Layers, Eye } from "lucide-react";
const features = [{
  icon: Lightbulb,
  title: "Product Invention",
  description: "We create new digital products from zero to launch, driven by genuine user needs."
}, {
  icon: Eye,
  title: "Long-term Vision",
  description: "Every product is built with sustainable growth and lasting impact in mind."
}, {
  icon: Layers,
  title: "Multiple Brands",
  description: "Independent identities, unified philosophy. All under one innovative roof."
}];
export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <span className="text-coral text-sm font-medium uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Home of Digital Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">PaperFrogs is not just a company—it's a launchpad. We invent, design, and build digital products that solve real problems with elegance and simplicity.</p>
          </motion.div>

          {/* Features Grid - 3D Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => <motion.div key={feature.title} initial={{
            opacity: 0,
            y: 40,
            rotateY: -10
          }} animate={isInView ? {
            opacity: 1,
            y: 0,
            rotateY: 0
          } : {}} transition={{
            duration: 0.8,
            delay: 0.2 + index * 0.15
          }} className="group card-3d">
                <div className="card-3d-inner h-full p-8 rounded-2xl glass-3d shadow-3d-hover">
                  <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-6 group-hover:bg-coral/20 transition-colors duration-300 shadow-3d group-hover:scale-110 group-hover:rotate-3">
                    <feature.icon className="w-7 h-7 text-coral" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-coral transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>)}
          </div>

          {/* Editorial Text Block */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.7
        }} className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                We believe in building things that matter.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every product we create starts with a question: "Will this genuinely help someone?" 
                If the answer is yes, we dive deep. We research, prototype, iterate, and refine 
                until the experience feels effortless.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team brings together design thinking, engineering excellence, and a relentless 
                focus on user experience. The result? Products that people actually love to use.
              </p>
            </div>
            <div className="relative card-3d">
              <div className="card-3d-inner aspect-square rounded-2xl glass-3d shadow-3d overflow-hidden">
                {/* 3D Floating element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center animate-float">
                    <div className="relative">
                      <span className="text-8xl font-bold text-coral drop-shadow-lg">∞</span>
                      <div className="absolute inset-0 text-8xl font-bold text-coral/30 blur-xl">∞</div>
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm">Infinite Possibilities</p>
                  </div>
                </div>
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 rounded-full border border-coral/20 animate-float" style={{
                  animationDelay: "0.5s"
                }} />
                  <div className="absolute w-48 h-48 rounded-full border border-coral/10 animate-float" style={{
                  animationDelay: "1s"
                }} />
                  <div className="absolute w-64 h-64 rounded-full border border-coral/5 animate-float" style={{
                  animationDelay: "1.5s"
                }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};