import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { usePageSeo } from "@/hooks/usePageSeo";

const NotFound = () => {
  usePageSeo({
    title: "Not Found",
    description: "The requested page was not found.",
    path: "/404",
  });

  return (
    <SiteShell>
      <section className="mx-auto flex w-full max-w-7xl flex-col justify-center px-6 py-32 sm:px-10 lg:px-16 sm:py-48">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-coral/60">404</p>
          <h1 className="mt-5 text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.0] tracking-[-0.04em] text-foreground">
            Page not found.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/40">
            The route does not exist or may have moved. Head back home.
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-background transition-all hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Return home
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default NotFound;
