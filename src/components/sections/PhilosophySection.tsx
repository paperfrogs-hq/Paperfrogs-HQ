import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    number: "01",
    title: "Simplicity",
    description: "Complexity is easy. Simplicity is hard. We choose hard.",
  },
  {
    number: "02",
    title: "Design-First",
    description: "Every decision starts with the user experience in mind.",
  },
  {
    number: "03",
    title: "Craftsmanship",
    description: "We build for the long term. Quality over shortcuts.",
  },
  {
    number: "04",
    title: "Ethics",
    description: "Sustainable, respectful, and human-centered digital products.",
  },
];

export const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="py-28 lg:py-36 bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-coral" />
                <span className="text-xs font-mono text-coral uppercase tracking-[0.2em]">
                  Philosophy
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-5">
                What we
                <br />
                believe in
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These principles guide every product we create and every decision we make.
              </p>
            </motion.div>

            <div className="lg:col-span-8">
              <div className="space-y-0 divide-y divide-border">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group py-8 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-start gap-8">
                      <span className="text-sm font-mono text-coral/40 group-hover:text-coral transition-colors duration-300 pt-1 shrink-0">
                        {value.number}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-coral transition-colors duration-200">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed max-w-lg">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
