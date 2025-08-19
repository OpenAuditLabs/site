"use client";

import React from "react";

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
      </div>
    </section>
  );
}

export default MethodologySection;
