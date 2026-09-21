import { ArrowUpRight } from 'lucide-react'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { PageFrame, PageIntro, Reveal } from '@/components/site-header'
import { FlipFadeText } from '@/components/ui/flip-fade-text'

const projects = [
  { title: 'BrajMart ecommerce', type: 'Devotional products / Marketplace', image: '/images/branches/brajmart-work.png', text: 'A devotional commerce experience built around authentic Braj products, prasadam, books, malas, puja essentials, gifting, and customer trust.', href: 'https://www.brajmart.com/' },
  { title: 'Liklet growth services', type: 'Marketing / Full-stack development', image: '/images/branches/liklet-work.png', text: 'A service branch for social media marketing, SEO, digital campaigns, frontend development, backend development, and complete web experiences.', href: 'https://www.liklet.com/' },
  { title: 'BrajBuzz Tech media', type: 'Tech content / YouTube', image: '/images/branches/brajbuzztech-work.png', text: 'A gadget and tech content branch focused on unboxing, reviews, buying guidance, and YouTube-first technology storytelling.', href: 'https://www.youtube.com/@BrajBuzzTech' },
]

export default function WorkPage() {
  return (
    <PageFrame>
      <PageIntro 
        label="Our work" 
        title={
          <>
            Real branches,<br />
            <FlipFadeText 
              words={["REAL DIGITAL ROLES", "PROVEN RESULTS", "FOCUSED MOMENTUM"]} 
              className="inline-flex min-h-0 text-black font-serif italic" 
              textClassName="text-black font-serif italic" 
              interval={2800}
            />
          </>
        }
      >
        The company is organized around clear operating brands rather than one blurred service list.
      </PageIntro>
      <section className="work-gallery section-pad">
        <Reveal>
          <div className="work-gallery-intro">
            <p className="section-label">Branch overview</p>
            <p>Each branch has a distinct audience, offer, and digital responsibility inside BrajMart EcomTech.</p>
          </div>
        </Reveal>
        <div className="direction-grid">
          {projects.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 0.12} className="direction-card">
              <DirectionAwareHover imageUrl={project.image} className="direction-hover">
                <p className="direction-type">{project.type}</p>
                <p className="direction-title">{project.title}</p>
              </DirectionAwareHover>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">
                Visit branch <ArrowUpRight size={15} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
