import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { usePageSeo } from "@/hooks/usePageSeo";

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
          <SectionHeader label="Legal" title="Terms of Service" />
        </Reveal>

        <Reveal className="mt-10 space-y-8 rounded-2xl border border-border bg-card/60 p-7">
          <div className="space-y-3">
            <h2 className="text-2xl">Agreement to Terms</h2>
            <p className="leading-relaxed text-muted-foreground">
              These Terms of Service constitute a legally binding agreement made between you and Paperfrogs HQ. By
              accessing and using this website and our products, you accept and agree to be bound by and comply with
              these terms and our Privacy Policy.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl">Use License</h2>
            <p className="leading-relaxed text-muted-foreground">
              Permission is granted to temporarily download one copy of the materials (information or software) on
              Paperfrogs HQ&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl">Disclaimer</h2>
            <p className="leading-relaxed text-muted-foreground">
              The materials on Paperfrogs HQ&apos;s website are provided on an &apos;as is&apos; basis. Paperfrogs HQ makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for a particular
              purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl">Limitations</h2>
            <p className="leading-relaxed text-muted-foreground">
              In no event shall Paperfrogs HQ or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
              or inability to use the materials on Paperfrogs HQ&apos;s website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl">Revisions</h2>
            <p className="leading-relaxed text-muted-foreground">
              Paperfrogs HQ may revise these Terms of Service for its website at any time without notice. By using
              this website, you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Terms;
