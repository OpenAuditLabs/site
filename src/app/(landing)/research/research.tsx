import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export type CTA = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "solid" | "outline";
};

export interface ResearchProps {
  imageSrc?: string;
  heading?: string;
  subheading?: string;
  body?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
}

const DEFAULTS: Required<
  Pick<ResearchProps, "imageSrc" | "heading" | "subheading" | "body">
> = {
  imageSrc: "/image/research_image.svg",
  heading: "AI Built by Researchers, For Real‑World Impact",
  subheading:
    "Our research team designed and trained the AI behind OpenAudit — every feature is grounded in innovation and proven data.",
  body: "Behind OpenAudit is a team of researchers and AI specialists who have published studies, trained models, and worked on cutting‑edge projects. We don’t just use AI — we create it.",
};

export default function Research({
  imageSrc = DEFAULTS.imageSrc,
  heading = DEFAULTS.heading,
  subheading = DEFAULTS.subheading,
  body = DEFAULTS.body,
  primaryCta,
  secondaryCta,
}: ResearchProps): React.ReactElement {
  return (
    <section
      aria-labelledby="research-heading"
  className="relative overflow-hidden py-10 sm:py-12"
    >
      {/* Decorative gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-0 top-0 w-72 h-72 bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-full blur-3xl opacity-60 transform -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 via-transparent to-transparent rounded-full blur-3xl opacity-50 transform translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2
            id="research-heading"
            className="mx-auto font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl text-center"
            style={{ color: "var(--foreground)" }}
          >
            {heading}
          </h2>

          <p className="mt-3 mx-auto max-w-3xl text-base sm:text-lg md:text-lg text-muted-foreground font-medium text-center leading-snug">
            {subheading}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-large font-bold leading-relaxed text-foreground mb-20">
              {body}
            </p>

            <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {primaryCta ? (
                primaryCta.external ? (
                  <Button asChild className="w-full sm:w-auto">
                    <a
                      href={primaryCta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={primaryCta.label}
                    >
                      {primaryCta.label}
                    </a>
                  </Button>
                ) : (
                  <Button asChild className="w-full sm:w-auto">
                    <Link href={primaryCta.href} aria-label={primaryCta.label}>
                      {primaryCta.label}
                    </Link>
                  </Button>
                )
              ) : (
                <Button asChild className="w-full sm:w-auto">
                  <a
                    href="https://openauditlabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit OpenAuditLabs
                  </a>
                </Button>
              )}

              {secondaryCta ? (
                secondaryCta.external ? (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <a
                      href={secondaryCta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {secondaryCta.label}
                    </a>
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                )
              ) : (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="/research#papers">Read Research Paper</Link>
                </Button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg h-64 sm:h-80 md:h-96 lg:h-[480px] rounded-xl overflow-hidden">
              <Image
                src={imageSrc}
                alt="Illustration showing research and AI development"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
