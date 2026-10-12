import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { jobs } from "@/data/jobs";
import { siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

export default function Careers() {
  usePageSeo("/careers");

  return <SiteShell>
    <div className="page-hero wrap"><p className="eyebrow">Careers / 004</p><div className="page-hero-grid"><h1>Build what<br/><em>comes next.</em></h1><p>Remote work across engineering, design, and content for products with real users and technical problems worth staying with.</p></div><div className="page-hero-foot"><span>Remote · Open to Bangladesh-based applicants</span><span>Roles across Paperfrogs</span></div></div>
    <section className="wrap career-intro"><div><p className="eyebrow">Work with us</p><h2>Small teams.<br/><em>Real ownership.</em></h2></div><p>Our work spans infrastructure, security, and useful software. We value clear thinking, careful implementation, and the ability to move an idea into a working product.</p></section>
    <section className="career-roles"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">Open roles</p><h2>Current openings.</h2></div><p className="section-intro">Every role listed here is remote. Open each position for the work, expectations, and application details.</p></div><div className="role-list">{jobs.map((job, i) => <Link className="role-row" key={job.slug} to={`/careers/${job.slug}`}><span>0{i + 1}</span><div><h3>{job.title}</h3><p>{job.summary}</p></div><span className="role-meta">Remote · {job.type}</span></Link>)}</div></div></section>
    <section className="wrap apply-section"><div><p className="eyebrow">How to reach us</p><h2>Show us<br/><em>your work.</em></h2></div><div><ol><li><span>01</span>Choose the role that fits your work.</li><li><span>02</span>Share a portfolio, project, or piece of writing you are proud of.</li><li><span>03</span>Tell us what you want to work on at Paperfrogs.</li></ol><a className="primary-link" href={`mailto:${siteMeta.email}?subject=${encodeURIComponent("Working with Paperfrogs")}`}>Email the founders</a><p className="apply-small">{siteMeta.email}</p></div></section>
  </SiteShell>;
}
