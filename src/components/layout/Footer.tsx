"use client"
import React, { useState } from "react";
import Link from "next/link";
import PrivacyPolicyModal from "@/components/common/PrivacyPolicyModal";
import ToSModal from "@/components/common/ToSModal";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [tosOpen, setTosOpen] = useState(false);

  return (
    <footer
      aria-label="site-footer"
      className="relative border-t border-border bg-primary shadow-inner text-white"
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
                <h3 className="text-7xl font-semibold tracking-tight text-white">OpenAudit</h3>
                <p className="mt-4 text-3xl text-white leading-relaxed max-w-md">AI-Driven Auditing Solution</p>
              </div>
              {/* Additional brand info */}
              <div className="flex items-center text-xl text-white">
                <div className="h-2 rounded-full bg-primary/60" />
                Trusted by modern teams worldwide
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            {/* Quick Links column */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold tracking-wide text-white uppercase">Quick Links</h4>
              <nav className="space-y-3">
                {[
                  { href: "/#features", label: "Features" },
                  { href: "/#pricing", label: "Pricing" },
                  { href: "/openauditlabs", label: "OpenAuditLabs" },
                  { href: "/audits", label: "audits" },
                  { href: "/#contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center text-sm text-white transition-all duration-300 ease-out hover:text-white hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background rounded-md px-1 py-0.5"
                    aria-label={link.label}
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
                <button
                  type="button"
                  className="group flex items-center text-sm text-white transition-all duration-300 ease-out hover:text-white hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background rounded-md px-1 py-0.5 cursor-pointer"
                  aria-label="Open Terms of Service Modal"
                  onClick={() => setTosOpen(true)}
                >
                  <span className="relative">
                    ToS
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
                </button>
              </nav>
            </div>
            {/* Socials column */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold tracking-wide text-white uppercase">Connect</h4>
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
                    className="group flex items-center text-sm text-white transition-all duration-300 ease-out hover:text-white hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background rounded-md px-1 py-0.5"
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
              <h4 className="text-sm font-semibold tracking-wide text-white uppercase">Resources</h4>
              <nav className="space-y-3">
                <button
                  type="button"
                  className="group flex items-center text-sm text-white transition-all duration-300 ease-out hover:text-white focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background rounded-md px-1 py-0.5 cursor-pointer"
                  aria-label="Open Privacy Policy Modal"
                  onClick={() => setPrivacyOpen(true)}
                >
                  <span className="relative">
                    Privacy Policy
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary/60 transition-all duration-300 ease-out group-hover:w-full" />
                  </span>
                </button>
                <Link
                  href="https://www.researchgate.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-sm text-white transition-all duration-300 ease-out hover:text-white focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background rounded-md px-1 py-0.5"
                  aria-label="Open in new tab: Research Gate"
                >
                  <span className="relative">
                    Research Gate
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
            <p className="text-sm text-white">Copyright © {new Date().getFullYear()} OpenAudit</p>
            <span className="hidden sm:block text-white/80">•</span>
            <p className="text-xs text-white/80">All rights reserved</p>
          </div>
          {/* Social links or additional info */}
          <div className="flex items-center gap-1">
            <span className="text-xs text-white">Built with</span>
            <span className="text-xs text-white font-medium">:))</span>
            <span className="text-xs text-white">for modern teams</span>
          </div>
        </div>
      </div>
      <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <ToSModal open={tosOpen} onClose={() => setTosOpen(false)} />
    </footer>
  );
}
