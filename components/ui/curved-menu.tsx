"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { 
  FaLinkedinIn as Linkedin, 
  FaGithub as Github, 
  FaDribbble as Dribbble, 
  FaFigma as Figma,
  FaInstagram as Instagram,
  FaXTwitter as Twitter,
  FaEnvelope as Mail
} from "react-icons/fa6";

export interface iNavItem {
  heading: string;
  href: string;
  subheading?: string;
  imgSrc?: string;
}

export interface iNavLinkProps extends iNavItem {
  setIsActive: (isActive: boolean) => void;
  index: number;
}

export interface iCurvedNavbarProps {
  setIsActive: (isActive: boolean) => void;
  navItems: iNavItem[];
}

export interface iHeaderProps {
  navItems?: iNavItem[];
  footer?: React.ReactNode;
}

const MENU_SLIDE_ANIMATION = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
  },
};

export const defaultNavItems: iNavItem[] = [
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
    heading: "Let's Talk",
    href: "/contact",
    subheading: "Start a conversation with our team",
  },
];

export const CustomFooter: React.FC = () => {
  return (
    <div className="flex w-full text-sm justify-between text-black px-8 md:px-16 py-6 border-t border-black/10">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-60 transition-opacity">
        <Linkedin size={22} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-60 transition-opacity">
        <Instagram size={22} />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="hover:opacity-60 transition-opacity">
        <Twitter size={22} />
      </a>
      <a href="mailto:hello@brajmart.com" aria-label="Email" className="hover:opacity-60 transition-opacity">
        <Mail size={22} />
      </a>
    </div>
  );
};

export const NavLink: React.FC<iNavLinkProps> = ({
  heading,
  href,
  setIsActive,
  index,
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleClick = () => {
    setIsActive(false);
  };

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <motion.div
      onClick={handleClick}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-black/20 py-3 md:py-6 transition-colors duration-500 uppercase cursor-pointer"
    >
      {isExternal ? (
        <a 
          ref={ref} 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          onMouseMove={handleMouseMove}
          className="w-full text-left"
        >
          <div className="relative flex items-center">
            <span className="text-black/50 group-hover:text-black transition-colors duration-500 text-2xl md:text-3xl font-light mr-3">
              0{index}.
            </span>
            <div className="flex flex-row gap-2">
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: -12 },
                }}
                transition={{
                  type: "spring",
                  staggerChildren: 0.05,
                  delayChildren: 0.1,
                }}
                className="relative z-10 block text-2xl md:text-4xl font-extralight text-black transition-colors duration-500 tracking-tight"
              >
                {heading.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      initial: { x: 0 },
                      whileHover: { x: 12 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.span>
            </div>
          </div>
        </a>
      ) : (
        <RouterLink 
          ref={ref} 
          to={href} 
          onMouseMove={handleMouseMove}
          className="w-full text-left"
        >
          <div className="relative flex items-center">
            <span className="text-black/50 group-hover:text-black transition-colors duration-500 text-2xl md:text-3xl font-light mr-3">
              0{index}.
            </span>
            <div className="flex flex-row gap-2">
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: -12 },
                }}
                transition={{
                  type: "spring",
                  staggerChildren: 0.05,
                  delayChildren: 0.1,
                }}
                className="relative z-10 block text-2xl md:text-4xl font-extralight text-black transition-colors duration-500 tracking-tight"
              >
                {heading.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      initial: { x: 0 },
                      whileHover: { x: 12 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.span>
            </div>
          </div>
        </RouterLink>
      )}
    </motion.div>
  );
};

export const Curve: React.FC = () => {
  const [height, setHeight] = useState(() => (typeof window !== "undefined" ? window.innerHeight : 800));

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  return (
    <svg
      className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full pointer-events-none"
      style={{ fill: "#ffffff" }}
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
};

export const CurvedNavbar: React.FC<
  iCurvedNavbarProps & { footer?: React.ReactNode }
> = ({ setIsActive, navItems, footer }) => {
  return (
    <>
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsActive(false)}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      />

      <motion.div
        variants={MENU_SLIDE_ANIMATION}
        initial="initial"
        animate="enter"
        exit="exit"
        className="h-[100dvh] w-full max-w-[480px] fixed right-0 top-0 z-50 bg-white text-black shadow-2xl overflow-y-auto"
      >
        <div className="h-full pt-16 pb-6 flex flex-col justify-between">
          <div className="flex flex-col gap-2 px-8 md:px-16">
            <div className="text-black/60 border-b border-black/20 uppercase text-xs tracking-widest pb-3 mb-2 flex items-center justify-between">
              <p className="font-bold">Navigation</p>
              <span className="text-[10px] bg-black/5 px-2 py-0.5 rounded font-sans font-medium">BrajMart EcomTech</span>
            </div>
            <section className="bg-transparent mt-0">
              <div className="mx-auto w-full">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.href}
                    {...item}
                    setIsActive={setIsActive}
                    index={index + 1}
                  />
                ))}
              </div>
            </section>
          </div>
          {footer}
        </div>
        <Curve />
      </motion.div>
    </>
  );
};

const Header: React.FC<iHeaderProps> = ({
  navItems = defaultNavItems,
  footer = <CustomFooter />,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="relative">
        <div
          onClick={handleClick}
          className="fixed right-4 top-4 z-50 w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer bg-white text-black shadow-lg border border-black/10 transition-transform active:scale-95"
          aria-label={isActive ? "Close menu" : "Open menu"}
          role="button"
          tabIndex={0}
        >
          <div className="relative w-6 h-5 flex flex-col justify-between items-center">
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
                isActive ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
                isActive ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
                isActive ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <CurvedNavbar
            setIsActive={setIsActive}
            navItems={navItems}
            footer={footer}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
