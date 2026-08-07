import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { projects } from "@/data/site";
import type { ProjectStatus } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";
import { cn } from "@/lib/utils";

const statusLabel: Record<ProjectStatus, string> = {
  Live: "Shipped",
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

  const total = projects.length;
  const shipped = projects.filter((p) => p.status === "Live").length;
  const building = projects.filter((p) => p.status === "Active").length;
  const research = projects.filter((p) => p.status === "Research").length;

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-5 pt-16 pb-0 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35">Products</p>
          <h1 className="mt-4 text-[clamp(2.2rem,6vw,5.5rem)] font-bold leading-[1.03] tracking-[-0.04em] text-foreground text-balance">
            Work in motion.{" "}
            <span className="text-coral">Infrastructure, research, tooling.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/45 sm:mt-6 text-pretty">
            Products built with a research-to-production loop: explicit constraints, stable architecture, practical shipping milestones.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/[0.06] pt-10 sm:mt-12 sm:gap-10 sm:gap-x-14">
            {[
              { num: String(total).padStart(2, "0"), label: "Total" },
              { num: String(shipped).padStart(2, "0"), label: "Shipped" },
              { num: String(building).padStart(2, "0"), label: "Building", pulse: true },
              { num: String(research).padStart(2, "0"), label: "Research" },
            ].map(({ num, label, pulse }) => (
              <div key={label} className="flex flex-col">
                <p className="text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl lg:text-4xl">{num}</p>
                <p
                  className={cn(
                    "mt-1 text-[11px] font-semibold uppercase tracking-[0.2em]",
                    pulse ? "pf-pulse text-coral/75" : "text-foreground/30",
                  )}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 pf-divider sm:mt-14" />
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-28 pt-6 sm:px-10 sm:pb-32 sm:pt-8 lg:px-16 lg:pb-40">
        <div className="divide-y divide-white/[0.05]">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.04}>
              <Link
                to={`/products/${project.slug}`}
                className="group flex flex-col gap-3 py-6 transition-all duration-300 sm:flex-row sm:items-start sm:gap-6 sm:py-8 md:gap-10 md:py-10"
              >
                <span className="w-14 shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/30">
                  {project.yearStarted}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="block text-[clamp(1.4rem,2.4vw,1.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-foreground/65 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground">
                    {project.name}
                  </span>
                  <span className="mt-2 block text-[13px] leading-snug text-foreground/40 sm:hidden">
                    {project.summary}
                  </span>
                </div>
                <span className="hidden w-64 shrink-0 text-[13px] leading-snug text-foreground/35 sm:block">
                  {project.summary}
                </span>
                <div className="flex flex-wrap shrink-0 items-center gap-x-3 gap-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-coral/55">
                    {project.pillar}
                  </span>
                  <span className="text-foreground/15">·</span>
                  <span
                    className={cn(
                      "text-[11px] font-semibold uppercase tracking-[0.2em]",
                      project.status === "Active"
                        ? "pf-pulse text-coral/80"
                        : project.status === "Live"
                          ? "text-coral/65"
                          : "text-foreground/30",
                    )}
                  >
                    {statusLabel[project.status]}
                  </span>
                  {project.links?.github && (
                    <>
                      <span className="text-foreground/15">·</span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/25">
                        <Github className="h-3 w-3" />
                        OSS
                      </span>
                    </>
                  )}
                </div>
                <ArrowUpRight className="hidden h-4 w-4 shrink-0 text-foreground/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-coral sm:block" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
};

export default Work;