import { Link, Navigate, useParams } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { PortfolioMark } from "@/components/site/PortfolioMark";
import { projects } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);
  usePageSeo({ title: project ? `${project.name} · Products` : "Products", description: project?.summary ?? "Paperfrogs products", path: project ? `/products/${project.slug}` : "/products" });
  if (!project) return <Navigate to="/products" replace />;

  const isCli = project.slug === "burnlink-cli";
  const isBurnLink = project.slug === "burnlink";
  return <SiteShell>
    <div className="wrap detail-back"><Link to="/products">← Products</Link><span>{project.pillar} / {project.status}</span></div>
    <header className="wrap detail-hero"><div className="detail-title"><PortfolioMark project={project} /><div><p className="eyebrow">Paperfrogs products / {project.yearStarted}</p><h1>{project.name}</h1></div></div><p>{project.summary}</p><div className="detail-links">{project.links?.demo && <a className="button button-primary" href={project.links.demo} target="_blank" rel="noreferrer">Visit project ↗</a>}{project.links?.github && <a className="button button-secondary" href={project.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>}{project.links?.docs && <a className="button button-secondary" href={project.links.docs} target="_blank" rel="noreferrer">{isCli ? "npm package ↗" : "Documentation ↗"}</a>}</div></header>
    <section className="wrap detail-content"><aside><p className="eyebrow">At a glance</p><dl><div><dt>Area</dt><dd>{project.pillar}</dd></div><div><dt>Stage</dt><dd>{project.status}</dd></div><div><dt>Started</dt><dd>{project.yearStarted}</dd></div><div><dt>Stack</dt><dd>{project.stack.join(", ")}</dd></div></dl></aside><div><article><span>01 / The problem</span><h2>What we are solving</h2><p>{project.problem}</p></article><article><span>02 / The work</span><h2>Our approach</h2><p>{project.approach}</p></article><article><span>03 / Today</span><h2>Current state</h2><p>{project.today}</p></article><article><span>04 / Ahead</span><h2>What comes next</h2><p>{project.next}</p></article></div></section>
    {(isBurnLink || isCli) && <section className="wrap cli-callout"><div><p className="eyebrow">BurnLink CLI</p><h2>One-time sharing from the terminal.</h2><p>The BurnLink workflow now has a command-line release.</p></div><div><code>npm i -g burnlink</code><a className="inline-link" href="https://www.npmjs.com/package/burnlink" target="_blank" rel="noreferrer">View on npm <span>↗</span></a>{isBurnLink && <Link className="inline-link" to="/products/burnlink-cli">Explore the CLI <span>↗</span></Link>}</div></section>}
    {project.timeline?.journey?.length ? <section className="wrap timeline-section"><div className="section-head"><div><p className="eyebrow">Progress</p><h2>Milestones.</h2></div></div><div className="timeline-list">{project.timeline.journey.map(item => <div key={item.period}><span>{item.period}</span><p>{item.detail}</p></div>)}</div></section> : null}
    <div className="wrap detail-end"><Link className="inline-link" to="/products">← Back to products</Link></div>
  </SiteShell>;
}
