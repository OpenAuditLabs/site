"use client"
import React, { useState, useEffect, useRef } from "react";
import RevFeatureCard from "@/components/landing/revFeaturesCard";
import { Cpu, Zap, DollarSign, ShieldCheck, Code, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
  Icon: React.ElementType;
  category: string;
}

const allFeatures: Feature[] = [
  {
    title: "AI Powered Analysis",
    description: "Advanced LLMs combined with static analysis detect vulnerabilities that traditional tools miss.",
    Icon: Cpu,
    category: "AI",
  },
  {
    title: "Instant Results",
    description: "Get comprehensive audit reports in minutes, not months. Integrate into your CI/CD pipeline.",
    Icon: Zap,
    category: "Speed",
  },
  {
    title: "Cost Effective",
    description: "Professional audits at a fraction of the cost. No more choosing between security and budget.",
    Icon: DollarSign,
    category: "Cost",
  },
  {
    title: "Comprehensive Security",
    description: "From reentrancy to access control, our audits cover a wide spectrum of known vulnerabilities.",
    Icon: ShieldCheck,
    category: "Security",
  },
  {
    title: "Developer Friendly",
    description: "Detailed reports with actionable insights and code examples to help you fix issues quickly.",
    Icon: Code,
    category: "Developer Experience",
  },
  {
    title: "Innovative Solutions",
    description: "Leveraging the latest in blockchain security research to provide cutting-edge protection.",
    Icon: Lightbulb,
    category: "Innovation",
  },
];

export default function RevolutionaryFeatures({ id }: { id: string }): React.ReactElement {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const filteredFeatures = React.useMemo(() => {
    if (activeCategory === "All") {
      return allFeatures;
    } else {
      return allFeatures.filter((feature) => feature.category === activeCategory);
    }
  }, [activeCategory, allFeatures]);

  return (
  <section id={id} className="scroll-mt-24 max-w-6xl mx-auto py-12 px-6">
      <div className="px-6">
        <div className="text-center">
          <h2
            className="mx-auto font-extrabold leading-tight"
            style={{
              color: "var(--foreground)",
              fontSize: "clamp(28px, 6.4vw, 48px)",
              maxWidth: "900px",
            }}
          >
            Revolutionary Features
          </h2>

          <p
            className="mt-4 mx-auto max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Experience the future of smart contract security with features
            designed for the modern blockchain developer.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["All", ...Array.from(new Set(allFeatures.map((f) => f.category)))].map(
            (category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                {category}
              </Button>
            )
          )}
        </div>

        {/* Feature cards area */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature, index) => (
              <FeatureCardWithAnimation key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardWithAnimationProps {
  feature: Feature;
  index: number;
}

const FeatureCardWithAnimation: React.FC<FeatureCardWithAnimationProps> = ({ feature, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  const animationClass = isVisible ? "animate-fade-in" : "opacity-0";
  const delay = index * 0.1; // Staggered animation delay

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${animationClass}`}
      style={{
        transitionDelay: `${delay}s`,
        // Fallback for users who prefer reduced motion
        "@media (prefers-reduced-motion)": { transition: "none", opacity: 1 },
      } as React.CSSProperties}
    >
      <RevFeatureCard
        title={feature.title}
        description={feature.description}
        Icon={feature.Icon}
      />
    </div>
  );
};