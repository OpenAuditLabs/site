import React from "react";
import { Button } from "@/components/ui/button";

export default function Research(): React.ReactElement {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--foreground)" }}
            >
              Behind OpenAudit is a team of researchers and AI specialists who
              have published studies, trained models, and worked on cutting-edge
              projects. We don’t just use AI — we create it.
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
                  <a href="#" aria-label="Read Research Paper">
                    Read Research Paper
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* Image placeholder — will be added in a future PR */}
          </div>
        </div>
      </div>
    </section>
  );
}
