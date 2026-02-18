import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, FlaskConical, Layers3, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { FilterChips } from "@/components/site/FilterChips";
import { FilterDropdown } from "@/components/site/FilterDropdown";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/site";
import type { Pillar, ProjectStatus, StackTag } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const pillarOptions: Pillar[] = ["Infrastructure", "Research", "Tooling"];
const statusOptions: ProjectStatus[] = ["Active", "Research", "Early"];
const stackOptions: StackTag[] = ["Rust", "TypeScript", "Python", "Linux", "Security"];

const statusLabel: Record<ProjectStatus, string> = {
  Active: "Building",
  Research: "Research",
  Early: "Open",
};

const panelClass =
  "rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(12,16,20,0.92),rgba(10,14,18,0.88))] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl";

const Work = () => {
  usePageSeo({
    title: "Projects",
    description: "Explore Paperfrogs HQ projects across infrastructure, research, and tooling.",
    path: "/projects",
  });

  const [params, setParams] = useSearchParams();
  const urlPillar = params.get("pillar");
  const validPillar = pillarOptions.includes(urlPillar as Pillar) ? (urlPillar as Pillar) : "All";

  const [pillar, setPillar] = useState<Pillar | "All">(validPillar);
  const [status, setStatus] = useState<ProjectStatus | "All">("All");
  const [stack, setStack] = useState<StackTag | "All">("All");

  useEffect(() => {
    setPillar(validPillar);
  }, [validPillar]);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesPillar = pillar === "All" || project.pillar === pillar;
      const matchesStatus = status === "All" || project.status === status;
      const matchesStack = stack === "All" || project.stack.includes(stack);
      return matchesPillar && matchesStatus && matchesStack;
    });
  }, [pillar, stack, status]);

  const overview = useMemo(
    () => ({
      total: projects.length,
      building: projects.filter((project) => project.status === "Active").length,
      research: projects.filter((project) => project.status === "Research").length,
    }),
    [],
  );

  const hasFilters = pillar !== "All" || status !== "All" || stack !== "All";

  const onPillarChange = (next: Pillar | "All") => {
    setPillar(next);
    const nextParams = new URLSearchParams(params);
    if (next === "All") {
      nextParams.delete("pillar");
      setParams(nextParams, { replace: true });
      return;
    }

    nextParams.set("pillar", next);
    setParams(nextParams, { replace: true });
  };

  const clearFilters = () => {
    setPillar("All");
    setStatus("All");
    setStack("All");
    setParams(new URLSearchParams(), { replace: true });
  };

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-6xl px-6 pb-8 pt-8 sm:px-10 sm:pb-12">
        <Reveal>
          <div className={panelClass + " grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"}>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-coral/85">Projects</p>
              <h1 className="mt-4 text-4xl leading-[1.04] tracking-[-0.03em] sm:text-5xl">
                Infrastructure, research, and tooling in motion.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground/85 sm:text-base">
                Projects are run with a research-to-production loop: explicit constraints, stable architecture, and
                practical shipping milestones.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="sm">
                  <Link to="/studio">How we work</Link>
                </Button>
                <Button asChild variant="heroOutline" size="sm" className="border-white/20 bg-transparent">
                  <Link to="/contact">Start a project</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 text-sm">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-foreground/90">
                <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Total initiatives</p>
                <p className="mt-2 text-xl text-foreground">{overview.total}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-foreground/90">
                <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Currently building</p>
                <p className="mt-2 text-xl text-foreground">{overview.building}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-foreground/90">
                <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Research track</p>
                <p className="mt-2 text-xl text-foreground">{overview.research}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 sm:px-10">
        <Reveal>
          <div className={panelClass + " p-5 sm:p-6"}>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm text-foreground/85">
                <Layers3 className="h-4 w-4 text-coral" />
                Filter the project set
              </div>
              {hasFilters ? (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-coral/55 hover:text-foreground"
                >
                  Clear filters
                </button>
              ) : null}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FilterChips label="Pillar" options={pillarOptions} value={pillar} onChange={onPillarChange} />
              <FilterChips label="Status" options={statusOptions} value={status} onChange={setStatus} />
              <FilterDropdown label="Stack" options={stackOptions} value={stack} onChange={setStack} />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 sm:pb-32">
        <div className="mb-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-foreground/90">
            {filtered.length} visible projects
          </span>
          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-muted-foreground">
            {pillar === "All" ? "All pillars" : pillar}
          </span>
          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-muted-foreground">
            {status === "All" ? "All status" : statusLabel[status]}
          </span>
          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-muted-foreground">
            {stack === "All" ? "All stacks" : stack}
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((project, index) => (
              <Reveal key={project.slug} delay={0.05 + index * 0.04}>
                <article className={panelClass + " flex h-full min-h-[250px] flex-col p-6 transition-colors duration-300 hover:border-coral/50 hover:bg-coral/[0.04]"}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-foreground/90">
                        {statusLabel[project.status]}
                      </span>
                      <span className="rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-xs text-coral">
                        {project.pillar}
                      </span>
                    </div>
                    <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{project.yearStarted}</span>
                  </div>

                  <h2 className="mt-5 text-2xl leading-tight">{project.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{project.summary}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">{project.tags.join(" · ")}</p>

                  <div className="mt-auto flex flex-wrap items-center gap-5 pt-6 text-sm">
                    <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-coral">
                      View details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {project.links?.github ? (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className={panelClass + " p-7 text-sm text-muted-foreground"}>No projects found for this filter set.</div>
        )}
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 sm:pb-32">
        <Reveal>
          <div className={panelClass + " grid gap-4 p-6 sm:p-8 md:grid-cols-3"}>
            <article className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="inline-flex items-center gap-2 text-sm text-foreground/90">
                <FlaskConical className="h-4 w-4 text-coral" />
                Assumption-led research
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="inline-flex items-center gap-2 text-sm text-foreground/90">
                <ShieldCheck className="h-4 w-4 text-coral" />
                Security and reliability first
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="inline-flex items-center gap-2 text-sm text-foreground/90">
                <ArrowRight className="h-4 w-4 text-coral" />
                Production-ready delivery
              </p>
            </article>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Work;
