import { Braces, Cable, CloudCog, Layers3, ShieldCheck, Sparkles } from 'lucide-react'
import { Reveal, SectionTitle } from './ui'

const strengths = [{ icon: Sparkles, name: 'Automation mindset' }, { icon: Braces, name: 'Clean architecture' }, { icon: ShieldCheck, name: 'Quality ownership' }]

export function About() { return <section id="about" className="section container about-grid">
  <Reveal><SectionTitle eyebrow="ABOUT ME" title="Building quality into" accent="every release." /></Reveal>
  <Reveal delay={.1} className="about-card glass"><p className="lead">I’m a detail-focused QA Automation Engineer who turns product complexity into confident, repeatable delivery.</p><p>I combine Playwright and TypeScript expertise with pragmatic API testing and CI/CD thinking to make quality a natural part of every engineering workflow.</p><div className="about-strengths">{strengths.map(({ icon: Icon, name }) => <div key={name}><Icon/><span>{name}</span></div>)}</div></Reveal>
  <div className="principles">{[['01','Playwright expertise',Cable],['02','API testing',Layers3],['03','CI/CD delivery',CloudCog]].map(([number,label,Icon]) => <Reveal key={number} className="principle"><span>{number}</span><Icon/><p>{label}</p></Reveal>)}</div>
</section> }
