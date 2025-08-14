"use client";

import React from "react";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Reusable post type for strong typing and maintainability
type PostCard = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string; // ISO or human readable; rendered as-is for demo
  readTime: string; // e.g., "8 min read"
  // Tailwind gradient classes for the header ribbon
  gradient: string;
};

const posts: PostCard[] = [
  {
    slug: "/blog/defi-critical-vulnerabilities-2024",
    category: "Security Analysis",
    title: "Critical Vulnerabilities in DeFi Protocols: 2024 Analysis",
    excerpt:
      "Our comprehensive analysis of the most critical security vulnerabilities found in DeFi protocols this year and how to prevent them.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    gradient: "from-cyan-500 via-sky-500 to-fuchsia-500",
  },
  {
    slug: "/blog/smart-contract-audit-checklist",
    category: "Best Practices",
    title: "Smart Contract Audit Checklist: Complete Guide",
    excerpt:
      "A step-by-step checklist covering everything you need to know before launching your smart contract to mainnet.",
    date: "Dec 10, 2024",
    readTime: "12 min read",
    gradient: "from-fuchsia-500 via-violet-500 to-cyan-500",
  },
  {
    slug: "/blog/formal-verification-vs-testing",
    category: "Technical Deep Dive",
    title: "Formal Verification vs Traditional Testing",
    excerpt:
      "Comparing formal verification methods with traditional testing approaches for smart contract security validation.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    gradient: "from-violet-500 via-fuchsia-500 to-cyan-500",
  },
];

export function LatestBlogSection() {
  return (
    <section
      aria-labelledby="latest-blog-heading"
      className="relative w-full bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
        {/* Heading */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="latest-blog-heading"
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Latest Blog and Insights
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Stay updated with the latest trends, threats, and best practices in
            blockchain security
          </p>
        </header>

        {/* Cards grid */}
        <div
          className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Latest articles"
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-200",
                "hover:shadow-lg hover:border-cyan-400/40"
              )}
            >
              {/* Gradient banner header */}
              <div
                className={cn(
                  "relative h-28 w-full bg-gradient-to-r",
                  post.gradient
                )}
                aria-hidden="true"
              >
                <div className="absolute inset-0 opacity-40 mix-blend-overlay" />
                <div className="absolute left-4 top-4">
                  <Badge
                    aria-label={`Category: ${post.category}`}
                    className="backdrop-blur-sm bg-secondary/90 text-secondary-foreground border-white/10 dark:border-white/20"
                    variant="secondary"
                  >
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays aria-hidden className="size-4" />
                    <time dateTime={post.date}>{post.date}</time>
                  </span>
                  <span aria-hidden>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock aria-hidden className="size-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
                  <Link
                    href={post.slug}
                    className="focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div className="mt-5">
                  <Link
                    href={post.slug}
                    className="inline-flex items-center gap-1.5 text-primary hover:brightness-110"
                    aria-label={`Read more: ${post.title}`}
                  >
                    Read More <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent hover:brightness-110 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded font-semibold text-xl"
            aria-label="View all blog articles"
          >
            <span>View All Articles</span>
            <ArrowRight className="size-5 ml-1 text-primary" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
