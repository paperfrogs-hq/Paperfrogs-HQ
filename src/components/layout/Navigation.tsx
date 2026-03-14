import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { cn } from "@/lib/utils";

const EASING = [0.22, 1, 0.36, 1] as const;

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Studio", to: "/studio" },
  { label: "People", to: "/team" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const rm = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: rm ? 0 : -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: rm ? 0.1 : 0.5, ease: EASING }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-white/[0.07] bg-background/40 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[66px] w-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
          {/* Logo */}
          <Link
            to="/"
            className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            aria-label="Paperfrogs HQ home"
          >
            <img
              src="/paperfrogs-logo-nav.png"
              alt="Paperfrogs HQ"
              className="h-9 w-9 object-contain"
              loading="eager"
              decoding="async"
            />
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/40 sm:block">
              Paperfrogs
            </span>
          </Link>

          {/* Desktop nav + Menu button */}
          <div className="flex items-center gap-6">
            {/* Desktop links */}
            <nav className="hidden items-center gap-6 md:flex">
              {menuItems
                .filter((item) => item.to !== "/contact")
                .map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral",
                      isActive(item.to)
                        ? "text-foreground"
                        : "text-foreground/35 hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
            </nav>

            {/* Contact button — desktop */}
            <Link
              to="/contact"
              className="hidden md:inline-flex h-9 items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/50 transition-colors hover:border-white/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              Contact
            </Link>

            {/* Mobile menu button */}
            <motion.button
              type="button"
              onClick={() => setOpen(true)}
              whileHover={rm ? {} : { scale: 1.03 }}
              whileTap={rm ? {} : { scale: 0.96 }}
              transition={{ duration: 0.18 }}
              aria-label="Open navigation menu"
              aria-expanded={open}
              className="md:hidden inline-flex h-9 items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/50 transition-colors hover:border-white/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              Menu
            </motion.button>
          </div>
        </div>
      </motion.header>
      <MenuOverlay open={open} onOpenChange={setOpen} items={[...menuItems]} />
    </>
  );
};
