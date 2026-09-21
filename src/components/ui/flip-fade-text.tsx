import { useEffect, useState, useMemo, useCallback, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface FlipFadeTextProps {
    words?: string[]
    interval?: number
    className?: string
    textClassName?: string
    letterDuration?: number
    staggerDelay?: number
    exitStaggerDelay?: number
}

const defaultWords = ["LOADING", "COMPUTING", "SEARCHING", "RETRIEVING", "ASSEMBLING"]

const Letter = memo(function Letter({
    char,
    letterDuration
}: {
    char: string
    letterDuration: number
}) {
    const displayChar = char === " " ? "\u00A0" : char
    return (
        <motion.span
            style={{ transformStyle: "preserve-3d" }}
            variants={{
                initial: {
                    rotateX: 90,
                    y: 18,
                    opacity: 0,
                    filter: "blur(6px)",
                },
                animate: {
                    rotateX: 0,
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: {
                        duration: letterDuration,
                        ease: [0.22, 1, 0.36, 1],
                    },
                },
                exit: {
                    rotateX: -90,
                    y: -18,
                    opacity: 0,
                    filter: "blur(6px)",
                    transition: {
                        duration: letterDuration * 0.75,
                        ease: [0.22, 1, 0.36, 1],
                    },
                },
            }}
            className="inline-block"
        >
            {displayChar}
        </motion.span>
    )
})

const Word = memo(function Word({
    text,
    staggerDelay,
    exitStaggerDelay,
    letterDuration,
    textClassName
}: {
    text: string
    staggerDelay: number
    exitStaggerDelay: number
    letterDuration: number
    textClassName?: string
}) {
    const letters = useMemo(() => text.split(""), [text])

    return (
        <motion.div
            className={cn(
                "inline-flex gap-[0.08em] font-bold uppercase tracking-wider text-black",
                textClassName
            )}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
                initial: { opacity: 1 },
                animate: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
                exit: {
                    opacity: 1,
                    transition: {
                        staggerChildren: exitStaggerDelay,
                    },
                },
            }}
        >
            {letters.map((char, i) => (
                <Letter
                    key={`${char}-${i}`}
                    char={char}
                    letterDuration={letterDuration}
                />
            ))}
        </motion.div>
    )
})

export function FlipFadeText({
    words = defaultWords,
    interval = 2800,
    className,
    textClassName,
    letterDuration = 0.45,
    staggerDelay = 0.035,
    exitStaggerDelay = 0.02,
}: FlipFadeTextProps) {
    const [index, setIndex] = useState(0)

    const updateIndex = useCallback(() => {
        setIndex((prev) => (prev + 1) % words.length)
    }, [words.length])

    useEffect(() => {
        const timer = setInterval(updateIndex, interval)
        return () => clearInterval(timer)
    }, [updateIndex, interval])

    const currentWord = useMemo(() => words[index], [words, index])

    return (
        <div className={cn("inline-flex items-center justify-center min-h-0 align-middle", className)}>
            <div className="relative inline-flex items-center justify-center" style={{ perspective: "1000px" }}>
                <AnimatePresence mode="wait">
                    <Word
                        key={currentWord}
                        text={currentWord}
                        staggerDelay={staggerDelay}
                        exitStaggerDelay={exitStaggerDelay}
                        letterDuration={letterDuration}
                        textClassName={textClassName}
                    />
                </AnimatePresence>
            </div>
        </div>
    )
}

export default FlipFadeText
