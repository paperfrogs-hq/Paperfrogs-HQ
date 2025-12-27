import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [{
  name: "About",
  href: "#about"
}, {
  name: "Products",
  href: "#products"
}, {
  name: "Team",
  href: "#team"
}, {
  name: "Philosophy",
  href: "#philosophy"
}, {
  name: "Future",
  href: "#future"
}];
export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: "easeOut"
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="text-xl font-semibold text-foreground">Paperfrogs<span className="text-coral">Labs</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-muted-foreground hover:text-coral transition-colors duration-300 text-sm font-medium">
                {link.name}
              </a>)}
            <a href="https://github.com/paperfrogs-hq/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                GitHub
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-foreground hover:text-coral transition-colors duration-300 py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>)}
              <a href="https://github.com/paperfrogs-hq/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full mt-2">
                  GitHub
                </Button>
              </a>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.nav>;
};