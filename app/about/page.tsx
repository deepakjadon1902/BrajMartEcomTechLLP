import { ArrowUpRight, BarChart3, Code2, PackageCheck, PlaySquare } from 'lucide-react'
import { PageFrame, PageIntro, Reveal } from '@/components/site-header'
import TeamSection from '@/components/ui/team'

const pillars = [
  { name: 'Commerce with trust', icon: <PackageCheck size={26} />, text: 'BrajMart focuses on devotional products, careful curation, clear pricing, secure ordering, and reliable support for spiritual shoppers.' },
  { name: 'Growth with clarity', icon: <BarChart3 size={26} />, text: 'Liklet turns marketing into a measurable system: social media, SEO, content, ads, analytics, and conversion-focused brand presence.' },
  { name: 'Technology with structure', icon: <Code2 size={26} />, text: 'The development side builds responsive websites, frontend interfaces, backend systems, APIs, and maintainable digital products.' },
  { name: 'Media with usefulness', icon: <PlaySquare size={26} />, text: 'BrajBuzz Tech and Liklet Tech create technology videos that help audiences discover, compare, and understand gadgets and digital tools.' },
]

export default function AboutPage() {
  return <PageFrame><PageIntro label="About BrajMart EcomTech" title={<>A company built around<br /><em>commerce, growth and tech media.</em></>}>BrajMart EcomTech LLP connects product selling, digital services, and creator-led technology content through focused branches.</PageIntro><TeamSection /><section className="content-section company-pillars"><Reveal><p className="section-label">How we are structured</p><div className="pillar-grid">{pillars.map((pillar) => <article className="pillar-card" key={pillar.name}><div className="pillar-icon">{pillar.icon}</div><h3>{pillar.name}</h3><p>{pillar.text}</p></article>)}</div></Reveal></section><section className="split-copy section-pad"><p className="section-label">Our direction</p><h2>Build useful brands,<br /><em>then connect them well.</em></h2><p>The parent company gives each branch a focused role while keeping the broader system connected: ecommerce learns from content, content supports commerce, and marketing plus development create the infrastructure for growth. <a className="text-link split-link" href="/collaborators">See all branches <ArrowUpRight size={16} /></a></p></section></PageFrame>
}
