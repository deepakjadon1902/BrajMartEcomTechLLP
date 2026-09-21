import { ArrowUpRight, Megaphone, PlaySquare, ShoppingBag } from 'lucide-react'
import { PageFrame, PageIntro } from '@/components/site-header'

const brands = [
  { name: 'BrajMart', logo: '/brand-icons/brajmart.svg', url: 'https://www.brajmart.com/', icon: <ShoppingBag size={24} />, role: 'Devotional ecommerce', description: 'Authentic Braj and Vrindavan products including prasadam, spiritual books, puja essentials, malas, accessories, gifting, and Braj Darshan discovery.' },
  { name: 'Liklet', logo: '/brand-icons/liklet.svg', url: 'https://www.liklet.com/', icon: <Megaphone size={24} />, role: 'Digital marketing and full-stack services', description: 'Social media marketing, digital marketing, SEO, content strategy, frontend development, backend development, and complete web growth systems.' },
  { name: 'BrajBuzz Tech', logo: '/brand-icons/brajbuzz-tech.svg', url: 'https://www.youtube.com/@BrajBuzzTech', icon: <PlaySquare size={24} />, role: 'Gadget unboxing and reviews', description: 'YouTube-first content for gadget unboxing, product reviews, technology comparisons, and practical buying guidance.' },
  { name: 'Liklet Tech', logo: '/brand-icons/liklet-tech.svg', url: 'https://www.youtube.com/@liklet_tech', icon: <PlaySquare size={24} />, role: 'Technology videos', description: 'A technology channel for videos about tech, digital tools, explainers, product education, and useful updates for curious audiences.' },
]

export default function BrandsPage() {
  return (
    <PageFrame>
      <PageIntro label="Brand ecosystem" title={<>The BrajMart EcomTech<br /><em>brand family.</em></>}>
        Each branch has a focused job: sell devotional products, grow digital brands, build technology, or explain gadgets through video.
      </PageIntro>
      <section className="section-pad brand-ecosystem">
        <div className="brands-scatter-copy">
          <p className="section-label">Branches and channels</p>
          <p>This page presents the company branches and active public destinations you shared, with a consistent BrajMart EcomTech visual system.</p>
        </div>
        <div className="brand-ecosystem-grid">
          {brands.map((brand) => <article className="ecosystem-card" key={brand.name}>
            <div className="ecosystem-card-top"><img className="brand-icon-img" src={brand.logo} alt={`${brand.name} icon`} /><div className="pillar-icon">{brand.icon}</div></div>
            <p className="section-label">{brand.role}</p>
            <h3>{brand.name}</h3>
            <p>{brand.description}</p>
            <a className="text-link" href={brand.url} target="_blank" rel="noopener noreferrer">Open {brand.name} <ArrowUpRight size={15} /></a>
          </article>)}
        </div>
      </section>
    </PageFrame>
  )
}
