'use client'

import { motion } from 'motion/react'

interface Brand {
  name: string
  logo: string
  description: string
  color?: string
}

interface BrandsGridProps {
  brands: Brand[]
  title?: string
  subtitle?: string
}

export function BrandsGrid({ brands, title = "Trusted by Leading Brands", subtitle }: BrandsGridProps) {
  return (
    <section className="brands-section section-pad">
      <div className="brands-header">
        <div>
          <p className="section-label">Partners</p>
          <h2>{title}</h2>
          {subtitle && <p className="brands-subtitle">{subtitle}</p>}
        </div>
      </div>
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className="brand-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
          >
            <div className="brand-logo" style={{ backgroundColor: brand.color || 'rgba(178, 138, 80, 0.1)' }}>
              <span>{brand.logo}</span>
            </div>
            <h3>{brand.name}</h3>
            <p>{brand.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
