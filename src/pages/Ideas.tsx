import { useMemo, useState } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PostCard } from "@/components/site/PostCard";
import { Reveal } from "@/components/shared/Reveal";
import { Input } from "@/components/ui/input";
import { ideas } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const PAGE_SIZE = 4;
const uniqueTags = Array.from(new Set(ideas.map((item) => item.tag)));

const panelClass =
  "rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(12,16,20,0.92),rgba(10,14,18,0.88))] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl";

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
      <section className="mx-auto w-full max-w-6xl px-6 pb-8 pt-8 sm:px-10 sm:pb-10">
        <Reveal>
          <div className={panelClass + " p-6 sm:p-8"}>
            <p className="text-xs uppercase tracking-[0.2em] text-coral/85">Ideas</p>
            <h1 className="mt-4 text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">Notes from research and production practice.</h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Essays and working notes on systems architecture, security decisions, and durable product execution.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 sm:px-10">
        <Reveal>
          <div className={panelClass + " p-5 sm:p-6"}>
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <label className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Search</span>
                <Input
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setPage(1);
                  }}
                  placeholder="Search title or excerpt"
                  className="h-11 rounded-xl border-white/15 bg-black/25 focus-visible:ring-coral"
                />
              </label>

              <div className="flex flex-wrap gap-2">
                {["All", ...uniqueTags].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTagWithReset(option)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral ${
                      tag === option
                        ? "border-coral/70 bg-coral/10 text-foreground"
                        : "border-white/15 bg-black/20 text-muted-foreground hover:border-coral/40 hover:text-foreground"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-12 sm:px-10">
        {paginated.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {paginated.map((post, index) => (
              <Reveal key={post.slug} delay={0.05 + index * 0.04}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className={panelClass + " p-7 text-muted-foreground"}>No posts match your filters.</div>
        )}
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 pb-24 sm:flex-row sm:px-10 sm:pb-32">
        <button
          type="button"
          onClick={() => setPage((value) => Math.max(1, value - 1))}
          disabled={currentPage === 1}
          className="w-full rounded-full border border-white/15 px-4 py-2 text-sm text-foreground transition-colors duration-200 ease-out hover:border-coral/60 disabled:opacity-40 sm:w-auto"
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
          className="w-full rounded-full border border-white/15 px-4 py-2 text-sm text-foreground transition-colors duration-200 ease-out hover:border-coral/60 disabled:opacity-40 sm:w-auto"
        >
          Next
        </button>
      </section>
    </SiteShell>
  );
};

export default Ideas;
