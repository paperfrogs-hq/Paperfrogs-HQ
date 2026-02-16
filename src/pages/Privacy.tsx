import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { usePageSeo } from "@/hooks/usePageSeo";

const sections = [
  {
    title: "Introduction",
    paragraphs: [
      "At Paperfrogs HQ, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our products.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "We may collect information about you in a variety of ways. The information we may collect on the website includes:",
    ],
    points: [
      "Personal Data: name, email address, and other contact information",
      "Usage Data: browser type, IP address, pages visited, and time spent",
      "Device Data: device type, operating system, and unique identifiers",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We use collected information for several purposes, including to provide our services, improve user experience, and communicate with you about updates or changes to our services.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: ["If you have questions about this Privacy Policy, please contact us through the contact page."],
  },
] as const;

const Privacy = () => {
  usePageSeo({
    title: "Privacy",
    description: "Paperfrogs HQ Privacy Policy.",
    path: "/privacy",
  });

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-4xl px-6 pb-24 pt-6 sm:px-10 sm:pb-32">
        <Reveal>
          <SectionHeader
            label="Legal"
            title="Privacy Policy"
            description="How Paperfrogs HQ handles data collection, usage, and protection."
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

export default Privacy;
