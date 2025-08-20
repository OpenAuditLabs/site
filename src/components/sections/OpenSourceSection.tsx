import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// --- GitHub stats data shapes and placeholders -------------------------------------------------
// We export simple, well-typed arrays so the UI can render the stats card and notes.
// Values are intentionally left empty/null here — the live data will be filled in elsewhere.

export type GitHubStatKey = "stars" | "forks" | "issues" | string;

export interface GitHubStat {
  id: string; // unique id for iteration
  key: GitHubStatKey; // canonical key used when wiring live data
  label: string; // short label shown above the numeric value (e.g. "Stars")
  value?: number | null; // numeric value (left null until fetched)
  description?: string; // optional extra text for accessibility or tooltips
  iconName?: string; // lightweight reference to an icon (string), UI can map to actual icon component
  href?: string; // optional link (e.g. to the repo metrics)
}

export interface GitHubNote {
  id: string;
  text: string; // message shown in the notes area
  variant?: "info" | "warning" | "muted"; // optional styling hint
}

// Default list of stats to display (values intentionally not populated here)
export const GITHUB_STATS: GitHubStat[] = [
  {
    id: "stars",
    key: "stars",
    label: "Stars",
    value: null,
    description: "Number of stars on the repository",
    iconName: "star",
    href: "",
  },
  {
    id: "forks",
    key: "forks",
    label: "Forks",
    value: null,
    description: "Number of forks",
    iconName: "fork",
    href: "",
  },
  {
    id: "issues",
    key: "issues",
    label: "Issues",
    value: null,
    description: "Open issues count",
    iconName: "issue",
    href: "",
  },
];

// Default notes shown under the stats card (structure only)
export const GITHUB_NOTES: GitHubNote[] = [
  {
    id: "note-1",
    text: "Open issues welcome for report feedback, methodology proposals, and tooling improvements.",
    variant: "info",
  },
  {
    id: "note-2",
    text: "For sensitive findings, use our responsible disclosure workflow.",
    variant: "muted",
  },
];

/**
 * OpenSourceSection
 *
 * This file provides a clear, well-commented layout scaffold for the
 * Open Source section shown in the design attachment. The actual copy,
 * images, and live GitHub data will be filled in later.
 *
 * Structure (left-to-right):
 *  - Badge / small label
 *  - Heading
 *  - Intro paragraph
 *  - Primary and secondary action buttons
 *  - Right-side card with GitHub stats and notes
 *
 * Accessibility notes:
 *  - The section has an aria-label describing its purpose.
 *  - Interactive elements are regular links/buttons and will be wired
 *    up later to their proper URLs.
 */

export function OpenSourceSection() {
  return (
    <section
      aria-label="Open source and community"
      className="w-full my-20 py-12"
      // keep background transparent; colors come from globals.css variables
      style={{ background: "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Grid container: 2 columns on large screens.
          - Left column: intro, badge, heading, paragraph, buttons
          - Right column: card with GitHub stats / links
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column */}
          <div className="lg:col-span-7">
            {/* Small badge / label */}
            <div className="mb-3">
              {/* Use CSS variables from globals.css for badge background and text color */}
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: "var(--service-badge-bg)",
                  color: "var(--service-badge-text)",
                }}
              >
                Open Source
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-foreground">
              Built in public. Contributions welcome.
            </h2>

            {/* Intro paragraph */}
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-prose">
              We value transparency and reproducibility. Read our guidelines,
              open issues, submit PRs, and help shape open auditing practices.
            </p>

            {/* Action buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* Primary CTA - Contribute on GitHub (uses navbar CTA CSS variables) */}
              <Button
                asChild
                size="default"
                className="rounded-md"
                style={{
                  background: "var(--navbar-btn-bg)",
                  color: "var(--navbar-btn-text)",
                }}
              >
                <Link href="#" aria-label="Contribute on GitHub">
                  Contribute on GitHub
                </Link>
              </Button>

              {/* Secondary actions */}
              <Button
                asChild
                variant="outline"
                size="default"
                className="rounded-md"
              >
                <Link href="#" aria-label="Security Policy">
                  Security Policy
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="default"
                className="rounded-md"
              >
                <Link href="#" aria-label="Responsible Disclosure">
                  Responsible Disclosure
                </Link>
              </Button>

              {/* Tertiary button: same outline style as other secondary actions, placed on its own line */}
              <div className="w-full mt-2">
                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="rounded-md"
                >
                  <Link href="#" aria-label="Join the Discussion">
                    Join the Discussion
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right column: stats card */}
          <div className="lg:col-span-5">
            {/* Card container - visually separated box for stats/messages */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              {/* Card title placeholder */}
              <h3
                className="text-sm font-semibold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                {/* TODO: Card title (e.g. "GitHub Stats") */}
              </h3>

              {/* Stats grid placeholder: structure only, numeric content removed */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="rounded-md border bg-background p-4 text-center">
                  <div className="text-xs text-muted-foreground">
                    {/* TODO: metric label */}
                  </div>
                  <div className="mt-2 font-bold">
                    {/* TODO: metric value */}
                  </div>
                </div>
                <div className="rounded-md border bg-background p-4 text-center">
                  <div className="text-xs text-muted-foreground">
                    {/* TODO: metric label */}
                  </div>
                  <div className="mt-2 font-bold">
                    {/* TODO: metric value */}
                  </div>
                </div>
                <div className="rounded-md border bg-background p-4 text-center">
                  <div className="text-xs text-muted-foreground">
                    {/* TODO: metric label */}
                  </div>
                  <div className="mt-2 font-bold">
                    {/* TODO: metric value */}
                  </div>
                </div>
              </div>

              {/* Notes / bullets structure only */}
              <div className="space-y-3">
                <div className="rounded-md border bg-background p-3 text-sm text-muted-foreground">
                  {/* TODO: short note or bullet */}
                </div>

                <div className="rounded-md border bg-background p-3 text-sm text-muted-foreground">
                  {/* TODO: short note or bullet */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenSourceSection;
