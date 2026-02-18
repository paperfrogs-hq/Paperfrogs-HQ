import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { projects } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const panelClass =
  "rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(12,16,20,0.92),rgba(10,14,18,0.88))] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);

  usePageSeo({
    title: project ? `${project.name} · Projects` : "Projects",
    description: project?.summary ?? "Project details",
    path: project ? `/projects/${project.slug}` : "/projects",
  });

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-6xl px-6 pb-8 pt-8 sm:px-10 sm:pb-10">
        <Reveal>
          <div className={panelClass + " p-6 sm:p-8"}>
            <Link
              to="/projects"
              className="text-sm text-coral transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              Back to projects
            </Link>

            <h1 className="mt-5 text-[clamp(2.1rem,5vw,4.2rem)] leading-[1.05] tracking-[-0.03em]">{project.name}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{project.summary}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span>{project.yearStarted}</span>
              <span aria-hidden="true">•</span>
              <span>{project.status}</span>
              <span aria-hidden="true">•</span>
              <span>{project.pillar}</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-6 pb-24 sm:px-10 sm:pb-32">
        {[
          ["Problem", project.problem],
          ["Approach", project.approach],
          ["What exists today", project.today],
          ["What’s next", project.next],
        ].map(([title, body], index) => (
          <Reveal key={title} delay={0.06 + index * 0.04}>
            <article className={panelClass + " p-6 sm:p-7"}>
              <h2 className="text-2xl">{title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{body}</p>
            </article>
          </Reveal>
        ))}

        {project.timeline?.journey?.length ? (
          <Reveal>
            <article className={panelClass + " p-6 sm:p-7"}>
              <h2 className="text-2xl">Project Journey</h2>
              <ul className="mt-6 space-y-5">
                {project.timeline.journey.map((entry) => (
                  <li key={`${entry.period}-${entry.detail}`} className="border-l border-white/15 pl-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-coral">{entry.period}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ) : null}

        {project.timeline?.upcoming?.length ? (
          <Reveal>
            <article className={panelClass + " p-6 sm:p-7"}>
              <h2 className="text-2xl">Upcoming Milestones</h2>
              <ul className="mt-6 space-y-5">
                {project.timeline.upcoming.map((entry) => (
                  <li key={`${entry.period}-${entry.detail}`} className="border-l border-white/15 pl-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-coral">{entry.period}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ) : null}

        {project.links ? (
          <Reveal>
            <article className={panelClass + " p-6 sm:p-7"}>
              <h2 className="text-2xl">Links</h2>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-coral transition-opacity hover:opacity-80"
                  >
                    GitHub <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
                {project.links.docs ? (
                  <a
                    href={project.links.docs}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-coral transition-opacity hover:opacity-80"
                  >
                    Docs <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-coral transition-opacity hover:opacity-80"
                  >
                    Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        ) : null}
      </section>
    </SiteShell>
  );
};

export default ProjectDetail;
