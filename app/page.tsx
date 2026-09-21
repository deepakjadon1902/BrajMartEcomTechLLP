import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { CometCard } from '@/components/ui/comet-card'
import { FAQSection } from '@/components/faq-section'
import { PageFrame, Reveal } from '@/components/site-header'
import FlipFadeText from '@/components/ui/flip-fade-text'

const branches = [
  ['01', 'BrajMart', 'Devotional ecommerce from Vrindavan: prasadam, puja essentials, spiritual books, malas, gifts, and Braj Darshan context.'],
  ['02', 'Liklet', 'Digital marketing, social media growth, SEO, content systems, and full-stack web development for brands that want measurable momentum.'],
  ['03', 'BrajBuzz Tech', 'A tech media branch for gadget unboxing, honest reviews, buying guidance, and YouTube-first consumer tech content.'],
]

const faqs = [
  { question: 'What is BrajMart EcomTech?', answer: 'BrajMart EcomTech is the parent company connecting ecommerce, digital growth services, and technology media through BrajMart, Liklet, and BrajBuzz Tech.' },
  { question: 'Which branch should I contact?', answer: 'Choose BrajMart for devotional ecommerce, Liklet for marketing or development work, and BrajBuzz Tech or Liklet Tech for gadget, tech, and YouTube media collaborations.' },
  { question: 'Do the branches work together?', answer: 'Yes. The same ecosystem thinking connects commerce, performance marketing, full-stack technology, content, and creator-led product discovery.' },
]

export default function HomePage() {
  return <PageFrame>
    <section className="hero"><video className="hero-video hero-video-3d" autoPlay muted loop playsInline preload="auto" aria-label="A realistic 3D cube animation on a high-tech circuit board background"><source src="https://videos.pexels.com/video-files/34645144/14683909_3840_2160_30fps.mp4" type="video/mp4" /></video><div className="hero-video-overlay" aria-hidden="true" /><div className="hero-copy"><p className="eyebrow">BrajMart EcomTech LLP <span>-</span> Ecommerce, growth and tech media</p><h1>Building brands for<br /><em>commerce, content and technology.</em></h1><p className="hero-intro">BrajMart EcomTech brings together three focused branches: BrajMart for devotional ecommerce, Liklet for digital marketing and full-stack development, and BrajBuzz Tech for gadget and technology content.</p><a className="circle-link" href="/what-we-do" aria-label="Explore what we do"><ArrowDown /></a></div><span className="image-caption">BrajMart. Liklet.<br />BrajBuzz Tech.</span></section>
    <section className="manifesto section-pad"><Reveal><p className="section-label">Company ecosystem</p><FlipFadeText words={["ECOMMERCE", "MARKETING", "TECH MEDIA"]} className="page-flip-text home-flip-text" textClassName="page-flip-words" /><h2>One company.<br /><span>Three useful engines.</span></h2></Reveal><Reveal className="manifesto-body"><p>Our work starts from real customer behavior: what people search, buy, watch, trust, and share. Each branch has a clear role, but together they create a practical growth system for modern digital business.</p><a className="text-link" href="/about">About the company <ArrowUpRight size={16} /></a></Reveal></section>
    <section className="home-services section-pad"><div className="work-heading"><div><p className="section-label">Our branches</p><h2 className="section-title">What each<br /><em>brand does.</em></h2></div><a className="text-link" href="/collaborators">View brand ecosystem <ArrowUpRight size={16} /></a></div><div className="home-service-grid">{branches.map(([num, title, text]) => <a href="/what-we-do" className="home-service" key={num}><span>{num}</span><CometCard className="home-comet"><div className="home-comet-inner"><p>{title}</p><span>{text}</span><strong>Explore <ArrowUpRight size={16} /></strong></div></CometCard></a>)}</div></section>
    <section className="statement"><Reveal><p className="section-label">Why it works</p><h2>Commerce grows faster<br />when <em>content and technology</em> move together.</h2><p className="statement-copy">BrajMart EcomTech is built around connected capabilities: marketplace operations, brand storytelling, digital acquisition, web engineering, and creator-led product education.</p><a className="button button-light" href="/contact">Start a conversation <ArrowUpRight size={16} /></a></Reveal></section>
    <section className="testimonial section-pad"><Reveal><p className="section-label">Current focus</p><blockquote>&ldquo;From Vrindavan products to growth systems and tech reviews, our goal is simple: make useful digital brands people can trust.&rdquo;</blockquote><p className="quote-byline">BrajMart EcomTech LLP</p></Reveal></section>
    <FAQSection items={faqs} subtitle="Quick clarity before you choose a branch." />
  </PageFrame>
}
