import { Marquee } from "@/components/ui/marquee";
import { FlipFadeText } from "@/components/ui/flip-fade-text";

const teamMembers = [
  {
    name: "Kumar Anish",
    role: "Founder & CEO · BrajMart EcomTech",
    bio: "The Founder of the company, steering our long-term vision, core business strategy, and multi-branch ecosystem.",
    image: "/team/kumar-anish.jpg",
    badge: "Founder",
    imagePosition: "object-[center_12%]",
  },
  {
    name: "Shraddha Tiwari",
    role: "Partner & HR Administrator",
    bio: "Co-partner managing human resources administration, organizational culture, compliance, and team operations.",
    image: "/team/shraddha-tiwari.jpg",
    badge: "Partner",
    imagePosition: "object-top",
  },
  {
    name: "Deepak Jadon",
    role: "Technical Lead & Engineering Head",
    bio: "Technical core who handles all full-stack web development, system architecture, cloud deployment, and engineering work.",
    image: "/team/deepak-jadon.jpg",
    badge: "Tech Pillar",
    imagePosition: "object-top",
  },
  {
    name: "Manoj Kumar",
    role: "Head of Marketing",
    bio: "Leading digital marketing, social media marketing campaigns, technical SEO, brand engagement, and audience growth.",
    image: "/team/manoj-kumar.jpg",
    badge: "Marketing",
    imagePosition: "object-center",
  },
  {
    name: "Shivangi Mishra",
    role: "HR Executive",
    bio: "Directing talent operations, recruitment workflows, team onboarding, and internal human resources execution.",
    image: "/team/shivangi-mishra.jpg",
    badge: "HR Exec",
    imagePosition: "object-[center_20%]",
  },
];

export default function Component() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 dark:bg-background border-y border-neutral-200/80 dark:border-neutral-800">
      <div>
        <svg
          className="absolute right-0 bottom-0 text-neutral-200 dark:text-neutral-800 pointer-events-none"
          fill="none"
          height="154"
          viewBox="0 0 460 154"
          width="460"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_494_1104)">
            <path
              d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="40"
            />
          </g>
          <defs>
            <clipPath id="clip0_494_1104">
              <rect fill="white" height="154" width="460" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 flex max-w-5xl flex-col items-center px-6 text-center lg:px-0">
          <div className="mb-4 inline-flex items-center gap-2 border border-black/30 py-1 px-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-black bg-white/90 shadow-sm">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-users"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            LEADERSHIP & CORE TEAM
          </div>

          <h2 className="relative mb-4 font-extrabold text-4xl text-black tracking-tight sm:text-5xl flex flex-wrap items-center justify-center gap-2.5">
            <span>Creative Leadership</span>
            <FlipFadeText 
              words={["TEAM", "MINDS", "VISION", "LEADERS"]} 
              className="inline-flex min-h-0 text-black font-serif italic" 
              textClassName="text-black font-serif italic" 
              interval={2700}
            />
          </h2>
          <p className="max-w-2xl text-black text-base md:text-lg font-medium leading-relaxed">
            BrajMart EcomTech connects you with devotional products, growth systems, and technology media, empowering modern digital commerce.
          </p>
        </div>

        {/* Movable Stream: Continuous Right-to-Left Ticker with Hover Color Pop */}
        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-24 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-background dark:via-background/80" />
          <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-24 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-background dark:via-background/80" />

          <Marquee className="[--gap:1.75rem] py-4" pauseOnHover={false} repeat={5}>
            {teamMembers.map((member) => (
              <div
                className="group flex w-[280px] shrink-0 flex-col"
                key={member.name}
              >
                <div className="team-card-inner relative h-[380px] w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-md border border-neutral-200/80 dark:border-neutral-800 cursor-pointer">
                  {/* Image with high-res display */}
                  <img
                    alt={member.name}
                    className={`h-full w-full object-cover ${member.imagePosition || "object-center"} transition-transform duration-500 group-hover:scale-105`}
                    src={member.image}
                  />
                  {/* Category / Role Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/80 backdrop-blur-md text-white border border-white/20 shadow-sm">
                      {member.badge}
                    </span>
                  </div>
                  {/* Bottom Info Gradient Overlay with pure white text on dark background */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent p-5 text-white">
                    <h3 className="font-bold text-white text-lg tracking-tight m-0 drop-shadow">
                      {member.name}
                    </h3>
                    <p className="text-white text-xs font-semibold mt-1 drop-shadow-sm">
                      {member.role}
                    </p>
                    <p className="text-white/85 text-[11px] mt-2 line-clamp-2 leading-relaxed font-normal">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="mx-auto mt-16 max-w-3xl px-6 text-center lg:px-0">
          <p className="mb-6 font-semibold text-lg text-black leading-relaxed md:text-xl">
            &ldquo;Building sustainable commerce, modern tech media, and high-impact digital solutions with discipline and integrity across every branch we operate.&rdquo;
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-black shadow-md">
              <img
                alt="Kumar Anish"
                className="h-full w-full object-cover object-[center_12%]"
                src="/team/kumar-anish.jpg"
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-black text-base">
                Kumar Anish
              </p>
              <p className="text-black text-sm font-medium">
                Founder & CEO · BrajMart EcomTech LLP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
