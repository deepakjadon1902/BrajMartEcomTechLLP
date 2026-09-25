'use client'

import { UserStar } from 'lucide-react'

const teamMembers = [
  {
    image: '/team/kumar-anish.jpg',
    name: 'Kumar Anish',
    role: 'Founder & CEO · BrajMart EcomTech',
    bio: 'The Founder of the company, steering our long-term vision, core business strategy, and multi-branch ecosystem.',
  },
  {
    image: '/team/shraddha-tiwari.jpg',
    name: 'Shraddha Tiwari',
    role: 'Partner & HR Administrator',
    bio: 'Co-partner managing human resources administration, organizational culture, compliance, and team operations.',
  },
  {
    image: '/team/deepak-jadon.jpg',
    name: 'Deepak Jadon',
    role: 'Technical Lead & Engineering Head',
    bio: 'Technical core who handles all full-stack web development, system architecture, cloud deployment, and engineering work.',
  },
  {
    image: '/team/manoj-kumar.jpg',
    name: 'Manoj Kumar',
    role: 'Head of Marketing',
    bio: 'Leading digital marketing, social media marketing campaigns, technical SEO, brand engagement, and audience growth.',
  },
  {
    image: '/team/shivangi-mishra.jpg',
    name: 'Shivangi Mishra',
    role: 'HR Executive',
    bio: 'Directing talent operations, recruitment workflows, team onboarding, and internal human resources execution.',
  },
  {
    image: '/team/suman-gupta.png',
    name: 'Suman Gupta',
    role: 'Editing Head',
    bio: 'Leading editing workflows, content refinement, quality checks, and polished media output across the team\'s creative work.',
  },
]

export default function TeamSection() {
  const marqueeMembers = [...teamMembers, ...teamMembers]

  return (
    <section className="team-section">
      <div className="team-heading">
        <div className="team-badge" aria-hidden="true"><UserStar size={24} /></div>
        <p className="section-label">Team</p>
        <h2>People behind<br /><em>the ecosystem.</em></h2>
        <p>BrajMart EcomTech is shaped by a compact team working across commerce, marketing, development, and creator-led technology media.</p>
      </div>

      <div className="team-marquee" aria-label="BrajMart EcomTech team members">
        <div className="team-marquee-fade left" aria-hidden="true" />
        <div className="team-marquee-fade right" aria-hidden="true" />
        <div className="team-marquee-track">
          {marqueeMembers.map((member, index) => (
            <article className="team-member-card" key={`${member.name}-${index}`}>
              <div className="team-photo-wrap">
                <img src={member.image} alt={`${member.name} portrait`} />
                <div className="team-photo-meta">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
              <p className="team-bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>

      <p className="team-note">Replace the placeholder profile artwork with original photos any time by keeping the same file names in <code>public/team</code>.</p>
    </section>
  )
}
