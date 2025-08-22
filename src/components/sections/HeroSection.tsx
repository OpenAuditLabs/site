import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Shield, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      aria-label="OpenAuditLabs hero"
      className="hero-section w-full bg-background min-h-screen pb-[100px] mb-5"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-36 flex items-start">
        <div className="max-w-3xl mx-auto text-center -mt-16">
          <h1 className="font-extrabold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-foreground mt-[5.5rem] md:mt-0 ">
            <span className="block">Open-source</span>
            <span
              className="block hero-heading-gradient-cta font-extrabold"
              aria-hidden="true"
            >
              smart contract
            </span>
            <span className="block">security,</span>
            <span
              className="block hero-heading-cta font-extrabold"
              aria-hidden="true"
            >
              built in the open.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            OpenAuditLabs provides community-driven audits, reproducible
            methodologies, and transparent reporting for Ethereum and EVM
            ecosystems.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative inline-flex">
              <span className="hero-cta-glow rounded-lg" aria-hidden="true" />
              <Button
                asChild
                size="hero"
                className="relative z-10 font-semibold shadow-md"
                style={{
                  backgroundColor: "var(--hero-cta-bg)",
                  color: "var(--hero-cta-text)",
                }}
              >
                <Link href="/audits" aria-label="Request an audit">
                  <span className="flex items-center gap-3">
                    <span>Request an Audit</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </span>
                </Link>
              </Button>
            </div>

            <Button
              asChild
              variant="outline"
              size="heroOutlineMobile"
              className="border-[1.5px] text-foreground/90"
            >
              <Link href="/" aria-label="View on GitHub">
                <span className="flex items-center gap-2">
                  <FileText size={18} aria-hidden="true" />
                  View on GitHub
                </span>
              </Link>
            </Button>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <Shield
                  size={18}
                  aria-hidden="true"
                  style={{ color: "var(--primary)" }}
                />
                <span className="text-sm text-muted-foreground">OSS ethos</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen
                  size={18}
                  aria-hidden="true"
                  style={{ color: "var(--chart-5)" }}
                />
                <span className="text-sm text-muted-foreground">
                  Transparent reports
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
