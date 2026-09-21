interface PartnerLogoProps {
  name: string
  className?: string
  size?: number
}

export function PartnerLogo({ name, className = '', size = 28 }: PartnerLogoProps) {
  const normalized = name.toLowerCase().trim()
  const logoMap: Record<string, string> = {
    google: '/partners/google.svg',
    amazon: '/partners/amazon.svg',
    apple: '/partners/apple.svg',
    microsoft: '/partners/microsoft.svg',
    sony: '/partners/sony.svg',
    intel: '/partners/intel.svg',
    xiaomi: '/partners/xiaomi.svg',
    asus: '/partners/asus.svg',
    lenovo: '/partners/lenovo.svg',
    brabus: '/partners/brabus.svg',
    shopify: '/tools/shopify.svg',
    react: '/tools/react.svg',
    'node.js': '/tools/nodejs.svg',
    nodejs: '/tools/nodejs.svg',
    typescript: '/tools/typescript.svg',
    vite: '/tools/vite.svg',
    tailwindcss: '/tools/tailwindcss.svg',
    tailwind: '/tools/tailwindcss.svg',
    'google analytics': '/tools/analytics.svg',
    analytics: '/tools/analytics.svg',
    instagram: '/tools/instagram.svg',
    youtube: '/tools/youtube.svg',
  }

  const src = logoMap[normalized]
  if (!src) return null

  return (
    <div className={`partner-logo inline-flex items-center justify-center rounded-xl bg-white shadow-sm border border-neutral-100 ${className}`}>
      <img src={src} alt={`${name} official logo`} style={{ maxWidth: size * 1.7, maxHeight: size * 1.2 }} />
    </div>
  )
}
