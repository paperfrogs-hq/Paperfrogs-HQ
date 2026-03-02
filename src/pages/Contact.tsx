import { useEffect, useState } from "react";
import { Copy, Check, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const socials = [
  { label: "GitHub", href: siteMeta.links.github, icon: Github },
  { label: "LinkedIn", href: siteMeta.links.linkedin, icon: Linkedin },
  { label: "X (Twitter)", href: siteMeta.links.x, icon: Twitter },
] as const;

const Contact = () => {
  const [copied, setCopied] = useState(false);

  usePageSeo({
    title: "Contact",
    description: "Contact Paperfrogs HQ for partnerships, product collaboration, research, or hiring.",
    path: "/contact",
  });

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteMeta.email);
      setCopied(true);
    } catch { setCopied(false); }
  };

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-6 pt-16 pb-0 sm:px-10 lg:px-16 sm:pt-20">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35">Contact</p>
          <h1 className="mt-4 text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-[1.03] tracking-[-0.035em] text-foreground">
            Start with context.{" "}
            <span className="text-foreground/30">We reply with action.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/40">
            Share your problem statement, constraints, and delivery timeline. We will return a concrete next step.
          </p>
        </Reveal>
        <div className="mt-12 border-t border-white/[0.07]" />
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30 mb-6">Email</p>
            <a
              href={`mailto:${siteMeta.email}`}
              className="text-[clamp(1.4rem,3.5vw,2.5rem)] font-bold tracking-[-0.03em] text-foreground transition-colors hover:text-coral"
            >
              {siteMeta.email}
            </a>
            <div className="mt-6">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground/50 transition-all hover:border-white/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-coral" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied!" : "Copy email"}
              </button>
            </div>
            <p className="mt-5 flex items-center gap-2 text-[13px] text-foreground/30">
              <MapPin className="h-4 w-4 text-coral/50" />
              {siteMeta.location}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30 mb-6">Social</p>
            <div className="divide-y divide-white/[0.06]">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-5 transition-colors"
                >
                  <span className="inline-flex items-center gap-3 text-base font-semibold text-foreground/50 transition-colors group-hover:text-foreground">
                    <Icon className="h-4 w-4 text-coral/60 transition-colors group-hover:text-coral" />
                    {label}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/20 transition-colors group-hover:text-coral">
                    Visit
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl border-t border-white/[0.07] px-6 pb-32 pt-16 sm:px-10 lg:px-16 sm:pb-40">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/30 mb-6">What we discuss</p>
          <div className="flex flex-wrap gap-3">
            {["Partnership", "Hiring", "Product collaboration", "Applied research", "System architecture", "Advisory"].map((t) => (
              <span key={t} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2 text-[13px] font-semibold text-foreground/40">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Contact;
