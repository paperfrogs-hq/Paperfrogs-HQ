import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { founders } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const Team = () => {
  usePageSeo({
    title: "Team",
    description: "Meet the founders and team behind Paperfrogs HQ.",
    path: "/team",
  });

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-5 pt-16 pb-0 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35">Team</p>
          <h1 className="mt-4 text-[clamp(2.2rem,6vw,5rem)] font-bold leading-[1.03] tracking-[-0.04em] text-foreground text-balance">
            The people{" "}
            <span className="text-coral">behind the work.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/45 sm:mt-6 text-pretty">
            A small, focused team with deep technical roots in infrastructure, security, and applied research.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/[0.06] pt-10 sm:mt-12 sm:gap-x-14">
            <div className="flex flex-col">
              <p className="text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl lg:text-4xl">
                {String(founders.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/30">
                Founders
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl lg:text-4xl">02</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/30">
                Studios
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl lg:text-4xl">01</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/30">
                Mission
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 pf-divider sm:mt-14" />
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">
        <Reveal className="mb-8 sm:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">
            Founders
          </p>
          <h2 className="mt-4 text-[clamp(1.7rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.04em] text-foreground text-balance">
            Two people. One studio.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {founders.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.08}>
              <article className="pf-surface group flex h-full flex-col gap-6 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-coral/30 sm:p-8 lg:p-10">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-coral/65">
                    {String(i + 1).padStart(2, "0")} · Founder
                  </span>
                  <h3 className="mt-4 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold leading-[1.1] tracking-[-0.035em] text-foreground">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/40">
                    {founder.role}
                  </p>
                </div>

                <p className="flex-1 text-[14px] leading-relaxed text-foreground/55 sm:text-[14.5px] text-pretty">
                  {founder.bio}
                </p>

                <div className="flex flex-wrap gap-2.5 border-t border-white/[0.05] pt-5 sm:gap-3">
                  <a
                    href={founder.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${founder.name} on LinkedIn`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/45 transition-all hover:scale-[1.02] hover:border-coral/40 hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                  <a
                    href={founder.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${founder.name} on GitHub`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/45 transition-all hover:scale-[1.02] hover:border-coral/40 hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 sm:px-10 lg:px-16">
        <Reveal>
          <div className="pf-surface grid grid-cols-1 gap-6 rounded-2xl p-6 sm:gap-8 sm:p-8 md:grid-cols-3 md:p-10 lg:p-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-foreground/35">
                How we work
              </p>
              <h3 className="mt-3 text-lg font-bold tracking-[-0.025em] text-foreground">
                Async by default.
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-foreground/45">
                Decisions in writing. Documented context, not just outcomes.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-foreground/35">
                What we ship
              </p>
              <h3 className="mt-3 text-lg font-bold tracking-[-0.025em] text-foreground">
                Production-grade.
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-foreground/45">
                Infrastructure that runs under pressure. No throwaway prototypes.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-foreground/35">
                Where we are
              </p>
              <h3 className="mt-3 text-lg font-bold tracking-[-0.025em] text-foreground">
                Dhaka, BD.
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-foreground/45">
                Remote-first. Working hours that respect deep focus.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.06] px-5 pb-28 pt-16 sm:px-10 sm:pb-32 sm:pt-20 lg:px-16 lg:pb-40 lg:pt-28">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">
                We are growing
              </p>
              <h2 className="mt-4 text-[clamp(1.7rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance">
                Build with us.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/45 text-pretty">
                Interested in infrastructure-first systems? Reach out — even if we don't have a posted role today.
              </p>
            </div>
            <Link
              to="/careers"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-foreground px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:scale-[1.02] hover:bg-foreground/85 hover:shadow-[0_10px_30px_-10px_hsl(0_0%_100%/0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:self-auto sm:px-6 sm:py-3 sm:text-[12px]"
            >
              See open roles <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Team;