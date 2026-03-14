import { type ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { pillarCards, projects, siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";
import { cn } from "@/lib/utils";
import { ProductHuntBadge } from "@/components/site/ProductHuntBadge";
import { FeaturedProjectsSlider } from "@/components/site/FeaturedProjectsSlider";

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
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroLines.length),
      3500,
    );
    return () => clearInterval(id);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{
          opacity: 0,
          y: rm ? 0 : 60,
          filter: rm ? "none" : "blur(4px)",
        }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{
          opacity: 0,
          y: rm ? 0 : -40,
          filter: rm ? "none" : "blur(4px)",
        }}
        transition={{ duration: rm ? 0.15 : 0.5, ease: EASING }}
        className="block text-coral"
      >
        {heroLines[index]}
      </motion.span>
    </AnimatePresence>
  );
};

const Ticker = ({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) => (
  <div className="overflow-hidden py-4 border-y border-white/[0.06]">
    <div
      className={cn(
        "flex gap-8 whitespace-nowrap",
        reverse ? "marquee-track-slow" : "marquee-track",
      )}
    >
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <span
          key={i}
          className="text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/45"
        >
          {item}
          <span className="ml-8 text-foreground/25">·</span>
        </span>
      ))}
    </div>
  </div>
);

const Reveal = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  const rm = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: rm ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: rm ? 0.15 : 0.65,
        ease: EASING,
        delay: rm ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">
    {children}
  </p>
);

const Index = () => {
  usePageSeo({
    title: "Home",
    description:
      "Paperfrogs HQ is an infrastructure-first, research-driven studio building production-ready systems and tools that matter.",
    path: "/",
  });

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navigation />
      <main className="relative z-10">
        {/* Hero */}
        <section className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-8 sm:px-10 lg:px-16 sm:pt-40 overflow-visible">
          <style>{`
            @keyframes sparkMorphA {
              0% { transform: rotate(0deg) translate3d(0px, 0px, 0) scale(1); opacity: 0.78; }
              25% { transform: rotate(70deg) translate3d(-8px, 5px, 0) scale(1.03); opacity: 0.84; }
              50% { transform: rotate(160deg) translate3d(6px, -7px, 0) scale(0.98); opacity: 0.74; }
              75% { transform: rotate(255deg) translate3d(-5px, -4px, 0) scale(1.02); opacity: 0.83; }
              100% { transform: rotate(360deg) translate3d(0px, 0px, 0) scale(1); opacity: 0.78; }
            }
            @keyframes sparkMorphB {
              0% { transform: rotate(360deg) translate3d(0px, 0px, 0) scale(1.01); opacity: 0.8; }
              30% { transform: rotate(280deg) translate3d(7px, -6px, 0) scale(0.97); opacity: 0.74; }
              60% { transform: rotate(145deg) translate3d(-6px, 8px, 0) scale(1.04); opacity: 0.86; }
              100% { transform: rotate(0deg) translate3d(0px, 0px, 0) scale(1.01); opacity: 0.8; }
            }
            @keyframes sparkMorphC {
              0% { transform: rotate(-20deg) translate3d(0px, 0px, 0) scale(1); opacity: 0.76; }
              20% { transform: rotate(55deg) translate3d(5px, 7px, 0) scale(1.03); opacity: 0.83; }
              45% { transform: rotate(135deg) translate3d(-8px, 3px, 0) scale(0.98); opacity: 0.75; }
              70% { transform: rotate(230deg) translate3d(4px, -7px, 0) scale(1.04); opacity: 0.86; }
              100% { transform: rotate(340deg) translate3d(0px, 0px, 0) scale(1); opacity: 0.76; }
            }
            .animate-spark-morph-a {
              animation: sparkMorphA 32s cubic-bezier(0.42, 0, 0.18, 1) infinite;
            }
            .animate-spark-morph-b {
              animation: sparkMorphB 40s cubic-bezier(0.42, 0, 0.18, 1) infinite;
            }
            .animate-spark-morph-c {
              animation: sparkMorphC 46s cubic-bezier(0.42, 0, 0.18, 1) infinite;
            }
          `}</style>
          <div className="absolute inset-0 pointer-events-none">
            {/* Large orb with spark border - top right */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2">
              <div
                className="absolute inset-0 rounded-full blur-[120px] animate-spark-morph-a"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, rgba(249, 115, 22, 0.15) 20%, rgba(251, 146, 60, 0.2) 50%, rgba(249, 115, 22, 0.15) 80%, transparent 100%)",
                  filter: "blur(60px)",
                }}
              />
              <div
                className="absolute inset-0 rounded-full blur-[100px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)",
                }}
              />
            </div>

            {/* Bottom left orb - extended */}
            <div className="absolute -bottom-1/4 left-0 w-[1300px] h-[1300px] translate-x-0 translate-y-1/3">
              <div
                className="absolute inset-0 rounded-full blur-[120px] animate-spark-morph-b"
                style={{
                  background:
                    "conic-gradient(from 45deg, transparent 0%, rgba(217, 119, 6, 0.15) 25%, rgba(249, 115, 22, 0.18) 50%, rgba(217, 119, 6, 0.15) 75%, transparent 100%)",
                  filter: "blur(60px)",
                }}
              />
              <div
                className="absolute inset-0 rounded-full blur-[100px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(217, 119, 6, 0.06) 0%, transparent 70%)",
                }}
              />
            </div>

            {/* Center accent orb */}
            <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2">
              <div
                className="absolute inset-0 rounded-full blur-[80px] animate-spark-morph-c"
                style={{
                  background:
                    "conic-gradient(from -45deg, transparent 0%, rgba(249, 115, 22, 0.1) 30%, rgba(251, 146, 60, 0.12) 50%, rgba(249, 115, 22, 0.1) 70%, transparent 100%)",
                  filter: "blur(40px)",
                }}
              />
              <div
                className="absolute inset-0 rounded-full blur-[60px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, transparent 70%)",
                }}
              />
            </div>

            {/* Bottom center fill orb - extended */}
            <div className="absolute bottom-0 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 translate-y-1/3">
              <div
                className="absolute inset-0 rounded-full blur-[120px] animate-spark-morph-a"
                style={{
                  background:
                    "conic-gradient(from 90deg, transparent 0%, rgba(249, 115, 22, 0.12) 25%, rgba(251, 146, 60, 0.15) 50%, rgba(249, 115, 22, 0.12) 75%, transparent 100%)",
                  filter: "blur(60px)",
                }}
              />
            </div>

            {/* Extra coverage - right side lower */}
            <div className="absolute -bottom-1/4 right-0 w-[1100px] h-[1100px] translate-x-1/4 translate-y-1/4">
              <div
                className="absolute inset-0 rounded-full blur-[100px] animate-spark-morph-c"
                style={{
                  background:
                    "conic-gradient(from 180deg, transparent 0%, rgba(249, 115, 22, 0.1) 30%, rgba(251, 146, 60, 0.12) 50%, rgba(249, 115, 22, 0.1) 70%, transparent 100%)",
                  filter: "blur(50px)",
                }}
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASING, delay: 0.05 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <ProductHuntBadge />
            </div>
            <h1 className="mt-6 text-[clamp(2.8rem,7.5vw,7rem)] font-bold leading-[1.0] tracking-[-0.04em] text-foreground">
              We build tools
              <br />
              <CyclingText />
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/40 sm:text-lg">
              An infrastructure-first studio combining deep technical research
              with production-grade execution.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                Explore work{" "}
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/studio"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-orange-500/50 bg-white/[0.02] backdrop-blur px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-300 transition-all hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                How we work
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Ticker — project names */}
        <div className="mt-10 w-full overflow-hidden">
          <Ticker items={projectNames} />
        </div>

        {/* Featured Projects Slider */}
        <section className="mx-auto w-full max-w-7xl px-6 pt-4 pb-1 sm:px-10 lg:px-16 sm:pt-6">
          <FeaturedProjectsSlider projects={projects.slice(0, 6)} />
        </section>

        {/* Pillars */}
        <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-16 sm:py-16">
          <Reveal className="mb-14">
            <SectionLabel>Approach</SectionLabel>
            <h2 className="mt-5 text-[clamp(1.8rem,4.5vw,4rem)] font-bold leading-[1.07] tracking-[-0.03em] text-foreground">
              Three pillars,
              <br />
              one loop.
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
                    <p className="mt-2 text-lg font-bold tracking-[-0.02em] text-foreground/65">
                      {pillar.title}
                    </p>
                  </div>
                  <p className="text-[15px] leading-relaxed text-foreground/40">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 pb-32 pt-20 sm:px-10 lg:px-16 sm:pb-40 sm:pt-28">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-5 text-[clamp(1.8rem,4.5vw,4rem)] font-bold leading-[1.07] tracking-[-0.03em] text-foreground">
              Ready to build something?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/40">
              Share your problem. We will return with a concrete next step.
            </p>
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
