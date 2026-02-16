import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import type { IdeaPost } from "@/data/site";
import { formatLongDate } from "@/lib/format";
import { MOTION_DURATION } from "@/lib/motion";

type PostCardProps = {
  post: IdeaPost;
};

export const PostCard = ({ post }: PostCardProps) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionLink = motion(Link);

  return (
    <MotionLink
      to={`/ideas/${post.slug}`}
      className="group block rounded-2xl border border-border bg-card/60 p-6 transition-[transform,border-color,box-shadow] duration-200 ease-out motion-safe:hover:-translate-y-1 hover:border-coral/60 hover:shadow-[0_0_0_1px_hsl(var(--coral)/0.35),0_20px_45px_hsl(var(--coral)/0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
      transition={{ duration: MOTION_DURATION.fast, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span>{post.tag}</span>
        <span aria-hidden="true">•</span>
        <span>{formatLongDate(post.date)}</span>
      </div>
      <h3 className="mt-4 text-2xl leading-tight text-foreground">{post.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
    </MotionLink>
  );
};
