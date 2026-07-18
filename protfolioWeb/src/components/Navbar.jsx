import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certificates', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  useEffect(() => {
    const sections = links.map(x => document.getElementById(x.toLowerCase())).filter(Boolean)
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id[0].toUpperCase() + entry.target.id.slice(1))), { rootMargin: '-35% 0px -55% 0px' })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return <header className="navbar-wrap"><nav className="navbar container">
    <a className="logo" href="#home">M<span>G</span><i>.</i></a>
    <div className={`nav-links ${open ? 'open' : ''}`}>{links.map(link => <a className={active === link ? 'active' : ''} onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}</div>
    <a href="#contact" className="nav-cta">Let’s talk <span>↗</span></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Open navigation">{open ? <X /> : <Menu />}</button>
  </nav></header>
}
