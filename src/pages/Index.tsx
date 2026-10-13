import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { PortfolioMark } from "@/components/site/PortfolioMark";
import { ecosystem } from "@/data/ecosystem";
import { founders, projects } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";
import { ScrollExperience } from "@/components/scroll-experience/ScrollExperience";

const selected = ["burnlink", "burnlink-cli", "fusion"].map(slug => projects.find(project => project.slug === slug)!);

export default function Index() {
  usePageSeo("/");
  return <SiteShell>
    <ScrollExperience />

    <section className="wrap content-section"><div className="section-head"><div><p className="eyebrow">In a nutshell / 02</p><h2>One platform.<br/>Five ways to build.</h2></div><p>Each part of Paperfrogs has a distinct job. Together, they let good ideas take the form they need.</p></div><div className="ecosystem-list">{ecosystem.map((branch, index) => <div className="ecosystem-row" key={branch.name}><span className="row-index">{String(index + 1).padStart(2, "0")}</span><h3>{branch.name}</h3><p>{branch.description}</p></div>)}</div></section>

    <section className="wrap content-section portfolio-preview"><div className="section-head"><div><p className="eyebrow">Selected products / 03</p><h2>Work in the world.</h2></div><Link className="inline-link" to="/products">All products</Link></div><div className="portfolio-list">{selected.map(project => <Link className="portfolio-row" to={`/products/${project.slug}`} key={project.slug}><PortfolioMark project={project} /><span className="portfolio-name">{project.name}</span><span className="portfolio-summary">{project.summary}</span><span className="portfolio-status">{project.status}</span></Link>)}</div><p className="portfolio-note">A standout release for Paperfrogs, BurnLink now brings one-time sharing to the terminal with <a href="https://www.npmjs.com/package/burnlink" target="_blank" rel="noreferrer">BurnLink CLI</a>.</p></section>

    <section className="wrap content-section people-section"><div className="section-head"><div><p className="eyebrow">Founders / 04</p><h2>Founders close to the work.</h2></div><Link className="inline-link" to="/team">Meet the founders</Link></div><div className="people-list">{founders.map(person => <div key={person.name}><h3>{person.name}</h3><p>{person.bio}</p></div>)}</div></section>
  </SiteShell>;
}
