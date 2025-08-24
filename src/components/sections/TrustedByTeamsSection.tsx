"use client";

import React from "react";
import { Globe, Server, Box, Database, Cpu } from "lucide-react";

export default function TrustedByTeamsSection() {
  const items = [
    { id: "web", Icon: Globe, label: "Web" },
    { id: "web3", Icon: Box, label: "Web3" },
    { id: "blockchain", Icon: Database, label: "Blockchain" },
    { id: "infra", Icon: Server, label: "Infrastructure" },
    { id: "ai", Icon: Cpu, label: "AI" },
  ];

  return (
    <section aria-label="Trusted by teams" className="w-full my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="bg-card border border-border rounded-lg p-6 md:p-8"
          style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
        >
          <div className="text-center mb-6">
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              Trusted by teams across the ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center justify-items-center">
            {items.map((it) => (
              <div key={it.id} className="w-full max-w-xs">
                <div
                  className="mx-auto flex items-center justify-center rounded-md p-3"
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "var(--feature-card-icon-bg)",
                    borderRadius: "var(--radius-md)",
                  }}
                  aria-hidden="true"
                >
                  <it.Icon
                    width={24}
                    height={24}
                    style={{ color: "var(--feature-pill-icon)" }}
                  />
                </div>

                <div className="mt-3 text-center">
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {it.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
