import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, Github, Linkedin, MapPin, Rocket, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { capabilities, engagementModes, founders, studioPrinciples } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const panelClass =
  "rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(12,16,20,0.92),rgba(10,14,18,0.88))] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl";

const process = [
  {
    title: "Research",
    description: "We isolate assumptions, map constraints, and validate what matters before writing expensive production code.",
    icon: FlaskConical,
  },
  {
    title: "Architecture",
    description: "We design interfaces, observability, and failure paths early so systems remain legible under pressure.",
    icon: ShieldCheck,
  },
  {
    title: "Production",
    description: "We ship incrementally with operating rhythm, hardening loops, and practical delivery checkpoints.",
    icon: Rocket,
  },
] as const;

const Studio = () => {
  usePageSeo({
    title: "Studio",
    description: "How Paperfrogs HQ builds durable systems through clear interfaces and secure-by-default architecture.",
    path: "/studio",
  });

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-6xl px-6 pb-8 pt-8 sm:px-10 sm:pb-12">
        <Reveal>
          <div className={panelClass + " grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"}>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-coral/85">Studio</p>
              <h1 className="mt-4 text-4xl leading-[1.04] tracking-[-0.03em] sm:text-5xl">
                Operating model for research to production systems.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground/85 sm:text-base">
                Paperfrogs HQ is an infrastructure-first studio. We build dependable systems by combining deep technical
                exploration with production-grade execution.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="sm">
                  <Link to="/projects">Explore projects</Link>
                </Button>
                <Button asChild variant="heroOutline" size="sm" className="border-white/20 bg-transparent">
                  <Link to="/contact">Work with us</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 text-sm">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-foreground/90">
                <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Base</p>
                <p className="mt-2 inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-coral" />
                  Dhaka, Bangladesh
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-foreground/90">
                <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Core Mode</p>
                <p className="mt-2">Infrastructure-first systems design</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-foreground/90">
                <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Delivery Path</p>
                <p className="mt-2">Research to architecture to production hardening</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 sm:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {process.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={0.05 + index * 0.04}>
                <article className={panelClass + " h-full p-6"}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-coral/30 bg-coral/10 text-coral">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-xl">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 sm:px-10">
        <Reveal>
          <div className={panelClass + " p-6 sm:p-8"}>
            <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Engagement Models</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {engagementModes.map((mode) => (
                <article key={mode.name} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="text-lg text-foreground">{mode.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">{mode.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 sm:px-10">
        <Reveal>
          <div className={panelClass + " p-6 sm:p-8"}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Founders</p>
              <Link to="/team" className="inline-flex items-center gap-2 text-sm text-coral transition-opacity hover:opacity-80">
                Team page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {founders.map((founder, index) => (
                <Reveal key={founder.name} delay={0.05 + index * 0.04}>
                  <article className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <h3 className="text-xl text-foreground">{founder.name}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">{founder.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/80">{founder.bio}</p>
                    <div className="mt-5 flex items-center gap-3">
                      <a
                        href={founder.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${founder.name} LinkedIn`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/25 text-coral transition-colors hover:border-coral/60 hover:bg-coral/10"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={founder.links.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${founder.name} GitHub`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/25 text-coral transition-colors hover:border-coral/60 hover:bg-coral/10"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 sm:px-10">
        <Reveal>
          <div className={panelClass + " p-6 sm:p-8"}>
            <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Capabilities</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((capability) => (
                <div key={capability} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground/95">
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 sm:pb-32">
        <Reveal>
          <div className={panelClass + " p-6 sm:p-8"}>
            <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Studio Principles</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {studioPrinciples.map((principle) => (
                <div key={principle} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground/95">
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Studio;
