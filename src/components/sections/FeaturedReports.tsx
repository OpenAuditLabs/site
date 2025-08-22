"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export type Report = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export default function FeaturedReports() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reports: Report[] = [
    {
      id: "deltaswap-v2",
      title: "DeltaSwap v2",
      description:
        "DEX core contracts, AMM math review, fee invariants, oracle integration.",
      tags: ["DeFi", "Oracle", "L2"],
      href: "#",
    },
    {
      id: "musenft-launchpad",
      title: "MuseNFT Launchpad",
      description:
        "Minting flows, metadata integrity, royalties handling, marketplace hooks.",
      tags: ["NFT"],
      href: "#",
    },
    {
      id: "civicdao-treasury",
      title: "CivicDAO Treasury",
      description:
        "Governance modules, timelock correctness, proposer/queue constraints.",
      tags: ["DAO", "Governance"],
      href: "#",
    },
    {
      id: "uniswap-v4",
      title: "Uniswap v4",
      description:
        "Hook architecture security, position manager, core pool functionality audit.",
      tags: ["DeFi", "AMM", "Hooks"],
      href: "#",
    },
    {
      id: "polygon-zkevm",
      title: "Polygon zkEVM",
      description:
        "Zero-knowledge proof system, state transition verification, bridge security.",
      tags: ["L2", "ZK", "Bridge"],
      href: "#",
    },
    {
      id: "compound-v3",
      title: "Compound v3",
      description:
        "Lending protocol security, interest rate model, liquidation mechanisms.",
      tags: ["DeFi", "Lending", "Oracle"],
      href: "#",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

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
          <div className="relative">
            {/* Navigation buttons */}
            <div className="absolute -top-12 right-0 flex gap-2 z-10">
              <button
                onClick={scrollLeft}
                className="p-2 rounded-lg border transition-colors duration-200"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 rounded-lg border transition-colors duration-200"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable container */}
            <div
              ref={scrollContainerRef}
              className="mt-10 flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {reports.map((r) => (
                <article
                  key={r.id}
                  aria-labelledby={`${r.id}-title`}
                  className="feature-card border rounded-lg p-6 shadow-sm transition-transform duration-300 will-change-transform focus:outline-none focus-visible:ring flex-none"
                  style={{
                    background: "var(--feature-pill-bg)",
                    boxShadow: "var(--feature-pill-shadow)",
                    borderRadius: "var(--radius-lg)",
                    borderColor: "var(--border)",
                    minWidth: "300px",
                    width: "300px",
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
                        {r.description}
                      </p>

                      <ul className="mt-4 flex flex-wrap gap-2" role="list">
                        {r.tags.map((t) => (
                          <li
                            key={t}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                            style={{
                              background: "var(--service-badge-bg)",
                              color: "var(--service-badge-text)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <a
                        href={r.href}
                        {...(r.href && r.href !== "#"
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        aria-label={`Read report: ${r.title}`}
                        className="text-sm font-medium flex items-center gap-1"
                        style={{ color: "var(--navbar-btn-bg)" }}
                      >
                        Read Report
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
