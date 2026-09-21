'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import SocialFlipButton from '@/components/ui/social-flip-button'

const navLinks = [
  { label: 'What we do', href: '/what-we-do' },
  { label: 'Our work', href: '/work' },
  { label: 'About us', href: '/about' },
  { label: 'Brands', href: '/collaborators' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  const close = () => setOpen(false)
  return <header className="site-header">
    <a className="wordmark" href="/" aria-label="BrajMart home"><span className="mark">B</span><span>brajmart<span className="dot">.</span></span></a>
    <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
      {navLinks.map((link) => <a href={link.href} onClick={close} key={link.href}>{link.label}</a>)}
    </nav>
    <a className="header-cta" href="/contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
  </header>
}

export function Footer() {
  const socials = [
    { letter: 'L', label: 'LinkedIn', href: 'https://linkedin.com', icon: <FaLinkedinIn aria-hidden="true" /> },
    { letter: 'I', label: 'Instagram', href: 'https://instagram.com', icon: <FaInstagram aria-hidden="true" /> },
    { letter: 'X', label: 'X / Twitter', href: 'https://x.com', icon: <FaXTwitter aria-hidden="true" /> },
    { letter: 'M', label: 'Email us', href: 'mailto:hello@brajmart.com', icon: <FaEnvelope aria-hidden="true" /> },
  ]
  return <footer className="footer">
    <div className="footer-top">
      <div className="footer-brand">
        <a className="wordmark" href="/"><span className="mark">B</span><span>brajmart<span className="dot">.</span></span></a>
        <p className="footer-tagline">Commerce, marketing and tech media.<br />Built as one ecosystem.</p>
      </div>
      <div className="footer-copy">
        <p>Parent company for BrajMart, Liklet, BrajBuzz Tech and Liklet Tech.</p>
        <p>Vrindavan <span aria-hidden="true">&middot;</span> India <span aria-hidden="true">&middot;</span> Digital-first</p>
      </div>
      <div className="footer-nav">
        <p className="footer-kicker">Explore</p>
        {navLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
      </div>
      <div className="footer-nav">
        <p className="footer-kicker">Connect</p>
        <a href="mailto:hello@brajmart.com">Email us</a>
        <a href="/terms">Terms of service</a>
        <a href="/privacy">Privacy policy</a>
      </div>
    </div>
    <div className="footer-bottom">
      <p className="footer-kicker">Follow along</p>
      <SocialFlipButton items={socials} className="footer-socials" itemClassName="size-9" frontClassName="bg-primary text-primary-foreground" backClassName="bg-gold text-ink" />
      <small>&copy; {new Date().getFullYear()} BrajMart EcomTech LLP. All rights reserved.</small>
    </div>
  </footer>
}

export function PageFrame({ children }: { children: React.ReactNode }) { return <main><SiteHeader />{children}<Footer /></main> }
export function PageIntro({ label, title, children }: { label: string, title: React.ReactNode, children: React.ReactNode }) { return <section className="page-intro"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="page-lede">{children}</p></section> }
export function Reveal({ children, className = '' }: { children: React.ReactNode, className?: string }) { return <div className={`reveal ${className}`}>{children}</div> }
export function ArrowLink({ href, children }: { href: string, children: React.ReactNode }) { return <a className="text-link" href={href}>{children} <ArrowUpRight size={16} /></a> }

export { SocialFlipButton }
