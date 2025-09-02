import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Research(): React.ReactElement {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <div className="px-6">
        <div className="text-center">
          <h2
            className="mx-auto font-extrabold leading-tight"
            style={{
              color: "var(--foreground)",
              fontSize: "clamp(28px, 6.4vw, 48px)",
              maxWidth: "900px",
            }}
          >
            AI Built by Researchers,
            <br /> For Real-World Impact
          </h2>

          <p
            className="mt-4 mx-auto max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Our research team designed and trained the AI behind OpenAudit, so
            every feature is grounded in innovation and proven data
          </p>
        </div>

        {/* Two-column structure: left = description + CTA placeholder, right = image placeholder */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-stretch items-center">
          <div className="flex flex-col justify-center lg:h-full">
            <p
              className="text-lg lg:text-4xl leading-relaxed lg:leading-tight mb-6 font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Behind OpenAudit is a team of
              <br className="hidden lg:inline" />
              researchers and AI specialists who
              <br className="hidden lg:inline" />
              have published studies, trained
              <br className="hidden lg:inline" />
              models, and worked on cutting-
              <br className="hidden lg:inline" />
              edge projects. We don’t just use AI
              <br className="hidden lg:inline" /> — we create it.
            </p>

            {/* CTA buttons - set design-system foreground token to --border via CSS var on wrapper (no inline color) */}
            <div className="mt-6 [--primary-foreground:var(--foreground)]">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="w-full sm:w-auto">
                  <a
                    href="https://openauditlabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit OpenAuditLabs"
                  >
                    Visit OpenAuditLabs
                  </a>
                </Button>

                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href="/research#papers" aria-label="Read Research Paper">
                    Read Research Paper
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start lg:justify-center">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[420px] xl:h-[520px] lg:max-w-lg">
              <Image
                src="/image/research_image.svg"
                alt="Illustration showing research and AI development"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
