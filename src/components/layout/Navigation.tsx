import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { EASING_SECONDARY, MOTION_DURATION, reducedMotionDuration } from "@/lib/motion";
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
  const shouldReduceMotion = useReducedMotion();

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
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: reducedMotionDuration(shouldReduceMotion, MOTION_DURATION.medium),
          ease: EASING_SECONDARY,
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
          isScrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:h-20 sm:px-10">
          <Link
            to="/"
            className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            aria-label="Paperfrogs HQ home"
          >
            <img
              src="/paperfrogs-logo-nav.png"
              alt="Paperfrogs HQ"
              className="h-11 w-11 object-contain sm:h-12 sm:w-12"
              loading="eager"
              decoding="async"
            />
          </Link>

          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-foreground backdrop-blur-md transition-colors hover:border-coral/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            aria-label="Open menu"
            aria-expanded={open}
            whileHover={shouldReduceMotion ? {} : { y: -1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            transition={{ duration: MOTION_DURATION.fast, ease: "easeOut" }}
            style={{ willChange: "transform" }}
          >
            Menu
          </motion.button>
        </div>
      </motion.header>
      <MenuOverlay open={open} onOpenChange={setOpen} items={[...menuItems]} />
    </>
  );
};
