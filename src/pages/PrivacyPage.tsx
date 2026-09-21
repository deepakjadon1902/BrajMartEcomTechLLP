import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  Building2,
  Mail,
  Phone,
  Printer,
  Database,
  Globe2,
  Trash2,
  HelpCircle,
  Coins,
  Server
} from 'lucide-react'
import { PageFrame, PageIntro } from '@/components/site-header'
import { companyInfo, companyLinks } from '@/lib/company'

interface PrivacySection {
  id: string
  title: string
  icon: React.ReactNode
}

const privacySections: PrivacySection[] = [
  { id: 'commitment', title: '1. Commitment & Legal Framework', icon: <ShieldCheck size={16} /> },
  { id: 'data-collected', title: '2. Personal Data We Collect', icon: <Database size={16} /> },
  { id: 'investor-data', title: '3. Investor Data & Confidentiality', icon: <Coins size={16} /> },
  { id: 'processing-purpose', title: '4. Legal Basis & Purpose for Processing', icon: <FileCheck size={16} /> },
  { id: 'cookies-tracking', title: '5. Cookies & Telemetry Analytics', icon: <Eye size={16} /> },
  { id: 'sharing-processors', title: '6. Third-Party Service Providers', icon: <Server size={16} /> },
  { id: 'cross-border', title: '7. International & Cross-Border Transfers', icon: <Globe2 size={16} /> },
  { id: 'security-safeguards', title: '8. Technical & Organizational Safeguards', icon: <Lock size={16} /> },
  { id: 'retention-policy', title: '9. Data Retention & Archival', icon: <Trash2 size={16} /> },
  { id: 'user-rights', title: '10. Your Statutory Rights (DPDPA 2023)', icon: <FileCheck size={16} /> },
  { id: 'contact-dpo', title: '11. Data Protection Officer & Redressal', icon: <HelpCircle size={16} /> },
]

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('commitment')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180
      for (const section of privacySections) {
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
        label="Data Privacy & Compliance"
        title={
          <>
            Privacy Policy &<br />
            <em>Data Protection.</em>
          </>
        }
      >
        How BrajMart EcomTech LLP safeguards personal information across our e-commerce platform, client agency contracts, media channels, and private investor relations portal.
      </PageIntro>

      <section className="legal-doc-section section-pad">
        <div className="legal-container">
          {/* Top Document Metadata Bar */}
          <div className="legal-meta-bar">
            <div className="legal-meta-left">
              <span className="legal-version-badge">Version 3.1</span>
              <span className="legal-meta-item"><strong>Effective Date:</strong> September 21, 2026</span>
              <span className="legal-meta-item"><strong>Compliance:</strong> DPDPA 2023 (India) &middot; IT Act 2000</span>
              <span className="legal-meta-item"><strong>Fiduciary:</strong> BrajMart EcomTech LLP</span>
            </div>
            <button
              type="button"
              onClick={handlePrint}
              className="legal-print-btn"
              aria-label="Print privacy policy"
            >
              <Printer size={15} /> Print / Save PDF
            </button>
          </div>

          <div className="legal-layout">
            {/* Sidebar Table of Contents */}
            <aside className="legal-toc-aside">
              <div className="legal-toc-card">
                <p className="legal-toc-title">Privacy Policy Navigation</p>
                <nav className="legal-toc-nav" aria-label="Privacy policy contents">
                  {privacySections.map((section) => (
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
                  <p className="toc-contact-label">Data Protection Officer</p>
                  <a href={companyLinks.email} className="toc-contact-link">
                    <Mail size={14} /> {companyInfo.email}
                  </a>
                  <a href={companyLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="toc-contact-link">
                    <Phone size={14} /> WhatsApp Desk
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Document Body */}
            <main className="legal-content-main">
              {/* Important Privacy Guarantee Callout */}
              <div className="legal-callout-box">
                <div className="callout-icon-wrap">
                  <ShieldCheck size={24} className="text-black" />
                </div>
                <div>
                  <h4>Zero-Data Monetization Pledge</h4>
                  <p>
                    <strong>BrajMart EcomTech LLP</strong> does not sell, rent, lease, or monetize your personal or financial data to third-party data brokers.
                    We collect and process only the minimal necessary data required to deliver orders, build bespoke digital products, publish tech media, and facilitate confidential investor relations.
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <article id="commitment" className="legal-article">
                <h2>1. Commitment & Statutory Framework</h2>
                <p>
                  This Privacy Policy delineates the protocols, procedures, and principles followed by <strong>BrajMart EcomTech LLP</strong>
                  (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) in our role as a <strong>Data Fiduciary</strong>
                  under the <strong>Digital Personal Data Protection Act, 2023 (DPDPA 2023)</strong> of India and the
                  Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                </p>
                <p>
                  This policy applies to all visitors, registered customers, corporate clients, and prospective investors interacting with:
                </p>
                <ul className="legal-list">
                  <li>Our primary corporate website (<code>brajmart.com</code>) and branch portals.</li>
                  <li>BrajMart devotional e-commerce ordering, prasadam fulfillment, and dispatch infrastructure.</li>
                  <li>Liklet digital marketing, software development, and client collaboration portals.</li>
                  <li>BrajBuzz Tech and Liklet Tech media audiences and subscriber interactions.</li>
                  <li>The Investor Relations & Capital Allocation Portal (<code>/investors</code>).</li>
                </ul>
              </article>

              {/* Section 2 */}
              <article id="data-collected" className="legal-article">
                <h2>2. Categories of Personal Data We Collect</h2>
                <p>
                  We categorize the personal data we collect into distinct operational buckets based on the nature of your interaction:
                </p>

                <div className="legal-subgrid">
                  <div className="legal-branch-pill">
                    <div className="branch-tag">E-Commerce & Orders</div>
                    <h4>Customer & Shipping Data</h4>
                    <p>Full legal name, delivery address, pin code, state, contact phone/WhatsApp, email, and order history for devotional goods fulfillment.</p>
                  </div>

                  <div className="legal-branch-pill">
                    <div className="branch-tag">Billing & Transactions</div>
                    <h4>Payment Information</h4>
                    <p>Transaction reference IDs, payment method tokens (processed securely via RBI-licensed payment gateways like Razorpay/Cashfree). We never store raw credit card CVVs or net banking passwords.</p>
                  </div>

                  <div className="legal-branch-pill">
                    <div className="branch-tag">Agency & Client Work</div>
                    <h4>Business & Contracting Data</h4>
                    <p>Corporate designation, company legal name, GST number, billing address, API credentials provided for software builds, and project communication records.</p>
                  </div>

                  <div className="legal-branch-pill">
                    <div className="branch-tag">Investor Portal</div>
                    <h4>Investor Profile & EOI Records</h4>
                    <p>Accredited investor status, investment firm/entity name, proposed ticket size, strategic value-add sectors, phone/WhatsApp, and preliminary KYC declarations.</p>
                  </div>
                </div>

                <p className="mt-4">
                  <strong>Automated Technical Data:</strong> When you browse our websites, our servers automatically record standard internet telemetry:
                  IP addresses, browser type, operating system, referring URLs, pages visited, device resolution, and time spent on specific features.
                </p>
              </article>

              {/* Section 3 */}
              <article id="investor-data" className="legal-article">
                <h2>3. Investor Data Protection & Institutional Confidentiality</h2>
                <p>
                  Given the sensitivity of corporate venture capital and private equity discussions, information submitted through the
                  <strong> Investor Relations Portal</strong> (<code>/investors</code>) is subject to heightened security standards:
                </p>
                <div className="legal-bullet-group">
                  <h4>A. Restricted Access & Air-Gapped Storage</h4>
                  <p>
                    Investor Expressions of Interest (EOIs), entity documentation, proposed ticket sizes, and investment notes are accessible
                    strictly to the designated Managing Partners of BrajMart EcomTech LLP. General staff, contractors, and non-executive team members have zero access to investor records.
                  </p>

                  <h4>B. Non-Disclosure & Anti-Circumvention Protocols</h4>
                  <p>
                    Investor contact details, syndicate structures, and financial allocations are protected under strict internal non-disclosure protocols.
                    We will never publish your name as an investor or syndicate member without your explicit, written consent.
                  </p>

                  <h4>C. Anti-Money Laundering (AML) & KYC Regulatory Obligations</h4>
                  <p>
                    Prior to formal capital subscription, prospective investors are required by Indian corporate and banking statutes to undergo standard Know Your Customer (KYC) verification (PAN, Aadhaar/Passport, Bank statement proof of funds).
                    KYC documentation is maintained exclusively for statutory compliance with the Ministry of Corporate Affairs (MCA) and the Reserve Bank of India (RBI).
                  </p>
                </div>
              </article>

              {/* Section 4 */}
              <article id="processing-purpose" className="legal-article">
                <h2>4. Legal Basis & Business Purposes for Data Processing</h2>
                <p>
                  Under the <strong>DPDPA 2023</strong>, we process your personal data solely under recognized lawful grounds, including your explicit consent,
                  performance of a contract, and compliance with statutory legal obligations:
                </p>
                <ul className="legal-list">
                  <li><strong>Order Fulfillment & Delivery:</strong> Validating pin codes, packaging sacred goods, coordinating cold-chain transport, and providing dispatch alerts via SMS and WhatsApp.</li>
                  <li><strong>Service Execution:</strong> Executing software engineering sprints, configuring cloud servers, managing SEO campaigns, and fulfilling Statements of Work.</li>
                  <li><strong>Investor Communications:</strong> Reviewing expressions of interest, preparing customized Non-Disclosure Agreements, arranging founder briefings, and distributing quarterly MIS statements.</li>
                  <li><strong>Taxation & Statutory Accounting:</strong> Generating GST-compliant tax invoices and maintaining corporate audit books under Indian accounting standards.</li>
                  <li><strong>Platform Optimization & Security:</strong> Detecting bot attacks, preventing fraudulent transactions, optimizing website load times, and verifying session integrity.</li>
                </ul>
              </article>

              {/* Section 5 */}
              <article id="cookies-tracking" className="legal-article">
                <h2>5. Cookies, Web Beacons & Telemetry Analytics</h2>
                <p>
                  Our websites use first-party and verified third-party cookies to ensure seamless navigation, remember shopping cart items, and analyze aggregate visitor trends:
                </p>
                <ul className="legal-list">
                  <li><strong>Strictly Necessary Cookies:</strong> Essential for session authentication, CSRF security tokens, and maintaining active e-commerce checkout baskets.</li>
                  <li><strong>Performance & Analytics Cookies:</strong> Anonymous telemetry tools (e.g. Vercel Analytics, Google Analytics 4) that measure page load times, bounce rates, and user flow patterns without identifying individual identities.</li>
                  <li><strong>Preference Cookies:</strong> Storing selected preferences such as video perspective mode, currency display, and dark/light navigation state.</li>
                </ul>
                <p>
                  You can control, block, or delete cookies at any time via your browser settings. Please note that disabling essential cookies may impact checkout functionality on the BrajMart store.
                </p>
              </article>

              {/* Section 6 */}
              <article id="sharing-processors" className="legal-article">
                <h2>6. Third-Party Service Providers & Data Processors</h2>
                <p>
                  We partner with audited, industry-standard third-party vendors (&ldquo;Data Processors&rdquo;) who process data solely on our instructions under binding confidentiality contracts:
                </p>
                <div className="legal-subgrid">
                  <div className="legal-branch-pill">
                    <div className="branch-tag">Fintech & Payments</div>
                    <h4>Payment Gateways</h4>
                    <p>PCI-DSS compliant payment aggregators (e.g. Razorpay, Cashfree, UPI, Net Banking) that securely process transactions without exposing banking credentials.</p>
                  </div>

                  <div className="legal-branch-pill">
                    <div className="branch-tag">Supply Chain</div>
                    <h4>Courier & Logistics Partners</h4>
                    <p>Verified logistics providers (e.g. Shiprocket, Blue Dart, Delhivery) receiving only the necessary customer shipping name, destination address, and phone number for delivery.</p>
                  </div>

                  <div className="legal-branch-pill">
                    <div className="branch-tag">Cloud Infrastructure</div>
                    <h4>Hosting & Database Providers</h4>
                    <p>Enterprise cloud hosting providers with end-to-end encryption at rest and in transit, daily automated backups, and 99.9% uptime guarantees.</p>
                  </div>

                  <div className="legal-branch-pill">
                    <div className="branch-tag">Regulatory Bodies</div>
                    <h4>Statutory & Legal Authorities</h4>
                    <p>Government agencies, tax authorities, or law enforcement bodies only when strictly mandated by a valid judicial court order or statutory Indian regulation.</p>
                  </div>
                </div>
              </article>

              {/* Section 7 */}
              <article id="cross-border" className="legal-article">
                <h2>7. International & Cross-Border Data Transfers</h2>
                <p>
                  While BrajMart EcomTech LLP is headquartered in Vrindavan, India, our devotional products and investor portal engage international devotees and overseas NRI partners (in the United States, United Kingdom, United Arab Emirates, Canada, and Singapore).
                </p>
                <p>
                  When personal data is transferred across international borders (e.g. for cross-border customs declarations or foreign currency remittance processing under FEMA guidelines),
                  we ensure the receiving jurisdiction provides comparable data protection standards in alignment with the rules notified under the <strong>DPDPA 2023</strong>.
                </p>
              </article>

              {/* Section 8 */}
              <article id="security-safeguards" className="legal-article">
                <h2>8. Technical & Organizational Security Safeguards</h2>
                <p>
                  We implement robust defense-in-depth security measures to protect your personal data against unauthorized access, destruction, alteration, or disclosure:
                </p>
                <ul className="legal-list">
                  <li><strong>Encryption in Transit:</strong> 256-bit TLS/SSL encryption for all data flowing between your browser and our servers.</li>
                  <li><strong>Encryption at Rest:</strong> AES-256 encrypted database volumes and secure password hashing.</li>
                  <li><strong>Role-Based Access Control (RBAC):</strong> Strict privilege separation ensuring staff access only the minimal records required for their job function.</li>
                  <li><strong>Vulnerability Monitoring:</strong> Regular penetration testing, dependency security audits, and firewall protection against DDoS attempts.</li>
                </ul>
              </article>

              {/* Section 9 */}
              <article id="retention-policy" className="legal-article">
                <h2>9. Data Retention & Archival Policies</h2>
                <p>
                  We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
                </p>
                <ul className="legal-list">
                  <li><strong>E-Commerce Order Records:</strong> Maintained for 7 years to comply with Indian GST and corporate tax audit requirements.</li>
                  <li><strong>Client Contract Deliverables:</strong> Maintained for the duration of the active engagement plus 3 years for warranty and IP verification.</li>
                  <li><strong>Investor Expression of Interest (EOI) Data:</strong> Retained for 2 years following initial inquiry, or permanently archived if formal equity allocation is consummated.</li>
                  <li><strong>Technical Server Logs:</strong> Automatically purged or anonymized on a 90-day rolling cycle.</li>
                </ul>
              </article>

              {/* Section 10 */}
              <article id="user-rights" className="legal-article">
                <h2>10. Your Statutory Rights (DPDPA 2023)</h2>
                <p>
                  As a <strong>Data Principal</strong> under the Indian Digital Personal Data Protection Act, 2023, you are entitled to exercise the following legal rights:
                </p>
                <div className="legal-bullet-group">
                  <h4>A. Right to Access & Summary</h4>
                  <p>You have the right to request a concise summary of the personal data we hold about you and the processing activities undertaken.</p>

                  <h4>B. Right to Correction & Updating</h4>
                  <p>You may request rectification of incomplete, inaccurate, or outdated personal information in our records.</p>

                  <h4>C. Right to Erasure (&ldquo;Right to be Forgotten&rdquo;)</h4>
                  <p>You may request the deletion of your personal data when it is no longer necessary for the purpose for which it was collected, subject to statutory retention obligations (e.g. tax laws).</p>

                  <h4>D. Right to Withdraw Consent</h4>
                  <p>Where processing is based on your consent (e.g. marketing newsletters or investor updates), you may withdraw your consent at any time without retroactive impact.</p>

                  <h4>E. Right to Nominate</h4>
                  <p>You have the right to nominate another individual who may exercise your privacy rights in the event of death or incapacity.</p>
                </div>
                <p className="mt-4">
                  To exercise any of these statutory rights, please submit a written request to our Data Protection Officer at <strong>{companyInfo.email}</strong>. We will process your request within <strong>30 calendar days</strong>.
                </p>
              </article>

              {/* Section 11 */}
              <article id="contact-dpo" className="legal-article">
                <h2>11. Data Protection Officer & Redressal Mechanism</h2>
                <p>
                  If you have any questions, concerns, or grievances regarding our privacy practices or data processing activities, please contact our designated Data Protection Officer:
                </p>
                <div className="grievance-card">
                  <div className="grievance-head">
                    <Building2 size={20} className="text-black" />
                    <div>
                      <strong>Data Protection Officer (DPO) & Privacy Desk</strong>
                      <p>BrajMart EcomTech LLP Governance Department</p>
                    </div>
                  </div>
                  <div className="grievance-body">
                    <p><strong>Physical Address:</strong> Keshav Kunj, Parikrama Marg, Vrindavan, Mathura, Uttar Pradesh 281121, India</p>
                    <p><strong>Official Email:</strong> <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></p>
                    <p><strong>Phone / WhatsApp Desk:</strong> <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>{companyInfo.phone}</a></p>
                    <p><strong>Statutory Escalation:</strong> If your concern is not resolved within 30 days, you have the right under Indian law to lodge a complaint with the <strong>Data Protection Board of India</strong>.</p>
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
