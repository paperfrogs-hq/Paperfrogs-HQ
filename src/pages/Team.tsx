import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { usePageSeo } from "@/hooks/usePageSeo";

const panelClass =
  "rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(12,16,20,0.92),rgba(10,14,18,0.88))] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl";

const Team = () => {
  usePageSeo({
    title: "Team",
    description: "Team page is coming soon.",
    path: "/team",
  });

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-10 sm:px-10 sm:pb-32">
        <Reveal>
          <div className={panelClass + " p-8 text-center sm:p-12"}>
            <p className="text-xs uppercase tracking-[0.2em] text-coral/85">Team</p>
            <h1 className="mt-4 text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">Comming soon</h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              We are preparing a dedicated team page. For now, you can view founder details in the Studio page.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild variant="hero" size="sm">
                <Link to="/studio">Go to Studio</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
};

export default Team;
