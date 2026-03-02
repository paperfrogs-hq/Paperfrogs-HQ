import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { usePageSeo } from "@/hooks/usePageSeo";

const sections = [
  {
    title: "Agreement to Terms",
    body: "These Terms of Service constitute a legally binding agreement between you and Paperfrogs HQ. By accessing and using this website and our products, you accept and agree to be bound by these terms and our Privacy Policy.",
    points: null as string[] | null,
  },
  {
    title: "Use License",
    body: "Permission is granted to temporarily view materials on Paperfrogs HQ's website for personal, non-commercial use only. Under this license you may not:",
    points: [
      "Modify or copy the materials",
      "Use the materials for any commercial purpose or public display",
      "Attempt to reverse engineer any software on the website",
      "Remove any copyright or proprietary notations from the materials",
      "Transfer the materials or mirror them on another server",
    ],
  },
  {
    title: "Disclaimer",
    body: "The materials on Paperfrogs HQ's website are provided on an 'as is' basis. Paperfrogs HQ makes no warranties, expressed or implied, and hereby disclaims all other warranties including implied warranties of merchantability, fitness for a particular purpose, or non-infringement.",
    points: null,
  },
  {
    title: "Limitations",
    body: "In no event shall Paperfrogs HQ or its suppliers be liable for any damages arising out of the use or inability to use the materials on Paperfrogs HQ's website, including damages for loss of data or profit.",
    points: null,
  },
  {
    title: "Revisions",
    body: "Paperfrogs HQ may revise these Terms of Service at any time without notice. By using this website, you agree to be bound by the then current version of these Terms of Service.",
    points: null,
  },
];

const Terms = () => {
  usePageSeo({
    title: "Terms",
    description: "Paperfrogs HQ Terms of Service.",
    path: "/terms",
  });

  return (
    <SiteShell>
      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-16 pb-0 sm:px-10 lg:px-16 sm:pt-20">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35">Legal</p>
          <h1 className="mt-4 text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[1.03] tracking-[-0.035em] text-foreground">
            Terms of Service.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/40">
            The legal terms that govern use of Paperfrogs HQ websites and products.
          </p>
        </Reveal>
        <div className="mt-12 border-t border-white/[0.07]" />
      </section>

      {/* Sections */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-32 sm:px-10 lg:px-16 sm:pb-40">
        <div className="divide-y divide-white/[0.06]">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-[220px_1fr] sm:gap-16">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-lg font-bold tracking-[-0.02em] text-foreground/65">{section.title}</p>
                </div>
                <div>
                  <p className="text-[15px] leading-relaxed text-foreground/45">{section.body}</p>
                  {section.points && (
                    <ul className="mt-4 space-y-2 border-l border-white/[0.08] pl-5">
                      {section.points.map((point) => (
                        <li key={point} className="text-[14px] leading-relaxed text-foreground/35">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
};

export default Terms;
