import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, Sparkles, TrendingUp, Code, ShoppingBag } from 'lucide-react'
import { CometCard } from '@/components/ui/comet-card'
import { FAQSection } from '@/components/faq-section'
import { PageFrame, Reveal } from '@/components/site-header'
import { TestimonialsSection } from '@/components/ui/testimonial-v2'
import { FlipFadeText } from '@/components/ui/flip-fade-text'
import { BrajMartLogo, LikletLogo, BrajBuzzLogo } from '@/components/brand-logos'

const videoSources = [
  {
    id: 'commerce-growth',
    label: 'Commerce & Growth',
    icon: <Sparkles size={14} />,
    url: '/videos/herosectionvideo.mp4',
    title: 'Commerce, Growth & Technology',
  },
  {
    id: 'marketing',
    label: 'Digital Marketing',
    icon: <TrendingUp size={14} />,
    url: '/videos/herosectionvideo.mp4',
    title: 'Growth Systems & Analytics',
  },
  {
    id: 'development',
    label: 'Web Development',
    icon: <Code size={14} />,
    url: '/videos/herosectionvideo.mp4',
    title: 'Full-Stack Web Engineering',
  },
  {
    id: 'ecommerce',
    label: 'Devotional Commerce',
    icon: <ShoppingBag size={14} />,
    url: '/videos/herosectionvideo.mp4',
    title: 'Devotional Commerce & Media',
  },
]

const branches = [
  {
    num: '01',
    title: 'BrajMart',
    role: 'Devotional Ecommerce',
    text: 'Devotional ecommerce from Vrindavan: prasadam, puja essentials, spiritual books, malas, gifts, and Braj Darshan context.',
    bgImage: '/images/branches/brajmart-homepage.png',
    link: '/collaborators',
    logoComponent: <BrajMartLogo size="sm" />,
  },
  {
    num: '02',
    title: 'Liklet',
    role: 'Marketing & Full-Stack Tech',
    text: 'Digital marketing, social media growth, SEO, content systems, and full-stack web development for brands that want measurable momentum.',
    bgImage: '/images/branches/liklet-homepage.png',
    link: '/what-we-do',
    logoComponent: <LikletLogo size="sm" />,
  },
  {
    num: '03',
    title: 'BrajBuzz Tech',
    role: 'Consumer Tech & YouTube',
    text: 'A tech media branch for gadget unboxing, honest reviews, buying guidance, and YouTube-first consumer tech content.',
    bgImage: '/images/branches/brajbuzztech-homepage.png',
    link: '/collaborators',
    logoComponent: <BrajBuzzLogo size="sm" />,
  },
]

const faqs = [
  { question: 'What is BrajMart EcomTech?', answer: 'BrajMart EcomTech is the parent company connecting ecommerce, digital growth services, and technology media through BrajMart, Liklet, and BrajBuzz Tech.' },
  { question: 'Which branch should I contact?', answer: 'Choose BrajMart for devotional ecommerce, Liklet for marketing or development work, and BrajBuzz Tech or Liklet Tech for gadget, tech, and YouTube media collaborations.' },
  { question: 'Do the branches work together?', answer: 'Yes. The same ecosystem thinking connects commerce, performance marketing, full-stack technology, content, and creator-led product discovery.' },
]

export default function HomePage() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const currentVideo = videoSources[activeVideoIndex]

  return (
    <PageFrame>
      <section className="hero">
        <video
          className="hero-video hero-video-3d"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="BrajMart EcomTech Corporate Hero"
        >
          <source src="/videos/herosectionvideo.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" aria-hidden="true" />
        
        <div className="hero-copy">
          <div className="hero-pills" aria-label="Switch video perspective">
            {videoSources.map((v, i) => (
              <button
                key={v.id}
                type="button"
                className={`hero-pill ${activeVideoIndex === i ? 'is-active' : ''}`}
                onClick={() => setActiveVideoIndex(i)}
              >
                {v.icon}
                <span>{v.label}</span>
              </button>
            ))}
          </div>

          <h1>
            Building brands for<br />
            <FlipFadeText
              words={["COMMERCE", "CONTENT", "TECHNOLOGY", "GROWTH"]}
              className="inline-flex min-h-0 text-white font-serif italic"
              textClassName="text-white font-serif italic"
              interval={2500}
            />
          </h1>
          
          <p className="hero-intro">
            BrajMart EcomTech brings together three focused branches: BrajMart for devotional ecommerce, Liklet for digital marketing & full-stack development, and BrajBuzz Tech for technology media.
          </p>
          
          <div className="hero-cta-row">
            <Link className="circle-link" to="/what-we-do" aria-label="Explore what we do">
              <ArrowDown />
            </Link>
            <span className="hero-mode-tag">
              Showing mode: <strong>{currentVideo.label}</strong>
            </span>
          </div>
        </div>

        <span className="image-caption">
          BrajMart. Liklet.<br />
          BrajBuzz Tech.
        </span>
      </section>

      <section className="manifesto section-pad">
        <Reveal>
          <p className="section-label">Company Ecosystem</p>
          <h2>
            One company.<br />
            <FlipFadeText 
              words={["THREE USEFUL ENGINES", "ONE UNIFIED ECOSYSTEM", "CONNECTED PLATFORMS"]} 
              className="inline-flex min-h-0 text-black font-serif italic" 
              textClassName="text-black font-serif italic" 
              interval={2800}
            />
          </h2>
        </Reveal>
        <Reveal className="manifesto-body" delay={0.15}>
          <p>
            Our work starts from real customer behavior: what people search, buy, watch, trust, and share. Each branch has a clear role, but together they create a practical growth system for modern digital business.
          </p>
          <Link className="text-link" to="/about">
            About the company <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>

      <section className="home-services section-pad">
        <Reveal>
          <div className="work-heading">
            <div>
              <p className="section-label">Our Branches</p>
              <h2 className="section-title">What each<br /><em>brand does.</em></h2>
            </div>
            <Link className="text-link" to="/collaborators">
              View brand ecosystem <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
        <div className="home-service-grid">
          {branches.map((branch, index) => (
            <Reveal key={branch.num} delay={index * 0.12}>
              <Link to={branch.link} className="home-service group/service block">
                <span className="font-bold tracking-widest text-black">{branch.num}</span>
                <CometCard className="home-comet overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-neutral-800 shadow-lg">
                  <div className="home-comet-inner relative min-h-[300px] overflow-hidden p-6 flex flex-col justify-between group">
                    {/* Background Image with Zoom on Hover */}
                    <img
                      src={branch.bgImage}
                      alt={`${branch.title} homepage preview`}
                      className="absolute inset-0 h-full w-full object-cover object-top brightness-[1.24] contrast-[1.04] saturate-[1.12] transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
                    />
                    {/* Premium Gradient Overlay so text is 100% visible and readable */}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.18)_0%,rgba(0,0,0,.28)_34%,rgba(0,0,0,.74)_100%)] transition-colors duration-300 group-hover:bg-[linear-gradient(180deg,rgba(0,0,0,.12)_0%,rgba(0,0,0,.24)_34%,rgba(0,0,0,.70)_100%)] pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(circle_at_24%_78%,rgba(0,0,0,.58),transparent_62%)] pointer-events-none" />

                    {/* Card Header Content */}
                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-white mb-1.5 inline-block [text-shadow:0_2px_10px_rgba(0,0,0,.85)]">
                          {branch.role}
                        </span>
                        <h3 className="text-3xl font-serif font-bold text-white tracking-tight m-0 [text-shadow:0_4px_18px_rgba(0,0,0,.9)]">
                          {branch.title}
                        </h3>
                      </div>
                      <div className="shrink-0 p-1 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
                        {branch.logoComponent}
                      </div>
                    </div>

                    {/* Card Footer Content */}
                    <div className="relative z-10 mt-6">
                      <p className="text-xs text-white leading-relaxed line-clamp-3 mb-4 [text-shadow:0_2px_10px_rgba(0,0,0,.92)]">
                        {branch.text}
                      </p>
                      <strong className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group-hover:text-white transition-colors [text-shadow:0_2px_10px_rgba(0,0,0,.9)]">
                        Explore Branch <ArrowUpRight size={15} />
                      </strong>
                    </div>
                  </div>
                </CometCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="statement">
        <Reveal>
          <p className="section-label">Why It Works</p>
          <h2>
            Commerce grows faster<br />
            when{" "}
            <FlipFadeText 
              words={["CONTENT & TECHNOLOGY", "CREATIVE SYSTEMS", "ENGINEERING & MEDIA"]} 
              className="inline-flex min-h-0 text-black font-serif italic" 
              textClassName="text-black font-serif italic" 
              interval={2800}
            />{" "}
            move together.
          </h2>
          <p className="statement-copy">
            BrajMart EcomTech is built around connected capabilities: marketplace operations, brand storytelling, digital acquisition, web engineering, and creator-led product education.
          </p>
          <Link className="button" to="/what-we-do">
            Explore what we do <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>

      <TestimonialsSection />

      <FAQSection items={faqs} subtitle="Quick clarity before you choose a branch." />
    </PageFrame>
  )
}
