import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { FAQSection } from '@/components/faq-section'
import { PageFrame, PageIntro, Reveal } from '@/components/site-header'
import { FlipFadeText } from '@/components/ui/flip-fade-text'
import { companyInfo, companyLinks } from '@/lib/company'

const faqs = [
  { question: 'I need help with BrajMart orders. Where should I go?', answer: 'Use BrajMart for devotional ecommerce, product browsing, order support, prasadam, puja items, books, and Braj-related shopping.' },
  { question: 'Can Liklet handle both marketing and development?', answer: 'Yes. Liklet is positioned for social media marketing, digital marketing, SEO, frontend development, backend development, and full-stack web services.' },
  { question: 'Where do YouTube collaborations fit?', answer: 'Gadget, unboxing, review, and tech video collaborations belong with BrajBuzz Tech or Liklet Tech, depending on the audience and content format.' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  return (
    <PageFrame>
      <PageIntro 
        label="Start a conversation" 
        title={
          <>
            Choose the right<br />
            <FlipFadeText 
              words={["BRANCH", "TEAM", "PARTNER"]} 
              className="inline-flex min-h-0 text-black font-serif italic" 
              textClassName="text-black font-serif italic" 
              interval={2800}
            />
          </>
        }
      >
        Tell us your need:<br /> ecommerce, marketing,<br /> development, tech media,<br /> or collaboration.
      </PageIntro>
      <section className="contact-page section-pad contact-premium">
        <Reveal className="contact-aside">
          <p className="section-label">Contact routes</p>
          <p>Reach the correct team for<br /> commerce, marketing,<br /> development, and media.</p>
          <div className="contact-direct">
            <a href={companyLinks.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp {companyInfo.phone}</a>
            <a href={companyLinks.phone}><Phone size={16} /> {companyInfo.phone}</a>
            <a href={companyLinks.email}><Mail size={16} /> {companyInfo.email}</a>
            <span>
              <MapPin size={16} />
              <span>Keshav Kunj,<br />Parikrama Marg,<br />Vrindavan, Mathura,<br />Uttar Pradesh 281121</span>
            </span>
          </div>
          <a className="text-link" href={companyLinks.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <ArrowUpRight size={16} /></a>
          <div className="contact-links">
            <a href="https://www.brajmart.com/" target="_blank" rel="noopener noreferrer">BrajMart <ArrowUpRight size={14} /></a>
            <a href="https://www.liklet.com/" target="_blank" rel="noopener noreferrer">Liklet <ArrowUpRight size={14} /></a>
            <a href="https://www.youtube.com/@BrajBuzzTech" target="_blank" rel="noopener noreferrer">BrajBuzz Tech <ArrowUpRight size={14} /></a>
            <a href="https://www.youtube.com/@liklet_tech" target="_blank" rel="noopener noreferrer">Liklet Tech <ArrowUpRight size={14} /></a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <form className="contact-form-premium" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            {sent ? (
              <div className="success">
                <span>Thank you.</span> We&apos;ll route your enquiry to the right branch.
              </div>
            ) : (
              <>
                <label>
                  Your name
                  <input required name="name" placeholder="Jane Smith" />
                </label>
                <label>
                  Work email
                  <input required type="email" name="email" placeholder="jane@company.com" />
                </label>
                <label>
                  Which branch or need?
                  <textarea required name="message" placeholder="Example: Liklet social media marketing, BrajMart ecommerce support, BrajBuzz Tech gadget collaboration..." rows={5} />
                </label>
                <button className="button" type="submit">
                  Send enquiry <ArrowUpRight size={16} />
                </button>
              </>
            )}
          </form>
        </Reveal>
      </section>
      <FAQSection items={faqs} title="Before we talk" subtitle="Choose the branch that matches your need." />
    </PageFrame>
  )
}
