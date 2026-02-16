import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/layout/SiteShell";
import { HeroStackedHeadline } from "@/components/site/HeroStackedHeadline";
import { FeaturedProjectsSlider } from "@/components/site/FeaturedProjectsSlider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { homeWhatWeDo, projects, siteMeta, ventureModel } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";
import {
  EASING_PRIMARY,
  MOTION_DURATION,
  MOTION_OFFSET,
  reducedMotionDuration,
  reducedMotionValue,
} from "@/lib/motion";

const heroLines = [
  "Building infrastructure.",
  "Shipping real systems.",
  "Tools that matter.",
];

const Index = () => {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroRotateTarget = useTransform(
    heroProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [5, 0, -5],
  );
  const heroScaleTarget = useTransform(
    heroProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [1, 1, 1] : [0.99, 1, 0.99],
  );
  const heroRotateX = useSpring(heroRotateTarget, { stiffness: 140, damping: 24, mass: 0.35 });
  const heroScale = useSpring(heroScaleTarget, { stiffness: 140, damping: 24, mass: 0.35 });

  usePageSeo({
    title: "Home",
    description: "Paperfrogs HQ is a venture studio and conviction-capital partner building infrastructure-first, production-ready systems.",
    path: "/",
  });

  const featuredProjects = projects.slice(0, 8);

  return (
    <SiteShell className="pt-20 sm:pt-24">
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-2 sm:px-10 sm:pb-32 sm:pt-6">
        <motion.div
          ref={heroRef}
          style={{
            transformPerspective: 1200,
            transformStyle: "preserve-3d",
            rotateX: heroRotateX,
            scale: heroScale,
            willChange: "transform",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: reducedMotionValue(shouldReduceMotion, MOTION_OFFSET.large) }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotionDuration(shouldReduceMotion, MOTION_DURATION.hero),
              ease: EASING_PRIMARY,
            }}
            style={{ willChange: "transform, opacity" }}
            className="space-y-3"
          >
            <span className="inline-flex rounded-full border border-coral/50 px-3 py-1 text-xs text-coral">
              Think - Build - Evolve
            </span>
          </motion.div>

          <div className="mt-6">
            <HeroStackedHeadline lines={heroLines} delay={0.08} />
          </div>

          <motion.p
            initial={{ opacity: 0, y: reducedMotionValue(shouldReduceMotion, MOTION_OFFSET.large) }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotionDuration(shouldReduceMotion, MOTION_DURATION.hero),
              ease: EASING_PRIMARY,
              delay: shouldReduceMotion ? 0 : 0.34,
            }}
            style={{ willChange: "transform, opacity" }}
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-coral sm:text-xl"
          >
            {siteMeta.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: reducedMotionValue(shouldReduceMotion, MOTION_OFFSET.large) }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotionDuration(shouldReduceMotion, MOTION_DURATION.hero),
              ease: EASING_PRIMARY,
              delay: shouldReduceMotion ? 0 : 0.48,
            }}
            style={{ willChange: "transform, opacity" }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" variant="hero">
              <Link to="/projects">Explore projects</Link>
            </Button>
            <Button asChild size="lg" variant="heroOutline">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </motion.div>
        </motion.div>
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
            label="Venture model"
            title="Venture capital with operating depth."
            description="Paperfrogs works as a venture studio and capital partner. We back high-conviction technical work and help ship it into real products."
          />
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {ventureModel.map((item, index) => (
            <Reveal key={item.title} delay={0.06 + index * 0.05}>
              <article className="rounded-2xl border border-border bg-card/60 p-5">
                <h3 className="text-base font-medium text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 sm:pb-32">
        <Reveal>
          <SectionHeader
            label="Featured"
            title="Current projects"
            description="A focused set of systems, tools, and research currently in motion."
          />
        </Reveal>
        <div className="mt-8">
          <FeaturedProjectsSlider projects={featuredProjects} />
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
