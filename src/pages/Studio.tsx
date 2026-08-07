import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { capabilities, founders, pillarCards, projects, studioPrinciples } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const buildProcess = [
  {
    num: "01",
    title: "Research",
    description:
      "We isolate assumptions before we write production code. Every project starts with a clear problem statement, explicit constraints, and validated direction.",
  },
  {
    num: "02",
    title: "Architecture",
    description:
      "Interfaces, observability, and failure paths are designed first. Systems that are legible under pressure are built that way on purpose.",
  },
  {
    num: "03",
    title: "Production",
    description:
      "We ship incrementally with operating rhythm and practical hardening loops. Shipping is a milestone, not a finish line.",
  },
] as const;

const Studio = () => {
  usePageSeo({
    title: "Studio",
    description: "Paperfrogs HQ is an infrastructure-first research studio. We build durable systems through clear interfaces and secure-by-default architecture.",
    path: "/studio",
  });

  const shippedCount = projects.filter((p) => p.status === "Live").length;
  const activeCount = projects.filter((p) => p.status === "Active").length;
  const researchCount = projects.filter((p) => p.status === "Research").length;

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-5 pt-16 pb-0 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35">Studio</p>
          <h1 className="mt-4 text-[clamp(2.2rem,6vw,5.5rem)] font-bold leading-[1.03] tracking-[-0.04em] text-foreground text-balance">
            Operating model for{" "}
            <span className="text-coral">research-to-production systems.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/45 sm:mt-6 text-pretty">
            Paperfrogs HQ is a small, focused research studio. We combine deep technical exploration with
            production-grade execution — no slideware, no speculation, no throwaway prototypes.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/[0.06] pt-10 sm:mt-12 sm:gap-x-10 md:gap-x-14">
            {[
              { num: String(projects.length).padStart(2, "0"), label: "Products" },
              { num: String(shippedCount).padStart(2, "0"), label: "Shipped" },
              { num: String(activeCount).padStart(2, "0"), label: "Building" },
              { num: String(researchCount).padStart(2, "0"), label: "Research" },
              { num: "BD", label: "Base" },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col">
                <p className="text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl lg:text-4xl">{num}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/30">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 pf-divider sm:mt-14" />
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
        <Reveal className="mb-12 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">What we are</p>
          <h2 className="mt-5 text-[clamp(1.7rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance">
            Three pillars, one loop.
          </h2>
        </Reveal>
        <div className="divide-y divide-white/[0.05]">
          {pillarCards.map((pillar, i) => (
            <Reveal key={pillar.key} delay={i * 0.06}>
              <div className="grid grid-cols-1 gap-4 py-8 transition-colors hover:px-2 sm:grid-cols-[180px_1fr] sm:gap-10 sm:py-10 lg:grid-cols-[200px_1fr] lg:gap-14">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/65">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-lg font-bold tracking-[-0.025em] text-foreground/70">{pillar.title}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/30">
                    {pillar.key}
                  </p>
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/50 text-pretty">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.06] px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
        <Reveal className="mb-12 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Process</p>
          <h2 className="mt-5 text-[clamp(1.7rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance">
            How we build.
          </h2>
        </Reveal>
        <div className="divide-y divide-white/[0.05]">
          {buildProcess.map(({ num, title, description }, i) => (
            <Reveal key={num} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[180px_1fr] sm:gap-10 sm:py-10 lg:grid-cols-[200px_1fr] lg:gap-14">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/65">{num}</span>
                  <p className="mt-2 text-lg font-bold tracking-[-0.025em] text-foreground/70">{title}</p>
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/50 text-pretty">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.06] px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
        <Reveal className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Capabilities</p>
          <h2 className="mt-5 text-[clamp(1.7rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance">
            What we do well.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2 text-[12px] font-semibold text-foreground/55 transition-colors hover:border-coral/30 hover:text-foreground/85 sm:px-5 sm:py-2.5 sm:text-[13px]"
              >
                {cap}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.06] px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
        <Reveal className="mb-12 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Principles</p>
          <h2 className="mt-5 text-[clamp(1.7rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance">
            What we stand for.
          </h2>
        </Reveal>
        <div className="divide-y divide-white/[0.05]">
          {studioPrinciples.map((principle, i) => (
            <Reveal key={principle} delay={i * 0.04}>
              <div className="flex items-center gap-6 py-5 sm:gap-10 sm:py-6">
                <span className="w-8 shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/55 sm:w-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-bold tracking-[-0.025em] text-foreground/70 sm:text-lg">{principle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.06] px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
        <Reveal className="mb-12 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Founders</p>
            <h2 className="mt-5 text-[clamp(1.7rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance">
              Who we are.
            </h2>
          </div>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 self-start text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/35 transition-colors hover:text-coral sm:self-auto"
          >
            People <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
          {founders.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.06}>
              <article className="pf-surface flex h-full flex-col gap-5 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-coral/30 sm:p-8">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-coral/65">
                    {String(i + 1).padStart(2, "0")} · Founder
                  </span>
                  <h3 className="mt-3 text-xl font-bold tracking-[-0.025em] text-foreground">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/40">
                    {founder.role}
                  </p>
                </div>
                <p className="flex-1 text-[13px] leading-relaxed text-foreground/55 sm:text-[13.5px] text-pretty">
                  {founder.bio}
                </p>
                <div className="flex shrink-0 gap-2 border-t border-white/[0.05] pt-4">
                  <a
                    href={founder.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${founder.name} on LinkedIn`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/45 transition-all hover:scale-[1.02] hover:border-coral/40 hover:text-coral"
                  >
                    <Linkedin className="h-3 w-3" /> LinkedIn
                  </a>
                  <a
                    href={founder.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${founder.name} on GitHub`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/45 transition-all hover:scale-[1.02] hover:border-coral/40 hover:text-coral"
                  >
                    <Github className="h-3 w-3" /> GitHub
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.06] px-5 pb-28 pt-16 sm:px-10 sm:pb-32 sm:pt-20 lg:px-16 lg:pb-40 lg:pt-28">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Work with us</p>
              <h2 className="mt-4 text-[clamp(1.7rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance">
                Start with a problem statement.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/45 text-pretty">
                Interested in collaborating? Tell us what you're building and where it hurts.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-foreground px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:scale-[1.02] hover:bg-foreground/85 hover:shadow-[0_10px_30px_-10px_hsl(0_0%_100%/0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:self-auto sm:px-6 sm:py-3 sm:text-[12px]"
            >
              Get in touch <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Studio;