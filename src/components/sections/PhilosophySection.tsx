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
    <section id="philosophy" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-coral text-sm font-medium uppercase tracking-widest mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What We Believe In
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              These principles guide every product we create and every decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group card-3d"
              >
                <div className="card-3d-inner p-6 rounded-2xl glass-3d shadow-3d-hover flex gap-6">
                  <span className="text-5xl lg:text-6xl font-bold text-coral/30 group-hover:text-coral/60 transition-colors duration-300 drop-shadow-lg">
                    {value.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-coral transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
