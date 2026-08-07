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

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: rm ? 0 : -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: rm ? 0.1 : 0.5, ease: EASING }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-white/[0.05] bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[60px] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:h-[66px] sm:px-10 lg:px-16">
          <Link
            to="/"
            className="inline-flex shrink-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            aria-label="Paperfrogs HQ home"
          >
            <img
              src="/paperfrogs-logo-nav.png"
              alt="Paperfrogs HQ"
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
              loading="eager"
              decoding="async"
            />
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/40 lg:block">
              Paperfrogs
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-5 md:gap-6">
            <nav className="hidden items-center gap-5 md:flex lg:gap-6">
              {menuItems.filter((item) => item.to !== "/contact").map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral",
                    isActive(item.to) ? "text-foreground" : "text-foreground/35 hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              to="/contact"
              className="hidden h-9 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55 transition-all hover:border-coral/30 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral md:inline-flex"
            >
              Contact
            </Link>

            <motion.button
              type="button"
              onClick={() => setOpen(true)}
              whileHover={rm ? {} : { scale: 1.03 }}
              whileTap={rm ? {} : { scale: 0.96 }}
              transition={{ duration: 0.18 }}
              aria-label="Open navigation menu"
              aria-expanded={open}
              className="inline-flex h-9 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55 transition-colors hover:border-white/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral md:hidden"
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