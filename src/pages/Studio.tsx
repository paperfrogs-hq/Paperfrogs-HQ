import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { capabilities, engagementModes, studioPrinciples } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const panelClass =
  "rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(12,16,20,0.92),rgba(10,14,18,0.88))] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl";

const Studio = () => {
  usePageSeo({
    title: "Studio",
    description: "How Paperfrogs HQ builds durable systems through clear interfaces and secure-by-default architecture.",
    path: "/studio",
  });

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-8 sm:px-10 sm:pb-12">
        <Reveal>
          <div className={panelClass + " p-6 sm:p-8"}>
            <p className="text-xs uppercase tracking-[0.2em] text-coral/85">Studio</p>
            <h1 className="mt-4 text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">Research-first thinking, production-first execution.</h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Paperfrogs HQ works as an infrastructure and research studio. We shape system architecture, validate assumptions, and harden outcomes for real production pressure.
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
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 sm:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {engagementModes.map((mode, index) => (
            <Reveal key={mode.name} delay={0.06 + index * 0.05}>
              <article className={panelClass + " h-full p-6"}>
                <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Engagement</p>
                <h2 className="mt-3 text-xl">{mode.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{mode.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
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
