import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { siteMeta } from "@/data/site";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "About / Studio", to: "/studio" },
  { label: "Team", to: "/team" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled ? "border-b border-border/70 bg-background/90 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:h-20 sm:px-10">
          <Link
            to="/"
            className="text-sm font-semibold tracking-[0.08em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            aria-label="Paperfrogs HQ home"
          >
            {siteMeta.name}
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-foreground transition-colors hover:border-coral/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            aria-label="Open menu"
            aria-expanded={open}
          >
            Menu
          </button>
        </div>
      </header>
      <MenuOverlay open={open} onOpenChange={setOpen} items={[...menuItems]} />
    </>
  );
};
