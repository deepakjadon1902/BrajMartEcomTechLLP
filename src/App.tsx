import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import WhatWeDoPage from '@/pages/WhatWeDoPage'
import WorkPage from '@/pages/WorkPage'
import AboutPage from '@/pages/AboutPage'
import BrandsPage from '@/pages/BrandsPage'
import ContactPage from '@/pages/ContactPage'
import InvestorsPage from '@/pages/InvestorsPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/collaborators" element={<BrandsPage />} />
        <Route path="/investors" element={<InvestorsPage />} />
        <Route path="/invest" element={<InvestorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
