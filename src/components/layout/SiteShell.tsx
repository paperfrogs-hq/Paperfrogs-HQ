import { ReactNode } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MotionBackground } from "@/components/layout/MotionBackground";
import { cn } from "@/lib/utils";

type SiteShellProps = {
  children: ReactNode;
  className?: string;
  showFooter?: boolean;
};

export const SiteShell = ({
  children,
  className,
  showFooter = true,
}: SiteShellProps) => (
  <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
    <MotionBackground variant="page" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 noise-bg"
    />
    <Navigation />
    <main className={cn("relative z-10 pt-[66px]", className)}>{children}</main>
    {showFooter && <Footer />}
  </div>
);
