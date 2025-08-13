"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alex Rodriguez",
    role: "Lead Security Auditor",
    description:
      "Former blockchain security researcher with 8+ years in cryptography",
    image: "/images/teamMember.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Smart Contract Specialist",
    description: "Expert in Solidity and formal verification methods",
    image: "/images/teamMember.jpg",
  },
  {
    name: "Michael Torres",
    role: "Security Operations Lead",
    description: "DevSecOps specialist focused on automated security testing",
    image: "/images/teamMember.jpg",
  },
  {
    name: "Emily Kim",
    role: "Research Director",
    description:
      "PhD in Computer Science, published researcher in blockchain security",
    image: "/images/teamMember.jpg",
  },
];

export default function TeamMemberSection() {
  return (
    <section
      className="team-section relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="team-heading"
      role="region"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2
            id="team-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Our Core Team
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our world-class team of blockchain security experts committed
            to protecting your digital assets
          </p>
        </header>

        {/* Team Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12"
          role="list"
        >
          {TEAM_MEMBERS.map((member, index) => (
            <li key={member.name} role="listitem">
              <TeamMemberCard member={member} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <article className="team-member-card group flex flex-col items-center text-center focus-within:outline-2 focus-within:outline-cyan-400 rounded-lg p-4 -m-4">
      {/* Profile Image Container */}
      <div className="team-member-avatar relative mb-6 w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48">
        {/* Main border ring with gradient */}
        <div
          className={cn(
            "team-member-glow relative w-full h-full rounded-full p-1",
            "bg-gradient-to-br from-cyan-400 via-cyan-500 to-purple-500",
            "light:from-cyan-500 light:via-cyan-600 light:to-purple-600",
            "group-hover:from-cyan-300 group-hover:via-cyan-400 group-hover:to-purple-400",
            "dark:group-hover:from-cyan-300 dark:group-hover:via-cyan-400 dark:group-hover:to-purple-400",
            "transition-all duration-300 ease-out",
            "shadow-lg shadow-cyan-500/25 dark:shadow-cyan-500/40",
            "group-hover:shadow-xl group-hover:shadow-cyan-500/40 dark:group-hover:shadow-cyan-500/60"
          )}
        >
          {/* Inner container for image */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900">
            <Image
              src={member.image}
              alt={`Portrait of ${member.name}, ${member.role} at our company`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              priority={index < 2}
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 176px, 192px"
            />

            {/* Subtle inner glow overlay */}
            <div
              className={cn(
                "absolute inset-0 rounded-full",
                "bg-gradient-to-t from-cyan-500/10 via-transparent to-purple-500/5",
                "opacity-0 group-hover:opacity-100",
                "transition-opacity duration-300"
              )}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Member Info */}
      <div className="space-y-2 md:space-y-3">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight transition-colors duration-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-400">
          {member.name}
        </h3>

        <p className="text-base md:text-lg font-medium text-cyan-500 dark:text-cyan-400 transition-all duration-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 group-hover:scale-105">
          {member.role}
        </p>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto transition-colors duration-200 group-hover:text-foreground/90 dark:group-hover:text-foreground/80">
          {member.description}
        </p>
      </div>
    </article>
  );
}
