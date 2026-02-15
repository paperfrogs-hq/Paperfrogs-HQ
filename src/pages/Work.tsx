import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { FilterChips } from "@/components/site/FilterChips";
import { FilterDropdown } from "@/components/site/FilterDropdown";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { usePageSeo } from "@/hooks/usePageSeo";
import type { Pillar, ProjectStatus, StackTag } from "@/data/site";
import { projects } from "@/data/site";

const pillarOptions: Pillar[] = ["Infrastructure", "Research", "Tooling"];
const statusOptions: ProjectStatus[] = ["Active", "Research", "Early"];
const stackOptions: StackTag[] = ["Rust", "TypeScript", "Python", "Linux", "Security"];

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

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-6 sm:px-10">
        <Reveal>
          <SectionHeader
            label="Portfolio"
            title="Projects"
            description="Infrastructure-first projects. Research translated into production systems."
          />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 sm:px-10">
        <div className="grid gap-6 rounded-2xl border border-border bg-card/55 p-5 sm:grid-cols-2 lg:grid-cols-3 lg:p-6">
          <FilterChips label="Pillar" options={pillarOptions} value={pillar} onChange={onPillarChange} />
          <FilterChips label="Status" options={statusOptions} value={status} onChange={setStatus} />
          <FilterDropdown label="Stack" options={stackOptions} value={stack} onChange={setStack} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 sm:pb-32">
        <p className="mb-6 text-sm text-muted-foreground">{filtered.length} projects</p>
        {filtered.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.03}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-card/60 p-8 text-muted-foreground">
            No projects found for this filter set.
          </div>
        )}
      </section>
    </SiteShell>
  );
};

export default Work;
