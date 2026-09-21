import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Building2,
  Users,
  Download,
  CheckCircle2,
  Lock,
  ChevronDown,
  Sparkles,
  PieChart,
  MessageCircle,
  Mail,
  Phone,
  ArrowRight,
  Globe2,
  Layers,
  Award,
  Calendar,
  FileSpreadsheet,
  Scale,
  FileText,
  AlertTriangle
} from 'lucide-react'
import { PageFrame, Reveal } from '@/components/site-header'
import { FlipFadeText } from '@/components/ui/flip-fade-text'
import { companyInfo, companyLinks } from '@/lib/company'
import { BrajMartLogo, LikletLogo, BrajBuzzLogo } from '@/components/brand-logos'

interface InvestmentTier {
  id: string
  name: string
  minAmount: string
  numericValue: number
  targetProfile: string
  badge: string
  popular?: boolean
  features: string[]
}

const investmentTiers: InvestmentTier[] = [
  {
    id: 'angel-starter',
    name: 'Angel Seed',
    minAmount: '₹2,50,000',
    numericValue: 250000,
    targetProfile: 'Individual Angels & Senior Tech/Commerce Operators',
    badge: 'Entry Ticket',
    features: [
      'Convertible CCD / Direct Equity allocation',
      'Quarterly Investor MIS & Financial Briefing',
      'Annual General Meeting (AGM) voting & participation',
      'Private Founder WhatsApp updates community',
      'Early access to all new BrajMart ecosystem rollouts'
    ]
  },
  {
    id: 'growth-partner',
    name: 'Growth Partner',
    minAmount: '₹10,00,000',
    numericValue: 1000000,
    targetProfile: 'HNWIs, D2C Founders & Seasoned Syndicates',
    badge: 'Most Popular',
    popular: true,
    features: [
      'Preferred valuation cap & favorable conversion ratio',
      'Bi-annual Strategic Advisory Board invitation',
      'Pro-rata co-investment rights for future funding rounds',
      'First-look allocation on subsidiary spin-offs (Liklet / BrajBuzz)',
      'Direct monthly 1-on-1 strategy sync with founders',
      'Comprehensive quarterly audited unit economics dashboard'
    ]
  },
  {
    id: 'strategic-lead',
    name: 'Strategic Syndicate / Institutional',
    minAmount: '₹25,00,000+',
    numericValue: 2500000,
    targetProfile: 'Family Offices, Micro VCs & Strategic Enterprise Partners',
    badge: 'Institutional Lead',
    features: [
      'Lead investor terms, information rights & observer seat',
      'Custom investment covenants & tailored liquidity roadmap',
      'Strategic partnership synergy with distribution channels',
      'Direct oversight of expansion into NRI global markets',
      'Dedicated legal & audit compliance concierge',
      'Quarterly in-person boardroom dinner in Vrindavan/Delhi NCR'
    ]
  }
]

const tractionMetrics = [
  {
    label: 'Annualized GMV Run Rate',
    value: '₹4.8 Cr+',
    change: '+184% YoY',
    subtext: 'Compounding rapid order velocity across devotional goods & tech services'
  },
  {
    label: 'Repeat Customer Rate',
    value: '68.4%',
    change: '3.1x D2C Avg',
    subtext: 'Exceptional spiritual loyalty and recurring seasonal puja subscriptions'
  },
  {
    label: 'Digital Audience Reach',
    value: '500K+',
    change: 'Zero Paid CAC',
    subtext: 'Built-in creator-led YouTube & social media distribution flywheel'
  },
  {
    label: 'Indian Devotional Market',
    value: '$50B+',
    change: 'By 2030 (CAGR 12%)',
    subtext: 'Vrindavan is India\'s fastest expanding spiritual tourism and pilgrimage hub'
  },
  {
    label: 'Interconnected Branches',
    value: '3 Engines',
    change: 'Fully Synergistic',
    subtext: 'BrajMart (Commerce), Liklet (Marketing & Tech), BrajBuzz Tech (Media)'
  },
  {
    label: 'Operating Leverage',
    value: 'Bootstrapped',
    change: 'Zero Debt',
    subtext: 'Disciplined capital efficiency with high gross margins and positive unit economics'
  }
]

const capitalAllocation = [
  {
    percentage: 35,
    title: 'Central Fulfillment & Supply Chain Logistics',
    description: 'Modernizing Vrindavan central packaging center, temperature-controlled prasadam storage, and expanding verified artisan sourcing network.'
  },
  {
    percentage: 25,
    title: 'Proprietary Tech Architecture & Mobile App',
    description: 'Launching native iOS/Android BrajMart app, personalized spiritual calendar integrations, and AI-assisted temple darshan commerce.'
  },
  {
    percentage: 20,
    title: 'Global NRI Spiritual Diaspora Expansion',
    description: 'Export compliance, US/UK/UAE fulfillment partnerships, and localized international currencies for overseas devotees.'
  },
  {
    percentage: 20,
    title: 'Media Studios & In-House Content Engine',
    description: 'Scaling BrajBuzz Tech studio facilities, multi-language devotional documentaries, and high-converting video-first commerce.'
  }
]

const investorFaqs = [
  {
    q: 'What is the legal corporate structure and investment instrument?',
    a: 'BrajMart EcomTech LLP is registered in India under the Ministry of Corporate Affairs (MCA) and operates from Vrindavan, Mathura, UP. Investment is structured through Compulsorily Convertible Debentures (CCD) or Partner Equity Contribution, converting at favorable terms in our next priced equity round.'
  },
  {
    q: 'Can overseas Non-Resident Indians (NRIs) or foreign citizens participate?',
    a: 'Yes. Indian regulations permit foreign and NRI investments under the automatic route via standard NRE/NRO banking channels or inward foreign remittance adhering to Reserve Bank of India (RBI) and FEMA compliance.'
  },
  {
    q: 'What is the company\'s projected exit and liquidity horizon?',
    a: 'We operate with a target 5 to 7 year liquidity window. Planned liquidity paths include an Initial Public Offering (IPO) on the NSE/BSE SME or Main Board, secondary buyouts from growth private equity funds, or strategic acquisition by consumer retail conglomerates.'
  },
  {
    q: 'How do the three ecosystem branches feed each other?',
    a: 'Liklet acts as an internal growth agency creating websites, apps, and performance marketing at cost. BrajBuzz Tech builds audience reach and trust without expensive Google/Meta ad burn. BrajMart monetizes this trust through authentic, high-margin spiritual products.'
  },
  {
    q: 'What reporting and visibility do investors receive?',
    a: 'All investors receive comprehensive quarterly Management Information System (MIS) reports detailing GMV, revenue, CAC, LTV, net cash runway, customer feedback, and strategic milestones, along with an annual audited financial summary.'
  }
]

export default function InvestorsPage() {
  const [selectedTier, setSelectedTier] = useState<InvestmentTier>(investmentTiers[1])
  const [ticketAmount, setTicketAmount] = useState('₹10,00,000')
  const [investorType, setInvestorType] = useState('Angel Investor')
  const [valueAdds, setValueAdds] = useState<string[]>([])
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [showPitchDeckModal, setShowPitchDeckModal] = useState(false)
  const [showLegalModal, setShowLegalModal] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const formRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    entity: '',
    country: 'India',
    message: '',
    isAccredited: false
  })

  const scrollToForm = (tier?: InvestmentTier) => {
    if (tier) {
      setSelectedTier(tier)
      setTicketAmount(tier.minAmount)
    }
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const toggleValueAdd = (item: string) => {
    setValueAdds((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setFormSubmitted(true)
    }, 900)
  }

  return (
    <PageFrame>
      {/* 1. HERO SECTION */}
      <section className="investor-hero section-pad">
        <div className="investor-hero-glow" aria-hidden="true" />
        <div className="investor-hero-content">
          <Reveal>
            <div className="round-badge-row">
              <span className="round-pill">
                <span className="live-indicator" />
                Strategic Growth Round Open
              </span>
              <span className="round-sub-pill">Target Allocation: ₹2.50 Cr ($300K)</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="investor-hero-title">
              Invest in India&apos;s Next<br />
              <FlipFadeText
                words={[
                  "DEVOTIONAL COMMERCE",
                  "TECH MEDIA POWERHOUSE",
                  "DIGITAL ECOSYSTEM",
                  "HIGH-MARGIN PLATFORM"
                ]}
                className="inline-flex min-h-0 text-black font-serif italic"
                textClassName="text-black font-serif italic"
                interval={2800}
              />
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="investor-hero-lede">
              BrajMart EcomTech LLP connects direct-from-source Vrindavan spiritual commerce,
              in-house digital marketing and engineering, and creator-led consumer tech media.
              Partner with us as an equity/CCD investor to scale India&apos;s most authentic spiritual ecosystem.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="investor-hero-actions">
              <button
                type="button"
                onClick={() => scrollToForm()}
                className="button button-investor-primary"
              >
                Submit Investment Interest <ArrowRight size={18} />
              </button>
              <button
                type="button"
                onClick={() => setShowPitchDeckModal(true)}
                className="button-investor-outline"
              >
                <Download size={16} /> Executive Deck Preview
              </button>
              <a
                href={companyLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="button-investor-ghost"
              >
                <MessageCircle size={16} /> WhatsApp IR Desk
              </a>
            </div>
          </Reveal>

          {/* Quick Round Facts Bar */}
          <Reveal delay={0.25}>
            <div className="round-quick-stats">
              <div className="quick-stat-col">
                <span className="stat-eyebrow">Round Stage</span>
                <span className="stat-main">Seed / Growth</span>
              </div>
              <div className="stat-separator" />
              <div className="quick-stat-col">
                <span className="stat-eyebrow">Minimum Ticket</span>
                <span className="stat-main">₹2,50,000 ($3K)</span>
              </div>
              <div className="stat-separator" />
              <div className="quick-stat-col">
                <span className="stat-eyebrow">Round Subscribed</span>
                <div className="stat-progress-wrap">
                  <span className="stat-main">68% Allocated</span>
                  <div className="stat-bar-track">
                    <div className="stat-bar-fill" style={{ width: '68%' }} />
                  </div>
                </div>
              </div>
              <div className="stat-separator" />
              <div className="quick-stat-col">
                <span className="stat-eyebrow">Legal Entity</span>
                <span className="stat-main">BrajMart EcomTech LLP</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. TRACTION & FINANCIAL METRICS DASHBOARD */}
      <section className="investor-section section-pad bg-neutral-50/70 border-y border-neutral-200/80">
        <div className="investor-container">
          <Reveal>
            <div className="section-head-center">
              <p className="section-label">Performance & Traction</p>
              <h2 className="section-title">
                Compounding metrics built on<br />
                <em>real consumer demand.</em>
              </h2>
              <p className="section-subtitle">
                Unlike burn-heavy startups, BrajMart EcomTech runs with unit-positive economics,
                organic zero-cost distribution, and multi-stream revenue engines.
              </p>
            </div>
          </Reveal>

          <div className="metrics-grid">
            {tractionMetrics.map((item, idx) => (
              <Reveal key={item.label} delay={idx * 0.08}>
                <div className="metric-card">
                  <div className="metric-top">
                    <span className="metric-change-pill">{item.change}</span>
                    <TrendingUp size={16} className="text-neutral-400" />
                  </div>
                  <div className="metric-val">{item.value}</div>
                  <div className="metric-label">{item.label}</div>
                  <p className="metric-subtext">{item.subtext}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE 3-PILLAR ECOSYSTEM FLYWHEEL */}
      <section className="investor-section section-pad">
        <div className="investor-container">
          <Reveal>
            <div className="section-head-split">
              <div>
                <p className="section-label">The Core Thesis</p>
                <h2 className="section-title">
                  Three interconnected engines.<br />
                  <em>One defensible moat.</em>
                </h2>
              </div>
              <p className="section-split-desc">
                Traditional D2C brands spend 40-50% of revenue on Meta and Google ads.
                Our media and agency wings generate our customer base and build technology at cost,
                giving BrajMart an unfair distribution advantage.
              </p>
            </div>
          </Reveal>

          <div className="flywheel-grid">
            {/* Engine 1: BrajMart */}
            <Reveal delay={0.1}>
              <div className="flywheel-card">
                <div className="flywheel-header">
                  <BrajMartLogo size="sm" />
                  <span className="engine-num">Engine 01</span>
                </div>
                <h3>BrajMart: High-Trust Devotional Commerce</h3>
                <p className="flywheel-text">
                  Direct-from-Vrindavan authentic spiritual commerce. Sourcing pure Mathura peda,
                  Vrindavan temple prasadam, authentic tulsi malas, brass deity idols, puja samagri, and sacred scriptures.
                </p>
                <ul className="flywheel-bullets">
                  <li><strong>Authenticity Moat:</strong> Physical operations in sacred Vrindavan create unreplicable trust.</li>
                  <li><strong>High Repeat Cadence:</strong> Festivals (Janmashtami, Radhashtami, Holi, Diwali) drive year-round recurring basket sizes.</li>
                  <li><strong>Global Diaspora:</strong> High-ticket demand from overseas NRIs seeking genuine Braj blessings.</li>
                </ul>
              </div>
            </Reveal>

            {/* Engine 2: Liklet */}
            <Reveal delay={0.2}>
              <div className="flywheel-card">
                <div className="flywheel-header">
                  <LikletLogo size="sm" />
                  <span className="engine-num">Engine 02</span>
                </div>
                <h3>Liklet: In-House Tech & Growth Agency</h3>
                <p className="flywheel-text">
                  Full-stack engineering, performance marketing, high-conversion web development, and search engine optimization.
                </p>
                <ul className="flywheel-bullets">
                  <li><strong>Zero Agency Fees:</strong> Our internal platforms are built and iterated by our own dedicated developers.</li>
                  <li><strong>Cash-Flow Generating:</strong> Liklet services external enterprise clients, contributing profitable services revenue.</li>
                  <li><strong>Modern Data Stack:</strong> Fast, custom-built e-commerce infrastructure tailored for seamless checkout.</li>
                </ul>
              </div>
            </Reveal>

            {/* Engine 3: BrajBuzz Tech */}
            <Reveal delay={0.3}>
              <div className="flywheel-card">
                <div className="flywheel-header">
                  <BrajBuzzLogo size="sm" />
                  <span className="engine-num">Engine 03</span>
                </div>
                <h3>BrajBuzz Tech: Creator-Led Media Engine</h3>
                <p className="flywheel-text">
                  Digital tech journalism, gadget reviews, smartphone unboxings, buying guides, and video content across YouTube and social channels.
                </p>
                <ul className="flywheel-bullets">
                  <li><strong>Organic Distribution:</strong> Reaches over 500K+ tech and lifestyle enthusiasts without ad spend.</li>
                  <li><strong>Brand Partnerships:</strong> Generates creator sponsorships, affiliate monetization, and product placements.</li>
                  <li><strong>Cross-Ecosystem Trust:</strong> Channels consumer goodwill and video-first trust directly to our umbrella brands.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE INVESTMENT TIERS & TICKET SELECTOR */}
      <section className="investor-section section-pad bg-neutral-900 text-white" id="tiers-section">
        <div className="investor-container">
          <Reveal>
            <div className="section-head-center">
              <span className="tier-tag">Capital Structure & Tiers</span>
              <h2 className="section-title text-white">
                Choose your participation tier.<br />
                <em>Back our vision from ₹2.5 Lakhs.</em>
              </h2>
              <p className="section-subtitle text-neutral-300">
                Tailored packages for angel investors, strategic family offices, and tech syndicates.
                Select a tier to auto-populate your investment expression of interest.
              </p>
            </div>
          </Reveal>

          <div className="tiers-grid">
            {investmentTiers.map((tier, idx) => {
              const isSelected = selectedTier.id === tier.id
              return (
                <Reveal key={tier.id} delay={idx * 0.1}>
                  <div
                    className={`tier-card ${isSelected ? 'tier-selected' : ''} ${tier.popular ? 'tier-popular' : ''}`}
                    onClick={() => {
                      setSelectedTier(tier)
                      setTicketAmount(tier.minAmount)
                    }}
                  >
                    {tier.popular && (
                      <div className="tier-ribbon">Most Recommended</div>
                    )}
                    <div className="tier-badge-label">{tier.badge}</div>
                    <h3 className="tier-title">{tier.name}</h3>
                    <div className="tier-price-row">
                      <span className="tier-amount">{tier.minAmount}</span>
                      <span className="tier-period">Minimum</span>
                    </div>
                    <p className="tier-target">{tier.targetProfile}</p>

                    <div className="tier-divider" />

                    <div className="tier-perks-label">Investor Privileges:</div>
                    <ul className="tier-perks-list">
                      {tier.features.map((feat) => (
                        <li key={feat}>
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        scrollToForm(tier)
                      }}
                      className={`tier-action-btn ${isSelected ? 'btn-selected' : ''}`}
                    >
                      {isSelected ? 'Selected — Scroll to Invest' : `Select ${tier.name}`}
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. CAPITAL ALLOCATION & USE OF FUNDS */}
      <section className="investor-section section-pad">
        <div className="investor-container">
          <Reveal>
            <div className="section-head-split">
              <div>
                <p className="section-label">Deployment Roadmap</p>
                <h2 className="section-title">
                  Planned utilization<br />
                  <em>of current round capital.</em>
                </h2>
              </div>
              <p className="section-split-desc">
                Every rupee invested is deployed with strict financial governance and measurable milestones
                geared towards exponential Gross Merchandise Value expansion and international NRI capture.
              </p>
            </div>
          </Reveal>

          <div className="allocation-list">
            {capitalAllocation.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.1}>
                <div className="allocation-row">
                  <div className="allocation-pct-box">
                    <span className="allocation-number">{item.percentage}%</span>
                  </div>
                  <div className="allocation-details">
                    <div className="allocation-top">
                      <h4>{item.title}</h4>
                      <div className="allocation-bar-bg">
                        <div
                          className="allocation-bar-fg"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONFIDENTIAL DATA ROOM & DUE DILIGENCE */}
      <section className="investor-section section-pad bg-neutral-100/70 border-y border-neutral-200">
        <div className="investor-container">
          <div className="dataroom-banner">
            <div className="dataroom-info">
              <span className="dataroom-badge">
                <Lock size={14} /> Institutional Data Room
              </span>
              <h2>Complete Due Diligence Access</h2>
              <p>
                Qualified prospective investors can review our comprehensive 2026 Pitch Deck,
                audited unit economics model, capitalization table, and Ministry of Corporate Affairs documents.
              </p>
              <div className="dataroom-doc-tags">
                <span className="doc-tag"><FileSpreadsheet size={13} /> 5-Year Financial Model</span>
                <span className="doc-tag"><Layers size={13} /> Cap Table & Equity Structure</span>
                <span className="doc-tag"><ShieldCheck size={13} /> MCA & DPIIT Certificates</span>
                <span className="doc-tag"><Globe2 size={13} /> NRI Export & FEMA Guide</span>
              </div>
            </div>
            <div className="dataroom-cta-box">
              <button
                type="button"
                onClick={() => setShowPitchDeckModal(true)}
                className="button button-dataroom"
              >
                <Download size={16} /> View Executive Pitch Deck
              </button>
              <button
                type="button"
                onClick={() => scrollToForm()}
                className="button-dataroom-secondary"
              >
                Request Full Data Room Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FORM: EXPRESSION OF INTEREST (EOI) APPLICATION */}
      <section className="investor-section section-pad" ref={formRef} id="invest-form">
        <div className="investor-container">
          <Reveal>
            <div className="section-head-center">
              <span className="pill-eyebrow">Formal Expression of Interest</span>
              <h2 className="section-title">
                Submit your investment inquiry.<br />
                <em>Direct founder review within 24 hours.</em>
              </h2>
              <p className="section-subtitle">
                Please provide your details below. Once submitted, our Investor Relations desk will schedule
                a private introductory briefing call and deliver the complete Data Room link.
              </p>
            </div>
          </Reveal>

          <div className="investor-form-wrap">
            {formSubmitted ? (
              <div className="investor-success-card">
                <div className="success-icon-badge">
                  <CheckCircle2 size={42} className="text-emerald-500" />
                </div>
                <h3>Investment Expression of Interest Received</h3>
                <p className="success-summary">
                  Thank you, <strong>{formData.fullName || 'Investor'}</strong>. We have registered your inquiry
                  for <strong>{ticketAmount}</strong> as an accredited <strong>{investorType}</strong>.
                </p>
                <div className="success-ref-box">
                  <span className="ref-label">Inquiry Reference Number:</span>
                  <span className="ref-code">BM-INV-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>

                <div className="success-next-steps">
                  <h4>What happens next:</h4>
                  <ol>
                    <li>Our Founding Partner will reach out to you via WhatsApp / Email at <strong>{formData.email || 'your email'}</strong> within 24 hours.</li>
                    <li>You will receive the customized Non-Disclosure Agreement (NDA) and confidential Data Room access.</li>
                    <li>A private 30-minute founder call will be arranged to discuss allocation, terms, and transfer mechanics.</li>
                  </ol>
                </div>

                <div className="success-cta-row">
                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Founders! I just submitted an investment expression of interest on your website for ${ticketAmount} (${investorType}). Let's discuss next steps.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-whatsapp-direct"
                  >
                    <MessageCircle size={18} /> Instant Founder WhatsApp Connect
                  </a>
                  <button
                    type="button"
                    onClick={() => setShowPitchDeckModal(true)}
                    className="button button-investor-outline"
                  >
                    <Download size={16} /> Download Executive Summary Deck
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        entity: '',
                        country: 'India',
                        message: '',
                        isAccredited: false
                      })
                    }}
                    className="btn-text-reset"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="investor-form-inner" onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <label className="investor-label">
                    Full Name *
                    <input
                      required
                      type="text"
                      className="investor-input"
                      placeholder="e.g. Ramesh Chandra / Rajesh Gupta"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </label>

                  <label className="investor-label">
                    Investor Entity / Fund Name (Optional)
                    <input
                      type="text"
                      className="investor-input"
                      placeholder="e.g. Chandra Capital / Family Office"
                      value={formData.entity}
                      onChange={(e) => setFormData({ ...formData, entity: e.target.value })}
                    />
                  </label>
                </div>

                <div className="form-grid-2">
                  <label className="investor-label">
                    Work / Personal Email *
                    <input
                      required
                      type="email"
                      className="investor-input"
                      placeholder="investor@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </label>

                  <label className="investor-label">
                    Phone / WhatsApp (With Country Code) *
                    <input
                      required
                      type="tel"
                      className="investor-input"
                      placeholder="+91 98765 43210 or +1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </label>
                </div>

                <div className="form-grid-2">
                  <label className="investor-label">
                    Investor Classification *
                    <select
                      className="investor-select"
                      value={investorType}
                      onChange={(e) => setInvestorType(e.target.value)}
                    >
                      <option value="Angel Investor">Individual Angel Investor</option>
                      <option value="High Net Worth Individual">High Net Worth Individual (HNWI)</option>
                      <option value="Family Office">Family Office / Investment Firm</option>
                      <option value="Venture Capital Fund">Venture Capital (VC) / Syndicate Lead</option>
                      <option value="Strategic Corporate Partner">Strategic D2C / Retail Enterprise</option>
                      <option value="NRI Devotional Angel">NRI / International Devotional Angel</option>
                    </select>
                  </label>

                  <label className="investor-label">
                    Investor Country / Location *
                    <select
                      className="investor-select"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    >
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other Global Location</option>
                    </select>
                  </label>
                </div>

                {/* Ticket Selector Interactive Buttons */}
                <div className="form-field-group">
                  <span className="investor-label">Proposed Investment Ticket *</span>
                  <div className="ticket-chips">
                    {[
                      '₹2,50,000',
                      '₹5,00,000',
                      '₹10,00,000',
                      '₹25,00,000',
                      '₹50,00,000+'
                    ].map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => setTicketAmount(chip)}
                        className={`ticket-chip ${ticketAmount === chip ? 'chip-active' : ''}`}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    className="investor-input mt-2"
                    placeholder="Or enter custom amount (e.g. ₹15,00,000 or $50,000 USD)"
                    value={ticketAmount}
                    onChange={(e) => setTicketAmount(e.target.value)}
                  />
                </div>

                {/* Strategic Value Adds */}
                <div className="form-field-group">
                  <span className="investor-label">How can you strategically accelerate BrajMart? (Select all that apply)</span>
                  <div className="value-adds-grid">
                    {[
                      'D2C Supply Chain & Logistics',
                      'Global NRI Distribution (US/UK/UAE)',
                      'Follow-on Capital & Syndication',
                      'Tech, Mobile App & AI Architecture',
                      'Marketing, PR & Brand Scaling',
                      'Spiritual Tourism & Temple Alliances'
                    ].map((item) => (
                      <label key={item} className="checkbox-pill">
                        <input
                          type="checkbox"
                          checked={valueAdds.includes(item)}
                          onChange={() => toggleValueAdd(item)}
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <label className="investor-label">
                  Investment Thesis / Specific Questions for Founders
                  <textarea
                    rows={4}
                    className="investor-textarea"
                    placeholder="Tell us what excites you about the BrajMart ecosystem or any specific covenants/deal terms you wish to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </label>

                <div className="accreditation-check">
                  <input
                    required
                    type="checkbox"
                    id="accredited-checkbox"
                    checked={formData.isAccredited}
                    onChange={(e) => setFormData({ ...formData, isAccredited: e.target.checked })}
                  />
                  <label htmlFor="accredited-checkbox">
                    I confirm that I am an accredited or eligible investor evaluating early-stage equity/debt participation. I understand this Expression of Interest is strictly exploratory and non-binding, and I agree to the <Link to="/terms" className="underline font-bold text-black hover:opacity-75">Terms of Service</Link> and <Link to="/privacy" className="underline font-bold text-black hover:opacity-75">Privacy Policy</Link>.
                  </label>
                </div>

                <div className="flex flex-wrap justify-between items-center text-xs text-neutral-500 px-1 -mt-2">
                  <span>Protected under trade secret &amp; data privacy regulations.</span>
                  <button
                    type="button"
                    onClick={() => setShowLegalModal(true)}
                    className="text-black font-semibold underline hover:opacity-80 cursor-pointer"
                  >
                    View Accreditation Guidelines &amp; Deal Mechanics &rarr;
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="button button-submit-investor"
                >
                  {submitting ? 'Registering Inquiry...' : 'Submit Formal Investment Interest'}
                  <ArrowRight size={18} />
                </button>

                <div className="form-footer-note">
                  <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                  <span>
                    Your data is strictly confidential and protected under standard non-disclosure protocols.
                    We will never share your investor contact details with third parties.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. STATUTORY REGULATORY & LEGAL DISCLAIMERS */}
      <section className="investor-section section-pad bg-neutral-100/90 border-t border-neutral-200" id="legal-disclaimers">
        <div className="investor-container">
          <Reveal>
            <div className="section-head-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 text-black text-xs font-bold uppercase tracking-wider mb-3">
                <Scale size={14} /> Legal &amp; Regulatory Disclosures
              </div>
              <h2 className="section-title">
                Important statutory disclosures.<br />
                <em>Mandatory investor advisory.</em>
              </h2>
              <p className="section-subtitle">
                Please review these statutory regulatory warnings and legal declarations before submitting an investment inquiry.
              </p>
            </div>
          </Reveal>

          <div className="disclaimers-grid">
            <div className="disclaimer-card">
              <div className="disclaimer-header">
                <ShieldCheck size={18} className="text-black shrink-0" />
                <h4>Private Placement &amp; Non-Public Offer</h4>
              </div>
              <p>
                This webpage, the executive summary, and any associated materials are intended exclusively for accredited investors, angel syndicates, and institutional funds on a private placement basis. Nothing herein constitutes a public offering, prospectus, or advertisement inviting public subscriptions under Section 42 of the Indian Companies Act, 2013, or SEBI regulations.
              </p>
            </div>

            <div className="disclaimer-card">
              <div className="disclaimer-header">
                <AlertTriangle size={18} className="text-amber-600 shrink-0" />
                <h4>Capital Risk &amp; Illiquidity Warning</h4>
              </div>
              <p>
                Investment in early-stage, unlisted limited liability partnerships and startup enterprises carries significant financial risk, including potential illiquidity, delayed dividend distributions, and loss of invested capital. Past financial performance and projected market expansions are forward-looking statements that carry inherent execution risks.
              </p>
            </div>

            <div className="disclaimer-card">
              <div className="disclaimer-header">
                <Globe2 size={18} className="text-black shrink-0" />
                <h4>FEMA &amp; RBI Inward Remittance Compliance</h4>
              </div>
              <p>
                Non-Resident Indians (NRIs), Overseas Citizens of India (OCIs), and foreign institutional investors must ensure compliance with the Foreign Exchange Management Act, 1999 (FEMA), Reserve Bank of India (RBI) Foreign Direct Investment (FDI) guidelines, and applicable international tax treaties before subscribing capital.
              </p>
            </div>

            <div className="disclaimer-card">
              <div className="disclaimer-header">
                <FileText size={18} className="text-black shrink-0" />
                <h4>Non-Binding EOI &amp; Definitive Agreements</h4>
              </div>
              <p>
                The submission of an Expression of Interest (EOI) does not create any legally binding investment obligation on either party. Definitive terms, equity percentages, and governance covenants are governed strictly by executed formal agreements (e.g., Compulsorily Convertible Debenture Agreement, Amended LLP Agreement, and Deed of Adherence).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INVESTOR FAQS */}
      <section className="investor-section section-pad bg-neutral-50/80 border-t border-neutral-200">
        <div className="investor-container">
          <Reveal>
            <div className="section-head-center">
              <p className="section-label">Due Diligence FAQ</p>
              <h2 className="section-title">
                Common investor questions.<br />
                <em>Clear answers upfront.</em>
              </h2>
            </div>
          </Reveal>

          <div className="faq-accordion-wrap">
            {investorFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div key={faq.q} className="faq-accordion-item">
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`faq-chevron ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 9. DIRECT FOUNDER & INVESTOR RELATIONS CONTACT BOX */}
      <section className="investor-section section-pad bg-white">
        <div className="investor-container">
          <div className="ir-direct-card">
            <div className="ir-card-left">
              <span className="pill-eyebrow">Investor Relations Desk</span>
              <h2>Speak Directly with Founding Partners</h2>
              <p>
                Have questions regarding the cap table, unit economics, or legal structure?
                Connect directly with our leadership team in Vrindavan or over a scheduled video call.
              </p>
              <div className="ir-channels">
                <a href={companyLinks.email} className="ir-channel-link">
                  <Mail size={16} /> {companyInfo.email}
                </a>
                <a href={companyLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="ir-channel-link">
                  <MessageCircle size={16} /> WhatsApp: {companyInfo.phone}
                </a>
                <a href={companyLinks.phone} className="ir-channel-link">
                  <Phone size={16} /> Call: {companyInfo.phone}
                </a>
              </div>
            </div>

            <div className="ir-card-right">
              <div className="hq-details-box">
                <Building2 size={24} className="text-black mb-2" />
                <h4>Corporate Headquarters</h4>
                <p>
                  BrajMart EcomTech LLP<br />
                  Keshav Kunj, Parikrama Marg,<br />
                  Vrindavan, Mathura, UP 281121<br />
                  India
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-200 text-xs text-neutral-500">
                  Registered under MCA Govt. of India · Startup India Recognition
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. MODAL: PITCH DECK PREVIEW & EXECUTIVE SUMMARY */}
      {showPitchDeckModal && (
        <div className="pitch-modal-backdrop" onClick={() => setShowPitchDeckModal(false)}>
          <div className="pitch-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="pitch-modal-head">
              <div>
                <span className="modal-eyebrow">Executive Summary & Pitch Highlights</span>
                <h3>BrajMart EcomTech LLP (2026 Growth Round)</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowPitchDeckModal(false)}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="pitch-modal-body">
              <div className="deck-slide-mockup">
                <div className="slide-tag">Executive Summary Slide</div>
                <h4>The Multi-Engine Devotional Ecosystem</h4>
                <p className="slide-summary-text">
                  BrajMart EcomTech LLP captures the booming $50B+ Indian devotional economy
                  by uniting three symbiotic branches:
                </p>
                <div className="slide-three-columns">
                  <div className="slide-col">
                    <span className="slide-col-title">BrajMart</span>
                    <p>Authentic devotional goods sourced directly from Vrindavan temples & artisans.</p>
                  </div>
                  <div className="slide-col">
                    <span className="slide-col-title">Liklet</span>
                    <p>Full-stack development & performance marketing engine powering zero-overhead growth.</p>
                  </div>
                  <div className="slide-col">
                    <span className="slide-col-title">BrajBuzz Tech</span>
                    <p>Consumer tech media and video channels with 500K+ organic viewers.</p>
                  </div>
                </div>

                <div className="slide-metrics-row">
                  <div className="slide-stat">
                    <span className="stat-num">₹4.8 Cr+</span>
                    <span className="stat-lbl">Run Rate</span>
                  </div>
                  <div className="slide-stat">
                    <span className="stat-num">68.4%</span>
                    <span className="stat-lbl">Repeat Rate</span>
                  </div>
                  <div className="slide-stat">
                    <span className="stat-num">₹2.5 Cr</span>
                    <span className="stat-lbl">Target Raise</span>
                  </div>
                  <div className="slide-stat">
                    <span className="stat-num">₹2.5L</span>
                    <span className="stat-lbl">Min Ticket</span>
                  </div>
                </div>
              </div>

              <div className="pitch-modal-footer">
                <p className="text-xs text-neutral-500">
                  Full 24-page confidential Pitch Deck with audited unit economics and financial model is delivered upon submitting your Expression of Interest.
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowPitchDeckModal(false)
                      scrollToForm()
                    }}
                    className="button button-investor-primary"
                  >
                    Invest in this Round <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 11. MODAL: ACCREDITATION CRITERIA & LEGAL MECHANICS */}
      {showLegalModal && (
        <div className="pitch-modal-backdrop" onClick={() => setShowLegalModal(false)}>
          <div className="pitch-modal-card max-w-[760px]" onClick={(e) => e.stopPropagation()}>
            <div className="pitch-modal-head">
              <div>
                <span className="modal-eyebrow">Statutory Criteria &amp; Governance</span>
                <h3>Accredited Investor &amp; Investment Mechanics</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowLegalModal(false)}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="pitch-modal-body max-h-[75vh] overflow-y-auto">
              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4">
                  <h4 className="font-bold text-black mb-1">1. Accredited Investor Definition</h4>
                  <p className="text-xs text-neutral-600 mb-2">
                    In alignment with Indian securities norms (SEBI guidelines for unlisted investments) and global venture standards, prospective investors must satisfy at least one of the following benchmarks:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-neutral-600">
                    <li>Individual with net worth of at least &#8377;2 Crore (excluding primary residence), OR annual gross income exceeding &#8377;25 Lakhs.</li>
                    <li>Corporate entity, partnership firm, or family office with a minimum net worth of &#8377;5 Crore.</li>
                    <li>Accredited Non-Resident Indian (NRI) or overseas institutional angel fulfilling local foreign jurisdiction accreditation thresholds.</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4">
                  <h4 className="font-bold text-black mb-1">2. Instrument &amp; Conversion Terms</h4>
                  <p className="text-xs text-neutral-600">
                    Allocations in the current round are structured through Compulsorily Convertible Debentures (CCDs) or direct Partner Equity Contribution under the LLP Act.
                    CCDs carry a pre-agreed discount to our next institutional round (Series A) or a capped valuation valuation ceiling, maximizing upside protection for early backers.
                  </p>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4">
                  <h4 className="font-bold text-black mb-1">3. Step-by-Step Investment Workflow</h4>
                  <ol className="list-decimal pl-5 space-y-1 text-xs text-neutral-600">
                    <li><strong>Expression of Interest (EOI):</strong> Submit your indicative ticket via this portal.</li>
                    <li><strong>Mutual Non-Disclosure Agreement (NDA):</strong> Formalized bilateral confidentiality.</li>
                    <li><strong>Data Room &amp; Financial Model:</strong> 14-day due diligence window.</li>
                    <li><strong>Founder Briefing:</strong> Interactive 45-minute vision and terms alignment call.</li>
                    <li><strong>Definitive Execution:</strong> Execution of Debenture/Equity Agreement and formal capital remittance via designated escrow.</li>
                  </ol>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-200 text-xs text-neutral-500">
                  <span>For specialized institutional terms, contact: <strong>{companyInfo.email}</strong></span>
                  <button
                    type="button"
                    onClick={() => setShowLegalModal(false)}
                    className="button button-investor-primary text-xs py-2 px-4"
                  >
                    Understood &amp; Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageFrame>
  )
}
