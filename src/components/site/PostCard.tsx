import { Link } from "react-router-dom";
import type { IdeaPost } from "@/data/site";
import { formatLongDate } from "@/lib/format";

type PostCardProps = {
  post: IdeaPost;
};

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link
      to={`/ideas/${post.slug}`}
      className="group block rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coral/60 hover:shadow-[0_0_0_1px_hsl(var(--coral)/0.35),0_20px_45px_hsl(var(--coral)/0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span>{post.tag}</span>
        <span aria-hidden="true">•</span>
        <span>{formatLongDate(post.date)}</span>
      </div>
      <h3 className="mt-4 text-2xl leading-tight text-foreground">{post.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
    </Link>
  );
};
