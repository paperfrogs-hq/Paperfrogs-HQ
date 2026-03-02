import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const teamRoster = [
  {
    num: "01",
    seat: "Infrastructure Engineer",
    pillar: "Infrastructure",
    focus: "Designs and operates core infrastructure. Owns networking, compute, and deployment layers with a correctness-first mindset.",
    stack: "Rust · Linux · Networking",
  },
  {
    num: "02",
    seat: "Security Researcher",
    pillar: "Research",
    focus: "Conducts applied security research across tooling and infrastructure. Threat modeling, attack surface analysis, and hardening.",
    stack: "Security · Auditing · OSS",
  },
  {
    num: "03",
    seat: "Systems Programmer",
    pillar: "Infrastructure",
    focus: "Builds low-level tooling, protocol implementations, and performance-critical components. Comfortable with unsafe code and resource constraints.",
    stack: "Rust · C · Assembly",
  },
  {
    num: "04",
    seat: "TypeScript / Frontend Engineer",
    pillar: "Tooling",
    focus: "Builds the product and developer-facing layer. Turns infrastructure primitives into usable, polished interfaces.",
    stack: "TypeScript · React · UI",
  },
  {
    num: "05",
    seat: "DevOps / Platform Engineer",
    pillar: "Infrastructure",
    focus: "Owns CI/CD, observability, and internal platforms. Bridges engineering and production with reproducible, auditable pipelines.",
    stack: "Linux · Docker · Nix",
  },
  {
    num: "06",
    seat: "Research Engineer",
    pillar: "Research",
    focus: "Translates open-ended research into concrete prototypes. Comfortable sitting between theory and production without losing either.",
    stack: "Python · Research · OSS",
  },
  {
    num: "07",
    seat: "Technical Writer / Docs Lead",
    pillar: "Tooling",
    focus: "Owns documentation, RFCs, and knowledge infrastructure. Turns internal context into durable, external-grade writing.",
    stack: "Writing · Markdown · Systems",
  },
] as const;

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
            <span className="text-foreground/25">Join us.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/40">
            We are a small, focused team building infrastructure-first systems. If you care deeply about correctness, durability, and production-grade work — we want to hear from you.
          </p>
        </Reveal>
        <div className="mt-12 border-t border-white/[0.07]" />
      </section>

      {/* Team roster */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16 sm:py-28">
        <Reveal className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">The team</p>
          <h2 className="mt-5 text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground">
            7 seats. Every one matters.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-foreground/40">
            This is the full team we are building. Each seat is intentional — no redundancy, no filler. If you see yourself in one of these roles, reach out.
          </p>
        </Reveal>
        <div className="divide-y divide-white/[0.06]">
          {teamRoster.map((member, i) => (
            <Reveal key={member.num} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-5 py-9 sm:grid-cols-[220px_1fr_auto] sm:items-center sm:gap-12">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/55">{member.num}</span>
                  <p className="mt-2 text-lg font-bold leading-snug tracking-[-0.02em] text-foreground/75">{member.seat}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/25">{member.pillar}</p>
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/40">{member.focus}</p>
                <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/20">{member.stack}</p>
                  <a
                    href={`mailto:${siteMeta.email}?subject=Application: ${member.seat}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/35 transition-colors hover:border-coral/40 hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                  >
                    Apply <ArrowRight className="h-3.5 w-3.5" />
                  </a>
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
