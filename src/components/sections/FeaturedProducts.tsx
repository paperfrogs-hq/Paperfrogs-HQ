import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/site";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

const EASING = [0.22, 1, 0.36, 1] as const;

type FeaturedProductsProps = {
  items?: Project[];
  className?: string;
};

const statusLabel: Record<Project["status"], string> = {
  Live: "Shipped",
  Active: "Building",
  Research: "Research",
  Early: "Open",
};

const FeaturedCard = ({ project, index }: { project: Project; index: number }) => {
  const rm = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: rm ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: rm ? 0.15 : 0.7, ease: EASING, delay: rm ? 0 : index * 0.08 }}
      className="group relative"
    >
      <Link
        to={`/products/${project.slug}`}
        className="pf-surface relative flex h-full flex-col gap-6 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-coral/30 hover:shadow-[0_30px_60px_-30px_hsl(var(--coral)/0.35),0_0_0_1px_hsl(var(--coral)/0.25)] sm:p-8 lg:p-9"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-coral/65">
              {project.pillar}
            </span>
            <span className="text-foreground/15">·</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-foreground/30">
              {statusLabel[project.status]}
            </span>
          </div>
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.26em] text-foreground/25">
            {project.yearStarted}
          </span>
        </div>

        <div className="flex-1">
          <h3 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold leading-[1.05] tracking-[-0.035em] text-foreground transition-colors duration-300 group-hover:text-coral">
            {project.name}
          </h3>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-foreground/45 text-pretty">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] pt-5">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/35 transition-colors duration-300 group-hover:text-foreground">
            View project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          {project.links?.github && (
            <span
              aria-hidden="true"
              className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/25"
            >
              <Github className="h-3.5 w-3.5" />
              Open Source
            </span>
          )}
        </div>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(60% 50% at 100% 0%, hsl(var(--coral) / 0.06) 0%, transparent 70%)",
          }}
        />
      </Link>
    </motion.div>
  );
};

export const FeaturedProducts = ({ items, className }: FeaturedProductsProps) => {
  const featured =
    items ??
    [...projects]
      .filter((p) => p.status === "Live" || p.status === "Active")
      .sort((a, b) => {
        if (a.status !== b.status) return a.status === "Live" ? -1 : 1;
        return b.yearStarted - a.yearStarted;
      })
      .slice(0, 2);

  if (featured.length === 0) return null;

  return (
    <section className={cn("mx-auto w-full max-w-7xl px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32", className)}>
      <Reveal className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">
            Featured Products
          </p>
          <h2 className="mt-4 text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance">
            Shipped and live.
          </h2>
        </div>
        <Link
          to="/products"
          className="inline-flex shrink-0 items-center gap-2 self-start text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/35 transition-colors hover:text-coral sm:self-auto"
        >
          All products →
        </Link>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {featured.map((project, i) => (
          <FeaturedCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;