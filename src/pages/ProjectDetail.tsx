import { Link, Navigate, useParams } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { projects } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

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
      <section className="mx-auto w-full max-w-5xl px-6 pb-16 pt-6 sm:px-10">
        <Reveal>
          <Link
            to="/projects"
            className="text-sm text-coral transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
          >
            Back to projects
          </Link>
          <h1 className="mt-5 text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em]">{project.name}</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{project.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span>{project.yearStarted}</span>
            <span aria-hidden="true">•</span>
            <span>{project.status}</span>
            <span aria-hidden="true">•</span>
            <span>{project.pillar}</span>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-10 px-6 pb-24 sm:px-10 sm:pb-32">
        {[
          ["Problem", project.problem],
          ["Approach", project.approach],
          ["What exists today", project.today],
          ["What’s next", project.next],
        ].map(([title, body], index) => (
          <Reveal key={title} delay={index * 0.05} className="border-t border-border pt-6 sm:pt-8">
            <h2 className="text-2xl">{title}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{body}</p>
          </Reveal>
        ))}

        {project.timeline?.journey?.length ? (
          <Reveal className="border-t border-border pt-6 sm:pt-8">
            <h2 className="text-2xl">Project Journey</h2>
            <ul className="mt-6 space-y-6">
              {project.timeline.journey.map((entry) => (
                <li key={`${entry.period}-${entry.detail}`} className="border-l border-border pl-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-coral">{entry.period}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        {project.timeline?.upcoming?.length ? (
          <Reveal className="border-t border-border pt-6 sm:pt-8">
            <h2 className="text-2xl">Upcoming Milestones</h2>
            <ul className="mt-6 space-y-6">
              {project.timeline.upcoming.map((entry) => (
                <li key={`${entry.period}-${entry.detail}`} className="border-l border-border pl-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-coral">{entry.period}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        {project.links ? (
          <Reveal className="border-t border-border pt-6 sm:pt-8">
            <h2 className="text-2xl">Links</h2>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-coral underline-offset-4 transition-colors hover:text-coral/80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                >
                  GitHub
                </a>
              ) : null}
              {project.links.docs ? (
                <a
                  href={project.links.docs}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-coral underline-offset-4 transition-colors hover:text-coral/80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                >
                  Docs
                </a>
              ) : null}
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-coral underline-offset-4 transition-colors hover:text-coral/80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                >
                  Demo
                </a>
              ) : null}
            </div>
          </Reveal>
        ) : null}
      </section>
    </SiteShell>
  );
};

export default ProjectDetail;
