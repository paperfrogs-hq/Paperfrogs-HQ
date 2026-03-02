import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { projects } from "@/data/site";
import type { ProjectStatus } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const statusLabel: Record<ProjectStatus, string> = {
  Active: "Building",
  Research: "Research",
  Early: "Open",
};

const Work = () => {
  usePageSeo({
    title: "Products",
    description: "Explore Paperfrogs HQ products across infrastructure, research, and tooling.",
    path: "/products",
  });

  return (
    <SiteShell>
      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-16 pb-0 sm:px-10 lg:px-16 sm:pt-20">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35">Products</p>
          <h1 className="mt-4 text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[1.03] tracking-[-0.035em] text-foreground">
            Work in motion.{" "}
            <span className="text-coral">Infrastructure, research, tooling.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/40">
            Products built with a research-to-production loop: explicit constraints, stable architecture, practical shipping milestones.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-10 border-t border-white/[0.07] pt-10">
            {[
              { num: String(projects.length).padStart(2, "0"), label: "Total" },
              { num: String(projects.filter((p) => p.status === "Active").length).padStart(2, "0"), label: "Building" },
              { num: String(projects.filter((p) => p.status === "Research").length).padStart(2, "0"), label: "Research" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">{num}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/30">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 border-t border-white/[0.07]" />
      </section>

      {/* Project list */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-32 pt-4 sm:px-10 lg:px-16 sm:pb-40">
        <div className="divide-y divide-white/[0.06]">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.04}>
              <Link
                to={`/products/${project.slug}`}
                className="group flex flex-col gap-4 py-8 transition-colors sm:flex-row sm:items-start sm:gap-10 sm:py-10"
              >
                <span className="w-14 shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/25">
                  {project.yearStarted}
                </span>
                <span className="flex-1 text-xl font-bold tracking-[-0.025em] text-foreground/65 transition-colors duration-200 group-hover:text-foreground sm:text-2xl">
                  {project.name}
                </span>
                <span className="hidden w-64 shrink-0 text-[13px] leading-snug text-foreground/30 sm:block">
                  {project.summary}
                </span>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-coral/50">
                    {project.pillar}
                  </span>
                  <span className="text-foreground/15">·</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/25">
                    {statusLabel[project.status]}
                  </span>
                </div>
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-foreground/15 transition-colors duration-200 group-hover:text-coral sm:block" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
};

export default Work;
