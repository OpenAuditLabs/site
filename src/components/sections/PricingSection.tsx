"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

// Pricing data structure
const pricingPlans = [
  {
    id: "basic",
    name: "Basic Protocol Audit",
    description: "Perfect for small projects and individual developers",
    price: 150,
    period: "Per Contract",
    popular: false,
    features: [
      "Static Code Analysis",
      "Basic Security Report",
      "48h Turnaround",
      "Standard Documentation",
      "Email Support",
    ],
    buttonText: "Select Plan",
    buttonVariant: "outline" as const,
    cardClassName: "",
  },
  {
    id: "advanced",
    name: "Advanced Protocol Audit",
    description: "Most popular choice for growing projects",
    price: 300,
    period: "Per Contract",
    popular: true,
    features: [
      "Everything in Basic",
      "Manual Code Review",
      "Gas Optimization Analysis",
      "Detailed Documentation",
      "24h Priority Support",
      "Re-audit After Fixes",
    ],
    buttonText: "Select Plan",
    buttonVariant: "default" as const,
    cardClassName:
      "border-cyan-500/20 dark:border-cyan-400/30 relative overflow-hidden",
  },
  {
    id: "enterprise",
    name: "Enterprise Security Suite",
    description: "Comprehensive security for large projects",
    price: 450,
    period: "Per Contract",
    popular: false,
    features: [
      "Everything in Advanced",
      "Custom Testing Framework",
      "Post-deployment Monitoring",
      "Emergency Response Team",
      "Custom Integration Support",
      "Ongoing Security Consultation",
    ],
    buttonText: "Select Plan",
    buttonVariant: "outline" as const,
    cardClassName: "",
  },
];

interface PricingCardProps {
  plan: (typeof pricingPlans)[0];
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  return (
    <Card
      className={cn(
        "group relative transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl dark:hover:shadow-cyan-500/10",
        "pricing-card",
        plan.cardClassName,
        plan.popular &&
          "border-2 border-gradient-to-br from-cyan-400 to-purple-500 dark:from-cyan-300 dark:to-purple-400"
      )}
      role="article"
      aria-labelledby={`plan-${plan.id}-title`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-10">
          <Badge
            className="pricing-popular-badge px-4 py-1 font-semibold text-sm"
            role="img"
            aria-label="Most popular plan"
          >
            ⭐ Most Popular
          </Badge>
        </div>
      )}

      {/* Gradient glow effect for popular plan */}
      {plan.popular && (
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
      )}

      <CardHeader className="text-center space-y-4 pb-8">
        <div className="space-y-2">
          <h3
            id={`plan-${plan.id}-title`}
            className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
          >
            {plan.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
            {plan.description}
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl md:text-5xl font-bold text-foreground transition-colors duration-300">
              ${plan.price}
            </span>
          </div>
          <p className="text-muted-foreground text-sm font-medium">
            {plan.period}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <Button
          className={cn(
            "w-full py-6 text-base font-semibold transition-all duration-300",
            plan.popular && "btn-gradient shadow-lg hover:shadow-xl",
            !plan.popular &&
              plan.buttonVariant === "outline" &&
              "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-black"
          )}
          variant={plan.popular ? "default" : plan.buttonVariant}
          size="lg"
          aria-label={`Select ${plan.name} plan for $${plan.price} ${plan.period}`}
        >
          {plan.buttonText}
        </Button>

        <div className="space-y-4">
          <ul className="space-y-3" role="list">
            {plan.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex items-start gap-3 text-sm"
                role="listitem"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 check-icon" aria-hidden="true" />
                </div>
                <span className="text-muted-foreground leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section
      className="py-20 px-4 bg-background relative overflow-hidden"
      aria-labelledby="pricing-title"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2
            id="pricing-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="text-cyan-500 dark:text-cyan-400">
              Choose What's Best for{" "}
            </span>
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text">
              You
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Flexible pricing plans designed to scale with your project needs
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            All plans include our standard security guarantees and post-audit
            support
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
