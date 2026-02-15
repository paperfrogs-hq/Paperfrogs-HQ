import { ReactNode } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

type SiteShellProps = {
  children: ReactNode;
  className?: string;
  showFooter?: boolean;
};

export const SiteShell = ({ children, className, showFooter = true }: SiteShellProps) => {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(60% 40% at 20% 0%, hsl(var(--coral) / 0.1) 0%, transparent 60%), radial-gradient(45% 30% at 100% 10%, hsl(var(--coral) / 0.08) 0%, transparent 70%)",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 noise-bg" />
      <Navigation />
      <main className={cn("relative z-10 pt-24 sm:pt-28", className)}>{children}</main>
      {showFooter ? <Footer /> : null}
    </div>
  );
};
