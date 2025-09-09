import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer aria-label="site-footer" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand / description column */}
          <div>
            <h3 className="text-2xl font-medium">OpenAudit</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              AI-Driven auditing solution
            </p>
          </div>

          {/* Link column 1 (placeholder structure) */}
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/features"
                  className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded"
                  aria-label="Features"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded"
                  aria-label="Pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/openauditlabs"
                  className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded"
                  aria-label="OpenAuditLabs"
                >
                  OpenAuditLabs
                </Link>
              </li>
            </ul>
          </div>

          {/* Link column 2 (placeholder structure) */}
          <div>
            <h4 className="text-sm font-semibold">Socials</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded"
                  aria-label="Open in new tab: Twitter"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded"
                  aria-label="Open in new tab: YouTube"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.researchgate.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded"
                  aria-label="Open in new tab: ResearchGate"
                >
                  Research Gate
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} OpenAudit — All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded"
                aria-label="Privacy policy"
              >
                Privacy
              </Link>
              <span className="text-sm text-muted-foreground">·</span>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded"
                aria-label="Terms of service"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
