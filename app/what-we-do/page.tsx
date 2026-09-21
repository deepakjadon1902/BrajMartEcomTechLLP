import ExpandableCardDemo from '@/components/expandable-card-demo-standard'
import { TechStackGrid } from '@/components/tech-stack-grid'
import { PageFrame, PageIntro } from '@/components/site-header'
import FlipFadeText from '@/components/ui/flip-fade-text'

const systems = [
  { name: 'Ecommerce', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/shopify/default.svg', color: '#55dde6', description: 'Catalogs, product pages, checkout journeys, order trust, and devotional shopping experiences for BrajMart.' },
  { name: 'SEO', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google/default.svg', color: '#99bcde', description: 'Technical SEO, content planning, search visibility, structured pages, and practical growth analysis.' },
  { name: 'Social Media', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/instagram/default.svg', color: '#7481d1', description: 'Content calendars, campaign ideas, reels, brand voice, and audience-building systems for Liklet clients.' },
  { name: 'YouTube', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/youtube/default.svg', color: '#ff0033', description: 'Gadget unboxing, tech explainers, review formats, buying guides, thumbnails, and channel growth.' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nextjs/default.svg', color: '#040c09', description: 'Fast frontend experiences, landing pages, dashboards, and modern web applications.' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/react/default.svg', color: '#55dde6', description: 'Interactive interfaces for ecommerce, service websites, content hubs, and internal tools.' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nodejs/default.svg', color: '#68A063', description: 'Backend logic, APIs, automation, integrations, and reliable service foundations.' },
  { name: 'Analytics', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google-analytics/default.svg', color: '#99bcde', description: 'Measurement plans that connect campaigns, content, traffic, conversions, and business decisions.' },
]

export default function WhatWeDoPage() {
  return <PageFrame><PageIntro label="What we do" title={<>Three branches,<br /><em>one digital engine.</em></>}>BrajMart EcomTech combines ecommerce operations, digital marketing, web development, and tech media into one practical company system.</PageIntro><section className="content-section service-detail"><div><p className="section-label">Capabilities</p><h2>Built for<br /><em>commerce and attention.</em></h2><FlipFadeText words={["BRAJMART", "LIKLET", "BRAJBUZZ"]} className="page-flip-text" textClassName="page-flip-words" /></div><div className="expandable-wrap"><ExpandableCardDemo /></div></section><TechStackGrid items={systems} title="Operating Stack" subtitle="The tools and disciplines behind devotional ecommerce, digital marketing, full-stack development, and technology content." /><section className="dark-band"><p className="section-label">Our promise</p><h2>Clear services.<br /><em>Real brand focus.</em></h2><p>We do not present the company as a generic agency. Every service is tied to an actual branch: BrajMart, Liklet, BrajBuzz Tech, or Liklet Tech.</p></section></PageFrame>
}
