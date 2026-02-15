import { Link, Navigate, useParams } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { ideas } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";
import { formatLongDate } from "@/lib/format";

const IdeaPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = ideas.find((item) => item.slug === slug);

  usePageSeo({
    title: post ? `${post.title} · Ideas` : "Ideas",
    description: post?.excerpt ?? "Paperfrogs HQ ideas and notes.",
    path: post ? `/ideas/${post.slug}` : "/ideas",
  });

  if (!post) {
    return <Navigate to="/ideas" replace />;
  }

  return (
    <SiteShell>
      <article className="mx-auto w-full max-w-4xl px-6 pb-24 pt-6 sm:px-10 sm:pb-32">
        <Reveal>
          <Link
            to="/ideas"
            className="text-sm text-coral transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
          >
            Back to ideas
          </Link>

          <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span>{post.tag}</span>
            <span aria-hidden="true">•</span>
            <span>{formatLongDate(post.date)}</span>
          </div>

          <h1 className="mt-4 text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em]">{post.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
        </Reveal>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/92">
          {post.body.map((paragraph, index) => (
            <Reveal key={`${post.slug}-p-${index}`} delay={index * 0.04}>
              <p>{paragraph}</p>
            </Reveal>
          ))}

          <Reveal className="overflow-x-auto rounded-2xl border border-border bg-card/60 p-5">
            <pre className="text-sm leading-relaxed text-coral">
              <code>{`// production-readiness checklist
interface SystemGate {
  observability: boolean;
  rollbackPlan: boolean;
  securityBaseline: boolean;
}`}</code>
            </pre>
          </Reveal>
        </div>
      </article>
    </SiteShell>
  );
};

export default IdeaPost;
