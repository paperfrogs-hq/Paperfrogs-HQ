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
import { founders, homeWhatWeDo, pillarCards, projects, siteMeta, ventureModel } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

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
      "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground",
      className,
    )}
  >
    {children}
  </span>
);

const SurfaceCard = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div
    className={cn(
      "rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl",
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
  children,
}: {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
}) => (
  <section id={id} className="scroll-mt-32 py-16 sm:py-24">
    <Container>
      <Reveal>
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral/80">{label}</p>
          <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p> : null}
        </div>
      </Reveal>
      {children}
    </Container>
  </section>
);

const Index = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  usePageSeo({
    title: "Home",
    description:
      "Paperfrogs HQ is an infrastructure-first, research-driven studio building production-ready systems and tools that matter.",
    path: "/",
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          isScrolled
            ? "border-white/10 bg-background/70 backdrop-blur-xl"
            : "border-transparent bg-background/30 backdrop-blur-sm",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <a
            href="#top"
            className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            aria-label="Paperfrogs HQ home"
          >
            <img
              src="/paperfrogs-logo-nav.png"
              alt="Paperfrogs HQ"
              className="h-10 w-10 object-contain sm:h-11 sm:w-11"
              loading="eager"
              decoding="async"
            />
          </a>

          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-colors duration-200 hover:text-foreground focus-visible:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <LandingButton asChild variant="hero" size="sm" className="px-4 sm:px-5">
              <a href="#contact">Contact</a>
            </LandingButton>
          </div>
        </Container>
      </header>

      <main id="top" className="relative z-10 pb-14 sm:pb-20">
        <Container className="pt-14 sm:pt-20">
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
        >
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.slice(0, 6).map((project, index) => (
              <Reveal key={project.slug} delay={0.06 + index * 0.05}>
                <motion.article
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="group"
                >
                  <SurfaceCard className="h-full p-6 transition-colors duration-300 group-hover:border-coral/55 group-hover:bg-white/[0.04]">
                    <div className="flex items-center justify-between gap-3">
                      <StatusChip className="text-foreground/85">{statusLabel[project.status]}</StatusChip>
                      <StatusChip className="text-coral/90">{project.pillar}</StatusChip>
                    </div>

                    <h3 className="mt-5 text-xl text-foreground">{project.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

                    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                      <Link
                        to={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-coral"
                      >
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
          title="How Paperfrogs builds."
          description="Infrastructure-first execution with research discipline and production outcomes."
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
          title="Research-driven studio from Dhaka."
          description="Paperfrogs HQ was founded in 2025 to turn deep technical exploration into dependable systems that can run under pressure."
        >
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
            <Reveal>
              <SurfaceCard className="h-full p-6 sm:p-7">
                <p className="text-sm uppercase tracking-[0.16em] text-coral/80">Paperfrogs HQ</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We build infrastructure with conviction, from early research through production hardening.
                </p>
                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <p>
                    Founded <span className="text-foreground">{siteMeta.founded}</span>
                  </p>
                  <p>
                    Based in <span className="text-foreground">{siteMeta.location}</span>
                  </p>
                </div>
              </SurfaceCard>
            </Reveal>

            {founders.slice(0, 2).map((founder, index) => (
              <Reveal key={founder.name} delay={0.08 + index * 0.05}>
                <SurfaceCard className="h-full p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Founder</p>
                  <h3 className="mt-3 text-xl text-foreground">{founder.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{founder.bio}</p>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          label="Contact"
          title="Start with a problem statement."
          description="Share constraints, timelines, and goals. We reply with a concrete next step."
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
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
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
