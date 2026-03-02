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

  const activeCount = projects.filter((p) => p.status === "Active").length;
  const researchCount = projects.filter((p) => p.status === "Research").length;

  return (
    <SiteShell>
      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-16 pb-0 sm:px-10 lg:px-16 sm:pt-20">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35">Studio</p>
          <h1 className="mt-4 text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[1.03] tracking-[-0.035em] text-foreground">
            Operating model for{" "}
            <span className="text-coral">research-to-production systems.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/40">
            Paperfrogs HQ is a small, focused research studio. We combine deep technical exploration with
            production-grade execution — no slideware, no speculation, no throwaway prototypes.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-10 border-t border-white/[0.07] pt-10">
            {[
              { num: String(projects.length).padStart(2, "0"), label: "Projects" },
              { num: String(activeCount).padStart(2, "0"), label: "In production" },
              { num: String(researchCount).padStart(2, "0"), label: "In research" },
              { num: "Dhaka", label: "Base" },
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

      {/* Identity */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16 sm:py-28">
        <Reveal className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">What we are</p>
          <h2 className="mt-5 text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground">
            Three pillars, one loop.
          </h2>
        </Reveal>
        <div className="divide-y divide-white/[0.06]">
          {pillarCards.map((pillar, i) => (
            <Reveal key={pillar.key} delay={i * 0.06}>
              <div className="grid grid-cols-1 gap-5 py-10 sm:grid-cols-[200px_1fr] sm:gap-14">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-lg font-bold tracking-[-0.02em] text-foreground/65">{pillar.title}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/25">
                    {pillar.key}
                  </p>
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/40">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 py-20 sm:px-10 lg:px-16 sm:py-28">
        <Reveal className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Process</p>
          <h2 className="mt-5 text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground">
            How we build.
          </h2>
        </Reveal>
        <div className="divide-y divide-white/[0.06]">
          {buildProcess.map(({ num, title, description }, i) => (
            <Reveal key={num} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-5 py-10 sm:grid-cols-[200px_1fr] sm:gap-14">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/60">{num}</span>
                  <p className="mt-2 text-lg font-bold tracking-[-0.02em] text-foreground/65">{title}</p>
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/40">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 py-20 sm:px-10 lg:px-16 sm:py-28">
        <Reveal className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Capabilities</p>
          <h2 className="mt-5 text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground">
            What we do well.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="flex flex-wrap gap-3">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 text-[13px] font-semibold text-foreground/45"
              >
                {cap}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Principles */}
      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 py-20 sm:px-10 lg:px-16 sm:py-28">
        <Reveal className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Principles</p>
          <h2 className="mt-5 text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground">
            What we stand for.
          </h2>
        </Reveal>
        <div className="divide-y divide-white/[0.06]">
          {studioPrinciples.map((principle, i) => (
            <Reveal key={principle} delay={i * 0.04}>
              <div className="flex items-center gap-10 py-7">
                <span className="w-10 shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-bold tracking-[-0.02em] text-foreground/65">{principle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 py-20 sm:px-10 lg:px-16 sm:py-28">
        <Reveal className="mb-14 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Founders</p>
            <h2 className="mt-5 text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground">
              Who we are.
            </h2>
          </div>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/30 transition-colors hover:text-coral"
          >
            People <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>

        <div className="divide-y divide-white/[0.06]">
          {founders.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.06}>
              <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:gap-14">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-base font-bold text-foreground/30">
                  {founder.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-xl font-bold tracking-[-0.025em] text-foreground">{founder.name}</p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/50">{founder.role}</p>
                  <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-foreground/35">{founder.bio}</p>
                </div>
                <div className="flex shrink-0 gap-4">
                  <a href={founder.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/30 transition-colors hover:border-coral/40 hover:text-coral">
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                  <a href={founder.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/30 transition-colors hover:border-coral/40 hover:text-coral">
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 pb-32 pt-16 sm:px-10 lg:px-16 sm:pb-40 sm:pt-20">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Work with us</p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/40">
                Interested in collaborating? Start with a problem statement.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
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
