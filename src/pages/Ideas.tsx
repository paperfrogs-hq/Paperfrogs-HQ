import { useMemo, useState } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PostCard } from "@/components/site/PostCard";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Input } from "@/components/ui/input";
import { ideas } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const PAGE_SIZE = 4;

const uniqueTags = Array.from(new Set(ideas.map((item) => item.tag)));

const Ideas = () => {
  usePageSeo({
    title: "Ideas",
    description: "Essays, notes, and updates from the Paperfrogs HQ studio.",
    path: "/ideas",
  });

  const [search, setSearch] = useState("");
  const [tag, setTag] = useState<string | "All">("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return [...ideas]
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
      .filter((post) => {
        const matchesTag = tag === "All" || post.tag === tag;
        const q = search.trim().toLowerCase();
        const matchesSearch = !q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q);
        return matchesTag && matchesSearch;
      });
  }, [search, tag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const setTagWithReset = (next: string | "All") => {
    setTag(next);
    setPage(1);
  };

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-6 sm:px-10">
        <Reveal>
          <SectionHeader
            label="Ideas"
            title="Writing"
            description="Editorial notes on systems, research, and production practice."
          />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 sm:px-10">
        <div className="grid gap-4 rounded-2xl border border-border bg-card/60 p-5 sm:grid-cols-[1fr_auto] sm:items-end">
          <label className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Search</span>
            <Input
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
              placeholder="Search title or excerpt"
              className="h-11 rounded-xl border-border bg-background/80 focus-visible:ring-coral"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            {["All", ...uniqueTags].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setTagWithReset(option)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral ${
                  tag === option
                    ? "border-coral/70 bg-coral/10 text-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-coral/40 hover:text-foreground"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10">
        {paginated.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {paginated.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.04}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-card/60 p-7 text-muted-foreground">No posts match your filters.</div>
        )}
      </section>

      <section className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-24 sm:px-10 sm:pb-32">
        <button
          type="button"
          onClick={() => setPage((value) => Math.max(1, value - 1))}
          disabled={currentPage === 1}
          className="rounded-full border border-border px-4 py-2 text-sm text-foreground disabled:opacity-40"
        >
          Previous
        </button>
        <p className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </p>
        <button
          type="button"
          onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
          disabled={currentPage === totalPages}
          className="rounded-full border border-border px-4 py-2 text-sm text-foreground disabled:opacity-40"
        >
          Next
        </button>
      </section>
    </SiteShell>
  );
};

export default Ideas;
