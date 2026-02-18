import { type ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Check,
  Clipboard,
  FlaskConical,
  Github,
  Linkedin,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
  Twitter,
} from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Navigation } from "@/components/layout/Navigation";
import { founders, homeWhatWeDo, pillarCards, projects, siteMeta, ventureModel } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";
import { cn } from "@/lib/utils";

const socialLinks = [
  { label: "GitHub", href: siteMeta.links.github, icon: Github },
  { label: "LinkedIn", href: siteMeta.links.linkedin, icon: Linkedin },
  { label: "X", href: siteMeta.links.x, icon: Twitter },
] as const;

const statusLabel = {
  Active: "Building",
  Research: "Research",
  Early: "Open",
} as const;

const pillarIcons: Record<(typeof pillarCards)[number]["key"], LucideIcon> = {
  Infrastructure: Server,
  Research: FlaskConical,
  Tooling: ShieldCheck,
};

const Container = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-10", className)}>{children}</div>
);

const LandingButton = ({ className, ...props }: ButtonProps) => (
  <Button className={cn("h-11 rounded-full px-6", className)} {...props} />
);

const StatusChip = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-muted-foreground",
      className,
    )}
  >
    {children}
  </span>
);

const SurfaceCard = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div
    className={cn(
      "rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(12,16,20,0.92),rgba(10,14,18,0.88))] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl",
      className,
    )}
  >
    {children}
  </div>
);

const Reveal = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0.22 : 0.65, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Section = ({
  id,
  label,
  title,
  description,
  viewAllTo,
  viewAllLabel = "View all",
  children,
}: {
  id: string;
  label: string;
  title: string;
  description?: string;
  viewAllTo?: string;
  viewAllLabel?: string;
  children: ReactNode;
}) => (
  <section id={id} className="scroll-mt-32 py-16 sm:py-24">
    <Container>
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral/80">{label}</p>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">{title}</h2>
            {description ? <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p> : null}
          </div>
          {viewAllTo ? (
            <Link
              to={viewAllTo}
              className="inline-flex items-center gap-2 text-sm text-coral transition-opacity hover:opacity-80"
            >
              {viewAllLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </Reveal>
      {children}
    </Container>
  </section>
);

const Index = () => {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  usePageSeo({
    title: "Home",
    description:
      "Paperfrogs HQ is an infrastructure-first, research-driven studio building production-ready systems and tools that matter.",
    path: "/",
  });

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = window.setTimeout(() => setCopied(false), 1500);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteMeta.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(55% 35% at 0% 0%, hsl(var(--coral) / 0.18) 0%, transparent 70%), radial-gradient(45% 28% at 100% 0%, hsl(var(--coral) / 0.14) 0%, transparent 72%), linear-gradient(180deg, #07090B 0%, #090D11 100%)",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 noise-bg opacity-75" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-14rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-coral/20 blur-[120px]"
        animate={shouldReduceMotion ? undefined : { y: [0, 18, 0], opacity: [0.35, 0.52, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Navigation />

      <main id="top" className="relative z-10 pb-14 pt-24 sm:pb-20 sm:pt-28">
        <Container className="pt-2 sm:pt-6">
          <section className="grid gap-10 pb-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-12 lg:pb-16">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.1,
                    delayChildren: shouldReduceMotion ? 0 : 0.08,
                  },
                },
              }}
              className="max-w-3xl"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
                  show: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="inline-flex items-center rounded-full border border-coral/35 bg-coral/10 px-3 py-1 text-xs tracking-[0.12em] text-coral"
              >
                Think · Build · Evolve
              </motion.p>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
                  show: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.2 : 0.75, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="mt-6 text-balance text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl"
                style={{ fontFamily: "Inter, Sora, system-ui, sans-serif" }}
              >
                Building infrastructure-first systems.
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
                  show: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
              >
                {siteMeta.tagline} Research to production, with durable systems designed for real constraints.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
                  show: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.2 : 0.68, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <LandingButton asChild size="lg" variant="hero">
                  <a href="#work">Explore Work</a>
                </LandingButton>
                <LandingButton asChild size="lg" variant="heroOutline" className="border-white/20 bg-transparent">
                  <a href="#contact">Get in touch</a>
                </LandingButton>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.24 }}
            >
              <SurfaceCard className="relative overflow-hidden p-6 sm:p-8">
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-[38%] rounded-full bg-[conic-gradient(from_160deg_at_50%_50%,rgba(255,255,255,0.05),rgba(255,127,80,0.18),rgba(255,255,255,0.05))] blur-3xl"
                  animate={shouldReduceMotion ? undefined : { rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative space-y-5">
                  <StatusChip className="border-coral/30 bg-coral/12 text-coral">Infrastructure studio</StatusChip>
                  <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                    Premium systems work, grounded in clear interfaces, careful research, and production readiness.
                  </p>

                  <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-coral/80">Founded</p>
                      <p className="mt-2 text-foreground">{siteMeta.founded}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-coral/80">Location</p>
                      <p className="mt-2 flex items-center gap-2 text-foreground">
                        <MapPin className="h-4 w-4 text-coral" />
                        {siteMeta.location}
                      </p>
                    </div>
                  </div>

                  <div className="relative h-px overflow-hidden rounded-full bg-white/10">
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-coral to-transparent"
                      animate={shouldReduceMotion ? undefined : { x: ["-30%", "130%"] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </SurfaceCard>
            </motion.div>
          </section>
        </Container>

        <Section
          id="work"
          label="Work"
          title="Selected initiatives in motion."
          description="A focused slate of infrastructure and research programs moving from exploration to deployment."
          viewAllTo="/projects"
        >
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.slice(0, 6).map((project, index) => (
              <Reveal key={project.slug} delay={0.06 + index * 0.05}>
                <motion.article
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="group"
                >
                  <SurfaceCard className="h-full p-6 transition-colors duration-300 group-hover:border-coral/55 group-hover:bg-coral/[0.04]">
                    <div className="flex items-center justify-between gap-3">
                      <StatusChip className="text-foreground/85">{statusLabel[project.status]}</StatusChip>
                      <StatusChip className="text-coral/90">{project.pillar}</StatusChip>
                    </div>

                    <h3 className="mt-5 text-xl text-foreground">{project.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

                    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                      <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-coral">
                        View details
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                      {project.links?.github ? (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          GitHub
                        </a>
                      ) : null}
                    </div>
                  </SurfaceCard>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="approach"
          label="Approach"
          title="Studio approach."
          description="A clear research-to-production method for building durable systems."
          viewAllTo="/studio"
        >
          <div className="mt-6 flex flex-wrap gap-2">
            {homeWhatWeDo.map((item) => (
              <StatusChip key={item}>{item}</StatusChip>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pillarCards.map((pillar, index) => {
              const Icon = pillarIcons[pillar.key];

              return (
                <Reveal key={pillar.title} delay={0.07 + index * 0.05}>
                  <SurfaceCard className="h-full p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-coral/30 bg-coral/10 text-coral">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg text-foreground">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                  </SurfaceCard>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {ventureModel.map((item, index) => (
              <Reveal key={item.title} delay={0.08 + index * 0.05}>
                <SurfaceCard className="h-full p-5">
                  <p className="text-sm uppercase tracking-[0.16em] text-coral/80">Venture model</p>
                  <h3 className="mt-3 text-base text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="about"
          label="About"
          title="About Paperfrogs HQ."
          description="Who we are, what we believe, and where we are going next."
          viewAllTo="/studio"
        >
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <SurfaceCard className="h-full p-6 sm:p-7">
                <p className="text-sm uppercase tracking-[0.16em] text-coral/80">About Paperfrogs</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Paperfrogs HQ is an infrastructure-first studio founded in {siteMeta.founded} in {siteMeta.location}.
                  We turn deep technical exploration into dependable systems that can run under pressure.
                </p>
              </SurfaceCard>
            </Reveal>

            <Reveal delay={0.05}>
              <SurfaceCard className="h-full p-6 sm:p-7">
                <p className="text-sm uppercase tracking-[0.16em] text-coral/80">Vision</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Build long-horizon infrastructure and tools that improve trust, reliability, and real-world execution
                  in critical systems.
                </p>
              </SurfaceCard>
            </Reveal>

            <Reveal delay={0.08}>
              <SurfaceCard className="h-full p-6 sm:p-7">
                <p className="text-sm uppercase tracking-[0.16em] text-coral/80">Future Plan</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Continue shipping from research into production, expand open technical initiatives, and scale
                  infrastructure partnerships through the next phases of growth.
                </p>
              </SurfaceCard>
            </Reveal>

            <Reveal delay={0.11}>
              <SurfaceCard className="h-full p-6 sm:p-7">
                <p className="text-sm uppercase tracking-[0.16em] text-coral/80">Founders</p>
                <ul className="mt-4 space-y-4">
                  {founders.slice(0, 2).map((founder) => (
                    <li key={founder.name} className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-base text-foreground">{founder.name}</p>
                        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{founder.role}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={founder.links.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${founder.name} LinkedIn`}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/25 text-coral transition-colors hover:border-coral/60 hover:bg-coral/10"
                        >
                          <Linkedin className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href={founder.links.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${founder.name} GitHub`}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/25 text-coral transition-colors hover:border-coral/60 hover:bg-coral/10"
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </SurfaceCard>
            </Reveal>
          </div>
        </Section>

        <Section
          id="contact"
          label="Contact"
          title="Start with a problem statement."
          description="Share constraints, timelines, and goals. We reply with a concrete next step."
          viewAllTo="/contact"
        >
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <SurfaceCard className="h-full p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Email</p>
                <a
                  href={`mailto:${siteMeta.email}`}
                  className="mt-4 inline-flex text-2xl tracking-[-0.02em] text-foreground transition-colors hover:text-coral"
                  style={{ fontFamily: "Inter, Sora, system-ui, sans-serif" }}
                >
                  {siteMeta.email}
                </a>

                <div className="mt-6">
                  <LandingButton
                    type="button"
                    variant="heroOutline"
                    className="border-white/20 bg-transparent"
                    onClick={copyEmail}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    {copied ? "Copied" : "Copy email"}
                  </LandingButton>
                </div>
              </SurfaceCard>
            </Reveal>

            <Reveal delay={0.08}>
              <SurfaceCard className="h-full p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Social</p>
                <div className="mt-5 space-y-3">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-coral/45 hover:text-foreground"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Icon className="h-4 w-4 text-coral" />
                        {label}
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </SurfaceCard>
            </Reveal>
          </div>

          <p className="mt-12 border-t border-white/10 pt-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteMeta.name}. We build tools for things that matter.
          </p>
        </Section>

        <Container>
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-black/25 p-6 sm:p-8">
              <p className="inline-flex items-center gap-2 text-coral">
                <Sparkles className="h-4 w-4" />
                Built openly. Built iteratively.
              </p>
              <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base">
                We believe the most useful products are the ones built for durability, where research becomes real systems.
              </p>
            </div>
          </Reveal>
        </Container>
      </main>
    </div>
  );
};

export default Index;
