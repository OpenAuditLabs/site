import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      aria-label="site-footer"
      className="relative border-t border-border/60 bg-primary"
    >
      {/* Subtle backdrop pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(80,200,160,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand column - spans more on desktop */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                  OpenAudit
                </h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md">
                  AI-Driven Auditing Solution
                </p>
              </div>

              {/* Additional brand info */}
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="h-2 rounded-full bg-primary/60" />
                Trusted by modern teams worldwide
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            {/* Quick Links column */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold tracking-wide text-foreground/90 uppercase">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {[
                  { href: "/#features", label: "Features" },
                  { href: "/#pricing", label: "Pricing" },
                  { href: "/openauditlabs", label: "OpenAuditLabs" },
                  { href: "/audits", label: "audits" },
                  { href: "/#contact", label: "Contact" },
                  { href: "/tos", label: "ToS" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center text-sm text-muted-foreground transition-all duration-300 ease-out hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background rounded-md px-1 py-0.5"
                    aria-label={link.label}
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary/60 transition-all duration-300 ease-out group-hover:w-full" />
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Socials column */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold tracking-wide text-foreground/90 uppercase">
                Connect
              </h4>
              <nav className="space-y-3">
                {[
                  { href: "https://www.facebook.com/", label: "Facebook" },
                  { href: "https://www.instagram.com/", label: "Instagram" },
                  { href: "https://zora.co/", label: "Zora" },
                  { href: "https://x.com/", label: "Twitter" },
                  { href: "https://www.youtube.com/", label: "YouTube" },
                  { href: "https://farcaster.com/", label: "Farcaster" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center text-sm text-muted-foreground transition-all duration-300 ease-out hover:text-foreground hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background rounded-md px-1 py-0.5"
                    aria-label={`Open in new tab: ${link.label}`}
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary/60 transition-all duration-300 ease-out group-hover:w-full" />
                    </span>
                    <svg
                      className="ml-1 h-3 w-3 opacity-0 transition-all duration-300 ease-out group-hover:opacity-60 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Resources column */}
            <div className="space-y-6 col-span-2 lg:col-span-1">
              <h4 className="text-sm font-semibold tracking-wide text-foreground/90 uppercase">
                Resources
              </h4>
              <nav className="space-y-3">
                {[
                  {
                    href: "https://www.researchgate.net/",
                    label: "Research Gate",
                  },
                  { href: "/privacy", label: "Privacy Policy" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center text-sm text-muted-foreground transition-all duration-300 ease-out hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background rounded-md px-1 py-0.5"
                    aria-label={
                      link.href.startsWith("http")
                        ? `Open in new tab: ${link.label}`
                        : link.label
                    }
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary/60 transition-all duration-300 ease-out group-hover:w-full" />
                    </span>
                    {link.href.startsWith("http") && (
                      <svg
                        className="ml-1 h-3 w-3 opacity-0 transition-all duration-300 ease-out group-hover:opacity-60 group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Elegant divider with gradient */}
        <div className="mt-16 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <p className="text-sm text-muted-foreground">
              Copyright © {new Date().getFullYear()} OpenAudit
            </p>
            <span className="hidden sm:block text-muted-foreground/40">•</span>
            <p className="text-xs text-muted-foreground/80">
              All rights reserved
            </p>
          </div>

          {/* Social links or additional info */}
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground/60">Built with</span>
            <span className="text-xs text-muted-foreground/80 font-medium">:))</span>
            <span className="text-xs text-muted-foreground/60">
              for modern teams
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
