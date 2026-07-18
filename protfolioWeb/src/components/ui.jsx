import { motion } from 'framer-motion'

export function SectionTitle({ eyebrow, title, accent, align = 'left' }) {
  return <div className={`section-title ${align === 'center' ? 'center' : ''}`}>
    <p className="eyebrow"><span />{eyebrow}</p>
    <h2>{title} {accent && <em>{accent}</em>}</h2>
  </div>
}

export function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.55, delay }}>
    {children}
  </motion.div>
}
