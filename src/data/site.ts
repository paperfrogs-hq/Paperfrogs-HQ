export const siteMeta = {
  name: "Paperfrogs HQ",
  domain: "paperfrogs.dev",
  tagline: "We build tools for things that matter.",
  location: "Dhaka, Bangladesh",
  founded: 2025,
  email: "hello@paperfrogs.dev",
  links: {
    github: "https://github.com/paperfrogs-hq/",
    linkedin: "https://www.linkedin.com/company/paperfrogs/",
    x: "https://x.com/PaperfrogsHQ",
  },
} as const;

export const designTokens = {
  colors: {
    background: "hsl(0 0% 4%)",
    foreground: "hsl(0 0% 93%)",
    accentCoral: "hsl(16 85% 58%)",
    card: "hsl(0 0% 7%)",
    border: "hsl(0 0% 14%)",
  },
  spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96],
  typeScale: {
    hero: "clamp(2rem, 7vw, 5rem)",
    h1: "clamp(1.75rem, 4vw, 3rem)",
    h2: "clamp(1.5rem, 3vw, 2.25rem)",
    body: "1rem",
    small: "0.875rem",
  },
  radii: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
  },
  shadows: {
    soft: "0 10px 30px hsl(0 0% 0% / 0.25)",
    coralGlow: "0 0 0 1px hsl(16 85% 58% / 0.45), 0 20px 40px hsl(16 85% 58% / 0.12)",
  },
} as const;

export type Pillar = "Infrastructure" | "Research" | "Tooling";
export type ProjectStatus = "Active" | "Research" | "Early";
export type ProjectTag = "Infrastructure" | "Research" | "Tooling" | "Security" | "OSS";
export type StackTag = "Rust" | "TypeScript" | "Python" | "Linux" | "Security";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  yearStarted: number;
  pillar: Pillar;
  status: ProjectStatus;
  tags: ProjectTag[];
  stack: StackTag[];
  problem: string;
  approach: string;
  today: string;
  next: string;
  links?: {
    github?: string;
    docs?: string;
    demo?: string;
  };
  timeline?: {
    journey: Array<{
      period: string;
      detail: string;
    }>;
    upcoming: Array<{
      period: string;
      detail: string;
    }>;
  };
};

export const projects: Project[] = [
  {
    slug: "fusion",
    name: "Fusion",
    summary: "Cryptographic audio provenance infrastructure.",
    yearStarted: 2023,
    pillar: "Infrastructure",
    status: "Active",
    tags: ["Infrastructure", "Security", "Tooling"],
    stack: ["Rust", "TypeScript", "Security"],
    problem: "Audio authenticity and provenance are difficult to verify across generation, editing, and distribution workflows.",
    approach: "Fusion applies cryptographic provenance primitives and verification paths designed for production media pipelines.",
    today: "Fusion v2 is in development with a redefined infrastructure-first direction.",
    next: "Public beta launch, platform integrations, and enterprise pilots across 2026.",
    links: {
      demo: "https://fusion.paperfrogs.dev",
    },
    timeline: {
      journey: [
        { period: "December 2023", detail: "Project initiated as an AI audio player experiment." },
        { period: "July 2024", detail: "Beta site launched." },
        { period: "January 2025", detail: "Stepped back from the original direction." },
        { period: "November 2025", detail: "Project direction redefined." },
        { period: "December 2025", detail: "Fusion v2 development begins." },
      ],
      upcoming: [
        { period: "Q1 2026", detail: "Public beta launch (planned)." },
        { period: "Q2 2026", detail: "Platform integrations and enterprise pilots." },
        { period: "Q3 2026", detail: "Infrastructure scaling and expanded use cases." },
        { period: "Q4 2026", detail: "Market expansion and ecosystem growth." },
      ],
    },
  },
  {
    slug: "appfence",
    name: "AppFence",
    summary: "A Wayland-first, open-source Application Permission Firewall for Linux.",
    yearStarted: 2025,
    pillar: "Infrastructure",
    status: "Research",
    tags: ["Infrastructure", "Security", "OSS"],
    stack: ["Rust", "Linux", "Security"],
    problem: "Desktop applications on Linux need policy-driven least-privilege controls with clear, enforceable boundaries.",
    approach: "AppFence uses an operating-system-level security framework with Wayland-first mediation and policy enforcement.",
    today: "Foundation and architecture are scoped for a multi-phase security roadmap.",
    next: "Move through trust-anchor development, enforcement foundations, and security validation milestones.",
    links: {
      github: "https://github.com/paperfrogs-hq/AppFence",
    },
    timeline: {
      journey: [
        {
          period: "December 2025",
          detail:
            "Project formally initiated as an operating-system-level application security framework (Wayland-first, least-privilege, policy-driven design).",
        },
      ],
      upcoming: [
        {
          period: "Q1 2026",
          detail:
            "Foundation and trust-anchor development (Core daemon, threat model, scope lock, and identity primitives).",
        },
        {
          period: "Q2 2026",
          detail:
            "Controlled execution and enforcement foundations (Application launcher, process tracking, filesystem and network isolation).",
        },
        {
          period: "Q3 2026",
          detail: "User mediation and desktop integration (Prompt infrastructure, desktop UI, and portal mediation).",
        },
        {
          period: "Q4 2026",
          detail: "System hardening and safety guarantees (Failure modes, recovery paths, observability, and diagnostics).",
        },
        {
          period: "Q1 2027",
          detail: "Security validation and packaging (Threat-model traceability, negative testing, Fedora packaging).",
        },
        {
          period: "Q2 2027",
          detail:
            "Public beta and demonstration milestone (Reproducible builds, demo artifacts, documented limitations).",
        },
      ],
    },
  },
  {
    slug: "apc",
    name: "APC",
    summary: "Audio watermarking infrastructure for provenance and authenticity.",
    yearStarted: 2026,
    pillar: "Research",
    status: "Early",
    tags: ["Research", "Security", "Tooling"],
    stack: ["Python", "TypeScript", "Security"],
    problem: "Authenticity signals need robust watermarking infrastructure that remains verifiable across transformations.",
    approach: "APC focuses on watermark encoding, retrieval, and auditability as infrastructure primitives.",
    today: "Core architecture and test vectors are in design.",
    next: "Integrate watermark workflows with broader provenance pipelines.",
  },
  {
    slug: "fusion-verifier",
    name: "Fusion Verifier",
    summary: "Audio Provenance Detection and Validation System.",
    yearStarted: 2026,
    pillar: "Tooling",
    status: "Early",
    tags: ["Tooling", "Security", "Infrastructure"],
    stack: ["TypeScript", "Python", "Security"],
    problem: "Teams need deterministic checks to validate provenance claims in audio assets.",
    approach: "Fusion Verifier provides detection, validation, and reporting pipelines for provenance metadata.",
    today: "Detection baseline and validation workflows are under active development.",
    next: "Expand verification coverage and reporting integrations.",
    links: {
      demo: "https://fusion.paperfrogs.dev",
    },
  },
];

export type PillarCardData = {
  title: string;
  key: Pillar;
  description: string;
};

export const pillarCards: PillarCardData[] = [
  {
    title: "Infrastructure-first",
    key: "Infrastructure",
    description: "We start from durable systems. Reliable interfaces, stable operations, and long-term maintainability come first.",
  },
  {
    title: "Research-driven exploration",
    key: "Research",
    description: "We test assumptions in the open. We turn validated research into practical architecture, not slideware.",
  },
  {
    title: "Production-ready systems",
    key: "Tooling",
    description: "We ship what can run under pressure. Security, observability, and operations are designed in from day one.",
  },
];

export type IdeaPost = {
  slug: string;
  title: string;
  tag: "Systems" | "Research" | "Notes" | "Security";
  date: string;
  excerpt: string;
  body: string[];
};

export const ideas: IdeaPost[] = [
  {
    slug: "durability-over-speed",
    title: "Durability over velocity",
    tag: "Systems",
    date: "2026-01-14",
    excerpt: "Shipping quickly only matters if systems remain legible and upgradeable six months later.",
    body: [
      "Speed is useful. Unrecoverable complexity is not.",
      "We optimize for architecture that survives iteration cycles, team changes, and shifting constraints.",
      "Durability is a product decision, not only an engineering decision.",
    ],
  },
  {
    slug: "interfaces-as-contracts",
    title: "Interfaces are product contracts",
    tag: "Notes",
    date: "2025-12-05",
    excerpt: "Every unstable interface increases downstream coordination cost. We design interfaces like public APIs.",
    body: [
      "Internal systems fail when boundaries are implied rather than explicit.",
      "A clear interface reduces hidden dependencies and shrinks incident blast radius.",
      "Contracts should be versioned, tested, and observable.",
    ],
  },
  {
    slug: "security-default-path",
    title: "Security should be the default path",
    tag: "Security",
    date: "2025-11-02",
    excerpt: "Secure-by-default tools reduce policy drift and improve shipping confidence.",
    body: [
      "Security posture improves when safe options require less effort than unsafe options.",
      "Default templates, guardrails, and policy automation are force multipliers.",
      "Good security tooling improves developer experience, it does not block it.",
    ],
  },
  {
    slug: "research-to-production",
    title: "How research reaches production",
    tag: "Research",
    date: "2025-10-12",
    excerpt: "We use a staged method: isolate assumptions, benchmark, operationalize, then harden.",
    body: [
      "Research value is realized only when outcomes are operationalized.",
      "The transition needs stable test harnesses and measurable acceptance criteria.",
      "Production readiness is a deliberate phase, not a side effect.",
    ],
  },
  {
    slug: "small-systems-strong",
    title: "Small systems, strong guarantees",
    tag: "Systems",
    date: "2025-09-22",
    excerpt: "Focused components with explicit ownership scale better than monolithic abstractions.",
    body: [
      "Minimal systems are easier to reason about and improve.",
      "Strong guarantees reduce costly coordination work across teams.",
      "Composability works only when components remain predictable.",
    ],
  },
  {
    slug: "ops-not-afterthought",
    title: "Operations is part of product",
    tag: "Notes",
    date: "2025-08-19",
    excerpt: "What runs in production is the real product, not only the feature interface.",
    body: [
      "Operational behavior defines user trust.",
      "Monitoring and rollback pathways are product features.",
      "Reliable operations create strategic velocity over time.",
    ],
  },
];

export const founders = [
  {
    name: "Niloy Majumder",
    role: "Founder",
    bio: "Builds infrastructure systems and platform architecture with a focus on reliability and clear interfaces.",
    links: {
      linkedin: "https://www.linkedin.com/in/niloymajumderr/",
      github: "https://github.com/niloymajumder",
    },
  },
  {
    name: "Joy G. Majumdar",
    role: "Founder",
    bio: "Leads research-to-production workflows across security, tooling, and long-term systems design.",
    links: {
      linkedin: "https://www.linkedin.com/in/joy0x1",
      github: "https://github.com/Joy-Majumder",
    },
  },
] as const;

export const capabilities = [
  "Systems Architecture",
  "Distributed Infrastructure",
  "Security Engineering",
  "Applied Research",
  "Toolchain Design",
  "Developer Platforms",
  "Observability",
  "Production Hardening",
] as const;

export const studioPrinciples = [
  "Durability > velocity",
  "Clear interfaces",
  "Maintainable systems",
  "Secure-by-default",
  "Open iteration",
] as const;

export const engagementModes = [
  {
    name: "Co-build",
    description: "Embedded collaboration with your product and engineering teams.",
  },
  {
    name: "Advisory",
    description: "Strategic technical guidance on architecture, risk, and delivery.",
  },
  {
    name: "Long-term partnership",
    description: "Ongoing support for roadmap execution and platform evolution.",
  },
] as const;

export const contactTopics = ["Partnership", "Hiring", "Product", "Research", "Other"] as const;

export const homeWhatWeDo = ["Embedded infrastructure", "Experimental research", "Applied tooling"] as const;

export const ventureModel = [
  {
    title: "Thesis-led capital",
    description: "We deploy conviction capital into infrastructure and security systems with long compounding timelines.",
  },
  {
    title: "Studio co-building",
    description: "Beyond checks, we work inside product and engineering loops to shape architecture, risk, and delivery.",
  },
  {
    title: "Long-horizon partnership",
    description: "We stay engaged through early validation, production hardening, and scale.",
  },
] as const;
