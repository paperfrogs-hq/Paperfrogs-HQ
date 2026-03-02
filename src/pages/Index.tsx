import { type ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { founders, pillarCards, projects, siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";
import { cn } from "@/lib/utils";

const EASING = [0.22, 1, 0.36, 1] as const;

const socialLinks = [
  { label: "GitHub", href: siteMeta.links.github, icon: Github },
  { label: "LinkedIn", href: siteMeta.links.linkedin, icon: Linkedin },
  { label: "X", href: siteMeta.links.x, icon: Twitter },
] as const;

const heroLines = [
  "infrastructure first.",
  "research driven.",
  "production ready.",
  "secure by default.",
  "built to last.",
] as const;

const projectNames = projects.map((p) => p.name);
const techTags = projects.flatMap((p) => p.tags || []);

const CyclingText = () => {
  const rm = useReducedMotion();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroLines.length), 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: rm ? 0 : 60, filter: rm ? "none" : "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: rm ? 0 : -40, filter: rm ? "none" : "blur(4px)" }}
        transition={{ duration: rm ? 0.15 : 0.5, ease: EASING }}
        className="block text-coral"
      >
        {heroLines[index]}
      </motion.span>
    </AnimatePresence>
  );
};

const Ticker = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => (
  <div className="overflow-hidden py-4 border-y border-white/[0.06]">
    <div className={cn("flex gap-8 whitespace-nowrap", reverse ? "marquee-track-slow" : "marquee-track")}>
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <span key={i} className="text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/25">
          {item}
          <span className="ml-8 text-foreground/10">·</span>
        </span>
      ))}
    </div>
  </div>
);

const Reveal = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const rm = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: rm ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: rm ? 0.15 : 0.65, ease: EASING, delay: rm ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">{children}</p>
);

const Index = () => {
  usePageSeo({
    title: "Home",
    description: "Paperfrogs HQ is an infrastructure-first, research-driven studio building production-ready systems and tools that matter.",
    path: "/",
  });

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navigation />
      <main className="relative z-10">

        {/* Hero */}
        <section className="mx-auto w-full max-w-7xl px-6 pt-40 pb-0 sm:px-10 lg:px-16 sm:pt-48">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASING, delay: 0.05 }}
          >
            <SectionLabel>Paperfrogs HQ · Est. {siteMeta.founded}</SectionLabel>
            <h1 className="mt-6 text-[clamp(2.8rem,7.5vw,7rem)] font-bold leading-[1.0] tracking-[-0.04em] text-foreground">
              We build tools
              <br />
              <CyclingText />
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/40 sm:text-lg">
              An infrastructure-first studio combining deep technical research with production-grade execution.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
              >
                Explore work <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/studio"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground/50 transition-all hover:border-white/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
              >
                How we work
              </Link>
            </div>
          </motion.div>

        </section>

        {/* Ticker — project names */}
        <div className="mt-16 w-full overflow-hidden">
          <Ticker items={projectNames} />
        </div>

        {/* Pillars */}
        <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16 sm:py-28">
          <Reveal className="mb-14">
            <SectionLabel>Approach</SectionLabel>
            <h2 className="mt-5 text-[clamp(1.8rem,4.5vw,4rem)] font-bold leading-[1.07] tracking-[-0.03em] text-foreground">
              Three pillars,<br />one loop.
            </h2>
          </Reveal>
          <div className="divide-y divide-white/[0.06]">
            {pillarCards.map((pillar, i) => (
              <Reveal key={pillar.key} delay={i * 0.06}>
                <div className="grid grid-cols-1 gap-5 py-10 sm:grid-cols-[200px_1fr] sm:gap-14">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/60">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-lg font-bold tracking-[-0.02em] text-foreground/65">{pillar.title}</p>
                  </div>
                  <p className="text-[15px] leading-relaxed text-foreground/40">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Founders */}
        <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 py-20 sm:px-10 lg:px-16 sm:py-28">
          <Reveal className="mb-14 flex items-end justify-between gap-4">
            <div>
              <SectionLabel>People</SectionLabel>
              <h2 className="mt-5 text-[clamp(1.8rem,4.5vw,4rem)] font-bold leading-[1.07] tracking-[-0.03em] text-foreground">Built by two founders.</h2>
            </div>
            <Link to="/team" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/30 transition-colors hover:text-coral">
              People <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
          <div className="divide-y divide-white/[0.06]">
            {founders.map((founder, i) => (
              <Reveal key={founder.name} delay={i * 0.06}>
                <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:gap-14">
                  <div className="flex-1">
                    <p className="text-xl font-bold tracking-[-0.025em] text-foreground">{founder.name}</p>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/50">{founder.role}</p>
                    <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-foreground/35">{founder.bio}</p>
                  </div>
                  <div className="flex shrink-0 gap-4">
                    <a href={founder.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-foreground/25 transition-colors hover:text-coral">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href={founder.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-foreground/25 transition-colors hover:text-coral">
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 pb-32 pt-20 sm:px-10 lg:px-16 sm:pb-40 sm:pt-28">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-5 text-[clamp(1.8rem,4.5vw,4rem)] font-bold leading-[1.07] tracking-[-0.03em] text-foreground">Ready to build something?</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/40">Share your problem. We will return with a concrete next step.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${siteMeta.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
              >
                {siteMeta.email}
              </a>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-foreground/30 transition-colors hover:border-coral/40 hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
