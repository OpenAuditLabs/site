import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
              {/* Badge placeholder: insert small label/pill (e.g. "Open Source") */}
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700">
                {/* TODO: insert badge text or component */}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-foreground">
              {/* TODO: Insert heading/title for the Open Source section */}
            </h2>

            {/* Intro paragraph */}
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-prose">
              {/* TODO: Insert intro paragraph or short description */}
            </p>

            {/* Action buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* Primary CTA - Contribute on GitHub */}
              <Button asChild size="default" className="rounded-md">
                <Link href="#" aria-label="Primary action">
                  {/* TODO: Primary CTA label (e.g. "Contribute on GitHub") */}
                </Link>
              </Button>

              {/* Secondary actions */}
              <Button
                asChild
                variant="outline"
                size="default"
                className="rounded-md"
              >
                <Link href="#" aria-label="Secondary action">
                  {/* TODO: Secondary CTA label (e.g. "Security Policy") */}
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="default"
                className="rounded-md"
              >
                <Link href="#" aria-label="Secondary action">
                  {/* TODO: Secondary CTA label (e.g. "Responsible Disclosure") */}
                </Link>
              </Button>

              {/* Tertiary small button */}
              <Button asChild variant="ghost" size="sm" className="mt-2">
                <Link href="#" aria-label="Tertiary action">
                  {/* TODO: Tertiary CTA label (e.g. "Join the Discussion") */}
                </Link>
              </Button>
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
