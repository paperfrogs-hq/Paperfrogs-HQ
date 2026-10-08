import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { PortfolioMark } from "@/components/site/PortfolioMark";
import { ecosystem } from "@/data/ecosystem";
import { founders, projects } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const selected = ["burnlink", "burnlink-cli", "fusion"].map(slug => projects.find(project => project.slug === slug)!);

export default function Index() {
  usePageSeo({ title: "Home", description: "Paperfrogs is a venture capital and company-building platform backing infrastructure, tools, and research-led ideas.", path: "/" });
  return <SiteShell>
    <section className="wrap home-hero">
      <p className="eyebrow"><span className="signal" /> Paperfrogs HQ · Venture capital & company building</p>
      <h1>Capital for<br/>the hard parts<span className="accent">.</span></h1>
      <div className="hero-bottom"><p>Capital, research, and hands-on building for durable infrastructure and ambitious technical ideas.</p><Link className="button button-primary hero-cta" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></div>
      <div className="hero-footnote"><span>Dhaka, Bangladesh · Working globally</span><span>01 / Paperfrogs</span></div>
    </section>

    <section className="thesis-section"><div className="wrap thesis-grid"><p className="eyebrow">Our thesis / 01</p><div><h2>The best ideas need more than a check.</h2><p>We work where infrastructure, security, and useful software meet. Some ideas need capital. Others need research, a first product, or a team willing to stay with the hard parts. Paperfrogs is built for all of it.</p><Link className="inline-link" to="/studio">How we work <span>↗</span></Link></div></div></section>

    <section className="wrap content-section"><div className="section-head"><div><p className="eyebrow">In a nutshell / 02</p><h2>One platform.<br/>Five ways to build.</h2></div><p>Each part of Paperfrogs has a distinct job. Together, they let good ideas take the form they need.</p></div><div className="ecosystem-list">{ecosystem.map((branch, index) => <div className="ecosystem-row" key={branch.name}><span className="row-index">{String(index + 1).padStart(2, "0")}</span><h3>{branch.name}</h3><p>{branch.description}</p></div>)}</div></section>

    <section className="wrap content-section portfolio-preview"><div className="section-head"><div><p className="eyebrow">Selected products / 03</p><h2>Work in the world.</h2></div><Link className="inline-link" to="/products">All products <span>↗</span></Link></div><div className="portfolio-list">{selected.map(project => <Link className="portfolio-row" to={`/products/${project.slug}`} key={project.slug}><PortfolioMark project={project} /><span className="portfolio-name">{project.name}</span><span className="portfolio-summary">{project.summary}</span><span className="portfolio-status">{project.status}</span><span className="portfolio-arrow" aria-hidden="true">↗</span></Link>)}</div><p className="portfolio-note">A standout release for Paperfrogs, BurnLink now brings one-time sharing to the terminal with <a href="https://www.npmjs.com/package/burnlink" target="_blank" rel="noreferrer">BurnLink CLI ↗</a>.</p></section>

    <section className="wrap content-section people-section"><div className="section-head"><div><p className="eyebrow">Founders / 04</p><h2>Founders close to the work.</h2></div><Link className="inline-link" to="/team">Meet the founders <span>↗</span></Link></div><div className="people-list">{founders.map(person => <div key={person.name}><h3>{person.name}</h3><p>{person.bio}</p></div>)}</div></section>
  </SiteShell>;
}
