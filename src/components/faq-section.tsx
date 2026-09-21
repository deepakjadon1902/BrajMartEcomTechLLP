import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
  title?: string
  subtitle?: string
}

export function FAQSection({ items, title = "Frequently Asked Questions", subtitle }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="faq-section section-pad">
      <div className="faq-header">
        <div>
          <p className="section-label">FAQs</p>
          <h2>{title}</h2>
          {subtitle && <p className="faq-subtitle">{subtitle}</p>}
        </div>
      </div>
      <div className="faq-list">
        {items.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                className={`faq-icon ${openIndex === index ? 'open' : ''}`}
              />
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
