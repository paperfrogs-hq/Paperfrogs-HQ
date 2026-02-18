import { Link, Navigate, useParams } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { ideas } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";
import { formatLongDate } from "@/lib/format";

const panelClass =
  "rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(12,16,20,0.92),rgba(10,14,18,0.88))] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl";

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
      <article className="mx-auto w-full max-w-5xl px-6 pb-24 pt-8 sm:px-10 sm:pb-32">
        <Reveal>
          <div className={panelClass + " p-6 sm:p-8"}>
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

            <h1 className="mt-4 text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em]">{post.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{post.excerpt}</p>
          </div>
        </Reveal>

        <div className="mt-6 space-y-4">
          {post.body.map((paragraph, index) => (
            <Reveal key={`${post.slug}-p-${index}`} delay={0.04 + index * 0.03}>
              <div className={panelClass + " p-6 sm:p-7"}>
                <p className="text-base leading-relaxed text-foreground/92 sm:text-lg">{paragraph}</p>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className={panelClass + " overflow-x-auto p-5"}>
              <pre className="text-sm leading-relaxed text-coral">
                <code>{`// production-readiness checklist
interface SystemGate {
  observability: boolean;
  rollbackPlan: boolean;
  securityBaseline: boolean;
}`}</code>
              </pre>
            </div>
          </Reveal>
        </div>
      </article>
    </SiteShell>
  );
};

export default IdeaPost;
