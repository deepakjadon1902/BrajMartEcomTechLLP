import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  FileText,
  Mail,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
} from 'lucide-react'
import { PageFrame, PageIntro, Reveal } from '@/components/site-header'
import { companyInfo, companyLinks } from '@/lib/company'
import { BrajBuzzLogo, BrajMartLogo, LikletLogo, LikletTechLogo } from '@/components/brand-logos'

const companyFacts = [
  {
    label: 'Legal name',
    value: companyInfo.legalName,
    note: 'Use the legal name in all formal communication and document requests.',
  },
  {
    label: 'Registered location shared on this website',
    value: companyInfo.address,
    note: 'Address details should be verified against official records before any transaction.',
  },
  {
    label: 'Public financial data',
    value: 'Not published on this website',
    note: 'Revenue, valuation, profit, cap table, and funding terms are not displayed publicly.',
  },
  {
    label: 'Enquiry status',
    value: 'Information request only',
    note: 'Submitting this form does not create an investment offer, acceptance, or obligation.',
  },
]

const branches = [
  {
    name: 'BrajMart',
    role: 'Devotional ecommerce',
    text: 'Focused on commerce connected to devotional products and customer support.',
    logo: <BrajMartLogo size="sm" />,
  },
  {
    name: 'Liklet',
    role: 'Digital marketing and web services',
    text: 'Focused on growth work such as websites, marketing systems, and online presence.',
    logo: <LikletLogo size="sm" />,
  },
  {
    name: 'BrajBuzz Tech',
    role: 'Technology media',
    text: 'Focused on consumer technology content, gadget coverage, and creator-led media.',
    logo: <BrajBuzzLogo size="sm" />,
  },
  {
    name: 'Liklet Tech',
    role: 'Engineering and development',
    text: 'Focused on web development, application work, and technical implementation.',
    logo: <LikletTechLogo size="sm" />,
  },
]

const dueDiligenceItems = [
  'Company registration and current legal status',
  'Latest financial statements or management accounts, if available for sharing',
  'Tax, banking, and compliance documents relevant to the proposed discussion',
  'Ownership, partner, or governance documents that the company is legally able to disclose',
  'Written terms prepared or reviewed by qualified legal and tax professionals',
]

export default function InvestorsPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    consent: false,
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello ${companyInfo.legalName}, I submitted an investor/partnership information request on your website. Please share the next steps for verified documents.`
  )

  return (
    <PageFrame>
      <PageIntro
        label="Investor information"
        title={
          <>
            Simple company facts,<br />
            <em>shared carefully.</em>
          </>
        }
      >
        This page is for serious investor, lender, strategic partner, and advisor enquiries. It does not publish an investment offer, round terms, financial projections, or unverifiable performance claims.
      </PageIntro>

      <section className="investor-section section-pad bg-neutral-50/70 border-y border-neutral-200/80">
        <div className="investor-container">
          <Reveal>
            <div className="section-head-center">
              <p className="section-label">Clear position</p>
              <h2 className="section-title">
                No fake numbers.<br />
                <em>No public offer.</em>
              </h2>
              <p className="section-subtitle">
                BrajMart EcomTech LLP does not use this website to advertise securities, promise returns, publish unverified traction, or collect money. Any formal discussion must happen through verified documents and professional advice.
              </p>
            </div>
          </Reveal>

          <div className="metrics-grid">
            {companyFacts.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.06}>
                <article className="metric-card">
                  <div className="metric-top">
                    <span className="metric-change-pill">{item.label}</span>
                    <ShieldCheck size={16} className="text-neutral-400" />
                  </div>
                  <div className="metric-val text-[1.35rem] leading-tight">{item.value}</div>
                  <p className="metric-subtext">{item.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="investor-section section-pad">
        <div className="investor-container">
          <Reveal>
            <div className="section-head-split">
              <div>
                <p className="section-label">What the company does</p>
                <h2 className="section-title">
                  Four operating areas,<br />
                  <em>described plainly.</em>
                </h2>
              </div>
              <p className="section-split-desc">
                The public website describes BrajMart EcomTech LLP as a company working across devotional ecommerce, digital marketing, development, and technology media. These descriptions are not financial claims.
              </p>
            </div>
          </Reveal>

          <div className="flywheel-grid">
            {branches.map((branch, index) => (
              <Reveal key={branch.name} delay={index * 0.08}>
                <article className="flywheel-card">
                  <div className="flywheel-header">
                    {branch.logo}
                    <span className="engine-num">{branch.role}</span>
                  </div>
                  <h3>{branch.name}</h3>
                  <p className="flywheel-text">{branch.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="investor-section section-pad bg-neutral-100/70 border-y border-neutral-200">
        <div className="investor-container">
          <Reveal>
            <div className="section-head-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-black text-xs font-bold uppercase tracking-wider mb-3">
                <FileText size={14} /> Documents before decisions
              </div>
              <h2 className="section-title">
                Ask for verified records<br />
                <em>before relying on anything.</em>
              </h2>
              <p className="section-subtitle">
                Any person evaluating a commercial or investment discussion should request current documents directly from the company and independently verify them.
              </p>
            </div>
          </Reveal>

          <div className="disclaimers-grid">
            {dueDiligenceItems.map((item) => (
              <article className="disclaimer-card" key={item}>
                <div className="disclaimer-header">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <h4>{item}</h4>
                </div>
                <p>
                  Request the latest version from the company and review it with your own legal, tax, and financial advisors.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="investor-section section-pad" id="investor-enquiry">
        <div className="investor-container">
          <Reveal>
            <div className="section-head-center">
              <p className="section-label">Enquiry form</p>
              <h2 className="section-title">
                Request information,<br />
                <em>not allocation.</em>
              </h2>
              <p className="section-subtitle">
                Use this form to start a conversation. Do not send money, confidential documents, or sensitive financial records through this website.
              </p>
            </div>
          </Reveal>

          <div className="investor-form-wrap">
            {submitted ? (
              <div className="investor-success-card">
                <CheckCircle2 size={44} className="mx-auto text-emerald-600 mb-4" />
                <h3>Information request noted</h3>
                <p>
                  Thank you, <strong>{formData.name || 'there'}</strong>. Please contact the company directly by email or WhatsApp to continue with verified documents and next steps.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <a href={companyLinks.email} className="button button-investor-primary">
                    Email the company <Mail size={16} />
                  </a>
                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-investor-outline"
                  >
                    Continue on WhatsApp <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            ) : (
              <form className="investor-form-inner" onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <label className="investor-label">
                    Full name *
                    <input
                      required
                      className="investor-input"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    />
                  </label>

                  <label className="investor-label">
                    Organization
                    <input
                      className="investor-input"
                      placeholder="Company, fund, or advisory firm"
                      value={formData.organization}
                      onChange={(event) => setFormData({ ...formData, organization: event.target.value })}
                    />
                  </label>
                </div>

                <div className="form-grid-2">
                  <label className="investor-label">
                    Email *
                    <input
                      required
                      type="email"
                      className="investor-input"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    />
                  </label>

                  <label className="investor-label">
                    Phone or WhatsApp
                    <input
                      className="investor-input"
                      placeholder="+91 ..."
                      value={formData.phone}
                      onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                    />
                  </label>
                </div>

                <label className="investor-label">
                  What would you like to discuss? *
                  <textarea
                    required
                    rows={5}
                    className="investor-textarea"
                    placeholder="Example: I want to review company documents for a possible strategic partnership or investment discussion."
                    value={formData.message}
                    onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  />
                </label>

                <div className="accreditation-check">
                  <input
                    required
                    type="checkbox"
                    id="investor-info-consent"
                    checked={formData.consent}
                    onChange={(event) => setFormData({ ...formData, consent: event.target.checked })}
                  />
                  <label htmlFor="investor-info-consent">
                    I understand this is only a non-binding information request. This page is not a public offer, private placement memorandum, prospectus, promise of returns, or advice to invest. I agree to the <Link to="/terms" className="underline font-bold text-black hover:opacity-75">Terms</Link> and <Link to="/privacy" className="underline font-bold text-black hover:opacity-75">Privacy Policy</Link>.
                  </label>
                </div>

                <button type="submit" className="button button-submit-investor">
                  Submit information request <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="investor-section section-pad bg-neutral-100/90 border-t border-neutral-200">
        <div className="investor-container">
          <Reveal>
            <div className="section-head-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 text-black text-xs font-bold uppercase tracking-wider mb-3">
                <Scale size={14} /> Legal note
              </div>
              <h2 className="section-title">
                Read this before<br />
                <em>making any decision.</em>
              </h2>
            </div>
          </Reveal>

          <div className="disclaimers-grid">
            <article className="disclaimer-card">
              <div className="disclaimer-header">
                <AlertTriangle size={18} className="text-amber-600 shrink-0" />
                <h4>No offer or solicitation</h4>
              </div>
              <p>
                This page is general company information only. It is not an invitation to subscribe for securities, contribute capital, lend money, buy partnership rights, or enter any financial product.
              </p>
            </article>

            <article className="disclaimer-card">
              <div className="disclaimer-header">
                <ShieldCheck size={18} className="text-black shrink-0" />
                <h4>No promised returns</h4>
              </div>
              <p>
                The company does not promise profit, interest, dividends, valuation growth, exit timing, liquidity, or repayment through this website. Any business or investment decision carries risk.
              </p>
            </article>

            <article className="disclaimer-card">
              <div className="disclaimer-header">
                <FileText size={18} className="text-black shrink-0" />
                <h4>Documents control the terms</h4>
              </div>
              <p>
                If a formal transaction is ever considered, only signed written agreements and legally reviewed documents will control the terms. Website copy should not be relied on as final terms.
              </p>
            </article>

            <article className="disclaimer-card">
              <div className="disclaimer-header">
                <Scale size={18} className="text-black shrink-0" />
                <h4>Use professional advice</h4>
              </div>
              <p>
                Speak with qualified legal, tax, banking, and financial advisors before making any decision. Regulatory requirements can depend on your location, status, and transaction type.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="investor-section section-pad bg-white">
        <div className="investor-container">
          <div className="ir-direct-card">
            <div className="ir-card-left">
              <span className="pill-eyebrow">Company contact</span>
              <h2>Request current information directly</h2>
              <p>
                For verified documents, partnership discussions, or formal business enquiries, contact BrajMart EcomTech LLP through the official details below.
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
                <h4>{companyInfo.legalName}</h4>
                <p>{companyInfo.address}</p>
                <div className="mt-4 pt-3 border-t border-neutral-200 text-xs text-neutral-500">
                  Verify all legal, financial, and registration information before relying on it.
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link className="text-link" to="/contact">
              General contact page <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
