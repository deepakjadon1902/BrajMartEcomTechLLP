import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface TravelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imageAlt: string;
  logo?: React.ReactNode;
  title: string;
  location: string;
  overview: string;
  price?: number | string;
  pricePeriod?: string;
  onBookNow?: () => void;
  ctaText?: string;
}

const TravelCard = React.forwardRef<HTMLDivElement, TravelCardProps>(
  (
    {
      className,
      imageUrl,
      imageAlt,
      logo,
      title,
      location,
      overview,
      price,
      pricePeriod,
      onBookNow,
      ctaText = "Explore Branch",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "travel-card group relative w-full max-w-sm h-[440px] overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-card shadow-lg",
          "transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2",
          className
        )}
        {...props}
      >
        {/* Background Image with Zoom Effect on Hover */}
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover brightness-[1.22] contrast-[1.04] saturate-[1.12] transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.10)_0%,rgba(0,0,0,.24)_42%,rgba(0,0,0,.78)_100%)]"></div>

        {/* Content Container */}
        <div className="relative flex h-full flex-col justify-between p-6 text-card-foreground">
          {/* Top Section: Logo */}
          <div className="flex h-16 items-start">
             {logo && (
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/50 bg-black/40 backdrop-blur-md">
                   {logo}
                </div>
             )}
          </div>
          
          {/* Middle Section: Details (slides up on hover) */}
          <div className="space-y-3 transition-transform duration-500 ease-in-out group-hover:-translate-y-16">
            <div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight [text-shadow:0_4px_18px_rgba(0,0,0,.9)]">{title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-white mt-1 [text-shadow:0_2px_10px_rgba(0,0,0,.9)]">{location}</p>
            </div>
            <div>
              <h4 className="text-[11px] font-bold tracking-wider text-white uppercase [text-shadow:0_2px_10px_rgba(0,0,0,.9)]">OVERVIEW</h4>
              <p className="text-xs text-white leading-relaxed line-clamp-3 [text-shadow:0_2px_10px_rgba(0,0,0,.92)]">
                {overview}
              </p>
            </div>
          </div>

          {/* Bottom Section: Price and Button (revealed on hover) */}
          <div className="absolute -bottom-20 left-0 w-full p-6 opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
            <div className="flex items-center justify-between">
              {price !== undefined && (
                <div>
                  <span className="text-2xl font-bold text-white">{typeof price === 'number' ? `$${price}` : price}</span>
                  {pricePeriod && <span className="text-xs text-white font-semibold"> {pricePeriod}</span>}
                </div>
              )}
              <Button onClick={onBookNow} size="lg" className="bg-white text-black hover:bg-white/90 ml-auto font-semibold">
                {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
TravelCard.displayName = "TravelCard";

export { TravelCard };
