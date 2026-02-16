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
      data-cursor-label="View|Details"
      data-cursor-scale="1.08"
      className="group grid gap-4 py-6 transition-[transform,color] duration-200 ease-out md:grid-cols-[minmax(0,1fr)_auto] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
      whileHover={shouldReduceMotion ? {} : { x: 4 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
      transition={{ duration: MOTION_DURATION.fast, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      <div>
        <h3 className="text-2xl font-semibold leading-tight text-foreground transition-colors group-hover:text-coral">{project.name}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">{project.tags.join(" · ")}</p>
      </div>

      <div className="flex items-center justify-between gap-5 text-xs uppercase tracking-[0.14em] text-muted-foreground md:flex-col md:items-end md:justify-start">
        <div>
          <span>{project.status}</span>
        </div>
        <span>{project.yearStarted}</span>
        <span className="text-coral transition-transform duration-200 ease-out group-hover:translate-x-1">Details</span>
      </div>
    </MotionLink>
  );
};
