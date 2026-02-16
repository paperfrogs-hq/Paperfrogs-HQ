import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { capabilities, founders } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";
import { Github, Linkedin } from "lucide-react";

const Team = () => {
  usePageSeo({
    title: "Team",
    description: "Meet the founders and core capabilities at Paperfrogs HQ.",
    path: "/team",
  });

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-6 sm:px-10 sm:pb-32">
        <Reveal>
          <SectionHeader
            label="Team"
            title="Founders"
            description="Paperfrogs HQ was founded in 2025 by Niloy Majumder and Joy G. Majumdar in Dhaka, Bangladesh."
          />
        </Reveal>

        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={index * 0.07}>
              <article className="rounded-2xl border border-border bg-card/70 p-7 transition-[transform,border-color,box-shadow] duration-200 ease-out motion-safe:hover:-translate-y-1 hover:border-coral/50 hover:shadow-[0_0_0_1px_hsl(var(--coral)/0.25),0_16px_30px_hsl(var(--coral)/0.10)]">
                <h2 className="text-2xl">{founder.name}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">{founder.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{founder.bio}</p>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={founder.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${founder.name} LinkedIn`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-coral transition-colors hover:border-coral/60 hover:bg-coral/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={founder.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${founder.name} GitHub`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-coral transition-colors hover:border-coral/60 hover:bg-coral/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <SectionHeader label="Capabilities" title="What we can execute" />
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <Reveal key={capability} delay={0.06 + index * 0.03}>
                <div className="rounded-xl border border-border bg-card/60 p-4 text-sm transition-[transform,border-color] duration-200 ease-out motion-safe:hover:-translate-y-1 hover:border-coral/50">
                  {capability}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Team;
