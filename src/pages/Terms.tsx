import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
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

const Terms = () => {
  usePageSeo({
    title: "Terms",
    description: "Paperfrogs HQ Terms of Service.",
    path: "/terms",
  });

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-4xl px-6 pb-24 pt-6 sm:px-10 sm:pb-32">
        <Reveal>
          <SectionHeader
            label="Legal"
            title="Terms of Service"
            description="The legal terms that govern use of Paperfrogs HQ websites and products."
          />
        </Reveal>

        <div className="mt-10 border-y border-border">
          {sections.map((section, index) => (
            <Reveal
              key={section.title}
              delay={index * 0.04}
              className="grid gap-5 border-b border-border py-7 last:border-b-0 md:grid-cols-[220px_1fr] md:gap-8"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-xl leading-snug">{section.title}</h2>
              </div>

              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
                {section.points ? (
                  <ul className="space-y-3 border-l border-border pl-4">
                    {section.points.map((point) => (
                      <li key={point} className="leading-relaxed text-muted-foreground">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
};

export default Terms;
