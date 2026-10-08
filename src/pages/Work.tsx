import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { PortfolioMark } from "@/components/site/PortfolioMark";
import { projects } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const ordered = ["burnlink", "burnlink-cli", "fusion", "apc", "fusion-verifier"].map(slug => projects.find(project => project.slug === slug)!);

export default function Work() {
  usePageSeo({ title: "Products", description: "Explore the products and research from Paperfrogs.", path: "/products" });
  return <SiteShell>
    <header className="wrap page-hero"><p className="eyebrow">Paperfrogs / Products</p><h1>Built with conviction.</h1><div className="page-hero-bottom"><p>A selection of products and research we are building. We show the work at its actual stage, from released tools to early investigations.</p><span>{String(ordered.length).padStart(2, "0")} projects</span></div></header>
    <section className="wrap content-section portfolio-page"><div className="portfolio-list">{ordered.map(project => <Link className="portfolio-row" key={project.slug} to={`/products/${project.slug}`}><PortfolioMark project={project} /><span className="portfolio-name">{project.name}</span><span className="portfolio-summary">{project.summary}</span><span className="portfolio-status">{project.status}</span><span className="portfolio-arrow" aria-hidden="true">↗</span></Link>)}</div></section>
    <section className="wrap portfolio-outro"><p>Good work takes different forms.</p><Link className="inline-link" to="/studio">See the Paperfrogs approach <span>↗</span></Link></section>
  </SiteShell>;
}
