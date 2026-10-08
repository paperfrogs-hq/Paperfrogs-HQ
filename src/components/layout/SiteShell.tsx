import type { ReactNode } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const SiteShell = ({ children, showFooter = true }: { children: ReactNode; showFooter?: boolean; className?: string }) => (
  <div className="site-shell"><Navigation /><main id="main-content">{children}</main>{showFooter && <Footer />}</div>
);
