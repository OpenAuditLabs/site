import React from "react";

export function ServiceSection() {
  return (
    <section aria-label="Services" className="w-full my-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4"
            style={{
              background: "var(--service-badge-bg)",
              color: "var(--service-badge-text)",
              border: "1px solid var(--border)",
            }}
          >
            Services
          </span>

          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Auditing tailored to DeFi, NFTs, DAOs, and core infra.
          </h2>

          <p
            className="text-base max-w-prose"
            style={{ color: "var(--muted-foreground)" }}
          >
            We meet teams where they are and apply the right mix of automated
            and manual techniques.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
