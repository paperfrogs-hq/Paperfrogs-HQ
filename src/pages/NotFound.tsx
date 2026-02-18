import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/button";
import { usePageSeo } from "@/hooks/usePageSeo";

const panelClass =
  "rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(12,16,20,0.92),rgba(10,14,18,0.88))] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl";

const NotFound = () => {
  usePageSeo({
    title: "Not Found",
    description: "The requested page was not found.",
    path: "/404",
  });

  return (
    <SiteShell>
      <section className="mx-auto flex w-full max-w-5xl flex-col px-6 pb-24 pt-12 sm:px-10 sm:pb-32">
        <div className={panelClass + " p-8 sm:p-10"}>
          <p className="text-xs uppercase tracking-[0.2em] text-coral/85">404</p>
          <h1 className="mt-4 text-5xl tracking-[-0.03em] sm:text-6xl">Page not found</h1>
          <p className="mt-5 max-w-xl text-sm text-muted-foreground sm:text-base">The route does not exist or may have moved.</p>
          <div className="mt-8">
            <Button asChild variant="hero">
              <Link to="/">Return home</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

export default NotFound;
