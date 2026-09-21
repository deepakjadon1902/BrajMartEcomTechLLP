import React from 'react'
import { motion } from 'framer-motion'
import { FlipFadeText } from '@/components/ui/flip-fade-text'

export interface Testimonial {
  text: string
  name: string
  role: string
  rating?: number
}

const testimonials: Testimonial[] = [
  {
    text: "BrajMart's devotional store delivers authentic Vrindavan prasadam, books, and puja items with careful packing and dependable support.",
    name: 'Vrindavan Family Customer',
    role: 'Devotional Shopper - BrajMart',
    rating: 5,
  },
  {
    text: 'Liklet turned our social media and search presence into a structured growth engine. Our qualified enquiries improved within 90 days.',
    name: 'Growth Services Client',
    role: 'Marketing Partner - Liklet',
    rating: 4.5,
  },
  {
    text: 'The web engineering team built a fast React platform with clean structure, responsive UI, and practical backend integrations.',
    name: 'Web Platform Client',
    role: 'Development Partner - Liklet Tech',
    rating: 4.5,
  },
  {
    text: 'BrajBuzz Tech reviews and unboxing guides gave us clear, honest product direction before buying studio gear and gadgets.',
    name: 'Tech Media Viewer',
    role: 'Buying Guide Audience - BrajBuzz Tech',
    rating: 4,
  },
  {
    text: 'Fast shipping, transparent pricing, and genuine Vrindavan spiritual books make BrajMart a trusted devotional store for our family.',
    name: 'Devotional Books Customer',
    role: 'Repeat Shopper - BrajMart',
    rating: 5,
  },
  {
    text: "Liklet's SEO audit and content planning helped us understand what to fix, where to publish, and how to measure real campaign progress.",
    name: 'SEO Growth Client',
    role: 'Digital Marketing - Liklet',
    rating: 4.5,
  },
  {
    text: 'The ecosystem approach connecting commerce, marketing, and media makes working with BrajMart EcomTech simple and organized.',
    name: 'Commerce Partner',
    role: 'Ecosystem Client - BrajMart EcomTech',
    rating: 4,
  },
  {
    text: "Liklet Tech's backend work was disciplined, fast, and clear during a complex API integration and dashboard build.",
    name: 'API Integration Client',
    role: 'Software Partner - Liklet Tech',
    rating: 4.5,
  },
  {
    text: 'From devotional commerce to gadget media, BrajMart EcomTech brings a practical, trustworthy, and quality-focused working style.',
    name: 'Media Collaboration Client',
    role: 'Tech Content Partner - BrajBuzz Tech',
    rating: 5,
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1 mb-3 text-amber-500" aria-label={`${rating} out of 5 rating`}>
    {Array.from({ length: 5 }).map((_, starIdx) => {
      const fillPercent = Math.max(0, Math.min(1, rating - starIdx)) * 100

      return (
        <span key={starIdx} className="relative inline-flex h-4 w-4">
          <svg className="absolute inset-0 h-4 w-4 fill-neutral-200" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercent}%` }}>
            <svg className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </span>
      )
    })}
    <span className="ml-1 text-xs font-bold text-neutral-600">{rating.toFixed(1)}</span>
  </div>
)

const avatarColors = [
  'bg-cyan-50 text-cyan-800 ring-cyan-100',
  'bg-amber-50 text-amber-800 ring-amber-100',
  'bg-emerald-50 text-emerald-800 ring-emerald-100',
  'bg-indigo-50 text-indigo-800 ring-indigo-100',
  'bg-rose-50 text-rose-800 ring-rose-100',
]

const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{ translateY: '-50%' }}
        transition={{
          duration: props.duration || 14,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, role, rating = 5 }, i) => {
              const initial = name.trim().charAt(0).toUpperCase()
              const avatarColor = avatarColors[i % avatarColors.length]

              return (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1 ? 'true' : 'false'}
                tabIndex={index === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.14), 0 0 0 1px rgba(0, 0, 0, 0.08)',
                  transition: { type: 'spring', stiffness: 400, damping: 20 },
                }}
                whileFocus={{
                  scale: 1.03,
                  y: -6,
                  boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.14), 0 0 0 1px rgba(0, 0, 0, 0.08)',
                  transition: { type: 'spring', stiffness: 400, damping: 20 },
                }}
                whileTap={{
                  scale: 1.02,
                  y: -4,
                  transition: { type: 'spring', stiffness: 420, damping: 22 },
                }}
                className="p-7 rounded-3xl border border-neutral-200 shadow-md shadow-black/5 max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none"
                style={{ backgroundColor: '#ffffff', color: '#000000' }}
              >
                <blockquote className="m-0 p-0">
                  <StarRating rating={rating} />

                  <p className="text-black leading-relaxed font-normal m-0 text-sm" style={{ color: '#000000' }}>
                    &ldquo;{text}&rdquo;
                  </p>

                  <footer className="flex items-center gap-3.5 mt-6 pt-4 border-t border-neutral-100">
                    <div className={`relative shrink-0 h-11 w-11 rounded-full ring-2 shadow-sm flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 ${avatarColor}`}>
                      <span className="text-base font-black leading-none" aria-hidden="true">{initial}</span>
                    </div>
                    <div className="flex flex-col text-left">
                      <cite className="font-bold not-italic text-sm tracking-tight leading-snug text-black" style={{ color: '#000000' }}>
                        {name}
                      </cite>
                      <span className="text-xs leading-snug tracking-tight text-neutral-600 mt-0.5 font-medium" style={{ color: '#444444' }}>
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
              )
            })}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  )
}

export const TestimonialsSection = () => {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-transparent py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[580px] mx-auto mb-14 text-center">
          <div className="flex justify-center">
            <div className="border border-black/30 py-1 px-4 rounded-full text-xs font-bold tracking-wider uppercase text-black bg-white/90 shadow-sm">
              Client Feedback
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-black flex flex-wrap items-center justify-center gap-2">
            <span>What clients</span>
            <FlipFadeText
              words={['SAY', 'EXPERIENCE', 'SHARE', 'TRUST']}
              className="inline-flex min-h-0 text-black font-serif italic"
              textClassName="text-black font-serif italic"
              interval={2700}
            />
          </h2>
          <p className="text-center mt-4 text-black text-base md:text-lg leading-relaxed max-w-md font-medium">
            Feedback-style cards for BrajMart, Liklet, Liklet Tech, and BrajBuzz Tech. Replace with verified customer reviews whenever you have them.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-8 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] max-h-[680px] overflow-hidden"
          role="region"
          aria-label="Scrolling client feedback"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={20} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={18} />
        </div>
      </motion.div>
    </section>
  )
}

export default function Component() {
  return <TestimonialsSection />
}
