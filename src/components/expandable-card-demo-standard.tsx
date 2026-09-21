import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const cards = [
  { title: 'BrajMart ecommerce', description: 'Devotional shopping with trust.', src: 'https://images.unsplash.com/photo-1590845947676-fa2576f401d2?auto=format&fit=crop&w=1200&q=85', content: 'BrajMart focuses on authentic Vrindavan products: prasadam, puja essentials, spiritual books, malas, accessories, devotional gifting, and Braj Yatra context.' },
  { title: 'Liklet marketing', description: 'Growth systems for modern brands.', src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85', content: 'Liklet handles social media marketing, digital marketing, SEO, content strategy, campaign planning, and practical brand growth for businesses.' },
  { title: 'Full-stack development', description: 'Frontend, backend, and launch.', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85', content: 'The development service covers frontend, backend, responsive websites, APIs, performance, analytics, and maintainable full-stack product foundations.' },
  { title: 'BrajBuzz Tech media', description: 'Gadget unboxing and tech videos.', src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85', content: 'BrajBuzz Tech and Liklet Tech create technology content around gadgets, unboxing, reviews, buying guidance, tech explainers, and YouTube-first audience building.' },
]

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<number | null>(null)
  return (
    <div className="service-cards">
      {cards.map((card, index) => (
        <motion.article
          layout
          key={card.title}
          role="group"
          initial={{ opacity: 0, y: -110, rotateX: -14, scale: .96 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, amount: .18 }}
          transition={{ duration: .85, delay: index * .1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className={`service-card ${active === index ? 'is-active' : ''}`}
          onClick={() => setActive(active === index ? null : index)}
        >
          <div className="service-card-top">
            <img src={card.src} alt="" />
            <div>
              <p>{String(index + 1).padStart(2, '0')}</p>
              <h3>{card.title}</h3>
              <span>{card.description}</span>
            </div>
            <button type="button" aria-label={`${active === index ? 'Close' : 'View'} ${card.title}`}>
              {active === index ? 'Close' : 'View'}
            </button>
          </div>
          <AnimatePresence initial={false}>
            {active === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="service-card-detail"
              >
                <p>{card.content}</p>
                <a href="mailto:business@brajmart.com">Discuss this capability &rarr;</a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.article>
      ))}
    </div>
  )
}
