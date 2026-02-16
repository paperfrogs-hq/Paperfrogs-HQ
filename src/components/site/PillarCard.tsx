import { Link } from "react-router-dom";
import type { PillarCardData } from "@/data/site";

type PillarCardProps = {
  pillar: PillarCardData;
};

export const PillarCard = ({ pillar }: PillarCardProps) => {
  return (
    <article className="rounded-2xl border border-border bg-card/60 p-6 transition-[transform,border-color] duration-200 ease-out motion-safe:hover:-translate-y-1 hover:border-coral/50">
      <h3 className="text-xl font-semibold">{pillar.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
      <Link
        to="/projects"
        className="mt-6 inline-flex text-sm text-coral transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
      >
        See projects
      </Link>
    </article>
  );
};
