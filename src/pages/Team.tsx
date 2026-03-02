import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { founders, siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const Team = () => {
  usePageSeo({
    title: "Team",
    description: "Meet the founders and team behind Paperfrogs HQ.",
    path: "/team",
  });

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-6 pt-16 pb-0 sm:px-10 lg:px-16 sm:pt-20">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35">Team</p>
          <h1 className="mt-4 text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-[1.03] tracking-[-0.035em] text-foreground">
            The people{" "}
            <span className="text-foreground/30">behind the work.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/40">
            A small, focused team with deep technical roots in infrastructure, security, and applied research.
          </p>
        </Reveal>
        <div className="mt-12 border-t border-white/[0.07]" />
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16 sm:py-28">
        <div className="divide-y divide-white/[0.06]">
          {founders.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.07}>
              <div className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:gap-16 sm:py-14">
                {/* Avatar placeholder */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-2xl font-bold text-foreground/30">
                  {founder.name.charAt(0)}
                </div>

                <div className="flex-1">
                  <p className="text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">{founder.name}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/60">{founder.role}</p>
                  <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-foreground/40">{founder.bio}</p>
                  <div className="mt-6 flex gap-3">
                    <a
                      href={founder.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/35 transition-colors hover:border-coral/40 hover:text-coral"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                    <a
                      href={founder.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/35 transition-colors hover:border-coral/40 hover:text-coral"
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 pb-32 pt-16 sm:px-10 lg:px-16 sm:pb-40">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">We are growing</p>
              <p className="mt-3 max-w-xl text-base text-foreground/40">
                Interested in building infrastructure-first systems with us? Reach out.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              Get in touch <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Team;
