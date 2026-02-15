import { Link } from "react-router-dom";
import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coral/60 hover:shadow-[0_0_0_1px_hsl(var(--coral)/0.35),0_20px_45px_hsl(var(--coral)/0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold text-coral/90">
            {project.name.slice(0, 2).toUpperCase()}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-foreground">{project.name}</h3>
        </div>
        <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">{project.status}</span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
        <span>{project.yearStarted}</span>
        <span aria-hidden="true">•</span>
        <span>{project.pillar}</span>
      </div>
    </Link>
  );
};
