import React from 'react'

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  showText?: boolean
  inverted?: boolean
}

const sizeMap = {
  sm: { box: 'w-10 h-10', img: 'max-h-8 max-w-[85%]', font: 'text-sm' },
  md: { box: 'w-14 h-14', img: 'max-h-11 max-w-[88%]', font: 'text-base' },
  lg: { box: 'w-20 h-20', img: 'max-h-16 max-w-[90%]', font: 'text-lg' },
  xl: { box: 'w-28 h-28', img: 'max-h-24 max-w-[92%]', font: 'text-2xl' },
}

/**
 * Official BrajMart Logo Component
 * Cured with modern glass-card styling and subtle lift on hover
 */
export function BrajMartLogo({ size = 'md', className = '', showText = false, inverted = false }: BrandLogoProps) {
  const s = sizeMap[size]

  return (
    <div className={`inline-flex items-center gap-3.5 select-none group/brand ${className}`}>
      <div
        className={`${s.box} relative flex items-center justify-center shrink-0 rounded-2xl bg-white p-1.5 shadow-md border border-neutral-200/80 transition-all duration-300 ease-out group-hover/brand:scale-105 group-hover/brand:shadow-xl group-hover/brand:border-amber-400/50`}
        style={{
          boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        }}
      >
        <img
          src="/logos/brajmart-logo.webp"
          alt="BrajMart official logo"
          className={`${s.img} w-auto h-auto object-contain transition-transform duration-300 group-hover/brand:scale-105`}
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif font-bold tracking-tight leading-none ${s.font} ${inverted ? 'text-white' : 'text-black'}`}>
            BrajMart
          </span>
          <span className="text-[10.5px] uppercase font-bold tracking-widest text-amber-600 dark:text-amber-500 mt-1">
            Devotional Ecom
          </span>
        </div>
      )}
    </div>
  )
}

/**
 * Official Liklet Logo Component
 * High-momentum digital marketing and web development
 */
export function LikletLogo({ size = 'md', className = '', showText = false, inverted = false }: BrandLogoProps) {
  const s = sizeMap[size]

  return (
    <div className={`inline-flex items-center gap-3.5 select-none group/brand ${className}`}>
      <div
        className={`${s.box} relative flex items-center justify-center shrink-0 rounded-2xl bg-white p-1.5 shadow-md border border-neutral-200/80 transition-all duration-300 ease-out group-hover/brand:scale-105 group-hover/brand:shadow-xl group-hover/brand:border-blue-500/50`}
        style={{
          boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        }}
      >
        <img
          src="/logos/liklet-logo.jpg"
          alt="Liklet official logo"
          className={`${s.img} w-auto h-auto object-contain transition-transform duration-300 group-hover/brand:scale-105`}
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif font-bold tracking-tight leading-none ${s.font} ${inverted ? 'text-white' : 'text-black'}`}>
            Liklet
          </span>
          <span className="text-[10.5px] uppercase font-bold tracking-widest text-blue-600 dark:text-blue-500 mt-1">
            Growth & Tech
          </span>
        </div>
      )}
    </div>
  )
}

/**
 * Official BrajBuzz Tech Logo Component
 * High-res transparent emblem for consumer tech and YouTube media
 */
export function BrajBuzzLogo({ size = 'md', className = '', showText = false, inverted = false }: BrandLogoProps) {
  const s = sizeMap[size]

  return (
    <div className={`inline-flex items-center gap-3.5 select-none group/brand ${className}`}>
      <div
        className={`${s.box} relative flex items-center justify-center shrink-0 rounded-2xl bg-white p-1.5 shadow-md border border-neutral-200/80 transition-all duration-300 ease-out group-hover/brand:scale-105 group-hover/brand:shadow-xl group-hover/brand:border-purple-500/50`}
        style={{
          boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        }}
      >
        <img
          src="/logos/brajbuzztech-logo.png"
          alt="BrajBuzz Tech official logo"
          className={`${s.img} w-auto h-auto object-contain transition-transform duration-300 group-hover/brand:scale-105`}
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif font-bold tracking-tight leading-none ${s.font} ${inverted ? 'text-white' : 'text-black'}`}>
            BrajBuzz Tech
          </span>
          <span className="text-[10.5px] uppercase font-bold tracking-widest text-purple-600 dark:text-purple-500 mt-1">
            Consumer Tech & Media
          </span>
        </div>
      )}
    </div>
  )
}

/**
 * Official Liklet Tech Logo Component
 * Dedicated full-stack engineering and cloud development arm
 */
export function LikletTechLogo({ size = 'md', className = '', showText = false, inverted = false }: BrandLogoProps) {
  const s = sizeMap[size]

  return (
    <div className={`inline-flex items-center gap-3.5 select-none group/brand ${className}`}>
      <div
        className={`${s.box} relative flex items-center justify-center shrink-0 rounded-2xl bg-white p-1.5 shadow-md border border-neutral-200/80 transition-all duration-300 ease-out group-hover/brand:scale-105 group-hover/brand:shadow-xl group-hover/brand:border-indigo-500/50`}
        style={{
          boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        }}
      >
        <img
          src="/logos/liklettech-logo.jpg"
          alt="Liklet Tech official logo"
          className={`${s.img} w-auto h-auto object-contain transition-transform duration-300 group-hover/brand:scale-105`}
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif font-bold tracking-tight leading-none ${s.font} ${inverted ? 'text-white' : 'text-black'}`}>
            Liklet Tech
          </span>
          <span className="text-[10.5px] uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-500 mt-1">
            Engineering & Cloud
          </span>
        </div>
      )}
    </div>
  )
}
