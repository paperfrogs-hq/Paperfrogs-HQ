import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { usePageSeo } from "@/hooks/usePageSeo";

const sections = [
  {
    title: "Agreement to Terms",
    paragraphs: [
      "These Terms of Service constitute a legally binding agreement made between you and Paperfrogs HQ. By accessing and using this website and our products, you accept and agree to be bound by and comply with these terms and our Privacy Policy.",
    ],
  },
  {
    title: "Use License",
    paragraphs: [
      "Permission is granted to temporarily download one copy of the materials (information or software) on Paperfrogs HQ's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
    ],
    points: [
      "Modify or copy the materials",
      "Use the materials for any commercial purpose or for any public display",
      "Attempt to reverse engineer any software contained on the website",
      "Remove any copyright or other proprietary notations from the materials",
      'Transfer the materials to another person or "mirror" the materials on any other server',
    ],
  },
  {
    title: "Disclaimer",
    paragraphs: [
      "The materials on Paperfrogs HQ's website are provided on an 'as is' basis. Paperfrogs HQ makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    ],
  },
  {
    title: "Limitations",
    paragraphs: [
      "In no event shall Paperfrogs HQ or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Paperfrogs HQ's website.",
    ],
  },
  {
    title: "Revisions",
    paragraphs: [
      "Paperfrogs HQ may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.",
    ],
  },
] as const;

const panelClass =
  "rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(12,16,20,0.92),rgba(10,14,18,0.88))] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl";

const Terms = () => {
  usePageSeo({
    title: "Terms",
    description: "Paperfrogs HQ Terms of Service.",
    path: "/terms",
  });

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-8 sm:px-10 sm:pb-32">
        <Reveal>
          <div className={panelClass + " p-6 sm:p-8"}>
            <p className="text-xs uppercase tracking-[0.2em] text-coral/85">Legal</p>
            <h1 className="mt-4 text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">Terms of Service</h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              The legal terms that govern use of Paperfrogs HQ websites and products.
            </p>
          </div>
        </Reveal>

        <div className="mt-4 space-y-4">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={0.05 + index * 0.03}>
              <article className={panelClass + " p-6 sm:p-7"}>
                <p className="text-[11px] uppercase tracking-[0.16em] text-coral/75">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-2xl leading-tight">{section.title}</h2>

                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                  {section.points ? (
                    <ul className="space-y-3 border-l border-white/15 pl-4">
                      {section.points.map((point) => (
                        <li key={point} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
};

export default Terms;
