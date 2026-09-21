import { Link } from 'react-router-dom'
import { ArrowUpRight, BarChart3, Code2, PackageCheck, PlaySquare } from 'lucide-react'
import { PageFrame, PageIntro, Reveal } from '@/components/site-header'
import TeamSection from '@/components/ui/team'
import { FlipFadeText } from '@/components/ui/flip-fade-text'

const pillars = [
  { name: 'Commerce with trust', icon: <PackageCheck size={26} />, text: 'BrajMart focuses on devotional products, careful curation, clear pricing, secure ordering, and reliable support for spiritual shoppers.' },
  { name: 'Growth with clarity', icon: <BarChart3 size={26} />, text: 'Liklet turns marketing into a measurable system: social media, SEO, content, ads, analytics, and conversion-focused brand presence.' },
  { name: 'Technology with structure', icon: <Code2 size={26} />, text: 'The development side builds responsive websites, frontend interfaces, backend systems, APIs, and maintainable digital products.' },
  { name: 'Media with usefulness', icon: <PlaySquare size={26} />, text: 'BrajBuzz Tech and Liklet Tech create technology videos that help audiences discover, compare, and understand gadgets and digital tools.' },
]

export default function AboutPage() {
  return (
    <PageFrame>
      <PageIntro 
        label="About BrajMart EcomTech" 
        title={
          <>
            A company built around<br />
            <FlipFadeText 
              words={["COMMERCE & GROWTH", "TECH MEDIA & APPS", "MODERN DIGITAL BRANDS", "CONNECTED ENGINES"]} 
              className="inline-flex min-h-0 text-black font-serif italic" 
              textClassName="text-black font-serif italic" 
              interval={2800}
            />
          </>
        }
      >
        BrajMart EcomTech LLP connects product selling, digital services, and creator-led technology content through focused branches.
      </PageIntro>

      <TeamSection />

      <section className="content-section company-pillars">
        <Reveal>
          <p className="section-label">How we are structured</p>
        </Reveal>
        <div className="pillar-grid">
          {pillars.map((pillar, idx) => (
            <Reveal key={pillar.name} delay={idx * 0.08}>
              <article className="pillar-card h-full">
                <div className="pillar-icon">{pillar.icon}</div>
                <h3>{pillar.name}</h3>
                <p>{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Balanced Two-Column Split Copy Section */}
      <section className="split-copy section-pad">
        <Reveal className="split-copy-left">
          <p className="section-label">Our direction</p>
          <h2>
            Build useful brands,<br />
            <em>then </em>
            <FlipFadeText 
              words={["CONNECT THEM WELL", "SCALE EVERY ENGINE", "DRIVE REAL IMPACT"]} 
              className="inline-flex min-h-0 text-black font-serif italic" 
              textClassName="text-black font-serif italic" 
              interval={2800}
            />
          </h2>
        </Reveal>

        <Reveal className="split-copy-right" delay={0.15}>
          <p>
            The parent company gives each branch a focused role while keeping the broader system connected: ecommerce learns from content, content supports commerce, and marketing plus development create the infrastructure for growth.
          </p>
          <div className="pt-2">
            <Link className="button" to="/collaborators">
              See all branches <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </PageFrame>
  )
}
