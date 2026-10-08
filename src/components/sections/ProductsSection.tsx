import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  AudioWaveform,
  Flame,
  Droplet,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";
import { ProjectTimelineModal } from "./ProjectTimelineModal";

type ProductStatus = "Building" | "Research" | "Open";
type Pillar = "Infrastructure" | "Tooling" | "Research";

interface Product {
  year: string;
  name: string;
  tagline: string;
  pillar: Pillar;
  status: ProductStatus;
  icon: LucideIcon;
  link?: string;
  linkLabel?: string;
  hasTimeline?: boolean;
}

const products: Product[] = [
  {
    year: "2023",
    name: "Fusion",
    tagline: "Cryptographic audio provenance infrastructure.",
    pillar: "Infrastructure",
    status: "Building",
    icon: AudioWaveform,
    link: "https://fusion.paperfrogs.dev",
    linkLabel: "Website",
    hasTimeline: true,
  },
  {
    year: "2025",
    name: "BurnLink",
    tagline: "Encrypted file sharing. One-time links that burn themselves after access.",
    pillar: "Tooling",
    status: "Building",
    icon: Flame,
    hasTimeline: true,
  },
  {
    year: "2026",
    name: "APC",
    tagline: "Audio watermarking infrastructure for provenance and authenticity.",
    pillar: "Research",
    status: "Open",
    icon: Droplet,
    hasTimeline: true,
  },
  {
    year: "2026",
    name: "Fusion Verifier",
    tagline: "Audio provenance detection and validation system.",
    pillar: "Tooling",
    status: "Open",
    icon: ScanSearch,
    hasTimeline: true,
  },
];

const statusConfig: Record<
  ProductStatus,
  { dot: string; text: string; ring: string }
> = {
  Building: {
    dot: "bg-amber-400",
    text: "text-amber-400",
    ring: "ring-amber-400/20",
  },
  Research: {
    dot: "bg-violet-400",
    text: "text-violet-400",
    ring: "ring-violet-400/20",
  },
  Open: {
    dot: "bg-coral",
    text: "text-coral",
    ring: "ring-coral/20",
  },
};

const pillarConfig: Record<Pillar, string> = {
  Infrastructure: "border-white/[0.1] text-foreground/45",
  Tooling: "border-white/[0.1] text-foreground/45",
  Research: "border-white/[0.1] text-foreground/45",
};

// Group products by year for the sectioned layout.
const groupedByYear = products.reduce<Record<string, Product[]>>((acc, p) => {
  (acc[p.year] ||= []).push(p);
  return acc;
}, {});
const years = Object.keys(groupedByYear).sort();

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [timelineProject, setTimelineProject] = useState<string | null>(null);

  // Timeline details for the projects represented in this legacy section.
  const timelines: Record<
    string,
    {
      past: { date: string; title: string }[];
      upcoming: { date: string; title: string }[];
    }
  > = {
    Fusion: {
      past: [
        { date: "December 2023", title: "Project initiated as an AI audio player experiment" },
        { date: "July 2024", title: "Beta site launched" },
        { date: "January 2025", title: "Stepped back from the original direction" },
        { date: "November 2025", title: "Project direction redefined" },
        { date: "December 2025", title: "Fusion v2 development begins" },
      ],
      upcoming: [
        { date: "Q1 2026", title: "Public beta launch (planned)" },
        { date: "Q2 2026", title: "Platform integrations and enterprise pilots" },
        { date: "Q3 2026", title: "Infrastructure scaling and expanded use cases" },
        { date: "Q4 2026", title: "Market expansion and ecosystem growth" },
      ],
    },
    BurnLink: {
      past: [
        { date: "Mid 2025", title: "Concept and threat model drafted" },
        { date: "Late 2025", title: "Reference implementation begins" },
      ],
      upcoming: [
        { date: "Q2 2026", title: "Private alpha with self-host and burn-once semantics" },
        { date: "Q3 2026", title: "Audited cryptography pass and key-management hardening" },
        { date: "Q4 2026", title: "Public release under a permissive license" },
      ],
    },
    APC: {
      past: [
        { date: "Early 2026", title: "Watermarking model selection and embedding experiments" },
      ],
      upcoming: [
        { date: "Q2 2026", title: "Robustness evaluation across common audio transforms" },
        { date: "Q3 2026", title: "Embedder/verifier APIs for partner integration" },
        { date: "Q4 2026", title: "Compatibility study with Fusion Verifier" },
      ],
    },
    "Fusion Verifier": {
      past: [
        { date: "Early 2026", title: "Detection pipeline scoped against Fusion's embedder" },
      ],
      upcoming: [
        { date: "Q2 2026", title: "Public detection API and reporting surface" },
        { date: "Q3 2026", title: "Independent benchmark suite for provenance claims" },
        { date: "Q4 2026", title: "Multi-model coverage and false-positive tuning" },
      ],
    },
  };

  const openTimeline = (name: string) => {
    setTimelineProject(name);
    setIsTimelineOpen(true);
  };

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

          {/* Year-grouped timeline */}
          <div className="relative">
            {/* vertical rail */}
            <div
              aria-hidden
              className="absolute left-[58px] sm:left-[78px] top-2 bottom-2 w-px bg-gradient-to-b from-coral/40 via-white/10 to-transparent"
            />

            <div className="flex flex-col gap-12">
              {years.map((year) => (
                <div key={year}>
                  {/* Year header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="relative flex items-center gap-5 pl-0 mb-6"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-coral/70 w-[58px] sm:w-[78px]">
                      {year}
                    </span>
                    <span className="h-px flex-1 bg-white/[0.06]" />
                  </motion.div>

                  {/* Projects in this year */}
                  <div className="flex flex-col gap-4">
                    {groupedByYear[year].map((product, index) => {
                      const Icon = product.icon;
                      const sc = statusConfig[product.status];
                      return (
                        <motion.article
                          key={product.name}
                          initial={{ opacity: 0, y: 24 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                          className="group relative cursor-pointer"
                          onClick={() =>
                            product.hasTimeline && openTimeline(product.name)
                          }
                        >
                          {/* timeline node */}
                          <span
                            aria-hidden
                            className={`absolute left-[54px] sm:left-[74px] top-9 -translate-x-1/2 h-2.5 w-2.5 rounded-full ${sc.dot} ring-4 ${sc.ring} shadow-[0_0_14px_-2px_currentColor]`}
                          />

                          <div className="ml-[88px] sm:ml-[108px] border border-border rounded-xl p-6 lg:p-7 hover:border-foreground/20 hover:bg-card/50 hover:translate-x-1 transition-all duration-300">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                              {/* Icon + name */}
                              <div className="flex items-center gap-4 lg:w-72 shrink-0">
                                <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center group-hover:bg-coral/10 transition-colors duration-300">
                                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-coral transition-colors duration-300" />
                                </div>
                                <div className="min-w-0">
                                  <h3 className="text-lg font-bold text-foreground group-hover:text-coral transition-colors duration-200 tracking-tight">
                                    {product.name}
                                  </h3>
                                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.14em] text-foreground/40">
                                      <span className={`h-1.5 w-1.5 rounded-full ${sc.dot}`} />
                                      <span className={sc.text}>{product.status}</span>
                                    </span>
                                    <span
                                      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.14em] ${pillarConfig[product.pillar]}`}
                                    >
                                      {product.pillar}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Tagline */}
                              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                {product.tagline}
                              </p>

                              {/* Actions */}
                              <div className="flex items-center gap-3 shrink-0">
                                {product.link && (
                                  <a
                                    href={product.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-coral transition-colors duration-200 font-medium"
                                  >
                                    {product.linkLabel ?? "Link"}
                                    <ArrowUpRight size={14} />
                                  </a>
                                )}
                                {product.hasTimeline && (
                                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-coral group-hover:bg-coral/10 transition-all duration-300">
                                    <ArrowUpRight
                                      size={14}
                                      className="text-muted-foreground group-hover:text-coral transition-colors"
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {Object.entries(timelines).map(([name, data]) => (
        <ProjectTimelineModal
          key={name}
          isOpen={isTimelineOpen && timelineProject === name}
          onClose={() => setIsTimelineOpen(false)}
          projectName={name}
          timeline={data.past}
          upcomingMilestones={data.upcoming}
        />
      ))}
    </section>
  );
};
