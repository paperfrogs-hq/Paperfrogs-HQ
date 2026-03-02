import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CalendarClock } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { projects } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const statusLabel: Record<string, string> = {
  Active: "Building",
  Research: "Research",
  Early: "Open",
};

const sections = (project: (typeof projects)[number]) => [
  { title: "The Problem", body: project.problem },
  { title: "Our Approach", body: project.approach },
  { title: "Where We Are Today", body: project.today },
  { title: "What Is Next", body: project.next },
] as const;

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  usePageSeo({
    title: project ? `${project.name} · Products` : "Products",
    description: project?.summary ?? "Product details",
    path: project ? `/products/${project.slug}` : "/products",
  });

  if (!project) return <Navigate to="/products" replace />;

  return (
    <SiteShell>
      {/* Back */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-10 sm:px-10 lg:px-16">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/35 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to products
        </Link>
      </section>

      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-8 pb-0 sm:px-10 lg:px-16">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/60">
              {project.pillar}
            </span>
            <span className="text-foreground/20">·</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/30">
              {statusLabel[project.status] ?? project.status}
            </span>
            <span className="text-foreground/20">·</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/30">
              <CalendarClock className="h-3.5 w-3.5" />
              {project.yearStarted}
            </span>
          </div>
          <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.02] tracking-[-0.035em] text-foreground">
            {project.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/45">
            {project.summary}
          </p>

          {/* Stack */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/35"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Links */}
          {project.links && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground/50 transition-all hover:border-coral/40 hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                >
                  GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                >
                  Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
        </Reveal>
        <div className="mt-12 border-t border-white/[0.07]" />
      </section>

      {/* Content sections */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="divide-y divide-white/[0.06]">
          {sections(project).map(({ title, body }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-[220px_1fr] sm:gap-16">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/30 mt-1">
                  {title}
                </h2>
                <p className="text-[15px] leading-relaxed text-foreground/55">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      {(project.timeline?.journey?.length || project.timeline?.upcoming?.length) && (
        <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 py-16 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {project.timeline?.journey?.length ? (
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30 mb-8">Journey</p>
                <div className="divide-y divide-white/[0.06]">
                  {project.timeline.journey.map(({ period, detail }) => (
                    <div key={period} className="flex flex-col gap-1.5 py-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-coral/55">{period}</p>
                      <p className="text-[14px] leading-relaxed text-foreground/45">{detail}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ) : null}

            {project.timeline?.upcoming?.length ? (
              <Reveal delay={0.08}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30 mb-8">Upcoming</p>
                <div className="divide-y divide-white/[0.06]">
                  {project.timeline.upcoming.map(({ period, detail }) => (
                    <div key={period} className="flex flex-col gap-1.5 py-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/30">{period}</p>
                      <p className="text-[14px] leading-relaxed text-foreground/40">{detail}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>
        </section>
      )}

      {/* Related Nav */}
      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 pb-32 pt-12 sm:px-10 lg:px-16 sm:pb-40">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-foreground/35 transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              Work with us
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default ProjectDetail;
