import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Philosophy", href: "#philosophy" },
];

const footerLegal = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Contact", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="py-20 lg:py-24 bg-background border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-coral animate-pulse-dot" />
                <span className="text-xs font-semibold tracking-wide text-foreground uppercase">
                  Paperfrogs HQ
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                Building thoughtful digital products for the modern web.
              </p>
              <a
                href="https://github.com/paperfrogs-hq/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Github size={14} />
                <span className="font-mono">GitHub</span>
              </a>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-6">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLegal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-6">
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@paperfrogs.dev"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Email
                    <ArrowUpRight size={10} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <p className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} Paperfrogs HQ. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
                Back to top
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};