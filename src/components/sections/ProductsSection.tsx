import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, AudioWaveform, Shield, Rocket, Sparkles, Beaker } from "lucide-react";

type ProductStatus = "Live" | "Beta" | "Coming Soon" | "In Development";

interface Product {
  name: string;
  tagline: string;
  status: ProductStatus;
  icon: typeof Sparkles;
  gradient: string;
  link: string;
}

const products: Product[] = [
  {
    name: "Fusion",
    tagline: "Cryptographically verifiable proof of audio origin—whether AI-generated, artist-created, or platform-uploaded. Built for platforms, AI companies, and creators.",
    status: "Live",
    icon: AudioWaveform,
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    link: "https://playfusion.netlify.app/",
  },
  {
    name: "AppFence",
    tagline: "A Wayland-first, open-source Application Permission Firewall for Linux.",
    status: "Live",
    icon: Shield,
    gradient: "from-emerald-500/20 to-teal-500/20",
    link: "https://github.com/paperfrogs-hq/AppFence",
  },
];

const statusStyles: Record<ProductStatus, string> = {
  Live: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Beta: "bg-coral/20 text-coral border-coral/30",
  "Coming Soon": "bg-muted text-muted-foreground border-border",
  "In Development": "bg-violet-500/20 text-violet-400 border-violet-500/30",
};

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-coral/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-coral text-sm font-medium uppercase tracking-widest mb-4 block">
              Our Products
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ventures & Experiments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Our products are independent, but our philosophy is shared. Each one is 
              crafted with the same dedication to clarity, usability, and thoughtful design.
            </p>
          </motion.div>

          {/* Products Grid - 3D Cards */}
          <div className="grid gap-6">
            {products.map((product, index) => (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group relative card-3d"
              >
                <a 
                  href={product.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`card-3d-inner p-8 lg:p-10 rounded-2xl border border-border bg-gradient-to-br ${product.gradient} glass-3d shadow-3d-hover cursor-pointer block`}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 relative z-10">
                    {/* Icon with 3D effect */}
                    <div className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur flex items-center justify-center shrink-0 shadow-3d group-hover:scale-110 transition-transform duration-300">
                      <product.icon className="w-8 h-8 text-coral" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-coral transition-colors duration-300">
                          {product.name}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full border backdrop-blur ${statusStyles[product.status]}`}>
                          {product.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {product.tagline}
                      </p>
                    </div>

                    {/* Arrow with 3D depth */}
                    <div className="lg:self-center">
                      <div className="w-12 h-12 rounded-full border border-border bg-card/50 backdrop-blur flex items-center justify-center group-hover:border-coral group-hover:bg-coral shadow-3d transition-all duration-300 group-hover:scale-110">
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-maroon-deep transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
