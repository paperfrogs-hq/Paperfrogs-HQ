import { ArrowRight, Mail, MapPin, Clock, Github } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const howToApply = [
  "Send your CV to the email below. PDF or plain text — we read both.",
  "Include one link: a repo, a write-up, a deployed thing. Anything you've actually made.",
  "Three sentences on what you'd want to work on here. Don't overthink it.",
  "We reply to every application. If we don't reply within ten days, write again — it got lost.",
] as const;

const whatWePay = [
  { role: "Engineer (mid)", range: "৳ 1.8L — 3.5L / month", note: "Bangladesh, full-time, remote. Global rates negotiable for the right person." },
  { role: "Engineer (senior)", range: "৳ 3.5L — 6L / month", note: "Same. Plus a seat at the founding table once we've worked together for a quarter." },
  { role: "Research engineer", range: "৳ 2.5L — 5L / month", note: "Security, audio provenance, watermarking. Comfortable with long timelines." },
];

const whoReplies = [
  { name: "Joy", role: "Founder · reviews every CV" },
  { name: "Niloy", role: "Founder · second pass" },
  { name: "You", role: "Probably the next hire" },
];

const Careers = () => {
  usePageSeo({
    title: "Careers",
    description: "Open applications at Paperfrogs HQ. Concrete work, real compensation, two founders reviewing.",
    path: "/careers",
  });

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-5 pt-16 pb-0 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35">Careers</p>
          <h1 className="mt-4 text-[clamp(2.2rem,6vw,5.5rem)] font-bold leading-[1.03] tracking-[-0.04em] text-foreground text-balance">
            Two of us. <span className="text-coral">Looking for a third.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/45 sm:mt-6 text-pretty">
            We don't have a job board. We don't have an ATS. We have two founders, a shared inbox, and a list of things we can't build alone. If one of those things sounds like your kind of problem, write to us.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/[0.06] pt-10 sm:mt-12 sm:gap-x-12">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/35">
              <MapPin className="h-3.5 w-3.5 text-coral/55" />
              Remote · Dhaka
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/35">
              <Clock className="h-3.5 w-3.5 text-coral/55" />
              Async, with overlap
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/35">
              <Github className="h-3.5 w-3.5 text-coral/55" />
              Every product on GitHub
            </div>
          </div>
        </Reveal>

        <div className="mt-12 pf-divider sm:mt-14" />
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">How to apply</p>
            <h2 className="mt-4 text-[clamp(1.6rem,3.6vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.04em] text-foreground text-balance">
              Email. Three sentences. One link.
            </h2>
            <ol className="mt-10 flex flex-col gap-5">
              {howToApply.map((step, i) => (
                <li key={i} className="flex items-start gap-5 border-b border-white/[0.05] pb-5 last:border-b-0">
                  <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/65 sm:text-[12px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14.5px] leading-relaxed text-foreground/60 sm:text-[15px] text-pretty">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="pf-surface rounded-2xl p-6 sm:p-8 lg:sticky lg:top-24 lg:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-coral/65">
                Send to
              </p>
              <a
                href={`mailto:${siteMeta.email}?subject=${encodeURIComponent("Application — open role")}`}
                className="mt-3 block break-all font-mono text-[15px] font-medium text-foreground transition-colors hover:text-coral sm:text-base"
              >
                {siteMeta.email}
              </a>
              <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.18em] text-foreground/30">
                Subject: Application — [what you'd work on]
              </p>

              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-foreground/35">
                  Who reads it
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {whoReplies.map((p) => (
                    <li key={p.name} className="flex items-baseline gap-3 text-[13px]">
                      <span className="w-14 shrink-0 font-bold tracking-[-0.01em] text-foreground">
                        {p.name}
                      </span>
                      <span className="text-foreground/45">{p.role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-foreground/35">
                  What happens next
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-foreground/55">
                  One founder replies within ten days. If there's a fit, a 30-minute call. After that, a paid one-week trial on real work — no whiteboard, no take-home puzzles, no panel of five.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.06] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <Reveal className="mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Compensation</p>
          <h2 className="mt-4 text-[clamp(1.6rem,3.6vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.04em] text-foreground text-balance">
            We pay in numbers, not stock.
          </h2>
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-foreground/50 sm:text-[15px] text-pretty">
            Ranges below are cash, monthly, BDT. We don't do equity-only compensation. We don't do "competitive" — that's a word that hides the number. These are the numbers.
          </p>
        </Reveal>

        <div className="divide-y divide-white/[0.05]">
          {whatWePay.map((row, i) => (
            <Reveal key={row.role} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-3 py-7 sm:grid-cols-[200px_1fr_1.4fr] sm:gap-10 sm:py-9 lg:grid-cols-[240px_220px_1fr]">
                <p className="text-base font-bold tracking-[-0.02em] text-foreground sm:text-lg">
                  {row.role}
                </p>
                <p className="font-mono text-[14px] font-medium tracking-[-0.01em] text-coral/80 sm:text-[15px]">
                  {row.range}
                </p>
                <p className="text-[13.5px] leading-relaxed text-foreground/45 sm:text-[14px] text-pretty">
                  {row.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.06] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <Reveal className="mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">What we'd build with you</p>
          <h2 className="mt-4 text-[clamp(1.6rem,3.6vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.04em] text-foreground text-balance">
            Three problems we can't crack alone.
          </h2>
        </Reveal>

        <div className="divide-y divide-white/[0.05]">
          {[
            {
              title: "Burnlink at scale",
              detail:
                "The CLI shipped last week. The web version has been live since 2025. We need someone who actually likes crypto primitives to make the protocol boring — key rotation, replay protection, audit logs, the unsexy parts.",
              tag: "Security · Tooling",
            },
            {
              title: "Fusion v2 in production",
              detail:
                "Audio provenance infrastructure, version 2. We've had two false starts. The architecture is locked. What's missing is the engineer who'll spend three months on the boring parts — encoding, decoding, integration tests, SDKs that don't break.",
              tag: "Infrastructure",
            },
            {
              title: "APC watermarking research",
              detail:
                "Audio watermarking that survives compression, resampling, and adversarial edits. We have research partners. We have test corpora. We need a research engineer who can read papers, write prototypes, and ship them — in that order.",
              tag: "Research · Security",
            },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[1fr_240px] sm:gap-10 sm:py-10 lg:grid-cols-[1fr_280px] lg:gap-14">
                <div>
                  <h3 className="text-[clamp(1.2rem,2.2vw,1.6rem)] font-bold leading-[1.15] tracking-[-0.03em] text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-foreground/55 sm:text-[14.5px] text-pretty">
                    {p.detail}
                  </p>
                </div>
                <p className="self-start text-[10px] font-semibold uppercase tracking-[0.22em] text-coral/65 sm:text-right">
                  {p.tag}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.06] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <Reveal className="mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">What we won't do</p>
          <h2 className="mt-4 text-[clamp(1.6rem,3.6vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.04em] text-foreground text-balance">
            Things to skip if any of these bother you.
          </h2>
        </Reveal>

        <div className="divide-y divide-white/[0.05]">
          {[
            "Standups every morning. We work async, in writing, with a 30-minute weekly sync.",
            "Tracking hours. We pay for outcomes, not for lines of code or hours logged.",
            "Polished take-home assignments. Trial week is on real work that ships to real users.",
            "Five-round interview loops. If a one-week trial doesn't tell us, three more interviews won't either.",
            "Performance reviews on a quarterly calendar. We tell you when something's off, or we tell you it's working.",
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="flex items-start gap-5 py-6 sm:py-7">
                <span className="mt-[3px] shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/55">
                  ×
                </span>
                <p className="text-[14.5px] leading-relaxed text-foreground/55 sm:text-[15px] text-pretty">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.06] px-5 pb-28 pt-16 sm:px-10 sm:pb-32 sm:pt-20 lg:px-16 lg:pb-40 lg:pt-28">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30">Last thing</p>
              <h2 className="mt-4 max-w-2xl text-[clamp(1.6rem,3.6vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.04em] text-foreground text-balance">
                If you've read this far, you're already more qualified than 90% of applicants.
              </h2>
              <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-foreground/45 sm:text-[15px] text-pretty">
                Send the email. Even if we're not hiring for what you do. We keep a folder. The folder is shorter than you'd think.
              </p>
            </div>
            <a
              href={`mailto:${siteMeta.email}?subject=${encodeURIComponent("Application — open role")}`}
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-foreground px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:scale-[1.02] hover:bg-foreground/85 hover:shadow-[0_10px_30px_-10px_hsl(0_0%_100%/0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:self-auto sm:px-6 sm:py-3.5 sm:text-[12px]"
            >
              <Mail className="h-3.5 w-3.5" />
              Write to us <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Careers;