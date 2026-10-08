import { Link } from "react-router-dom";
import { siteMeta } from "@/data/site";

export function Footer() {
  return <footer className="site-footer">
    <div className="wrap">
      <div className="footer-lead">
        <p className="eyebrow">Paperfrogs HQ</p>
        <h2>Building and backing<br/>what lasts.</h2>
        <a href={`mailto:${siteMeta.email}`}>{siteMeta.email} <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-grid">
        <p>Venture capital and company building.<br/>Dhaka, Bangladesh · Working globally.</p>
        <nav aria-label="Footer navigation"><Link to="/studio">About</Link><Link to="/products">Products</Link><Link to="/team">Founders</Link><Link to="/careers">Careers</Link><Link to="/contact">Contact</Link></nav>
        <nav aria-label="Social and legal"><a href={siteMeta.links.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={siteMeta.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></nav>
      </div>
      <div className="footer-meta"><span>© {new Date().getFullYear()} Paperfrogs HQ</span><span>Where research becomes real.</span></div>
    </div>
  </footer>;
}
