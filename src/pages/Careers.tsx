import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const values = [
  { num: "01", title: "Depth over breadth", body: "We go deep on hard problems. Generalists who go deep are welcome. Generalists who stay shallow are not the right fit." },
  { num: "02", title: "Ship, then harden", body: "We value production experience. We expect you to ship, observe, learn, and improve." },
  { num: "03", title: "Async by default", body: "Decisions happen in writing. We document context, not just outcomes." },
  { num: "04", title: "Security is everyone's job", body: "Every engineer thinks about threat models and failure paths. Security is not a separate team." },
] as const;

const traits = [
  "You ship infrastructure that doesn't fall over at 3am",
  "You read source before you read docs",
  "You write things down so the next person doesn't pay your learning tax",
  "You care about the boring parts — naming, types, error messages, rollback plans",
] as const;

const Careers = () => {
  usePageSeo({
    title: "Careers",
    description: "Drop your CV at hello@paperfrogs.dev. We hire for depth, not headcount.",
    path: "/careers",
  });

  return (
    <SiteShell>
      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-16 pb-0 sm:px-10 lg:px-16 sm:pt-20">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35">Careers</p>
          <h1 className="mt-4 text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[1.03] tracking-[-0.035em] text-foreground">
            No open roles.{" "}
            <span className="text-coral">Send your CV anyway.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/40">
            We hire on signal, not on job postings. If the work we describe below sounds like you — and you can show us you've done work like it — write to us. We read every CV. We reply to every one.
          </p>
        </Reveal>
        <div className="mt-12 border-t border-white/[0.07]" />
      </section>

      {/* The CV-drop panel */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16 sm:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-coral/15 bg-gradient-to-br from-coral/[0.06] via-white/[0.02] to-white/[0.01] p-8 sm:p-12 lg:p-16">
            {/* decorative grid */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage:
                  "radial-gradient(ellipse at top right, black 30%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at top right, black 30%, transparent 75%)",
              }}
            />

            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-coral">
                  <Sparkles className="h-3 w-3" />
                  Always hiring exceptional people
                </span>
                <h2 className="mt-6 text-[clamp(1.9rem,4.2vw,3.6rem)] font-bold leading-[1.06] tracking-[-0.03em] text-foreground">
                  Drop your CV at{" "}
                  <span className="text-coral">{siteMeta.email}</span>
                </h2>
                <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-foreground/45">
                  We don't run formal rounds. No take-homes timed by a stopwatch, no whiteboard puzzles about inverting binary trees. Send us your CV, a link to something you've built or written, and a one-paragraph note on what you'd want to work on at Paperfrogs. That's the entire application.
                </p>

                <a
                  href={`mailto:${siteMeta.email}?subject=${encodeURIComponent("CV — open application")}`}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-coral px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-background transition-all hover:bg-coral/90 hover:gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Mail className="h-4 w-4" />
                  {siteMeta.email}
                  <ArrowRight className="h-4 w-4" />
                </a>

                <p className="mt-5 text-[12px] font-medium tracking-wide text-foreground/30">
                  Typical reply window · 5 business days
                </p>
              </div>

              <div className="lg:border-l lg:border-white/[0.07] lg:pl-16">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/25">
                  We reply faster if your CV shows
                </p>
                <ul className="mt-5 flex flex-col gap-4">
                  {traits.map((t, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[14.5px] leading-relaxed text-foreground/55"
                    >
                      <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-coral/70 shadow-[0_0_12px_rgba(255,107,93,0.6)]" />
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/30">
                    What we work on
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/45">
                    Infrastructure tooling, systems programming, applied security research, and the product layer that sits on top of it. Rust, TypeScript, Nix, Linux — boring stack, deep work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
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

      {/* Final nudge */}
      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 pb-32 pt-16 sm:px-10 lg:px-16 sm:pb-40 sm:pt-20">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">One more thing</p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/40">
                If you've made it this far and you're still thinking about writing to us — write to us. The CV we'd most like to read is the one we haven't seen yet.
              </p>
            </div>
            <a
              href={`mailto:${siteMeta.email}?subject=${encodeURIComponent("CV — open application")}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/[0.12] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground/55 transition-all hover:border-coral/50 hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              {siteMeta.email} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Careers;
