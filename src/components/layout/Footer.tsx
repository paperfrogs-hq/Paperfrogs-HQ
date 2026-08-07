import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";
import { siteMeta } from "@/data/site";

const socialLinks = [
  { label: "GitHub", href: siteMeta.links.github, icon: Github },
  { label: "LinkedIn", href: siteMeta.links.linkedin, icon: Linkedin },
  { label: "X", href: siteMeta.links.x, icon: Twitter },
] as const;

const navLinks = [
  { label: "Products", to: "/products" },
  { label: "Studio", to: "/studio" },
  { label: "People", to: "/team" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

export const Footer = () => (
  <footer className="border-t border-white/[0.06] bg-background">
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-10 sm:py-14 lg:px-16">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-14">
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
          >
            <img
              src="/paperfrogs-logo-nav.png"
              alt="Paperfrogs HQ"
              className="h-8 w-8 object-contain opacity-70"
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
              Paperfrogs HQ
            </span>
          </Link>
          <p className="max-w-xs text-[13px] leading-relaxed text-foreground/35">
            {siteMeta.tagline}
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/25">
            {siteMeta.location}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-0 lg:gap-14">
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/30">
              Navigate
            </p>
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="link-slide text-[13px] text-foreground/45 transition-colors hover:text-foreground/85"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/30">
              Social
            </p>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="link-slide inline-flex items-center gap-2 text-[13px] text-foreground/45 transition-colors hover:text-foreground/85"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </a>
            ))}
          </div>
          <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/30">
              Legal
            </p>
            <Link
              to="/privacy"
              className="link-slide text-[13px] text-foreground/45 transition-colors hover:text-foreground/85"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="link-slide text-[13px] text-foreground/45 transition-colors hover:text-foreground/85"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div className="pf-divider mt-12" />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/25">
          © {new Date().getFullYear()} {siteMeta.name}
        </p>
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/25">
          Built with intention.
        </p>
      </div>
    </div>
  </footer>
);