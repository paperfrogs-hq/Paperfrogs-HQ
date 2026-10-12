import { Link, Navigate, useParams } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { jobs } from "@/data/jobs";
import { siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

export default function JobDetail() {
  const { slug } = useParams();
  const job = jobs.find(item => item.slug === slug);
  const path = job ? `/careers/${job.slug}` : "/careers";

  usePageSeo(path);

  if (!job) return <Navigate to="/careers" replace />;

  return <SiteShell>
    <div className="wrap detail-back"><Link to="/careers">← Careers</Link><span>Remote / {job.type}</span></div>
    <header className="wrap job-hero"><p className="eyebrow">Open role / Paperfrogs HQ</p><h1>{job.title}</h1><p>{job.summary}</p><div className="job-facts"><span>Remote</span><span>Bangladesh-based applicants</span><span>{job.type}</span></div><a className="button button-primary" href={`mailto:${siteMeta.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}>Apply by email</a></header>
    <section className="career-roles"><div className="wrap job-content"><aside><p className="eyebrow">The role</p><p>Remote · Bangladesh</p><p>{job.type}</p></aside><div><p className="job-intro">{job.introduction}</p><section><h2>What you will do</h2><ul>{job.work.map(item => <li key={item}>{item}</li>)}</ul></section><section><h2>What we are looking for</h2><ul>{job.fit.map(item => <li key={item}>{item}</li>)}</ul></section><section><h2>How to apply</h2><p>Email <a href={`mailto:${siteMeta.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}>{siteMeta.email}</a> with the role in the subject. Include a brief introduction and a link to relevant work. A CV is welcome if it helps explain your experience.</p></section></div></div></section>
    <div className="wrap detail-end"><Link className="inline-link" to="/careers">← All remote roles</Link></div>
  </SiteShell>;
}
