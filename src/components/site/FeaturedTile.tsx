import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/site";
import { MOTION_DURATION } from "@/lib/motion";

type FeaturedTileProps = {
  project: Project;
};

export const FeaturedTile = ({ project }: FeaturedTileProps) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionLink = motion(Link);

  return (
    <MotionLink
      to={`/projects/${project.slug}`}
      className="group block min-w-[280px] rounded-2xl border border-border bg-card/70 p-5 transition-[transform,border-color,box-shadow] duration-200 ease-out motion-safe:hover:-translate-y-1 hover:border-coral/60 hover:shadow-[0_0_0_1px_hsl(var(--coral)/0.35),0_16px_35px_hsl(var(--coral)/0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
      transition={{ duration: MOTION_DURATION.fast, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
        <span className="text-xs text-muted-foreground">{project.yearStarted}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={`${project.slug}-${tag}`} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </MotionLink>
  );
};
