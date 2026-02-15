import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Layers, Eye, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    label: "01",
    title: "Product Invention",
    description: "We create new digital products from zero to launch, driven by genuine user needs.",
  },
  {
    icon: Eye,
    label: "02",
    title: "Long-term Vision",
    description: "Every product is built with sustainable growth and lasting impact in mind.",
  },
  {
    icon: Layers,
    label: "03",
    title: "Multiple Brands",
    description: "Independent identities, unified philosophy. All under one innovative roof.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 lg:py-36 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-coral" />
                <span className="text-xs font-mono text-coral uppercase tracking-[0.2em]">
                  About
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] tracking-tight">
                The home of
                <br />
                <span className="text-gradient">digital innovation</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                PaperFrogs is not just a company — it's a launchpad. We invent, design, and
                build digital products that solve real problems with elegance and simplicity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every product we create starts with a question: "Will this genuinely help
                someone?" If the answer is yes, we dive deep. We research, prototype,
                iterate, and refine until the experience feels effortless.
              </p>
            </motion.div>
          </div>

          <div className="border-t border-border" />

          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group py-10 md:px-8 first:md:pl-0 last:md:pr-0"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-mono text-coral/60">{feature.label}</span>
                  <div className="w-4 h-px bg-border group-hover:bg-coral group-hover:w-8 transition-all duration-300" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-5 group-hover:bg-coral/10 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-coral transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-20 border border-border rounded-2xl p-10 lg:p-14 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-coral/[0.03] rounded-full blur-[80px]" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  We believe in building things that matter.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team brings together design thinking, engineering excellence, and a
                  relentless focus on user experience. The result? Products that people
                  actually love to use.
                </p>
              </div>
              <div className="flex items-center lg:justify-end">
                <a
                  href="#products"
                  className="group/cta inline-flex items-center gap-3 text-coral font-medium hover:gap-4 transition-all duration-300"
                >
                  See our products
                  <ArrowRight size={16} className="group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};