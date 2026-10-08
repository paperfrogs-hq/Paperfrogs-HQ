import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "About", to: "/studio" },
  { label: "Products", to: "/products" },
  { label: "Founders", to: "/team" },
  { label: "Careers", to: "/careers" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <div className="wrap nav-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="Paperfrogs home">
          <span className="brand-icon" aria-hidden="true" />
          <span>paperfrogs<span className="brand-hq"> / HQ</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(link => <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? "is-active" : ""}>{link.label}</NavLink>)}
        </nav>
        <Link className="nav-contact" to="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "+"}</span></button>
      </div>
      {open && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
        {[{ label: "Home", to: "/" }, ...links, { label: "Contact", to: "/contact" }].map(link => <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">↗</span></NavLink>)}
      </nav>}
    </header>
  </>;
}
