import { ArrowUpRight, Github } from 'lucide-react'
import { Reveal, SectionTitle } from './ui'

const projects = [
	{
		num: '01',
		title: 'Playwright Automation Framework',
		desc: 'A resilient end-to-end test framework with Page Objects, parallel execution, reporting, and cross-browser confidence.',
		tags: ['Playwright', 'TypeScript', 'Allure'],
		tone: 'violet',
	},
	{
		num: '02',
		title: 'API Automation Framework',
		desc: 'A modular API quality suite that validates service contracts, business logic, and critical edge cases.',
		tags: ['Postman', 'JavaScript', 'Newman'],
		tone: 'blue',
	},
	{
		num: '03',
		title: 'CI/CD Quality Pipeline',
		desc: 'An automated quality gate that runs test suites, publishes clear reports, and keeps releases dependable.',
		tags: ['GitHub Actions', 'Jenkins', 'Docker'],
		tone: 'cyan',
	},
]

export function Projects() {
	return (
		<section id="projects" className="section container">
			<Reveal>
				<SectionTitle eyebrow="FEATURED PROJECTS" title="Quality engineering with" accent="real impact." />
			</Reveal>
			<div className="project-grid">
				{projects.map((p, i) => (
					<Reveal delay={i * 0.08} className={`project-card glass ${p.tone}`} key={p.num}>
						<div className="project-preview">
							<span>{p.num}</span>
							<div className="preview-window"><i /><i /><i /><b /><b /><b /></div>
						</div>
						<div className="project-body">
							<h3>{p.title}</h3>
							<p>{p.desc}</p>
							<div className="tag-list">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
							<div className="project-links">
								<a href="https://github.com/MahadevGuchhait147" target="_blank" rel="noreferrer"><Github size={15} /> Code</a>
								<a href="#contact">Live demo <ArrowUpRight size={15} /></a>
							</div>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	)
}
