import type { IdeaPost } from "@/data/site";
import { PostCard } from "@/components/site/PostCard";

type InsightCardProps = {
  post: IdeaPost;
};

export const InsightCard = ({ post }: InsightCardProps) => {
  return <PostCard post={post} />;
};
