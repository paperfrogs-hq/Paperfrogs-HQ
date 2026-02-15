import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/layout/SiteShell";
import { HeroStackedHeadline } from "@/components/site/HeroStackedHeadline";
import { FeaturedTile } from "@/components/site/FeaturedTile";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { homeWhatWeDo, projects, siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const heroLines = [
  "Building infrastructure first systems.",
  "Shipping research into production.",
  "Developing tools that matter.",
];

const Index = () => {
  usePageSeo({
    title: "Home",
    description: "Paperfrogs HQ builds infrastructure first systems and ships research into production-ready tools.",
    path: "/",
  });

  const featuredProjects = projects.slice(0, 8);

  return (
    <SiteShell className="pt-20 sm:pt-24">
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-2 sm:px-10 sm:pb-32 sm:pt-6">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <p>{siteMeta.name}</p>
            <span aria-hidden="true">•</span>
            <p>{siteMeta.location}</p>
            <span className="rounded-full border border-coral/50 px-3 py-1 text-[10px] text-coral">Think - Build - Evolve</span>
          </div>
          <div className="mt-6">
            <HeroStackedHeadline lines={heroLines} />
          </div>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-coral sm:text-xl">
            {siteMeta.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="hero">
              <Link to="/projects">Explore projects</Link>
            </Button>
            <Button asChild size="lg" variant="heroOutline">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 sm:pb-32">
        <Reveal>
          <blockquote className="max-w-4xl border-l-2 border-coral pl-5 text-xl leading-relaxed text-foreground sm:text-2xl">
            We believe the most useful products are the ones built for durability where research becomes real systems.
          </blockquote>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 sm:pb-32">
        <Reveal>
          <SectionHeader
            label="Featured"
            title="Current projects"
            description="A focused set of systems, tools, and research currently in motion."
          />
        </Reveal>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04} className="shrink-0">
              <FeaturedTile project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 sm:pb-32">
        <Reveal>
          <SectionHeader label="What we do" title="Built openly. Built iteratively." />
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {homeWhatWeDo.map((item, index) => (
            <Reveal key={item} delay={0.06 + index * 0.05}>
              <div className="rounded-2xl border border-border bg-card/60 p-5 text-sm text-foreground">{item}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 sm:pb-36">
        <Reveal className="rounded-3xl border border-border bg-card/70 p-8 sm:p-10">
          <h2 className="text-3xl leading-tight sm:text-4xl">Build with us.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Send the problem, your constraints, and your timeline. We will respond with a clear next step.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Contact</Link>
            </Button>
            <a
              href={`mailto:${siteMeta.email}`}
              className="text-sm text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              {siteMeta.email}
            </a>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Index;
