import React from "react";

export default function FeaturedReports() {
  return (
    <section
      aria-label="Featured reports"
      className="w-full my-20 py-12"
      // keep background transparent; colors come from globals.css variables
      style={{ background: "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            Featured Reports
          </h2>

          <p
            className="mt-3 text-sm sm:text-base max-w-prose"
            style={{ color: "var(--muted-foreground)" }}
          >
            Read transparent, reproducible reports across DeFi, NFTs, DAOs,
            infra and more.
          </p>
        </div>
      </div>
    </section>
  );
}
