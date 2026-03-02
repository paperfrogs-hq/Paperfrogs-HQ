import { ReactNode } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

type SiteShellProps = {
  children: ReactNode;
  className?: string;
  showFooter?: boolean;
};

export const SiteShell = ({ children, className, showFooter = true }: SiteShellProps) => (
  <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
    {/* Subtle top-left coral gradient */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(50% 32% at 0% 0%, hsl(var(--coral) / 0.09) 0%, transparent 60%), radial-gradient(35% 22% at 100% 0%, hsl(var(--coral) / 0.06) 0%, transparent 70%)",
      }}
    />
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 noise-bg" />
    <Navigation />
    <main className={cn("relative z-10 pt-[66px]", className)}>{children}</main>
    {showFooter && <Footer />}
  </div>
);
