import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/site";
import { MOTION_DURATION } from "@/lib/motion";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionLink = motion(Link);

  return (
    <MotionLink
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 transition-[transform,border-color,box-shadow] duration-200 ease-out motion-safe:hover:-translate-y-1 hover:border-coral/60 hover:shadow-[0_0_0_1px_hsl(var(--coral)/0.35),0_20px_45px_hsl(var(--coral)/0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
      transition={{ duration: MOTION_DURATION.fast, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
        </div>
        <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">{project.status}</span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
        <span>{project.yearStarted}</span>
      </div>
    </MotionLink>
  );
};
