import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display' })
const sans = Manrope({ subsets: ['latin'], variable: '--font-sans-local' })

export const metadata: Metadata = {
  title: 'BrajMart EcomTech LLP - BrajMart, Liklet and BrajBuzz Tech',
  description: 'BrajMart EcomTech LLP connects devotional ecommerce, digital marketing, full-stack development and tech media through BrajMart, Liklet, BrajBuzz Tech and Liklet Tech.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logos/brajmart-logo.webp',
        type: 'image/webp',
      },
    ],
    shortcut: '/logos/brajmart-logo.webp',
    apple: '/logos/brajmart-logo.webp',
  },
  openGraph: {
    type: 'website',
    url: 'https://brajmart-ecomtech-llp.vercel.app/',
    title: 'BrajMart EcomTech LLP - BrajMart, Liklet and BrajBuzz Tech',
    description: 'BrajMart EcomTech LLP connects devotional ecommerce, digital marketing, full-stack development and tech media through BrajMart, Liklet, BrajBuzz Tech and Liklet Tech.',
    images: [
      {
        url: 'https://brajmart-ecomtech-llp.vercel.app/logos/brajmart-logo.webp',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'BrajMart EcomTech LLP - BrajMart, Liklet and BrajBuzz Tech',
    description: 'BrajMart EcomTech LLP connects devotional ecommerce, digital marketing, full-stack development and tech media through BrajMart, Liklet, BrajBuzz Tech and Liklet Tech.',
    images: ['https://brajmart-ecomtech-llp.vercel.app/logos/brajmart-logo.webp'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f0faf6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
