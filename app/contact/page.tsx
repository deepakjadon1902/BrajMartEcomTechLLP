'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { FAQSection } from '@/components/faq-section'
import { PageFrame, PageIntro } from '@/components/site-header'

const faqs = [
  { question: 'I need help with BrajMart orders. Where should I go?', answer: 'Use BrajMart for devotional ecommerce, product browsing, order support, prasadam, puja items, books, and Braj-related shopping.' },
  { question: 'Can Liklet handle both marketing and development?', answer: 'Yes. Liklet is positioned for social media marketing, digital marketing, SEO, frontend development, backend development, and full-stack web services.' },
  { question: 'Where do YouTube collaborations fit?', answer: 'Gadget, unboxing, review, and tech video collaborations belong with BrajBuzz Tech or Liklet Tech, depending on the audience and content format.' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  return <PageFrame><PageIntro label="Start a conversation" title={<>Choose the right<br /><em>BrajMart EcomTech branch.</em></>}>Tell us whether your enquiry is for ecommerce, marketing, development, gadget media, or a brand collaboration.</PageIntro><section className="contact-page section-pad contact-premium"><div className="contact-aside"><p className="section-label">Contact routes</p><p>BrajMart for ecommerce. Liklet for marketing and development. BrajBuzz Tech and Liklet Tech for YouTube and technology media.</p><a className="text-link" href="mailto:hello@brajmart.com">hello@brajmart.com <ArrowUpRight size={16} /></a><div className="contact-links"><a href="https://www.brajmart.com/" target="_blank" rel="noopener noreferrer">BrajMart <ArrowUpRight size={14} /></a><a href="https://www.liklet.com/" target="_blank" rel="noopener noreferrer">Liklet <ArrowUpRight size={14} /></a><a href="https://www.youtube.com/@BrajBuzzTech" target="_blank" rel="noopener noreferrer">BrajBuzz Tech <ArrowUpRight size={14} /></a><a href="https://www.youtube.com/@liklet_tech" target="_blank" rel="noopener noreferrer">Liklet Tech <ArrowUpRight size={14} /></a></div></div><form className="contact-form-premium" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>{sent ? <div className="success"><span>Thank you.</span> We&apos;ll route your enquiry to the right branch.</div> : <><label>Your name<input required name="name" placeholder="Jane Smith" /></label><label>Work email<input required type="email" name="email" placeholder="jane@company.com" /></label><label>Which branch or need?<textarea required name="message" placeholder="Example: Liklet social media marketing, BrajMart ecommerce support, BrajBuzz Tech gadget collaboration..." rows={5} /></label><button className="button" type="submit">Send enquiry <ArrowUpRight size={16} /></button></>}</form></section><FAQSection items={faqs} title="Before we talk" subtitle="Choose the branch that matches your need." /></PageFrame>
}
