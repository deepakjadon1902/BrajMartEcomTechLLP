import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'
import SocialFlipButton from '@/components/ui/social-flip-button'
import { CurvedNavbar, type iNavItem } from '@/components/ui/curved-menu'
import { companyInfo, companyLinks } from '@/lib/company'

const navLinks = [
  { label: 'What we do', href: '/what-we-do' },
  { label: 'Our work', href: '/work' },
  { label: 'About us', href: '/about' },
  { label: 'Brands', href: '/collaborators' },
  { label: 'Investors', href: '/investors' },
]

const brajMartMobileNavItems: iNavItem[] = [
  {
    heading: "What We Do",
    href: "/what-we-do",
    subheading: "Commerce, marketing & technology services",
  },
  {
    heading: "Our Work",
    href: "/work",
    subheading: "Case studies & brand portfolio",
  },
  {
    heading: "About Us",
    href: "/about",
    subheading: "Company story, vision & Vrindavan roots",
  },
  {
    heading: "Brands",
    href: "/collaborators",
    subheading: "BrajMart, Liklet & BrajBuzz Tech",
  },
  {
    heading: "Investors",
    href: "/investors",
    subheading: "Growth round, traction & investment portal",
  },
  {
    heading: "Let's Talk",
    href: "/contact",
    subheading: "Start a conversation with our team",
  },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  // Only dark if on homepage at top; subpages are always light
  const [isDarkBg, setIsDarkBg] = useState(location.pathname === '/' && typeof window !== 'undefined' && window.scrollY < 420)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const checkBackground = () => {
      setScrolled(window.scrollY > 20)

      if (location.pathname !== '/') {
        setIsDarkBg(false)
        return
      }

      // On homepage, hero section fills 100vh window
      const heroThreshold = Math.max(300, window.innerHeight - 80)
      setIsDarkBg(window.scrollY < heroThreshold)
    }

    checkBackground()
    window.addEventListener('scroll', checkBackground, { passive: true })
    window.addEventListener('resize', checkBackground, { passive: true })
    return () => {
      window.removeEventListener('scroll', checkBackground)
      window.removeEventListener('resize', checkBackground)
    }
  }, [location.pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`site-header ${isDarkBg ? 'is-dark-bg' : 'is-light-bg'} ${scrolled ? 'is-scrolled' : ''}`}>
        <Link className="wordmark" to="/" aria-label="BrajMart home" onClick={() => setOpen(false)}>
          <span className="mark brand-logo-mark">
            <img src={companyInfo.logo} alt="" />
          </span>
          <span className="brand-name">{companyInfo.legalName}</span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link to={link.href} onClick={() => setOpen(false)} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" to="/contact">
          Let&apos;s talk <ArrowUpRight size={15} />
        </Link>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <div className="relative w-5 h-4 flex flex-col justify-between items-center">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </header>

      {/* Mobile Curved Navigation Sidebar with BrajMart Application Content */}
      <AnimatePresence mode="wait">
        {open && (
          <CurvedNavbar
            setIsActive={setOpen}
            navItems={brajMartMobileNavItems}
            footer={
              <div className="flex justify-between items-center text-black/80 px-8 md:px-16 py-6 border-t border-black/10">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-60 transition-opacity">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-60 transition-opacity">
                  <FaInstagram size={20} />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="hover:opacity-60 transition-opacity">
                  <FaXTwitter size={20} />
                </a>
                <a href={companyLinks.email} aria-label="Email" className="hover:opacity-60 transition-opacity">
                  <FaEnvelope size={20} />
                </a>
              </div>
            }
          />
        )}
      </AnimatePresence>
    </>
  )
}

export function Footer() {
  const socials = [
    { letter: 'L', label: 'LinkedIn', href: 'https://linkedin.com', icon: <FaLinkedinIn aria-hidden="true" /> },
    { letter: 'I', label: 'Instagram', href: 'https://instagram.com', icon: <FaInstagram aria-hidden="true" /> },
    { letter: 'X', label: 'X / Twitter', href: 'https://x.com', icon: <FaXTwitter aria-hidden="true" /> },
    { letter: 'M', label: 'Email us', href: companyLinks.email, icon: <FaEnvelope aria-hidden="true" /> },
  ]

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="wordmark" to="/">
            <span className="mark brand-logo-mark">
              <img src={companyInfo.logo} alt="" />
            </span>
            <span>{companyInfo.legalName}</span>
          </Link>
          <p className="footer-tagline">
            Commerce, marketing and tech media.<br />Built as one ecosystem.
          </p>
        </div>
        <div className="footer-copy">
          <p>Parent company for BrajMart, Liklet, BrajBuzz Tech and Liklet Tech.</p>
          <p>{companyInfo.address}</p>
          <p>{companyInfo.phone} <span aria-hidden="true">&middot;</span> {companyInfo.email}</p>
        </div>
        <div className="footer-nav">
          <p className="footer-kicker">Explore</p>
          {navLinks.map((link) => (
            <Link to={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-nav">
          <p className="footer-kicker">Connect</p>
          <Link to="/investors">Investor Relations</Link>
          <a href={companyLinks.email}>Email us</a>
          <a href={companyLinks.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <Link to="/terms">Terms of service</Link>
          <Link to="/privacy">Privacy policy</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-kicker">Follow along</p>
        <SocialFlipButton
          items={socials}
          className="footer-socials"
          itemClassName="size-9"
          frontClassName="bg-primary text-primary-foreground"
          backClassName="bg-gold text-ink"
        />
        <small>&copy; {new Date().getFullYear()} BrajMart EcomTech LLP. All rights reserved.</small>
      </div>
    </footer>
  )
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <SiteHeader />
      {children}
      <Footer />
    </main>
  )
}

export function PageIntro({ label, title, children }: { label: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{label}</p>
      <h1 style={{ maxWidth: 'min(820px, calc(100vw - 48px))' }}>{title}</h1>
      <p className="page-lede" style={{ maxWidth: 'min(660px, calc(100vw - 48px))' }}>{children}</p>
    </section>
  )
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 35,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="text-link" to={href}>
      {children} <ArrowUpRight size={16} />
    </Link>
  )
}

export { SocialFlipButton }
