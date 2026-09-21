import { ShoppingBag, Megaphone, Code, PlaySquare, Cpu, Layers } from 'lucide-react'
import { PageFrame, PageIntro, Reveal } from '@/components/site-header'
import FlipFadeText from '@/components/ui/flip-fade-text'
import { TravelCard } from '@/components/ui/card-7'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { PartnerLogo } from '@/components/partner-logos'

const capabilitiesData = [
  {
    title: 'Devotional E-Commerce',
    location: 'BrajMart · Vrindavan Curation',
    overview: 'Streamlined e-commerce platform offering genuine Vrindavan prasadam, spiritual books, puja essentials, and reliable home delivery.',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    logo: <ShoppingBag className="h-6 w-6 text-white" />,
    ctaText: 'Explore Store',
    url: 'https://www.brajmart.com/',
  },
  {
    title: 'Growth & Digital Marketing',
    location: 'Liklet · Brand Acceleration',
    overview: 'End-to-end digital marketing, social media acquisition, targeted campaign execution, content calendars, and technical SEO systems.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    logo: <Megaphone className="h-6 w-6 text-white" />,
    ctaText: 'Growth Services',
    url: 'https://www.liklet.com/',
  },
  {
    title: 'Full-Stack Web Engineering',
    location: 'Liklet Tech · Web Architecture',
    overview: 'High-performance React/Vite development, custom UI design systems, fast backend APIs, cloud deployment, and scalable web apps.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    logo: <Code className="h-6 w-6 text-white" />,
    ctaText: 'Build Platform',
    url: 'https://www.liklet.com/',
  },
  {
    title: 'Gadget Unboxing & Media',
    location: 'BrajBuzz Tech · Video Channel',
    overview: 'YouTube-first technology channel delivering unboxings, smartphone comparisons, studio gear reviews, and creator buying guides.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    logo: <PlaySquare className="h-6 w-6 text-white" />,
    ctaText: 'Watch Channel',
    url: 'https://www.youtube.com/@BrajBuzzTech',
  },
]

const operatingStackCards = [
  {
    title: 'Shopify & E-Commerce',
    location: 'E-Commerce Engine · BrajMart',
    overview: 'Catalogs, product pages, checkout journeys, payment gateways, order trust, and devotional shopping experiences built for high conversion.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a6756595316?q=80&w=800&auto=format&fit=crop',
    logo: <PartnerLogo name="shopify" size={24} />,
    ctaText: 'E-Commerce Tech',
    badge: 'Store Stack',
    url: 'https://www.shopify.com',
  },
  {
    title: 'Google Search & SEO',
    location: 'Search Visibility · Liklet',
    overview: 'Technical SEO, content planning, search indexation, structured data, keyword strategy, and practical organic growth analysis.',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop',
    logo: <PartnerLogo name="google" size={24} />,
    ctaText: 'SEO Systems',
    badge: 'Search Engine',
    url: 'https://www.google.com',
  },
  {
    title: 'Instagram & Reels Media',
    location: 'Social Growth · Liklet',
    overview: 'Content calendars, viral campaign ideas, short-form reels, brand voice, and audience-building systems for active business clients.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    logo: <PartnerLogo name="instagram" size={24} />,
    ctaText: 'Social Engine',
    badge: 'Social Media',
    url: 'https://www.instagram.com',
  },
  {
    title: 'YouTube Studio & Media',
    location: 'Video Content · BrajBuzz Tech',
    overview: 'Gadget unboxing, tech explainers, review formats, buying guides, thumbnail design, and channel subscriber growth.',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    logo: <PartnerLogo name="youtube" size={24} />,
    ctaText: 'YouTube Media',
    badge: 'Creator Media',
    url: 'https://www.youtube.com/@BrajBuzzTech',
  },
  {
    title: 'React & Modern Frontend',
    location: 'Web Architecture · Liklet Tech',
    overview: 'Interactive UI design systems, custom component libraries, fast client routing, state management, and modern SPA engineering.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
    logo: <PartnerLogo name="react" size={24} />,
    ctaText: 'React Platform',
    badge: 'Frontend Stack',
    url: 'https://react.dev',
  },
  {
    title: 'Node.js & Backend APIs',
    location: 'Backend Services · Liklet Tech',
    overview: 'Backend logic, REST/GraphQL APIs, workflow automation, database integrations, and reliable cloud service foundations.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    logo: <PartnerLogo name="nodejs" size={24} />,
    ctaText: 'Node Backend',
    badge: 'Backend Stack',
    url: 'https://nodejs.org',
  },
  {
    title: 'TypeScript Codebases',
    location: 'Type Safety · Engineering',
    overview: 'End-to-end type safety, robust application contracts, zero runtime crashes, clean interfaces, and maintainable software.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    logo: <PartnerLogo name="typescript" size={24} />,
    ctaText: 'Type Safety',
    badge: 'TypeScript',
    url: 'https://www.typescriptlang.org',
  },
  {
    title: 'Vite & Lightning Bundling',
    location: 'Build System · Engineering',
    overview: 'Instant HMR development, optimized production bundling, tree-shaking, fast module resolution, and instant load times.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    logo: <PartnerLogo name="vite" size={24} />,
    ctaText: 'Vite Engine',
    badge: 'Build Tools',
    url: 'https://vite.dev',
  },
  {
    title: 'Tailwind CSS Design',
    location: 'Design System · Liklet Tech',
    overview: 'Utility-first design tokens, responsive layout grid, sleek dark modes, glassmorphism, and micro-animations.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    logo: <PartnerLogo name="tailwindcss" size={24} />,
    ctaText: 'Tailwind UI',
    badge: 'Styling System',
    url: 'https://tailwindcss.com',
  },
  {
    title: 'Google Analytics 4',
    location: 'Data & Growth · Liklet',
    overview: 'Measurement plans connecting ad campaigns, content traffic, conversion funnels, and executive business insights.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    logo: <PartnerLogo name="analytics" size={24} />,
    ctaText: 'Data Engine',
    badge: 'Analytics',
    url: 'https://analytics.google.com',
  },
]

export default function WhatWeDoPage() {
  const handleAction = (title: string, url: string) => {
    toast.success(`Opening ${title}`, {
      description: `Redirecting to official destination...`,
    });
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  return (
    <PageFrame>
      <Toaster richColors position="bottom-right" />
      
      <PageIntro label="What we do" title={<>Three branches,<br /><em>one digital engine.</em></>}>
        BrajMart EcomTech combines ecommerce operations, digital marketing, web development, and tech media into one practical company system.
      </PageIntro>

      {/* Capabilities Cards Section featuring TravelCard hover effects */}
      <section className="section-pad relative">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-12 px-4">
            <p className="section-label">Core Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black flex flex-wrap items-center justify-center gap-2">
              <span>Built for</span>
              <FlipFadeText 
                words={["COMMERCE", "ATTENTION", "GROWTH", "SCALE"]} 
                className="inline-flex min-h-0 text-black font-serif italic" 
                textClassName="text-black font-serif italic" 
                interval={2500}
              />
            </h2>
            <p className="mt-4 text-black text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Hover over any capability card to reveal overview details, operational scope, and direct action triggers.
            </p>
          </div>
        </Reveal>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {capabilitiesData.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1} className="w-full flex justify-center">
              <TravelCard
                imageUrl={item.imageUrl}
                imageAlt={item.title}
                logo={item.logo}
                title={item.title}
                location={item.location}
                overview={item.overview}
                ctaText={item.ctaText}
                onBookNow={() => handleAction(item.title, item.url)}
                className="w-full max-w-none"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technology Operating Stack Section using TravelCard cards & Official SVGs */}
      <section className="section-pad relative border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/50">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-12 px-4">
            <div className="inline-flex items-center gap-2 border border-black/30 py-1.5 px-4 rounded-full text-xs font-bold tracking-wider uppercase text-black bg-white/90 mb-4 shadow-sm">
              <Cpu size={14} className="text-black" /> TECHNOLOGY & OPERATING STACK
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black flex flex-wrap items-center justify-center gap-2">
              <span>The Tools &</span>
              <FlipFadeText 
                words={["DISCIPLINES", "PLATFORMS", "STANDARDS", "SYSTEMS"]} 
                className="inline-flex min-h-0 text-black font-serif italic" 
                textClassName="text-black font-serif italic" 
                interval={2600}
              />
              <span>Behind Our Engine</span>
            </h2>
            <p className="mt-4 text-black text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              The tools and disciplines behind devotional ecommerce, digital marketing, full-stack development, and technology content.
            </p>
          </div>
        </Reveal>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {operatingStackCards.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08} className="w-full flex justify-center">
              <TravelCard
                imageUrl={item.imageUrl}
                imageAlt={item.title}
                logo={item.logo}
                title={item.title}
                location={item.location}
                overview={item.overview}
                pricePeriod={item.badge}
                ctaText={item.ctaText}
                onBookNow={() => handleAction(item.title, item.url)}
                className="w-full max-w-none"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Promise Section */}
      <section className="dark-band">
        <Reveal>
          <p className="section-label">Our promise</p>
          <h2>Clear services.<br /><em>Real brand focus.</em></h2>
          <p>We do not present the company as a generic agency. Every service is tied to an actual branch: BrajMart, Liklet, BrajBuzz Tech, or Liklet Tech.</p>
        </Reveal>
      </section>
    </PageFrame>
  )
}
