import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { ecosystem } from "@/data/ecosystem";
import { usePageSeo } from "@/hooks/usePageSeo";

export default function Studio() {
  usePageSeo({ title: "About", description: "Paperfrogs combines venture capital, research, and company building across infrastructure and useful software.", path: "/studio" });
  return <SiteShell>
    <header className="wrap page-hero"><p className="eyebrow">Paperfrogs / About</p><h1>Capital is the beginning.</h1><div className="page-hero-bottom"><p>Paperfrogs is a venture capital and company-building platform for technical ideas that deserve patient attention.</p><span>01 / About Paperfrogs</span></div></header>
    <section className="thesis-section"><div className="wrap thesis-grid"><p className="eyebrow">Our perspective</p><div><h2>We stay close to the work.</h2><p>We believe durable companies grow from a clear problem, the right people, and an honest understanding of what it takes to ship. Our role can be capital, research, product building, or a combination of all three.</p></div></div></section>
    <section className="wrap content-section"><div className="section-head"><div><p className="eyebrow">In a nutshell</p><h2>The Paperfrogs ecosystem.</h2></div><p>Distinct paths for ideas at different stages, connected by a shared standard for useful work.</p></div><div className="ecosystem-list">{ecosystem.map((branch, index) => <div className="ecosystem-row" key={branch.name}><span className="row-index">{String(index + 1).padStart(2, "0")}</span><h3>{branch.name}</h3><p>{branch.description}</p></div>)}</div></section>
    <section className="wrap content-section approach-close"><p className="eyebrow">What ties it together</p><h2>Where infrastructure embeds, experiments ship, and research becomes real.</h2><Link className="button button-primary" to="/contact">Start a conversation <span>↗</span></Link></section>
  </SiteShell>;
}
