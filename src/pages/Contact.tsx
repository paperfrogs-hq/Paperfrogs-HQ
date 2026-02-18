import { ArrowUpRight, Copy, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const panelClass =
  "rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(12,16,20,0.92),rgba(10,14,18,0.88))] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl";

const socials = [
  { label: "GitHub", href: siteMeta.links.github, icon: Github },
  { label: "LinkedIn", href: siteMeta.links.linkedin, icon: Linkedin },
  { label: "X", href: siteMeta.links.x, icon: Twitter },
] as const;

const Contact = () => {
  const [copied, setCopied] = useState(false);

  usePageSeo({
    title: "Contact",
    description: "Contact Paperfrogs HQ for partnerships, product collaboration, research, or hiring.",
    path: "/contact",
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
    <SiteShell>
      <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-8 sm:px-10 sm:pb-12">
        <Reveal>
          <div className={panelClass + " p-6 sm:p-8"}>
            <p className="text-xs uppercase tracking-[0.2em] text-coral/85">Contact</p>
            <h1 className="mt-4 text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">Start with context. We reply with action.</h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Share your problem statement, constraints, and delivery timeline. We will return a concrete next step.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 sm:pb-32">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <article className={panelClass + " h-full p-6 sm:p-7"}>
              <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Email</p>
              <a href={`mailto:${siteMeta.email}`} className="mt-4 inline-flex items-center gap-3 text-2xl text-foreground transition-colors hover:text-coral">
                <Mail className="h-5 w-5 text-coral" />
                {siteMeta.email}
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button type="button" variant="heroOutline" className="border-white/20 bg-transparent" onClick={copyEmail}>
                  <Copy className="h-4 w-4" />
                  {copied ? "Copied" : "Copy email"}
                </Button>
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-coral" />
                {siteMeta.location}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className={panelClass + " h-full p-6 sm:p-7"}>
              <p className="text-xs uppercase tracking-[0.16em] text-coral/80">Social</p>
              <div className="mt-5 space-y-3">
                {socials.map(({ label, href, icon: Icon }) => (
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
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
};

export default Contact;
