import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const Contact = () => {
  usePageSeo({
    title: "Contact",
    description: "Contact Paperfrogs HQ for partnerships, product collaboration, research, or hiring.",
    path: "/contact",
  });

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-3xl px-6 pb-24 pt-6 sm:px-10 sm:pb-32">
        <Reveal>
          <h1 className="text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">Get in Touch</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Have a question, suggestion, or want to collaborate? We&apos;d love to hear from you. Reach out to the
            Paperfrogs HQ team.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          <Reveal>
            <article className="rounded-3xl border border-border bg-card/65 p-6 sm:p-8">
              <h2 className="text-2xl">Email</h2>
              <p className="mt-3 text-muted-foreground">
                Send us an email and we&apos;ll get back to you as soon as possible.
              </p>
              <a
                href={`mailto:${siteMeta.email}`}
                className="mt-4 inline-flex text-lg text-coral transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
              >
                {siteMeta.email}
              </a>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="rounded-3xl border border-border bg-card/65 p-6 sm:p-8">
              <h2 className="text-2xl">GitHub</h2>
              <p className="mt-3 text-muted-foreground">Check out our projects and contribute on GitHub.</p>
              <a
                href={siteMeta.links.github}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-lg text-coral transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
              >
                @paperfrogs-hq
              </a>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="rounded-3xl border border-border bg-card/65 p-6 sm:p-8">
              <h2 className="text-2xl">Let&apos;s Build Together</h2>
              <p className="mt-3 text-muted-foreground">
                Whether you have feedback, want to collaborate, or just want to say hello, we&apos;re always open to
                hearing from the community. Let&apos;s create something thoughtful together.
              </p>
            </article>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
};

export default Contact;
