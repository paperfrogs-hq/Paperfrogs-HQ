import { Link } from "react-router-dom";
import type { Project } from "@/data/site";

type FeaturedTileProps = {
  project: Project;
};

export const FeaturedTile = ({ project }: FeaturedTileProps) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block min-w-[280px] rounded-2xl border border-border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-coral/60 hover:shadow-[0_0_0_1px_hsl(var(--coral)/0.35),0_16px_35px_hsl(var(--coral)/0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
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
    </Link>
  );
};
