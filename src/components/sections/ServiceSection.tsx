"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Code, Target, Cpu, Wrench } from "lucide-react";

export function ServiceSection() {
  const services = [
    {
      id: "smart-contract-audits",
      title: "Smart Contract Audits",
      desc: "Solidity and Vyper audits for DeFi, NFT, DAO, and core infra.",
      Icon: Code,
    },
    {
      id: "threat-modeling",
      title: "Threat Modeling & Architecture Review",
      desc: "Model attack surfaces, trust boundaries, and invariants.",
      Icon: Target,
    },
    {
      id: "automated-analysis",
      title: "Automated Analysis & Coverage",
      desc: "Static/dynamic scans, fuzzing and test coverage assessment.",
      Icon: Cpu,
    },
    {
      id: "post-audit-support",
      title: "Post-Audit Support & Hardening",
      desc: "Remediation verification and deployment guidance.",
      Icon: Wrench,
    },
  ];

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

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Card
              key={s.id}
              className={`animate-in fade-in slide-in-from-bottom-6`}
              style={{
                animationDelay: `${i * 120 + 100}ms`,
                animationFillMode: "both",
                animationDuration: "700ms",
              }}
            >
              <CardHeader className="items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-lg"
                  style={{
                    background: "var(--service-card-icon-bg)",
                    border: "1px solid var(--service-card-icon-border)",
                  }}
                >
                  <s.Icon
                    width={16}
                    height={16}
                    aria-hidden="true"
                    style={{ color: "var(--service-card-icon)" }}
                  />
                </div>
                <CardTitle className="text-base">{s.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription>{s.desc}</CardDescription>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-sm font-medium"
                    style={{ color: "var(--navbar-btn-bg)" }}
                  >
                    Learn more in Methodology →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
