"use client";

import React from "react";

interface ProtocolBadgeProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

interface StatCardProps {
  value: string;
  label: string;
  color: "cyan" | "purple" | "violet";
  className?: string;
  style?: React.CSSProperties;
}

const ProtocolBadge: React.FC<ProtocolBadgeProps> = ({
  name,
  className = "",
  style,
}) => {
  return (
    <div
      className={`
        inline-flex items-center px-4 py-2.5 rounded-full
        bg-card/50 border border-border/50
        backdrop-blur-sm
        text-sm font-medium
        text-muted-foreground
        hover:bg-card hover:border-border
        hover:text-foreground
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-md
        group cursor-pointer
        ${className}
      `}
      style={style}
      role="button"
      tabIndex={0}
      aria-label={`${name} protocol`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          // Handle click action if needed
        }
      }}
    >
      <span className="group-hover:tracking-wide transition-all duration-300">
        {name}
      </span>
    </div>
  );
};

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  color,
  className = "",
  style,
}) => {
  const colorClasses = {
    cyan: {
      text: "text-cyan-500 dark:text-cyan-400",
      glow: "hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20",
      border: "hover:border-cyan-500/30 dark:hover:border-cyan-400/30",
    },
    purple: {
      text: "text-purple-500 dark:text-purple-400",
      glow: "hover:shadow-purple-500/20 dark:hover:shadow-purple-400/20",
      border: "hover:border-purple-500/30 dark:hover:border-purple-400/30",
    },
    violet: {
      text: "text-violet-500 dark:text-violet-400",
      glow: "hover:shadow-violet-500/20 dark:hover:shadow-violet-400/20",
      border: "hover:border-violet-500/30 dark:hover:border-violet-400/30",
    },
  };

  const colorClass = colorClasses[color];

  return (
    <div
      className={`
        flex flex-col items-center text-center
        p-6 rounded-xl
        bg-card border border-border
        backdrop-blur-sm
        hover:bg-card/80
        ${colorClass.border}
        hover:shadow-lg ${colorClass.glow}
        transition-all duration-300 ease-in-out
        hover:scale-105
        group
        ${className}
      `}
      style={style}
      role="article"
      aria-labelledby={`stat-${label.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div
        className={`
          text-4xl md:text-5xl font-bold mb-2
          ${colorClass.text}
          group-hover:scale-110
          transition-transform duration-300
        `}
        id={`stat-${label.replace(/\s+/g, "-").toLowerCase()}`}
      >
        {value}
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export function TrustedLeadingProtocols() {
  const protocols = [
    "Ethereum",
    "Polygon",
    "Chainlink",
    "Arbitrum",
    "Optimism",
    "Avalanche",
    "Solana",
    "BSC",
  ];

  const stats = [
    {
      value: "$2.5B+",
      label: "Total Value Secured",
      color: "cyan" as const,
    },
    {
      value: "99.9%",
      label: "Accuracy Rate",
      color: "purple" as const,
    },
    {
      value: "Zero",
      label: "Post-Audit Exploits",
      color: "violet" as const,
    },
  ];

  return (
    <section
      className="
        relative py-16 md:py-24 lg:py-32
        bg-gradient-to-br from-background via-background to-muted/20
        overflow-hidden
      "
      aria-labelledby="trusted-protocols-title"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.2) 1px, transparent 0)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            id="trusted-protocols-title"
            className="
              text-4xl md:text-5xl lg:text-6xl font-bold mb-6
              bg-gradient-to-r from-foreground via-primary to-primary/80
              bg-clip-text text-transparent
              leading-tight
            "
          >
            Trusted by Leading Protocols
          </h2>
          <p
            className="
            text-lg md:text-xl
            text-muted-foreground
            max-w-4xl mx-auto
            leading-relaxed
          "
          >
            We secure smart contracts across multiple blockchain ecosystems,
            working with industry-leading protocols and platforms
          </p>
        </div>

        {/* Protocol Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 md:mb-20">
          {protocols.map((protocol, index) => (
            <ProtocolBadge
              key={protocol}
              name={protocol}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
                animationDuration: "600ms",
              }}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              color={stat.color}
              className="animate-in fade-in slide-in-from-bottom-6"
              style={{
                animationDelay: `${index * 200 + 600}ms`,
                animationFillMode: "both",
                animationDuration: "800ms",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
