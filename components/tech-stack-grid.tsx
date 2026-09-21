'use client'

import { motion } from 'motion/react'

interface TechItem {
  name: string
  icon: string
  color: string
  description: string
}

interface TechStackGridProps {
  items: TechItem[]
  title?: string
  subtitle?: string
}

export function TechStackGrid({ items, title = "Tech Stack", subtitle }: TechStackGridProps) {
  return (
    <section className="tech-stack-section section-pad">
      <div className="tech-header">
        <div>
          <p className="section-label">Technology</p>
          <h2>{title}</h2>
          {subtitle && <p className="tech-subtitle">{subtitle}</p>}
        </div>
      </div>
      <div className="tech-grid">
        {items.map((tech, index) => (
          <motion.div
            key={index}
            className="tech-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className="tech-icon" style={{ '--tech-color': tech.color } as React.CSSProperties}>
              <img src={tech.icon} alt={`${tech.name} logo`} />
            </div>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
