import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Certificates } from './components/Certificates'
import { Stats } from './components/Stats'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return <div className="site-shell">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Stats />
      <Contact />
    </main>
    <Footer />
  </div>
}
