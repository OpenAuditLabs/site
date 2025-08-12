"use client";

import React from "react";
import CountUp from "react-countup";
import { Card } from "@/components/ui/card";
import { Code, Shield, GitBranch, Bug } from "lucide-react";

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: Code,
    value: 300,
    suffix: "k+",
    label: "Audits Completed",
    color: "text-blue-400",
  },
  {
    icon: Shield,
    value: 215,
    suffix: "k+",
    label: "Contracts Secured",
    color: "text-purple-400",
  },
  {
    icon: GitBranch,
    value: 200,
    suffix: "+",
    label: "Chains Supported",
    color: "text-pink-400",
  },
  {
    icon: Bug,
    value: 500,
    suffix: "k+",
    label: "Issues Avoided",
    color: "text-cyan-400",
  },
];

export function PortfolioStats() {
  return (
    <section className="portfolio-stats-section py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="portfolio-stat-card relative group overflow-hidden border-border bg-card transition-all duration-300"
            >
              <div className="portfolio-stat-content p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div
                    className={`portfolio-stat-icon ${stat.color} bg-muted border-border`}
                  >
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="portfolio-stat-number mb-2 text-foreground">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <div className="portfolio-stat-label text-muted-foreground">
                  {stat.label}
                </div>
              </div>
              <div className="portfolio-stat-glow" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
