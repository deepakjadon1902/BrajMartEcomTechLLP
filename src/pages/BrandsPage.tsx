import { ArrowUpRight, Megaphone, PlaySquare, ShoppingBag, Handshake, Globe } from 'lucide-react'
import { PageFrame, PageIntro, Reveal } from '@/components/site-header'
import { ImageScatter, ScatterSet } from '@/components/ui/image-scatter'
import { FlipFadeText } from '@/components/ui/flip-fade-text'
import { BrajMartLogo, LikletLogo, BrajBuzzLogo, LikletTechLogo } from '@/components/brand-logos'

const brands = [
  {
    name: 'BrajMart',
    logoComponent: <BrajMartLogo size="lg" />,
    url: 'https://www.brajmart.com/',
    icon: <ShoppingBag size={24} />,
    role: 'Devotional ecommerce',
    description: 'Authentic Braj and Vrindavan products: prasadam, books, puja essentials, malas, gifting, and Braj Darshan discovery.'
  },
  {
    name: 'Liklet',
    logoComponent: <LikletLogo size="lg" />,
    url: 'https://www.liklet.com/',
    icon: <Megaphone size={24} />,
    role: 'Digital marketing and full-stack services',
    description: 'Social media marketing, SEO, content strategy, frontend development, backend systems, and complete web growth support.'
  },
  {
    name: 'BrajBuzz Tech',
    logoComponent: <BrajBuzzLogo size="lg" />,
    url: 'https://www.youtube.com/@BrajBuzzTech',
    icon: <PlaySquare size={24} />,
    role: 'Gadget unboxing and reviews',
    description: 'YouTube-first gadget unboxing, product reviews, comparisons, and practical buying guidance.'
  },
  {
    name: 'Liklet Tech',
    logoComponent: <LikletTechLogo size="lg" />,
    url: 'https://www.youtube.com/@liklet_tech',
    icon: <PlaySquare size={24} />,
    role: 'Technology videos',
    description: 'Technology videos, digital tools, explainers, product education, and useful updates for curious audiences.'
  },
]

const partnerScatterSets: ScatterSet[] = [
  {
    heading: "Global Tech Leaders & Innovators",
    subheading: "Collaborating with market pioneers to deliver high-scale e-commerce, cloud growth, and digital engineering.",
    items: [
      {
        name: "Google",
        logo: "/partners/google.svg",
        info: "Search Engine, Cloud Computing & AI Systems",
        accentColor: "#4285F4",
      },
      {
        name: "Amazon",
        logo: "/partners/amazon.svg",
        info: "Global E-Commerce & Cloud Infrastructure",
        accentColor: "#FF9900",
      },
      {
        name: "Apple",
        logo: "/partners/apple.svg",
        info: "Consumer Electronics & Digital Ecosystems",
        accentColor: "#555555",
      },
      {
        name: "Microsoft",
        logo: "/partners/microsoft.svg",
        info: "Windows, Enterprise Software & Azure Cloud",
        accentColor: "#00A4EF",
      },
      {
        name: "Sony",
        logo: "/partners/sony.svg",
        info: "PlayStation, Digital Media & Audio Tech",
        accentColor: "#00439C",
      },
    ],
  },
  {
    heading: "Hardware, Compute & Mobility Partners",
    subheading: "Partnering with leading device makers and hardware giants to power device reviews and tech coverage.",
    items: [
      {
        name: "Intel",
        logo: "/partners/intel.svg",
        info: "Semiconductors, Processors & AI Architecture",
        accentColor: "#0068B5",
      },
      {
        name: "Lenovo",
        logo: "/partners/lenovo.svg",
        info: "Laptops, Workstations & Smart Devices",
        accentColor: "#E2231A",
      },
      {
        name: "Xiaomi",
        logo: "/partners/xiaomi.svg",
        info: "Smartphones, Smart Home & Consumer Tech",
        accentColor: "#FF6900",
      },
      {
        name: "Asus",
        logo: "/partners/asus.svg",
        info: "Gaming Hardware, Displays & PC Systems",
        accentColor: "#00539B",
      },
      {
        name: "Brabus",
        logo: "/partners/brabus.svg",
        info: "Luxury Engineering & High-Performance Mobility",
        accentColor: "#111111",
      },
    ],
  },
  {
    heading: "Connected Across Commerce, Content & Media",
    subheading: "Building long-term digital authority and reliable business relationships worldwide.",
    items: [
      {
        name: "Amazon",
        logo: "/partners/amazon.svg",
        info: "Global E-Commerce & Distribution",
        accentColor: "#FF9900",
      },
      {
        name: "Google",
        logo: "/partners/google.svg",
        info: "Search & Digital Marketing Ecosystems",
        accentColor: "#34A853",
      },
      {
        name: "Sony",
        logo: "/partners/sony.svg",
        info: "Entertainment & Professional Cameras",
        accentColor: "#00439C",
      },
      {
        name: "Brabus",
        logo: "/partners/brabus.svg",
        info: "Premium High-End Brand Engineering",
        accentColor: "#111111",
      },
      {
        name: "Intel",
        logo: "/partners/intel.svg",
        info: "High-Performance Compute & Chips",
        accentColor: "#0068B5",
      },
    ],
  },
]

const partnerLogos = [
  { name: 'Google', logo: '/partners/google.svg', info: 'Search & Cloud AI', accent: '#4285F4' },
  { name: 'Amazon', logo: '/partners/amazon.svg', info: 'E-Commerce & AWS', accent: '#FF9900' },
  { name: 'Apple', logo: '/partners/apple.svg', info: 'Hardware & OS', accent: '#333333' },
  { name: 'Sony', logo: '/partners/sony.svg', info: 'Media & Gaming', accent: '#00439C' },
  { name: 'Microsoft', logo: '/partners/microsoft.svg', info: 'Software & Azure', accent: '#00A4EF' },
  { name: 'Lenovo', logo: '/partners/lenovo.svg', info: 'PC & Mobile Devices', accent: '#E2231A' },
  { name: 'Intel', logo: '/partners/intel.svg', info: 'Chips & Compute', accent: '#0068B5' },
  { name: 'Xiaomi', logo: '/partners/xiaomi.svg', info: 'Smart Tech & IoT', accent: '#FF6900' },
  { name: 'Asus', logo: '/partners/asus.svg', info: 'Hardware & Systems', accent: '#00539B' },
  { name: 'Brabus', logo: '/partners/brabus.svg', info: 'Luxury Engineering', accent: '#111111' },
]

export default function BrandsPage() {
  return (
    <PageFrame>
      <PageIntro 
        label="Brand ecosystem" 
        title={
          <>
            Brand<br />
            <FlipFadeText 
              words={["FAMILY", "ECOSYSTEM", "NETWORK", "STACK"]} 
              className="inline-flex min-h-0 text-black font-serif italic" 
              textClassName="text-black font-serif italic" 
              interval={2800}
            />
          </>
        }
      >
        BrajMart EcomTech branches for commerce, growth, technology, and media.
      </PageIntro>

      {/* Primary Ecosystem Branches */}
      <section className="section-pad brand-ecosystem">
        <Reveal>
          <div className="brands-scatter-copy">
            <p className="section-label">Branches and channels</p>
            <p style={{ maxWidth: 'calc(100vw - 50px)' }}>Company branches and active public destinations in one ecosystem.</p>
          </div>
        </Reveal>
        <div className="brand-ecosystem-grid">
          {brands.map((brand, idx) => (
            <Reveal key={brand.name} delay={idx * 0.1}>
              <article className="ecosystem-card h-full" style={{ maxWidth: 'calc(100vw - 50px)' }}>
                <div className="ecosystem-card-top">
                  <div className="brand-icon-wrap">
                    {brand.logoComponent}
                  </div>
                  <div className="pillar-icon">{brand.icon}</div>
                </div>
                <p className="section-label">{brand.role}</p>
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
                <a className="text-link" href={brand.url} target="_blank" rel="noopener noreferrer">
                  Open {brand.name} <ArrowUpRight size={15} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Partners & Collaborators Section with Original Full-Color Logos & Interactive Scatter Effect */}
      <section className="section-pad relative overflow-hidden border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/50">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-8 px-4">
            <div className="inline-flex items-center gap-2 border border-black/30 py-1.5 px-4 rounded-full text-xs font-bold tracking-wider uppercase text-black bg-white/90 mb-4 shadow-sm">
              <Handshake size={14} className="text-black" /> TRUSTED BY INDUSTRY LEADERS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black flex flex-wrap items-center justify-center gap-2">
              <span>Our</span>
              <FlipFadeText 
                words={["PARTNERS", "COLLABORATORS", "INNOVATORS", "ALLIES"]} 
                className="inline-flex min-h-0 text-black font-serif italic" 
                textClassName="text-black font-serif italic" 
                interval={2600}
              />
              <span>& Collaborators</span>
            </h2>
            <p className="mt-4 text-black text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              We proudly collaborate with trusted global brands, innovators, and industry leaders who inspire and support our mission across commerce, technology, and media.
            </p>
          </div>
        </Reveal>

        {/* Interactive Scatter Animation with Info & Colors */}
        <div className="my-2">
          <ImageScatter 
            data={partnerScatterSets} 
            className="partner-scatter"
            cardWidth={260} 
            cardHeight={160}
            animationDuration={0.8}
            autoPlayInterval={4000}
          />
        </div>

        {/* Full-Color Grid of Partner Logos with Info Badges */}
        <div className="max-w-6xl mx-auto mt-10 px-4">
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-6 text-xs uppercase tracking-widest text-black font-bold">
              <Globe size={14} /> Official Ecosystem & Media Collaborators
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 items-stretch justify-center">
            {partnerLogos.map((partner, idx) => (
              <Reveal key={partner.name} delay={idx * 0.05}>
                <div 
                  className="partner-logo-card relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white border border-black/20 shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 group hover:-translate-y-1 overflow-hidden h-full"
                >
                  <div 
                    className="absolute top-0 left-0 right-0 h-1" 
                    style={{ backgroundColor: partner.accent }} 
                  />
                  <div className="w-full h-14 flex items-center justify-center p-1 my-1">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105" 
                    />
                  </div>
                  <div className="w-full text-center border-t border-black/10 pt-2 mt-1">
                    <span className="block text-xs font-bold text-black uppercase tracking-tight">{partner.name}</span>
                    <span className="block text-[11px] text-black mt-0.5 font-medium leading-snug">{partner.info}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
