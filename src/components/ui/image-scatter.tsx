"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScatterItem {
  name: string;
  logo: string;
  info: string;
  category?: string;
  accentColor?: string;
}

export interface ScatterSet {
  heading: string;
  subheading?: string;
  items: ScatterItem[];
}

export interface ImageScatterProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ScatterSet[];
  cardWidth?: number;
  cardHeight?: number;
  animationDuration?: number;
  animationOverlap?: number;
  headingFadeDuration?: number;
  autoPlayInterval?: number;
  scroller?: string | Element | null;
}

export function ImageScatter({
  data,
  cardWidth = 240,
  cardHeight = 160,
  animationDuration = 0.75,
  animationOverlap = 0.5,
  headingFadeDuration = 0.5,
  autoPlayInterval = 3800,
  scroller,
  className,
  ...props
}: ImageScatterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || !galleryRef.current || !headingRef.current || data.length === 0) return;

    const gallery = galleryRef.current;
    const galleryHeading = headingRef.current;
    const gallerySubheading = subheadingRef.current;

    let viewport = {
      centerX: containerRef.current.clientWidth / 2,
      centerY: containerRef.current.clientHeight / 2,
      rangeMin: Math.min(containerRef.current.clientWidth, containerRef.current.clientHeight) * 0.32,
      rangeMax: Math.min(containerRef.current.clientWidth, containerRef.current.clientHeight) * 0.65,
    };

    let state = {
      activeCards: [] as { element: HTMLDivElement; centerX: number; centerY: number }[],
      currentSection: 0,
      isAnimating: false,
    };

    function updateViewport() {
      if (!containerRef.current) return;
      viewport.centerX = containerRef.current.clientWidth / 2;
      viewport.centerY = containerRef.current.clientHeight / 2;
      viewport.rangeMin = Math.min(containerRef.current.clientWidth, containerRef.current.clientHeight) * 0.32;
      viewport.rangeMax = Math.min(containerRef.current.clientWidth, containerRef.current.clientHeight) * 0.65;
    }

    function getEdgePosition(centerX: number, centerY: number) {
      const containerWidth = containerRef.current?.clientWidth || window.innerWidth;
      const containerHeight = containerRef.current?.clientHeight || window.innerHeight;

      const distances = {
        left: centerX,
        right: containerWidth - centerX,
        top: centerY,
        bottom: containerHeight - centerY,
      };

      const minDistance = Math.min(...Object.values(distances));
      const cardCenterOffsetX = cardWidth / 2;
      const cardCenterOffsetY = cardHeight / 2;
      const offsetVariation = () => (Math.random() - 0.5) * 160;

      if (minDistance === distances.left) {
        return {
          x: -cardWidth - 60,
          y: centerY - cardCenterOffsetY + offsetVariation(),
        };
      }
      if (minDistance === distances.right) {
        return {
          x: containerWidth + 60,
          y: centerY - cardCenterOffsetY + offsetVariation(),
        };
      }
      if (minDistance === distances.top) {
        return {
          x: centerX - cardCenterOffsetX + offsetVariation(),
          y: -cardHeight - 60,
        };
      }

      return {
        x: centerX - cardCenterOffsetX + offsetVariation(),
        y: containerHeight + 60,
      };
    }

    function createCards(sectionIndex: number) {
      const cards: { element: HTMLDivElement; centerX: number; centerY: number }[] = [];
      const sectionData = data[sectionIndex];
      
      if (!sectionData || !sectionData.items || !sectionData.items.length) return cards;

      const containerWidth = containerRef.current?.clientWidth || 1100;
      const containerHeight = containerRef.current?.clientHeight || 640;
      const pad = 24;

      // 5 perimeter anchor zones around center text
      const anchorSlots = [
        { xRatio: 0.10, yRatio: 0.12, rot: -5 },  // Top-Left
        { xRatio: 0.72, yRatio: 0.12, rot: 5 },   // Top-Right
        { xRatio: 0.08, yRatio: 0.64, rot: 6 },   // Bottom-Left
        { xRatio: 0.74, yRatio: 0.64, rot: -6 },  // Bottom-Right
        { xRatio: 0.42, yRatio: 0.03, rot: -2 },  // Top-Center
      ];

      sectionData.items.forEach(({ name, logo, info, accentColor }, i) => {
        const card = document.createElement("div");
        card.className = "scatter-card absolute rounded-2xl border border-neutral-200/90 shadow-lg overflow-hidden will-change-transform bg-white p-4 flex flex-col items-center justify-between backdrop-blur-md cursor-pointer transition-all hover:scale-105 active:scale-105 focus:scale-105 hover:z-30 active:z-30 focus:z-30 hover:shadow-2xl active:shadow-2xl focus:shadow-2xl group";
        card.tabIndex = 0;
        card.style.width = `${cardWidth}px`;
        card.style.height = `${cardHeight}px`;

        // Logo Container
        const logoContainer = document.createElement("div");
        logoContainer.className = "w-full h-14 flex items-center justify-center p-1 pointer-events-none";
        
        const img = document.createElement("img");
        img.src = logo;
        img.alt = `${name} logo`;
        img.className = "max-h-full max-w-[85%] object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105";
        logoContainer.appendChild(img);
        card.appendChild(logoContainer);

        // Info Container
        const infoContainer = document.createElement("div");
        infoContainer.className = "w-full text-center mt-1 pointer-events-none border-t border-neutral-100 pt-2";
        
        const nameEl = document.createElement("h4");
        nameEl.className = "text-xs font-bold tracking-tight text-black uppercase";
        nameEl.textContent = name;
        
        const descEl = document.createElement("p");
        descEl.className = "text-[11px] leading-snug text-neutral-700 mt-0.5 line-clamp-2 font-medium";
        descEl.textContent = info;
        
        infoContainer.appendChild(nameEl);
        infoContainer.appendChild(descEl);
        card.appendChild(infoContainer);

        // Accent Line
        if (accentColor) {
          const accent = document.createElement("div");
          accent.className = "absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl";
          accent.style.backgroundColor = accentColor;
          card.appendChild(accent);
        }

        const slot = anchorSlots[i % anchorSlots.length];
        const rawX = slot.xRatio * containerWidth + (Math.random() - 0.5) * 30;
        const rawY = slot.yRatio * containerHeight + (Math.random() - 0.5) * 20;

        // Guaranteed containment within visible boundaries
        const clampedX = Math.max(pad, Math.min(rawX, containerWidth - cardWidth - pad));
        const clampedY = Math.max(pad, Math.min(rawY, containerHeight - cardHeight - pad));
        const centerX = clampedX + cardWidth / 2;
        const centerY = clampedY + cardHeight / 2;
        const rotation = slot.rot + (Math.random() * 4 - 2);

        gsap.set(card, {
          left: clampedX,
          top: clampedY,
          rotation,
        });

        gallery.appendChild(card);
        cards.push({ element: card, centerX, centerY });
      });

      return cards;
    }

    function animateHeading(newText: string, newSubtext?: string) {
      const tl = gsap.timeline();
      
      tl.to([galleryHeading, gallerySubheading], {
        opacity: 0,
        y: -10,
        duration: headingFadeDuration,
        ease: "power2.inOut",
      })
      .call(() => {
        galleryHeading.textContent = newText;
        if (gallerySubheading && newSubtext) {
          gallerySubheading.textContent = newSubtext;
        }
      })
      .to([galleryHeading, gallerySubheading], {
        opacity: 1,
        y: 0,
        duration: headingFadeDuration,
        ease: "power2.inOut",
      });

      return tl;
    }

    function animateCards(
      exitingCards: { element: HTMLDivElement; centerX: number; centerY: number }[],
      enteringCards: { element: HTMLDivElement; centerX: number; centerY: number }[]
    ) {
      const tl = gsap.timeline();

      exitingCards.forEach(({ element, centerX, centerY }) => {
        const targetEdge = getEdgePosition(centerX, centerY);
        tl.to(
          element,
          {
            left: targetEdge.x,
            top: targetEdge.y,
            opacity: 0,
            rotation: Math.random() * 60 - 30,
            duration: animationDuration,
            ease: "power2.in",
            onComplete: () => element.remove(),
          },
          0
        );
      });

      enteringCards.forEach(({ element, centerX, centerY }) => {
        const targetEdge = getEdgePosition(centerX, centerY);
        gsap.set(element, {
          left: targetEdge.x,
          top: targetEdge.y,
          opacity: 0,
          rotation: Math.random() * 60 - 30,
        });

        tl.to(
          element,
          {
            left: centerX - cardWidth / 2,
            top: centerY - cardHeight / 2,
            opacity: 1,
            rotation: (Math.random() * 10 - 5),
            duration: animationDuration,
            ease: "power2.out",
          },
          animationOverlap
        );
      });

      return tl;
    }

    function reinitialize() {
      state.activeCards.forEach(({ element }) => element.remove());
      updateViewport();
      state.activeCards = createCards(state.currentSection);
    }

    // Initialize first section
    state.activeCards = createCards(0);
    galleryHeading.textContent = data[0]?.heading || "";
    if (gallerySubheading && data[0]?.subheading) {
      gallerySubheading.textContent = data[0].subheading;
    }
    gsap.set([galleryHeading, gallerySubheading], { opacity: 1, y: 0 });

    let intervalId: NodeJS.Timeout;

    function nextSection() {
      if (state.isAnimating) return;

      const targetSection = (state.currentSection + 1) % data.length;

      state.isAnimating = true;
      const newCards = createCards(targetSection);

      Promise.all([
        animateCards(state.activeCards, newCards).then(),
        animateHeading(data[targetSection]?.heading || "", data[targetSection]?.subheading).then(),
      ]).then(() => {
        state.activeCards = newCards;
        state.currentSection = targetSection;
        state.isAnimating = false;
      });
    }

    intervalId = setInterval(nextSection, autoPlayInterval);

    const handleResize = () => {
      reinitialize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
      state.activeCards.forEach(({ element }) => element.remove());
    };
  }, [data, cardWidth, cardHeight, animationDuration, animationOverlap, headingFadeDuration, autoPlayInterval]);

  return (
    <section 
      ref={containerRef}
      className={cn("relative w-full h-[580px] md:h-[680px] flex flex-col justify-center items-center overflow-hidden bg-transparent", className)}
      {...props}
    >
      <div ref={galleryRef} className="absolute inset-0 pointer-events-auto" />
      <div className="z-10 flex flex-col items-center justify-center max-w-2xl px-6 text-center pointer-events-none">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-5xl font-extrabold tracking-tight will-change-[opacity,transform] text-black"
        />
        <p 
          ref={subheadingRef}
          className="mt-4 text-base md:text-lg text-black font-medium leading-relaxed will-change-[opacity,transform]"
        />
      </div>
    </section>
  );
}

export default ImageScatter;
