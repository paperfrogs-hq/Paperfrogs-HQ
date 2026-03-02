import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { usePageSeo } from "@/hooks/usePageSeo";

const sections = [
  {
    title: "Introduction",
    body: "At Paperfrogs HQ, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our products.",
    points: null as string[] | null,
  },
  {
    title: "Information We Collect",
    body: "We may collect information about you in a variety of ways, including:",
    points: [
      "Personal Data: name, email address, and other contact information",
      "Usage Data: browser type, IP address, pages visited, and time spent",
      "Device Data: device type, operating system, and unique identifiers",
    ],
  },
  {
    title: "How We Use Your Information",
    body: "Having accurate information about you permits us to provide a smooth, efficient, and customized experience. We use collected information to provide our services, improve user experience, and communicate with you about updates.",
    points: null,
  },
  {
    title: "Security",
    body: "We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, so we cannot guarantee absolute security.",
    points: null,
  },
  {
    title: "Contact Us",
    body: "If you have questions about this Privacy Policy, please contact us through the contact page.",
    points: null,
  },
];

const Privacy = () => {
  usePageSeo({
    title: "Privacy",
    description: "Paperfrogs HQ Privacy Policy.",
    path: "/privacy",
  });

  return (
    <SiteShell>
      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-16 pb-0 sm:px-10 lg:px-16 sm:pt-20">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground/35">Legal</p>
          <h1 className="mt-4 text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[1.03] tracking-[-0.035em] text-foreground">
            Privacy Policy.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/40">
            How Paperfrogs HQ handles data collection, usage, and protection.
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

export default Privacy;
