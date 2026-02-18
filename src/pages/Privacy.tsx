import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
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

const panelClass =
  "rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(12,16,20,0.92),rgba(10,14,18,0.88))] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl";

const Privacy = () => {
  usePageSeo({
    title: "Privacy",
    description: "Paperfrogs HQ Privacy Policy.",
    path: "/privacy",
  });

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-8 sm:px-10 sm:pb-32">
        <Reveal>
          <div className={panelClass + " p-6 sm:p-8"}>
            <p className="text-xs uppercase tracking-[0.2em] text-coral/85">Legal</p>
            <h1 className="mt-4 text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">Privacy Policy</h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              How Paperfrogs HQ handles data collection, usage, and protection.
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

export default Privacy;
