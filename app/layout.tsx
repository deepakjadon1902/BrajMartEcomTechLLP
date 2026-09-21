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
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
