import { Link } from "react-router-dom";
import { siteMeta } from "@/data/site";

export const Footer = () => (
  <footer className="border-t border-white/[0.06] bg-background">
    <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-16">
      {/* Top row */}
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral">
            <img src="/paperfrogs-logo-nav.png" alt="Paperfrogs HQ" className="h-8 w-8 object-contain opacity-70" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/40">
              Paperfrogs HQ
            </span>
          </Link>
          <p className="max-w-xs text-[13px] leading-relaxed text-foreground/30">
            {siteMeta.tagline}
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/25">Navigate</p>
            {[
              { label: "Projects", to: "/projects" },
              { label: "Studio", to: "/studio" },
              { label: "People", to: "/team" },
              { label: "Careers", to: "/careers" },
              { label: "Contact", to: "/contact" },
            ].map(({ label, to }) => (
              <Link key={to} to={to} className="link-slide text-[13px] text-foreground/40 transition-colors hover:text-foreground/80">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/25">Social</p>
            {[
              { label: "GitHub", href: siteMeta.links.github },
              { label: "LinkedIn", href: siteMeta.links.linkedin },
              { label: "X", href: siteMeta.links.x },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="link-slide text-[13px] text-foreground/40 transition-colors hover:text-foreground/80">
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/25">Legal</p>
            <Link to="/privacy" className="link-slide text-[13px] text-foreground/40 transition-colors hover:text-foreground/80">Privacy</Link>
            <Link to="/terms" className="link-slide text-[13px] text-foreground/40 transition-colors hover:text-foreground/80">Terms</Link>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/22">
          © {new Date().getFullYear()} {siteMeta.name}
        </p>
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/22">
          {siteMeta.location}
        </p>
      </div>
    </div>
  </footer>
);
