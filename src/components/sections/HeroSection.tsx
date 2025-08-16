import React from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
            <span className="block ">Secure Your</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Smart Contracts
            </span>
            <span className="block">with</span>
            <span className="block">OpenAuditLabs</span>
          </h1>
          <p className="mt-8 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl space-y-2">
            <span className="block">
              Transparent audits built on open-source best practices.
            </span>
            <span className="block">
              Protect your blockchain projects with comprehensive security
              analysis.
            </span>
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* Animated gradient Request Audit button with soft glowing border for both themes */}
            <div className="relative group">
              <span className="pointer-events-none absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 opacity-30 blur-sm transition-opacity duration-700 group-hover:opacity-50 animate-[borderGlow_2s_ease-in-out_infinite]" />
              <Button
                asChild
                size="lg"
                className="relative rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black dark:text-white font-semibold shadow-md hover:brightness-105 focus-visible:ring-0 border-2 border-transparent"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 50%",
                }}
              >
                <Link href="/audits" aria-label="Request an audit">
                  <span className="flex items-center gap-2">
                    Request Audit <ArrowRight className="size-4" />
                  </span>
                </Link>
              </Button>
            </div>
            {/* Outline View Reports button with improved hover text visibility for dark mode */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-lg border-cyan-400 text-cyan-700 dark:text-cyan-200 hover:text-cyan-950 dark:hover:text-white hover:border-cyan-300 hover:bg-cyan-400/20 transition-colors"
            >
              <Link href="/reports" aria-label="View audit reports">
                <span className="flex items-center gap-2">
                  <FileText className="size-4" /> View Reports
                </span>
              </Link>
            </Button>
          </div>
          {/* Stats row below the buttons, matching the picture, aligned left */}
          <div className="mt-8">
            <div className="flex gap-16 md:gap-24 lg:gap-32 text-left">
              <div>
                <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                  300+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Projects Secured
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                  $50M+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Value Protected
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
