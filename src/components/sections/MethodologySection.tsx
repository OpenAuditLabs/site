"use client";

import React from "react";
import {
  ClipboardList,
  Search,
  Eye,
  Bug,
  FileText,
  GitMerge,
} from "lucide-react";

type Card = {
  id: string;
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const CARDS: Card[] = [
  {
    id: "scoping-assumptions",
    title: "Scoping & Assumptions",
    description:
      "Define scope, threat model, trust boundaries, and environment assumptions.",
    Icon: ClipboardList,
  },
  {
    id: "automated-scans",
    title: "Automated Scans & Coverage",
    description:
      "Run static/dynamic analysis and fuzzing; ensure baseline test coverage.",
    Icon: Search,
  },
  {
    id: "manual-review",
    title: "Manual Review & Invariant Reasoning",
    description:
      "Deep manual analysis, invariants, privilege boundaries, and economic security.",
    Icon: Eye,
  },
  {
    id: "exploit-simulation",
    title: "Exploit Simulation & PoC Validation",
    description:
      "Reproduce findings with proof-of-concept exploits and scenario testing.",
    Icon: Bug,
  },
  {
    id: "findings-recommendations",
    title: "Findings, Severity, Recommendations",
    description:
      "Document vulnerabilities, severity, and actionable remediations with references.",
    Icon: FileText,
  },
  {
    id: "remediation-verification",
    title: "Remediation Verification",
    description:
      "Verify fixes, update findings, and publish transparent diff in report.",
    Icon: GitMerge,
  },
];

export function MethodologySection() {
  return (
    <section aria-label="Methodology" className="w-full my-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4"
            style={{
              background: "var(--methodology-badge-bg)",
              color: "var(--methodology-badge-text)",
              border: "1px solid var(--border)",
            }}
          >
            Methodology
          </span>

          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            A transparent, stepwise approach designed for rigor and
            reproducibility.
          </h2>

          <p
            className="text-base max-w-prose"
            style={{ color: "var(--muted-foreground)" }}
          >
            We combine automated analysis (e.g., static/dynamic scans, fuzzing)
            with thorough manual review and reproducible PoCs to produce reports
            you can trust.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((c) => (
            <article
              key={c.id}
              tabIndex={0}
              aria-labelledby={`${c.id}-title`}
              className="feature-card bg-card border border-border rounded-lg p-6 shadow-sm transition-transform duration-300 will-change-transform focus:outline-none focus-visible:ring"
              style={{
                background: "var(--feature-pill-bg)",
                boxShadow: "var(--feature-pill-shadow)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <div className="flex flex-col gap-4 h-full">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-md feature-card-icon-bg"
                  style={{ background: "var(--feature-card-icon-bg)" }}
                  aria-hidden="true"
                >
                  <c.Icon
                    className="feature-icon"
                    width={20}
                    height={20}
                    aria-hidden="true"
                    style={{ color: "var(--feature-pill-icon)" }}
                  />
                </div>

                <div className="flex-1">
                  <h3
                    id={`${c.id}-title`}
                    className="text-lg font-semibold leading-6"
                    style={{ color: "var(--foreground)" }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-6 max-w-prose"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {c.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MethodologySection;
