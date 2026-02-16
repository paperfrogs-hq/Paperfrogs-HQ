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
      data-cursor-label="View|Details"
      data-cursor-scale="1.08"
      className="group flex h-full w-full flex-col border-l-2 border-border py-2 pl-5 pr-2 transition-[transform,border-color] duration-200 ease-out hover:border-coral/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
      whileHover={shouldReduceMotion ? {} : { x: 4 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
      transition={{ duration: MOTION_DURATION.fast, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
        <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{project.yearStarted}</span>
      </div>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      <p className="mt-auto pt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">{project.tags.join(" · ")}</p>
    </MotionLink>
  );
};
