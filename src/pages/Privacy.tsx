import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { usePageSeo } from "@/hooks/usePageSeo";

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
          <SectionHeader label="Legal" title="Privacy Policy" />
        </Reveal>

        <Reveal className="mt-10 space-y-8 rounded-2xl border border-border bg-card/60 p-7">
          <div className="space-y-3">
            <h2 className="text-2xl">Introduction</h2>
            <p className="leading-relaxed text-muted-foreground">
              At Paperfrogs HQ, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website and use our products.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl">Information We Collect</h2>
            <p className="leading-relaxed text-muted-foreground">
              We may collect information about you in a variety of ways. The information we may collect on the website
              includes:
            </p>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
              <li>Personal Data: name, email address, and other contact information</li>
              <li>Usage Data: browser type, IP address, pages visited, and time spent</li>
              <li>Device Data: device type, operating system, and unique identifiers</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl">How We Use Your Information</h2>
            <p className="leading-relaxed text-muted-foreground">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. We use collected information for several purposes, including to provide our services, improve
              user experience, and communicate with you about updates or changes to our services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl">Security</h2>
            <p className="leading-relaxed text-muted-foreground">
              We use administrative, technical, and physical security measures to protect your personal information.
              However, no method of transmission over the Internet is 100% secure, so we cannot guarantee absolute
              security.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl">Contact Us</h2>
            <p className="leading-relaxed text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us through the contact page.
            </p>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Privacy;
