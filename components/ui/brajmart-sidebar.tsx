"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// shadcn
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

// assets
import { Search, ArrowUpRight, ShoppingBag, TrendingUp, Cpu, Compass, Layers } from "lucide-react";

// ── Application Content Data for BrajMart EcomTech LLP ─────────────────────── //

export interface SidebarItem {
  title: string;
  count: number;
  href?: string;
  desc?: string;
}

export interface SidebarSection {
  title: string;
  icon?: React.ReactNode;
  items: SidebarItem[];
}

export const BRAJMART_APP_SECTIONS: SidebarSection[] = [
  {
    title: "Core Branches",
    items: [
      { title: "BrajMart Devotional", count: 8, href: "/collaborators", desc: "Devotional ecommerce from Vrindavan" },
      { title: "Liklet Agency", count: 6, href: "/what-we-do", desc: "Marketing, social growth & full-stack development" },
      { title: "BrajBuzz Tech", count: 5, href: "/collaborators", desc: "Consumer tech reviews, unboxings & YouTube media" },
      { title: "Liklet Tech Media", count: 4, href: "/what-we-do", desc: "Engineering blog, product architecture & tools" },
    ],
  },
  {
    title: "Ecommerce & Vrindavan",
    items: [
      { title: "Prasadam & Puja Essentials", count: 14, href: "/collaborators", desc: "Temple prasadam, dhoop & ritual items" },
      { title: "Spiritual Books & Malas", count: 18, href: "/collaborators", desc: "Bhagavad Gita, tulsi beads & chanting japa" },
      { title: "Deity Dress & Shringar", count: 12, href: "/collaborators", desc: "Authentic Vrindavan handcrafted poshak" },
      { title: "Braj Darshan Media", count: 9, href: "/collaborators", desc: "Pilgrimage guides, temple stories & vrindavan context" },
    ],
  },
  {
    title: "Digital Growth & Development",
    items: [
      { title: "Full-Stack Web Engineering", count: 7, href: "/what-we-do", desc: "React, Next.js, performant web platforms" },
      { title: "Performance Marketing", count: 9, href: "/what-we-do", desc: "Meta, Google ads & ROI-focused media spend" },
      { title: "Organic SEO & Content Engines", count: 11, href: "/what-we-do", desc: "Search authority, editorial systems & ranking" },
      { title: "UI/UX & Brand Identity", count: 8, href: "/work", desc: "Modern visual systems & conversion-tuned design" },
    ],
  },
  {
    title: "Technology & Media",
    items: [
      { title: "Gadget Reviews & Testing", count: 15, href: "/collaborators", desc: "Hands-on smartphones, wearables & desk gear" },
      { title: "YouTube Production", count: 22, href: "/collaborators", desc: "High-retention tech unboxings & honest verdicts" },
      { title: "Buyer Guides & Hardware", count: 10, href: "/collaborators", desc: "Curated recommendations & value picks" },
    ],
  },
  {
    title: "Corporate Navigation",
    items: [
      { title: "Homepage", count: 1, href: "/", desc: "Parent corporate overview" },
      { title: "What We Do", count: 1, href: "/what-we-do", desc: "Connected growth capabilities" },
      { title: "Featured Work", count: 1, href: "/work", desc: "Client case studies & portfolio" },
      { title: "Brand Ecosystem", count: 1, href: "/collaborators", desc: "BrajMart, Liklet & BrajBuzz Tech" },
      { title: "About Company", count: 1, href: "/about", desc: "Founders, vision & Vrindavan roots" },
      { title: "Privacy & Terms", count: 2, href: "/privacy", desc: "Legal & compliance policies" },
    ],
  },
];

const TOTAL_APP_ITEMS = BRAJMART_APP_SECTIONS.reduce(
  (acc, s) => acc + s.items.reduce((a, i) => a + i.count, 0),
  0,
);

//  ------------------------------ | BRAJMART APPLICATION SIDEBAR | ------------------------------  //

interface BrajMartSidebarProps {
  onItemSelect?: (item: SidebarItem) => void;
  className?: string;
}

export default function BrajMartSidebar({ onItemSelect, className = "" }: BrajMartSidebarProps) {
  const [search, setSearch] = useState("");
  const [activeItem, setActiveItem] = useState<string>("all");
  const navigate = useNavigate();

  const filtered = BRAJMART_APP_SECTIONS.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      (item.desc && item.desc.toLowerCase().includes(search.toLowerCase())) ||
      section.title.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0);

  const handleSelect = (itemTitle: string, href?: string, item?: SidebarItem) => {
    setActiveItem(itemTitle);
    if (item && onItemSelect) {
      onItemSelect(item);
    }
    if (href) {
      navigate(href);
    }
  };

  return (
    <div className={`w-full flex h-[540px] bg-background border p-4 rounded-xl shadow-lg ${className}`}>
      <aside className="flex w-full flex-col shrink-0 h-full border rounded-lg overflow-hidden bg-background">
        <Card className="mb-0 border-0 shadow-none rounded-none h-full flex flex-col">
          <CardHeader className="p-4 pb-3 border-b">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-serif font-bold italic">
                  B
                </span>
                <h4 className="text-sm font-bold tracking-tight text-foreground">
                  BrajMart Ecosystem
                </h4>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded">
                LLP
              </span>
            </div>
            
            {/* Search — matches ComponentSearch design */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search branches, services & media..."
                className="pl-9 py-2 h-9 text-xs rounded-md"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </CardHeader>

          <ScrollArea className="flex-1 h-[400px]">
            <CardContent className="flex-1 flex flex-col gap-2 p-3">
              {/* All Components / Overview row — matches ComponentList design */}
              <Button
                variant="ghost"
                onClick={() => handleSelect("all", "/what-we-do")}
                className={`flex items-center justify-between px-3 py-2.5 text-xs font-semibold rounded-md transition-colors w-full text-left h-auto ${
                  activeItem === "all"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2 font-semibold">
                  <Layers className="size-3.5" />
                  All Capabilities & Branches
                </span>
                <span className="text-[10px] opacity-70 px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10">
                  {TOTAL_APP_ITEMS}
                </span>
              </Button>

              {filtered.map((section) => (
                <div key={section.title} className="flex flex-col gap-1 mt-2">
                  <p className="px-3 text-[11px] text-start font-bold uppercase tracking-widest text-muted-foreground bg-muted/60 py-1.5 rounded-md sticky top-0 z-10 backdrop-blur-sm">
                    {section.title}
                  </p>
                  {section.items.map((item) => (
                    <Button
                      variant="ghost"
                      key={item.title}
                      onClick={() => handleSelect(item.title, item.href, item)}
                      className={`group flex flex-col items-start px-3 py-2 text-xs font-medium rounded-md transition-colors w-full text-left h-auto ${
                        activeItem === item.title
                          ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary"
                          : "text-foreground/80 hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="capitalize font-medium text-xs flex items-center gap-1.5">
                          {item.title}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-muted-foreground opacity-70">
                            {item.count}
                          </span>
                          <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      {item.desc && (
                        <span className="text-[10.5px] text-muted-foreground line-clamp-1 mt-0.5 font-normal">
                          {item.desc}
                        </span>
                      )}
                    </Button>
                  ))}
                </div>
              ))}
            </CardContent>
          </ScrollArea>
        </Card>
      </aside>
    </div>
  );
}
