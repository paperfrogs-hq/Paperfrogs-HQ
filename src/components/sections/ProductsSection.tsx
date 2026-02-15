import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, AudioWaveform, Shield } from "lucide-react";
import { ProjectTimelineModal } from "./ProjectTimelineModal";

type ProductStatus = "Live" | "Beta" | "Coming Soon" | "In Development";

interface Product {
  name: string;
  tagline: string;
  status: ProductStatus;
  icon: typeof AudioWaveform;
  link: string;
}

const products: Product[] = [
  {
    name: "Fusion",
    tagline: "Cryptographically verifiable proof of audio origin—whether AI-generated, artist-created, or platform-uploaded. Built for platforms, AI companies, and creators.",
    status: "In Development",
    icon: AudioWaveform,
    link: "https://fusion.paperfrogs.dev",
  },
  {
    name: "AppFence",
    tagline: "A Wayland-first, open-source Application Permission Firewall for Linux.",
    status: "In Development",
    icon: Shield,
    link: "https://github.com/paperfrogs-hq/AppFence",
  },
];

const statusConfig: Record<ProductStatus, { dot: string; text: string }> = {
  Live: { dot: "bg-emerald-400", text: "text-emerald-400" },
  Beta: { dot: "bg-coral", text: "text-coral" },
  "Coming Soon": { dot: "bg-muted-foreground", text: "text-muted-foreground" },
  "In Development": { dot: "bg-amber-400", text: "text-amber-400" },
};

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [timelineProject, setTimelineProject] = useState<"Fusion" | "AppFence" | null>(null);

  const fusionTimeline = [
    { date: "December 2023", title: "Project initiated as an AI audio player experiment" },
    { date: "July 2024", title: "Beta site launched" },
    { date: "January 2025", title: "Stepped back from the original direction" },
    { date: "November 2025", title: "Project direction redefined" },
    { date: "December 2025", title: "Fusion v2 development begins" },
  ];

  const fusionUpcomingMilestones = [
    { date: "Q1 2026", title: "Public beta launch (planned)" },
    { date: "Q2 2026", title: "Platform integrations and enterprise pilots" },
    { date: "Q3 2026", title: "Infrastructure scaling and expanded use cases" },
    { date: "Q4 2026", title: "Market expansion and ecosystem growth" },
  ];

  const appFenceTimeline = [
    { date: "December 2025", title: "Project formally initiated as an operating-system–level application security framework (Wayland-first, least-privilege, policy-driven design)" },
  ];

  const appFenceUpcomingMilestones = [
    { date: "Q1 2026", title: "Foundation and trust-anchor development (Core daemon, threat model, scope lock, and identity primitives)" },
    { date: "Q2 2026", title: "Controlled execution and enforcement foundations (Application launcher, process tracking, filesystem and network isolation)" },
    { date: "Q3 2026", title: "User mediation and desktop integration (Prompt infrastructure, desktop UI, and portal mediation)" },
    { date: "Q4 2026", title: "System hardening and safety guarantees (Failure modes, recovery paths, observability, and diagnostics)" },
    { date: "Q1 2027", title: "Security validation and packaging (Threat-model traceability, negative testing, Fedora packaging)" },
    { date: "Q2 2027", title: "Public beta and demonstration milestone (Reproducible builds, demo artifacts, documented limitations)" },
  ];

  return (
    <section id="products" className="py-28 lg:py-36 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-coral" />
              <span className="text-xs font-mono text-coral uppercase tracking-[0.2em]">
                Products
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] tracking-tight mb-5">
              Ventures &<br />
              <span className="text-muted-foreground">Experiments</span>
            </h2>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              Our products are independent, but our philosophy is shared.
            </p>
          </motion.div>

          <div className="space-y-4">
            {products.map((product, index) => (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => {
                  if (product.name === "Fusion" || product.name === "AppFence") {
                    setTimelineProject(product.name);
                    setIsTimelineOpen(true);
                  }
                }}
              >
                <div className="border border-border rounded-xl p-6 lg:p-8 hover:border-foreground/20 hover:bg-card/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-5 lg:w-64 shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-coral/10 transition-colors duration-300">
                        <product.icon className="w-6 h-6 text-muted-foreground group-hover:text-coral transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-coral transition-colors duration-200">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`w-1.5 h-1.5 rounded-full ${statusConfig[product.status].dot}`} />
                          <span className={`text-xs font-mono ${statusConfig[product.status].text}`}>
                            {product.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {product.tagline}
                    </p>

                    <div className="flex items-center gap-4 shrink-0">
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-coral transition-colors duration-200 font-medium"
                      >
                        {product.name === "Fusion" ? "Website" : "GitHub"}
                        <ArrowUpRight size={14} />
                      </a>
                      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-coral group-hover:bg-coral/10 transition-all duration-300">
                        <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-coral transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <ProjectTimelineModal
        isOpen={isTimelineOpen && timelineProject === "Fusion"}
        onClose={() => setIsTimelineOpen(false)}
        projectName="Fusion"
        timeline={fusionTimeline}
        upcomingMilestones={fusionUpcomingMilestones}
      />

      <ProjectTimelineModal
        isOpen={isTimelineOpen && timelineProject === "AppFence"}
        onClose={() => setIsTimelineOpen(false)}
        projectName="AppFence"
        timeline={appFenceTimeline}
        upcomingMilestones={appFenceUpcomingMilestones}
      />
    </section>
  );
};
