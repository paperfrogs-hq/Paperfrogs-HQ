import type { Project } from "@/data/site";

const marks: Record<string, string> = {
  burnlink: "/BurnlinkLogo.png",
  "burnlink-cli": "/BurnlinkLogo.png",
  fusion: "/FusionLogo.png",
};

export function PortfolioMark({ project }: { project: Project }) {
  const src = marks[project.slug];
  return (
    <span className={`portfolio-mark portfolio-mark-${project.slug}`} aria-hidden="true">
      {src ? <img src={src} alt="" loading="lazy" /> : <span>{project.name.slice(0, 2).toUpperCase()}</span>}
    </span>
  );
}
