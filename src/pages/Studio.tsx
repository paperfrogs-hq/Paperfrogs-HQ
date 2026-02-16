import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { engagementModes } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const aboutItems = [
  {
    number: "01",
    title: "Product Invention",
    description: "We create new digital products from zero to launch, driven by genuine user needs.",
  },
  {
    number: "02",
    title: "Long-term Vision",
    description: "Every product is built with sustainable growth and lasting impact in mind.",
  },
  {
    number: "03",
    title: "Multiple Brands",
    description: "Independent identities, unified philosophy. All under one innovative roof.",
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
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-6 sm:px-10 sm:pb-32">
        <Reveal>
          <SectionHeader
            label="About"
            title="The home of digital innovation"
            description="PaperFrogs is not just a company - it's a launchpad. We invent, design, and build digital products that solve real problems with elegance and simplicity."
          />
        </Reveal>

        <Reveal className="mt-6">
          <p className="max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every product we create starts with a question: &quot;Will this genuinely help someone?&quot; If the answer is yes,
            we dive deep. We research, prototype, iterate, and refine until the experience feels effortless.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {aboutItems.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.05}>
              <article className="rounded-2xl border border-border bg-card/60 p-5 transition-[transform,border-color] duration-200 ease-out motion-safe:hover:-translate-y-1 hover:border-coral/50">
                <p className="text-sm text-coral">{item.number}</p>
                <h3 className="mt-2 text-lg leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <SectionHeader label="Engagement" title="Ways we work together" />
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {engagementModes.map((mode, index) => (
              <Reveal key={mode.name} delay={0.06 + index * 0.05}>
                <article className="rounded-2xl border border-border bg-card/60 p-6 transition-[transform,border-color] duration-200 ease-out motion-safe:hover:-translate-y-1 hover:border-coral/50">
                  <h3 className="text-xl">{mode.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{mode.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14 rounded-3xl border border-border bg-card/70 p-8">
          <h2 className="text-3xl">Need a systems partner?</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We work best with teams that value durable architecture and clear operating rhythms.
          </p>
          <div className="mt-6">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Start a conversation</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Studio;
