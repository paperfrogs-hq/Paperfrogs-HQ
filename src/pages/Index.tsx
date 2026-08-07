import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
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
  <div className="overflow-hidden border-y border-white/[0.05] py-4">
    <div className={cn("flex gap-8 whitespace-nowrap", reverse ? "marquee-track-slow" : "marquee-track")}>
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <span key={i} className="text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/20">
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
      viewport={{ once: true, amount: 0.12 }}
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

        <section className="mx-auto w-full max-w-7xl px-5 pt-36 pb-0 sm:px-10 sm:pt-48 lg:px-16 lg:pt-56">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASING, delay: 0.05 }}
          >
            <SectionLabel>Paperfrogs HQ · Est. {siteMeta.founded}</SectionLabel>
            <h1 className="mt-6 text-[clamp(2.4rem,7.5vw,7rem)] font-bold leading-[1.0] tracking-[-0.045em] text-foreground text-balance">
              We build tools
              <br />
              <CyclingText />
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/45 sm:mt-8 sm:text-lg text-pretty">
              An infrastructure-first studio combining deep technical research with production-grade execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:bg-foreground/85 hover:shadow-[0_10px_30px_-10px_hsl(0_0%_100%/0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:px-6 sm:py-3 sm:text-[12px]"
              >
                Explore work <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/studio"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/55 transition-all hover:border-white/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:px-6 sm:py-3 sm:text-[12px]"
              >
                How we work
              </Link>
            </div>
          </motion.div>
        </section>

        <div className="mt-16 w-full overflow-hidden sm:mt-20 lg:mt-24">
          <Ticker items={projectNames} />
        </div>

        <FeaturedProducts />

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
          <Reveal className="mb-12 sm:mb-14">
            <SectionLabel>Approach</SectionLabel>
            <h2 className="mt-5 text-[clamp(1.7rem,4.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance">
              Three pillars,<br />one loop.
            </h2>
          </Reveal>
          <div className="divide-y divide-white/[0.05]">
            {pillarCards.map((pillar, i) => (
              <Reveal key={pillar.key} delay={i * 0.06}>
                <div className="grid grid-cols-1 gap-4 py-8 transition-colors hover:px-2 sm:grid-cols-[180px_1fr] sm:gap-10 sm:py-10 lg:grid-cols-[200px_1fr] lg:gap-14">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/65">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-lg font-bold tracking-[-0.025em] text-foreground/70">{pillar.title}</p>
                  </div>
                  <p className="text-[15px] leading-relaxed text-foreground/45 text-pretty">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 sm:px-10 lg:px-16">
          <Reveal>
            <Link
              to="/studio"
              className="pf-surface group flex flex-col items-start gap-6 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-coral/30 sm:p-8 md:flex-row md:items-center md:justify-between md:p-10"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35">
                  Inside the studio
                </p>
                <h3 className="mt-3 text-[clamp(1.3rem,2.8vw,2rem)] font-bold leading-[1.1] tracking-[-0.035em] text-foreground">
                  How we research, design, and ship.
                </h3>
                <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-foreground/45">
                  Our process, principles, and the loop behind every product we put our name on.
                </p>
              </div>
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground/55 transition-all duration-300 group-hover:border-coral/40 group-hover:bg-coral/10 group-hover:text-coral">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
          <Reveal className="mb-12 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <SectionLabel>People</SectionLabel>
              <h2 className="mt-5 text-[clamp(1.7rem,4.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance">Built by two founders.</h2>
            </div>
            <Link to="/team" className="inline-flex items-center gap-2 self-start text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/35 transition-colors hover:text-coral sm:self-auto">
              People <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
          <div className="divide-y divide-white/[0.05]">
            {founders.map((founder, i) => (
              <Reveal key={founder.name} delay={i * 0.06}>
                <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-start sm:gap-10 sm:py-10 lg:gap-14">
                  <div className="min-w-0 flex-1">
                    <p className="text-xl font-bold tracking-[-0.025em] text-foreground">{founder.name}</p>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/55">{founder.role}</p>
                    <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-foreground/40 text-pretty">{founder.bio}</p>
                  </div>
                  <div className="flex shrink-0 gap-3">
                    <a href={founder.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-foreground/35 transition-all hover:scale-105 hover:border-coral/40 hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral">
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a href={founder.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-foreground/35 transition-all hover:scale-105 hover:border-coral/40 hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral">
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-28 pt-16 sm:px-10 sm:pb-32 sm:pt-20 lg:px-16 lg:pb-40 lg:pt-28">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-5 text-[clamp(1.7rem,4.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground text-balance">Ready to build something?</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/45 text-pretty">Share your problem. We will return with a concrete next step.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={`mailto:${siteMeta.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:bg-foreground/85 hover:shadow-[0_10px_30px_-10px_hsl(0_0%_100%/0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:px-6 sm:py-3 sm:text-[12px]"
              >
                {siteMeta.email}
              </a>
              <div className="flex items-center gap-2 sm:gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground/35 transition-all hover:scale-105 hover:border-coral/40 hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:h-11 sm:w-11"
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