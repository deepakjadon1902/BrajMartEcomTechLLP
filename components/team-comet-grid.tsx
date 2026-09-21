"use client"

import Image from "next/image"
import { CometCard } from "@/components/ui/comet-card"
import type { TeamRevealMember } from "@/components/ui/team-reveal-grid"

export function TeamCometGrid({ members }: { members: readonly TeamRevealMember[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member) => (
        <CometCard key={member.id}>
          <article className="group overflow-hidden rounded-[1.4rem] border border-border bg-card p-2 shadow-[0_24px_70px_-30px_hsl(var(--foreground)/.35)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-muted">
              {member.image ? <Image src={member.image} alt={member.imageAlt ?? member.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 220px" className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /> : null}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 via-foreground/15 to-transparent p-4 pt-16 text-background">
                <p className="font-mono text-[10px] uppercase tracking-[.2em] text-background/70">{member.role}</p>
                <h3 className="mt-1 text-lg font-medium tracking-tight">{member.name}</h3>
              </div>
            </div>
            <p className="min-h-16 px-3 pb-3 pt-4 text-sm leading-6 text-muted-foreground">{member.expertise}</p>
          </article>
        </CometCard>
      ))}
    </div>
  )
}
