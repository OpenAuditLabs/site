import React from "react";

export default function FeaturedReports() {
  const reports = [
    {
      id: "deltaswap-v2",
      title: "DeltaSwap v2",
      desc: "DEX core contracts, AMM math review, fee invariants, oracle integration.",
      tags: ["DeFi", "Oracle", "L2"],
      href: "#",
    },
    {
      id: "musenft-launchpad",
      title: "MuseNFT Launchpad",
      desc: "Minting flows, metadata integrity, royalties handling, marketplace hooks.",
      tags: ["NFT"],
      href: "#",
    },
    {
      id: "civicdao-treasury",
      title: "CivicDAO Treasury",
      desc: "Governance modules, timelock correctness, proposer/queue constraints.",
      tags: ["DAO", "Governance"],
      href: "#",
    },
  ];

  return (
    <section
      aria-label="Featured reports"
      className="w-full my-20 py-12"
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

        <div className="mt-8">
          {/*
            Grid layout: cards are displayed in a responsive grid. The
            horizontal scroller has been removed; a scroller can be added in a
            follow-up PR if desired. Styling still uses existing CSS variables
            and utility classes (no new globals or hard-coded colors).
          */}

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((r) => (
              <article
                key={r.id}
                aria-labelledby={`${r.id}-title`}
                tabIndex={0}
                className="feature-card bg-card border border-border rounded-lg p-6 shadow-sm transition-transform duration-300 will-change-transform focus:outline-none focus-visible:ring"
                style={{
                  background: "var(--feature-pill-bg)",
                  boxShadow: "var(--feature-pill-shadow)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3
                      id={`${r.id}-title`}
                      className="text-lg font-semibold leading-6"
                      style={{ color: "var(--foreground)" }}
                    >
                      {r.title}
                    </h3>

                    <p
                      className="mt-3 text-sm leading-6 max-w-prose"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {r.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: "var(--service-badge-bg)",
                            color: "var(--service-badge-text)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium"
                      style={{ color: "var(--navbar-btn-bg)" }}
                    >
                      Read Report ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
