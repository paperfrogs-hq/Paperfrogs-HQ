import { Link } from "react-router-dom";
import { siteMeta } from "@/data/site";

const footerLinks = [
  { label: "GitHub", href: siteMeta.links.github },
  { label: "LinkedIn", href: siteMeta.links.linkedin },
  { label: "X", href: siteMeta.links.x },
] as const;

const legalLinks = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
] as const;

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="space-y-2">
          <p>
            © {new Date().getFullYear()} {siteMeta.name}
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="transition-colors hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
