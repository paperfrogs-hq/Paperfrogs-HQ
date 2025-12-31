import { motion } from "framer-motion";
import { Github } from "lucide-react";
const footerLinks = [{
  name: "Products",
  href: "#products"
}, {
  name: "About",
  href: "#about"
}, {
  name: "Philosophy",
  href: "#philosophy"
}];

const footerLegal = [{
  name: "Privacy",
  href: "/privacy"
}, {
  name: "Terms",
  href: "/terms"
}, {
  name: "Contact",
  href: "/contact"
}];
export const Footer = () => {
  return <footer className="py-16 lg:py-20 bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                
                <span className="text-xl font-semibold text-foreground">Paperfrogs <span className="text-coral">HQ</span>
                </span>
              </div>
              <p className="text-muted-foreground max-w-md mb-6">Building thoughtful products for the modern web. Clarity, usability, and design that matters.</p>
              <a href="https://github.com/paperfrogs-hq/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-coral transition-colors duration-300">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.map(link => <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-coral transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLegal.map(link => <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-coral transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </div>
          </div>

          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 opacity-100">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PaperFrogs HQ. All rights reserved.
            </p>
            
          </motion.div>
        </div>
      </div>
    </footer>;
};