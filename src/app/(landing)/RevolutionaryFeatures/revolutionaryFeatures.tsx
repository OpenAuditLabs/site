import React from "react";
import RevFeatureCard from "@/components/landing/revFeaturesCard";
import { Cpu, Zap, DollarSign } from "lucide-react";

export default function RevolutionaryFeatures(): React.ReactElement {
  return (
    <section id="features" className="max-w-6xl mx-auto py-12 px-6">
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

        {/* Placeholder area for feature cards */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RevFeatureCard
              title="AI Powered Analysis"
              description="Advanced LLMs combined with static analysis detect vulnerabilities that traditional tools miss."
              Icon={Cpu}
            />

            <RevFeatureCard
              title="Instant Results"
              description="Get comprehensive audit reports in minutes, not months. Integrate into your CI/CD pipeline."
              Icon={Zap}
            />

            <RevFeatureCard
              title="Cost Effective"
              description="Professional audits at a fraction of the cost. No more choosing between security and budget."
              Icon={DollarSign}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
