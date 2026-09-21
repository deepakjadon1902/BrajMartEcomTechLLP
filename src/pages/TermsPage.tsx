import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  FileText,
  Building2,
  Mail,
  Phone,
  Printer,
  ChevronRight,
  Scale,
  ShoppingBag,
  Code,
  Tv,
  Coins,
  AlertTriangle,
  HelpCircle
} from 'lucide-react'
import { PageFrame, PageIntro, Reveal } from '@/components/site-header'
import { companyInfo, companyLinks } from '@/lib/company'

interface Section {
  id: string
  title: string
  icon: React.ReactNode
}

const sections: Section[] = [
  { id: 'introduction', title: '1. Identity & Acceptance of Terms', icon: <Building2 size={16} /> },
  { id: 'branches', title: '2. Multi-Branch Operations', icon: <FileText size={16} /> },
  { id: 'ecommerce', title: '3. BrajMart E-Commerce & Orders', icon: <ShoppingBag size={16} /> },
  { id: 'services', title: '4. Liklet Agency & Tech Services', icon: <Code size={16} /> },
  { id: 'media', title: '5. BrajBuzz Tech & Media Channels', icon: <Tv size={16} /> },
  { id: 'investor-portal', title: '6. Investor Portal & EOI Terms', icon: <Coins size={16} /> },
  { id: 'intellectual-property', title: '7. Intellectual Property & Trademarks', icon: <ShieldCheck size={16} /> },
  { id: 'prohibited-conduct', title: '8. User Obligations & Conduct', icon: <AlertTriangle size={16} /> },
  { id: 'liability', title: '9. Disclaimers & Limitation of Liability', icon: <Scale size={16} /> },
  { id: 'indemnity', title: '10. Indemnification', icon: <ShieldCheck size={16} /> },
  { id: 'governing-law', title: '11. Governing Law & Dispute Resolution', icon: <Scale size={16} /> },
  { id: 'grievance', title: '12. Grievance Officer & Statutory Notices', icon: <HelpCircle size={16} /> },
]

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('introduction')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <PageFrame>
      <PageIntro
        label="Legal & Governance"
        title={
          <>
            Terms of<br />
            <em>Service.</em>
          </>
        }
      >
        Official legal terms governing your use of BrajMart EcomTech LLP platforms, e-commerce services, tech consulting, media networks, and investor relations portal.
      </PageIntro>

      <section className="legal-doc-section section-pad">
        <div className="legal-container">
          {/* Top Document Metadata Bar */}
          <div className="legal-meta-bar">
            <div className="legal-meta-left">
              <span className="legal-version-badge">Version 2.4</span>
              <span className="legal-meta-item"><strong>Effective Date:</strong> September 21, 2026</span>
              <span className="legal-meta-item"><strong>Entity:</strong> BrajMart EcomTech LLP</span>
              <span className="legal-meta-item"><strong>Jurisdiction:</strong> Mathura, Uttar Pradesh, India</span>
            </div>
            <button
              type="button"
              onClick={handlePrint}
              className="legal-print-btn"
              aria-label="Print terms of service"
            >
              <Printer size={15} /> Print / Save PDF
            </button>
          </div>

          <div className="legal-layout">
            {/* Sidebar Table of Contents */}
            <aside className="legal-toc-aside">
              <div className="legal-toc-card">
                <p className="legal-toc-title">Table of Contents</p>
                <nav className="legal-toc-nav" aria-label="Terms of service contents">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => scrollTo(section.id)}
                      className={`legal-toc-link ${activeSection === section.id ? 'is-active' : ''}`}
                    >
                      <span className="toc-icon">{section.icon}</span>
                      <span className="toc-text">{section.title}</span>
                    </button>
                  ))}
                </nav>

                <div className="legal-toc-contact">
                  <p className="toc-contact-label">Need Clarification?</p>
                  <a href={companyLinks.email} className="toc-contact-link">
                    <Mail size={14} /> {companyInfo.email}
                  </a>
                  <a href={companyLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="toc-contact-link">
                    <Phone size={14} /> WhatsApp Support
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Document Body */}
            <main className="legal-content-main">
              {/* Important Legal Alert Callout */}
              <div className="legal-callout-box">
                <div className="callout-icon-wrap">
                  <Scale size={24} className="text-black" />
                </div>
                <div>
                  <h4>Binding Agreement Notice</h4>
                  <p>
                    Please read these Terms of Service carefully before browsing, ordering goods, contracting services, or submitting investor expressions of interest.
                    By accessing or using any website, sub-brand, or service operated by <strong>BrajMart EcomTech LLP</strong>, you agree to be legally bound by these terms.
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <article id="introduction" className="legal-article">
                <h2>1. Identity & Acceptance of Terms</h2>
                <p>
                  These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you
                  (&ldquo;User&rdquo;, &ldquo;Customer&rdquo;, &ldquo;Client&rdquo;, or &ldquo;Investor&rdquo;) and
                  <strong> BrajMart EcomTech LLP</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;),
                  a Limited Liability Partnership incorporated under the Limited Liability Partnership Act, 2008 of India, having its principal place of business at:
                </p>
                <div className="legal-address-card">
                  <strong>BrajMart EcomTech LLP</strong><br />
                  Keshav Kunj, Parikrama Marg, Vrindavan,<br />
                  Mathura, Uttar Pradesh 281121, India.<br />
                  <span>Email: {companyInfo.email} &middot; Phone: {companyInfo.phone}</span>
                </div>
                <p>
                  By accessing, browsing, interacting with, or transacting on our primary website (<code>brajmart.com</code>),
                  any connected domains, mobile web applications, or digital properties operated by our branches,
                  you acknowledge that you have read, understood, and agreed to be bound by these Terms and our companion
                  <Link to="/privacy" className="inline-link"> Privacy Policy</Link>.
                </p>
                <p>
                  If you do not agree with any part of these Terms, you must immediately discontinue your use of our platforms and services.
                </p>
              </article>

              {/* Section 2 */}
              <article id="branches" className="legal-article">
                <h2>2. Multi-Branch Operations & Ecosystem Scope</h2>
                <p>
                  BrajMart EcomTech LLP operates as a unified multi-branch enterprise. These Terms govern interactions across all active branches:
                </p>
                <div className="legal-subgrid">
                  <div className="legal-branch-pill">
                    <div className="branch-tag">Branch 01 &middot; Commerce</div>
                    <h4>BrajMart</h4>
                    <p>Devotional e-commerce, offering temple prasadam, sacred tulsi items, brass murtis, puja essentials, spiritual literature, and cultural gifts sourced directly from sacred Braj/Vrindavan.</p>
                  </div>

                  <div className="legal-branch-pill">
                    <div className="branch-tag">Branch 02 &middot; Digital & Engineering</div>
                    <h4>Liklet</h4>
                    <p>Full-stack web engineering, custom software solutions, digital marketing, search engine optimization (SEO), performance media, and brand strategy for commercial clients.</p>
                  </div>

                  <div className="legal-branch-pill">
                    <div className="branch-tag">Branch 03 &middot; Media & Content</div>
                    <h4>BrajBuzz Tech & Liklet Tech</h4>
                    <p>Consumer technology media, honest product reviews, video journalism, smartphone unboxings, buying guidance, and creator-led tech storytelling on YouTube and social platforms.</p>
                  </div>

                  <div className="legal-branch-pill">
                    <div className="branch-tag">Branch 04 &middot; Corporate Capital</div>
                    <h4>Investor Relations Desk</h4>
                    <p>Private equity allocation, Compulsorily Convertible Debentures (CCD), corporate governance, and strategic growth partnership inquiries.</p>
                  </div>
                </div>
              </article>

              {/* Section 3 */}
              <article id="ecommerce" className="legal-article">
                <h2>3. BrajMart E-Commerce Terms & Order Fulfillment</h2>
                <p>
                  The following terms apply specifically to retail orders placed through the BrajMart e-commerce storefront in compliance with the
                  <strong> Consumer Protection (E-Commerce) Rules, 2020</strong> of India:
                </p>
                <div className="legal-bullet-group">
                  <h4>A. Authenticity & Product Representations</h4>
                  <p>
                    All devotional products, including mathura peda, prasadam, tulsi malas, dress sets for deities, and brass murtis are curated from authentic local Vrindavan artisans and temple-adjacent suppliers.
                    Photographs and digital depictions are representative; handmade sacred crafts may have slight natural variations in grain, color, and finish.
                  </p>

                  <h4>B. Perishable Sacred Goods & Food Items</h4>
                  <p>
                    Temple prasadam and sacred sweets contain natural, preservative-free ingredients. Customers are responsible for providing an accurate, reachable delivery address.
                    Once dispatched via expedited cold-logistics or courier, perishable food orders cannot be cancelled or returned due to food safety and ritual hygiene laws.
                  </p>

                  <h4>C. Pricing, Taxes & Invoicing</h4>
                  <p>
                    All retail prices are stated in Indian Rupees (INR &#8377;) inclusive of applicable Goods and Services Tax (GST), unless expressly stated otherwise for international export destinations.
                    We reserve the right to correct pricing errors or cancel orders resulting from inadvertent typographical or system glitches.
                  </p>

                  <h4>D. Shipping, Delivery & Tracking</h4>
                  <p>
                    Standard domestic delivery across India takes approximately 3 to 7 business days depending on transit pin codes.
                    Tracking IDs are issued automatically upon dispatch via SMS/WhatsApp/Email.
                    BrajMart EcomTech LLP is not liable for carrier delays caused by extreme weather, temple festival crowd congestions in Mathura/Vrindavan, or regulatory blockades.
                  </p>

                  <h4>E. Damaged Goods & Replacement Policy</h4>
                  <p>
                    If a non-perishable spiritual item arrives damaged or broken during transit, you must notify our customer care team via email or WhatsApp within <strong>48 hours</strong> of delivery with clear photographs/unboxing video.
                    Upon verification, we will issue a replacement or store credit.
                  </p>
                </div>
              </article>

              {/* Section 4 */}
              <article id="services" className="legal-article">
                <h2>4. Liklet Agency & Technical Services</h2>
                <p>
                  Professional digital engineering, web development, SEO, and marketing services rendered under the <strong>Liklet</strong> brand are governed by the following framework:
                </p>
                <ul className="legal-list">
                  <li>
                    <strong>Statements of Work (SOW):</strong> Each engagement is formalized via an accepted Statement of Work or written project scope defining deliverables, milestones, tech stack, and payment schedules.
                  </li>
                  <li>
                    <strong>Client Responsibilities:</strong> The client is solely responsible for providing timely access to necessary brand assets, API credentials, domain registries, and content copy. Project delays caused by client response latency extend delivery dates accordingly.
                  </li>
                  <li>
                    <strong>Payment & Milestones:</strong> Invoices are payable in accordance with the agreed milestone milestones. Late payments exceeding 15 business days may result in temporary suspension of active engineering deployments or ad campaign management.
                  </li>
                  <li>
                    <strong>Intellectual Property Transfer:</strong> Upon 100% settlement of all invoiced fees, full intellectual property rights to custom software, website code, and creative assets transfer to the client, excluding BrajMart&apos;s pre-existing frameworks, libraries, and internal tooling.
                  </li>
                </ul>
              </article>

              {/* Section 5 */}
              <article id="media" className="legal-article">
                <h2>5. BrajBuzz Tech & Media Channels</h2>
                <p>
                  Content published under <strong>BrajBuzz Tech</strong> and <strong>Liklet Tech</strong> across YouTube, social channels, and this website is for informational and educational purposes:
                </p>
                <ul className="legal-list">
                  <li>
                    <strong>Editorial Independence:</strong> Reviews of smartphones, gadgets, and software tools reflect our genuine, independent testing. Brand sponsorships and product loans do not influence editorial scores.
                  </li>
                  <li>
                    <strong>Affiliate Disclosures:</strong> In compliance with consumer protection and advertising guidelines (ASCI), certain video links or product recommendations may contain affiliate tracking codes that yield a nominal referral commission to our studio at no extra cost to you.
                  </li>
                  <li>
                    <strong>Copyright:</strong> All video production, graphics, audio compositions, and editorial scripts are copyrighted works of BrajMart EcomTech LLP. Re-uploading or reproducing content without express written license is prohibited.
                  </li>
                </ul>
              </article>

              {/* Section 6 */}
              <article id="investor-portal" className="legal-article">
                <h2>6. Investor Portal & Capital Expression of Interest (EOI) Terms</h2>
                <div className="legal-callout-warning">
                  <AlertTriangle size={20} className="text-amber-600 shrink-0" />
                  <div>
                    <strong>Statutory Regulatory Notice & Disclaimer</strong>
                    <p>
                      The Investor Relations portal (<code>/investors</code>) does not constitute a public offering, prospectus, or solicitation of securities under Section 42 of the Indian Companies Act, 2013,
                      or Securities and Exchange Board of India (SEBI) regulations.
                    </p>
                  </div>
                </div>

                <p className="mt-4">
                  Prospective investors submitting inquiries or reviewing round details agree to the following terms:
                </p>
                <ul className="legal-list">
                  <li>
                    <strong>Non-Binding Expression of Interest:</strong> Submission of an investment ticket through our portal represents an exploratory, non-binding expression of interest. It does not create a binding contract or guarantee allocation of equity or debentures.
                  </li>
                  <li>
                    <strong>Definitive Legal Agreements:</strong> Any capital participation is strictly subject to the subsequent execution of formal, binding documentation, including a Share Subscription Agreement (SSA), Shareholders Agreement (SHA), Compulsorily Convertible Debenture (CCD) Agreement, and standard KYC verification.
                  </li>
                  <li>
                    <strong>Accreditation & Sophisticated Investor Representation:</strong> You represent that you are an accredited investor, High Net Worth Individual (HNWI), registered venture syndicate, or institutional fund with the financial capability to evaluate the risks of unlisted, early-stage private equity.
                  </li>
                  <li>
                    <strong>Strict Confidentiality & Non-Disclosure (NDA):</strong> All materials accessible via our Data Room—including pitch decks, unit economics models, revenue projections, and cap table allocations—are proprietary, confidential trade secrets. You agree not to distribute, leak, or disclose these materials to third parties.
                  </li>
                  <li>
                    <strong>NRI & FEMA Compliance:</strong> Non-Resident Indians (NRIs) and international entities must ensure their participation complies with the Foreign Exchange Management Act (FEMA), Reserve Bank of India (RBI) regulations, and inward remittance rules under the Foreign Direct Investment (FDI) policy.
                  </li>
                </ul>
              </article>

              {/* Section 7 */}
              <article id="intellectual-property" className="legal-article">
                <h2>7. Intellectual Property & Trademarks</h2>
                <p>
                  All content on this website and our affiliated platforms—including but not limited to brand marks, logos, trade dress, slogans, typography,
                  editorial articles, software source code, visual UI designs, audio-visual footage, and photographs—are the proprietary intellectual property of
                  <strong> BrajMart EcomTech LLP</strong> or our licensed content partners, protected under Indian and international copyright and trademark laws.
                </p>
                <p>
                  The trade names &ldquo;BrajMart&rdquo;, &ldquo;Liklet&rdquo;, &ldquo;BrajBuzz Tech&rdquo;, &ldquo;Liklet Tech&rdquo;, and our wordmarks may not be used in connection
                  with any commercial product or service without our prior written authorization.
                </p>
              </article>

              {/* Section 8 */}
              <article id="prohibited-conduct" className="legal-article">
                <h2>8. User Obligations & Prohibited Conduct</h2>
                <p>When using our website, interactive tools, or communication channels, you agree not to:</p>
                <ul className="legal-list">
                  <li>Use our platforms for any unlawful purpose or in violation of any local, state, national, or international statute.</li>
                  <li>Engage in automated data scraping, crawling, harvesting, or reverse-engineering of our digital systems without written permission.</li>
                  <li>Attempt to bypass authentication, probe system vulnerabilities, or disrupt servers through distributed denial of service (DDoS) attacks.</li>
                  <li>Transmit fraudulent, defamatory, obscene, religiously offensive, or misleading representations in forms, reviews, or correspondence.</li>
                  <li>Impersonate any person, accredited investor, or corporate entity.</li>
                </ul>
              </article>

              {/* Section 9 */}
              <article id="liability" className="legal-article">
                <h2>9. Disclaimers & Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE INDIAN LAW, ALL WEBSITES, PRODUCTS, AND SERVICES ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED.
                </p>
                <p>
                  IN NO EVENT SHALL BRAJMART ECOMTECH LLP, ITS PARTNERS, DIRECTORS, EMPLOYEES, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR BUSINESS OPPORTUNITIES, RESULTING FROM:
                </p>
                <ul className="legal-list">
                  <li>Your access to or inability to access our services or websites.</li>
                  <li>Any unauthorized access to our secure servers or alteration of your transmissions.</li>
                  <li>Third-party delivery carrier delays or acts of god beyond our reasonable control.</li>
                  <li>Decisions made based on informational tech reviews or market statistics published on our media outlets.</li>
                </ul>
                <p>
                  OUR TOTAL CUMULATIVE LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO OUR SERVICES SHALL NOT EXCEED THE GREATER OF &#8377;5,000 (INR FIVE THOUSAND) OR THE AMOUNT PAID BY YOU TO BRAJMART ECOMTECH LLP FOR THE SPECIFIC TRANSACTION GIVING RISE TO THE CLAIM.
                </p>
              </article>

              {/* Section 10 */}
              <article id="indemnity" className="legal-article">
                <h2>10. Indemnification</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless BrajMart EcomTech LLP, its designated partners, officers, employees, agents, and successors from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal and accounting fees) arising out of or in any way connected with:
                </p>
                <ul className="legal-list">
                  <li>Your violation of these Terms of Service.</li>
                  <li>Your infringement or misappropriation of any third-party intellectual property or privacy right.</li>
                  <li>Misrepresentations made during retail checkout, service contracting, or investor accreditation.</li>
                </ul>
              </article>

              {/* Section 11 */}
              <article id="governing-law" className="legal-article">
                <h2>11. Governing Law & Dispute Resolution</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the substantive laws of the <strong>Republic of India</strong>,
                  without giving effect to any conflict of law principles.
                </p>
                <div className="legal-callout-box">
                  <Scale size={20} className="text-black shrink-0" />
                  <div>
                    <strong>Exclusive Jurisdiction</strong>
                    <p>
                      Any legal dispute, suit, action, or proceeding arising out of or related to these Terms, our platforms, products, or investments
                      shall be instituted exclusively in the competent civil courts of <strong>Mathura, Uttar Pradesh, India</strong>,
                      or the High Court of Judicature at <strong>Allahabad</strong>.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 12 */}
              <article id="grievance" className="legal-article">
                <h2>12. Grievance Redressal & Statutory Contact Details</h2>
                <p>
                  In accordance with the <strong>Information Technology Act, 2000</strong>, the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021,
                  and the Consumer Protection (E-Commerce) Rules, 2020, the designated Grievance Officer for BrajMart EcomTech LLP is:
                </p>
                <div className="grievance-card">
                  <div className="grievance-head">
                    <Building2 size={20} className="text-black" />
                    <div>
                      <strong>Grievance Redressal Officer</strong>
                      <p>BrajMart EcomTech LLP Legal & Compliance Division</p>
                    </div>
                  </div>
                  <div className="grievance-body">
                    <p><strong>Physical Address:</strong> Keshav Kunj, Parikrama Marg, Vrindavan, Mathura, Uttar Pradesh 281121, India</p>
                    <p><strong>Direct Legal Email:</strong> <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></p>
                    <p><strong>Telephone / WhatsApp Desk:</strong> <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>{companyInfo.phone}</a></p>
                    <p><strong>Response Time:</strong> Written acknowledgment within 48 hours; complete resolution within 30 business days.</p>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
