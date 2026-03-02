import { ArrowRight, MapPin, Clock, Layers } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

type JobPost = {
  num: string;
  seat: string;
  pillar: string;
  type: string;
  location: string;
  level: string;
  compensation: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  stack: string[];
};

const teamRoster: JobPost[] = [
  {
    num: "01",
    seat: "Infrastructure Engineer",
    pillar: "Infrastructure",
    type: "Full-time",
    location: "Remote",
    level: "Senior",
    compensation: "৳2,40,000 – ৳3,60,000 / yr",
    summary:
      "Design, operate, and own our core infrastructure layer — networking, compute, and deployment. You'll make correctness-guaranteeing decisions that affect every product we ship.",
    responsibilities: [
      "Architect and maintain production networking and compute environments",
      "Own deployment pipelines and release infrastructure end-to-end",
      "Define and enforce infrastructure standards across the team",
      "Collaborate with security and systems engineers on hardening",
    ],
    requirements: [
      "5+ years in infrastructure or platform engineering roles",
      "Deep knowledge of Linux internals and networking (TCP/IP, DNS, TLS)",
      "Experience with Rust or willingness to work primarily in Rust",
      "Comfort with on-call rotations and incident response",
    ],
    stack: ["Rust", "Linux", "Networking", "NixOS"],
  },
  {
    num: "02",
    seat: "Security Researcher",
    pillar: "Research",
    type: "Full-time",
    location: "Remote",
    level: "Mid / Senior",
    compensation: "৳2,00,000 – ৳3,20,000 / yr",
    summary:
      "Conduct applied security research across our tooling and infrastructure. You'll own threat modeling, attack surface analysis, and hardening work — not as a separate audit team, but as a core engineering function.",
    responsibilities: [
      "Perform continuous threat modeling on new and existing systems",
      "Identify and document attack surfaces in Paperfrogs tooling",
      "Build and maintain security tooling and scanning pipelines",
      "Write detailed internal research reports and mitigations",
    ],
    requirements: [
      "Proven experience in security research or offensive security",
      "Familiarity with auditing compiled code (Rust, C, Go)",
      "Ability to communicate complex findings clearly in writing",
      "OSS contributions or published research preferred",
    ],
    stack: ["Security", "Auditing", "Rust", "OSS"],
  },
  {
    num: "03",
    seat: "Systems Programmer",
    pillar: "Infrastructure",
    type: "Full-time",
    location: "Remote",
    level: "Senior",
    compensation: "৳2,40,000 – ৳3,60,000 / yr",
    summary:
      "Build the low-level core: protocol implementations, performance-critical components, and internal tooling that everything else depends on. You are comfortable with unsafe code, memory layouts, and tight resource constraints.",
    responsibilities: [
      "Implement and maintain core protocol and runtime components",
      "Optimize hot paths and identify bottlenecks with profiling",
      "Write unsafe Rust and C code with clear safety documentation",
      "Review and sign off on performance-sensitive pull requests",
    ],
    requirements: [
      "Expert-level Rust (including unsafe); C experience is a strong plus",
      "Experience with low-level debugging: gdb, perf, flamegraphs",
      "Working knowledge of computer architecture and memory models",
      "Assembly reading ability preferred, writing ability is a bonus",
    ],
    stack: ["Rust", "C", "Assembly", "Linux"],
  },
  {
    num: "04",
    seat: "TypeScript / Frontend Engineer",
    pillar: "Tooling",
    type: "Full-time",
    location: "Remote",
    level: "Mid",
    compensation: "৳1,80,000 – ৳2,80,000 / yr",
    summary:
      "Build the product and developer-facing layer. You'll turn infrastructure primitives into polished, usable interfaces — dashboards, CLIs, and documentation surfaces that engineers actually want to use.",
    responsibilities: [
      "Build and maintain React-based product UIs and developer dashboards",
      "Design component APIs that are consistent and accessible",
      "Work closely with infrastructure engineers on data contracts",
      "Own frontend performance, accessibility, and build tooling",
    ],
    requirements: [
      "3+ years working in TypeScript and React in production",
      "Strong understanding of web performance and accessibility",
      "Experience with design systems and component library patterns",
      "Interest in or experience with developer tooling products",
    ],
    stack: ["TypeScript", "React", "Vite", "Tailwind"],
  },
  {
    num: "05",
    seat: "DevOps / Platform Engineer",
    pillar: "Infrastructure",
    type: "Full-time",
    location: "Remote",
    level: "Mid / Senior",
    compensation: "৳1,80,000 – ৳2,80,000 / yr",
    summary:
      "Own our CI/CD, observability stack, and internal platforms. You bridge engineering and production — making pipelines reproducible, deployments auditable, and incidents short.",
    responsibilities: [
      "Design and maintain CI/CD pipelines across all Paperfrogs projects",
      "Build and operate observability infrastructure (logs, metrics, traces)",
      "Create internal tooling that reduces toil for the engineering team",
      "Own incident response processes and post-mortem culture",
    ],
    requirements: [
      "Experience with Linux, Docker, and container orchestration in production",
      "Strong scripting skills (bash, Python, or Nix)",
      "Familiarity with observability tools (Prometheus, Grafana, OpenTelemetry)",
      "Security-aware mindset — pipeline integrity and supply-chain awareness",
    ],
    stack: ["Linux", "Docker", "Nix", "Prometheus"],
  },
  {
    num: "06",
    seat: "Research Engineer",
    pillar: "Research",
    type: "Full-time",
    location: "Remote",
    level: "Mid / Senior",
    compensation: "৳2,00,000 – ৳3,20,000 / yr",
    summary:
      "Translate open-ended research into concrete prototypes and, eventually, shippable systems. You sit comfortably between theory and production — rigorous enough to publish, pragmatic enough to ship.",
    responsibilities: [
      "Explore and prototype novel approaches to hard infrastructure problems",
      "Write internal research notes and share findings with the team",
      "Collaborate with systems engineers to harden prototypes into products",
      "Stay current with relevant academic literature and OSS developments",
    ],
    requirements: [
      "Strong Python and Rust skills for rapid prototyping and hardening",
      "Background in computer science fundamentals (algorithms, distributed systems)",
      "Ability to context-switch between exploration and delivery modes",
      "Prior research output (papers, OSS, or detailed technical writing) preferred",
    ],
    stack: ["Python", "Rust", "Research", "OSS"],
  },
  {
    num: "07",
    seat: "Technical Writer / Docs Lead",
    pillar: "Tooling",
    type: "Full-time",
    location: "Remote",
    level: "Mid",
    compensation: "৳1,44,000 – ৳2,40,000 / yr",
    summary:
      "Own documentation, RFCs, and our knowledge infrastructure. You'll turn dense internal context into durable, external-grade writing that engineers, users, and contributors actually read — and trust.",
    responsibilities: [
      "Write and maintain developer documentation, guides, and API references",
      "Lead the RFC process and ensure decisions are documented with full context",
      "Build and enforce documentation standards across all Paperfrogs projects",
      "Work with engineers to surface tribal knowledge into written artifacts",
    ],
    requirements: [
      "3+ years of technical writing in a developer-tooling or infrastructure company",
      "Comfortable reading and understanding code (TypeScript, Rust, Python)",
      "Experience with docs-as-code workflows (Markdown, Git, CI)",
      "Strong opinions about structure, clarity, and information hierarchy",
    ],
    stack: ["Markdown", "Writing", "Git", "Systems"],
  },
];

const values = [
  { num: "01", title: "Depth over breadth", body: "We go deep on hard problems. Generalists who go deep are welcome. Generalists who stay shallow are not the right fit." },
  { num: "02", title: "Ship, then harden", body: "We value production experience. We expect you to ship, observe, learn, and improve." },
  { num: "03", title: "Async by default", body: "Decisions happen in writing. We document context, not just outcomes." },
  { num: "04", title: "Security is everyone's job", body: "Every engineer thinks about threat models and failure paths. Security is not a separate team." },
] as const;

const Careers = () => {
  usePageSeo({
    title: "Careers",
    description: "Join the Paperfrogs HQ team. We are hiring infrastructure engineers, researchers, and builders.",
    path: "/careers",
  });

  return (
    <SiteShell>
      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-16 pb-0 sm:px-10 lg:px-16 sm:pt-20">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35">Careers</p>
          <h1 className="mt-4 text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[1.03] tracking-[-0.035em] text-foreground">
            Build things that matter.{" "}
            <span className="text-coral">Join us.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/40">
            We are a small, focused team building infrastructure-first systems. If you care deeply about correctness, durability, and production-grade work — we want to hear from you.
          </p>
        </Reveal>
        <div className="mt-12 border-t border-white/[0.07]" />
      </section>

      {/* Open roles */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16 sm:py-28">
        <Reveal className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Open Roles</p>
          <h2 className="mt-5 text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground">
            7 open positions.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-foreground/40">
            Each role is intentional — no redundancy, no filler. All positions are fully remote and open to applicants worldwide.
          </p>
        </Reveal>

        <div className="flex flex-col gap-6">
          {teamRoster.map((job, i) => (
            <Reveal key={job.num} delay={i * 0.04}>
              <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition-colors hover:border-white/[0.13] hover:bg-white/[0.04] sm:p-8">
                {/* Header row */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-coral/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-coral">
                        {job.pillar}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/35">
                        <Clock className="h-2.5 w-2.5" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/35">
                        <MapPin className="h-2.5 w-2.5" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/35">
                        <Layers className="h-2.5 w-2.5" />
                        {job.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold leading-snug tracking-[-0.025em] text-foreground sm:text-2xl">
                      {job.seat}
                    </h3>
                    <p className="mt-1 text-[13px] font-medium text-foreground/30">{job.compensation}</p>
                  </div>
                  <a
                    href={`mailto:${siteMeta.email}?subject=Application: ${job.seat}`}
                    className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/[0.1] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/40 transition-all hover:border-coral/50 hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                  >
                    Apply <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Summary */}
                <p className="mt-5 text-[15px] leading-relaxed text-foreground/45 border-t border-white/[0.06] pt-5">
                  {job.summary}
                </p>

                {/* Responsibilities + Requirements */}
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/25">Responsibilities</p>
                    <ul className="flex flex-col gap-2">
                      {job.responsibilities.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-foreground/40">
                          <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-coral/50" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/25">Requirements</p>
                    <ul className="flex flex-col gap-2">
                      {job.requirements.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-foreground/40">
                          <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-white/20" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stack tags */}
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
                  {job.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.07] px-3 py-1 text-[11px] font-medium tracking-wide text-foreground/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 py-20 sm:px-10 lg:px-16 sm:py-28">
        <Reveal className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">How we work</p>
          <h2 className="mt-5 text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground">
            What working here looks like.
          </h2>
        </Reveal>
        <div className="divide-y divide-white/[0.06]">
          {values.map(({ num, title, body }, i) => (
            <Reveal key={num} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-5 py-10 sm:grid-cols-[200px_1fr] sm:gap-14">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/60">{num}</span>
                  <p className="mt-2 text-lg font-bold tracking-[-0.02em] text-foreground/65">{title}</p>
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/40">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 pb-32 pt-16 sm:px-10 lg:px-16 sm:pb-40 sm:pt-20">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Don't see your role?</p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/40">
                Send us a note anyway. If you are exceptional, we want to know.
              </p>
            </div>
            <a
              href={`mailto:${siteMeta.email}?subject=Open application`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              {siteMeta.email}
            </a>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Careers;
