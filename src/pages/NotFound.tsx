import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/button";
import { usePageSeo } from "@/hooks/usePageSeo";

const NotFound = () => {
  usePageSeo({
    title: "Not Found",
    description: "The requested page was not found.",
    path: "/404",
  });

  return (
    <SiteShell>
      <section className="mx-auto flex w-full max-w-4xl flex-col items-start px-6 pb-24 pt-12 sm:px-10 sm:pb-32">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">404</p>
        <h1 className="mt-4 text-5xl tracking-[-0.03em] sm:text-6xl">Page not found</h1>
        <p className="mt-5 max-w-xl text-muted-foreground">The route does not exist or may have moved.</p>
        <div className="mt-8">
          <Button asChild variant="hero">
            <Link to="/">Return home</Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
};

export default NotFound;
