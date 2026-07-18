import { motion } from 'framer-motion'
import { ArrowDownToLine, ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'

export function Hero() {
  return <section id="home" className="hero container">
    <div className="hero-ambient ambient-one" /><div className="hero-ambient ambient-two" />
    <motion.div className="hero-copy" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }}>
      <div className="availability"><span className="pulse" /> Available for opportunities</div>
      <p className="hero-intro">HELLO, I’M</p>
      <h1>Mahadev<br/><strong>Guchhait.</strong></h1>
      <h2>QA Automation Engineer</h2>
      <p className="hero-description">I build scalable UI and API automation frameworks, improve software quality, and integrate automated testing into modern CI/CD pipelines.</p>
      <div className="hero-actions"><a className="button primary" href="/resume.pdf" download>Download Resume <ArrowDownToLine size={17}/></a><a className="button ghost" href="#contact">Contact me <ArrowUpRight size={17}/></a></div>
      <div className="hero-meta"><span><MapPin size={15}/> Kolkata, India</span><div className="socials"><a aria-label="GitHub" href="https://github.com/MahadevGuchhait147" target="_blank" rel="noreferrer"><Github size={18}/></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/mahadev-guchhait-b5a506254/" target="_blank" rel="noreferrer"><Linkedin size={18}/></a><a aria-label="Email" href="mailto:mahadevg147@gmail.com"><Mail size={18}/></a></div></div>
    </motion.div>
    <motion.div className="hero-visual" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75, delay: .1 }}>
      <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="portrait-ring"><img src="/images/mahadev-portrait.png" alt="Mahadev Guchhait, QA Automation Engineer"/></div>
      <motion.div className="experience-badge glass" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }}><b>2<span>+</span></b><div><strong>Years</strong><small>Experience</small></div></motion.div>
      <motion.div className="quality-pill glass" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.7 }}><span>✓</span><div><strong>Quality first</strong><small>Reliable releases</small></div></motion.div>
    </motion.div>
  </section>
}
