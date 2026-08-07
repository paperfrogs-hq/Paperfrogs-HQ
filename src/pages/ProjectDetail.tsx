import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CalendarClock, Package } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { InstallSnippet } from "@/components/sections/InstallSnippet";
import { projects } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";
import { cn } from "@/lib/utils";

const statusLabel: Record<string, string> = {
  Live: "Shipped",
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

const installCommands: Record<string, string> = {
  "burnlink-cli": "npm i -g burnlink",
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  usePageSeo({
    title: project ? `${project.name} · Products` : "Products",
    description: project?.summary ?? "Product details",
    path: project ? `/products/${project.slug}` : "/products",
  });

  if (!project) return <Navigate to="/products" replace />;

  const installCmd = installCommands[project.slug];
  const status = statusLabel[project.status] ?? project.status;

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-5 pt-8 sm:px-10 sm:pt-10 lg:px-16">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/35 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to products
        </Link>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pt-8 pb-0 sm:px-10 sm:pt-10 lg:px-16">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6 sm:mb-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/65">
              {project.pillar}
            </span>
            <span className="text-foreground/15">·</span>
            <span
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.22em]",
                project.status === "Active"
                  ? "pf-pulse text-coral/80"
                  : project.status === "Live"
                    ? "text-coral/65"
                    : "text-foreground/35",
              )}
            >
              {status}
            </span>
            <span className="text-foreground/15">·</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/35">
              <CalendarClock className="h-3.5 w-3.5" />
              {project.yearStarted}
            </span>
          </div>
          <h1 className="text-[clamp(2.2rem,6vw,5rem)] font-bold leading-[1.02] tracking-[-0.04em] text-foreground text-balance">
            {project.name}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/55 sm:mt-6 sm:text-lg text-pretty">
            {project.summary}
          </p>

          <div className="mt-7 flex flex-wrap gap-2 sm:mt-9">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/40"
              >
                {s}
              </span>
            ))}
          </div>

          {project.links && (
            <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/55 transition-all hover:scale-[1.02] hover:border-coral/40 hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:px-5 sm:text-[12px]"
                >
                  GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.links.docs && (
                <a
                  href={project.links.docs}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/55 transition-all hover:scale-[1.02] hover:border-coral/40 hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:px-5 sm:text-[12px]"
                >
                  <Package className="h-3.5 w-3.5" />
                  npm <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:scale-[1.02] hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:px-5 sm:text-[12px]"
                >
                  Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
        </Reveal>

        {installCmd && (
          <Reveal delay={0.1}>
            <div className="mt-8 sm:mt-10">
              <InstallSnippet
                command={installCmd}
                label="Get started"
                hint="Zero dependencies"
              />
            </div>
          </Reveal>
        )}

        <div className="mt-12 pf-divider sm:mt-14" />
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="divide-y divide-white/[0.05]">
          {sections(project).map(({ title, body }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[180px_1fr] sm:gap-10 sm:py-10 lg:grid-cols-[220px_1fr] lg:gap-16">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/35 mt-1">
                  {title}
                </h2>
                <p className="text-[15px] leading-relaxed text-foreground/60 text-pretty">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {(project.timeline?.journey?.length || project.timeline?.upcoming?.length) && (
        <section className="mx-auto w-full max-w-7xl border-t border-white/[0.06] px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            {project.timeline?.journey?.length ? (
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35 mb-6 sm:mb-8">Journey</p>
                <div className="divide-y divide-white/[0.05]">
                  {project.timeline.journey.map(({ period, detail }) => (
                    <div key={period} className="flex flex-col gap-1.5 py-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-coral/65">{period}</p>
                      <p className="text-[14px] leading-relaxed text-foreground/50">{detail}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ) : null}

            {project.timeline?.upcoming?.length ? (
              <Reveal delay={0.08}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35 mb-6 sm:mb-8">Upcoming</p>
                <div className="divide-y divide-white/[0.05]">
                  {project.timeline.upcoming.map(({ period, detail }) => (
                    <div key={period} className="flex flex-col gap-1.5 py-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/35">{period}</p>
                      <p className="text-[14px] leading-relaxed text-foreground/45">{detail}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>
        </section>
      )}

      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.06] px-5 pb-28 pt-10 sm:px-10 sm:pb-32 sm:pt-12 lg:px-16 lg:pb-40">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/35 transition-colors hover:text-foreground sm:text-[12px]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:scale-[1.02] hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:px-5 sm:text-[12px]"
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