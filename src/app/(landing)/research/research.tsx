import React from "react";

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

            {/* CTA buttons will be added here in the next PR. Example placeholder: */}
            <div>{/* CTA button(s) will be added here in the next PR */}</div>
          </div>

          <div className="flex items-center justify-center">
            {/* Image placeholder — will be added in a future PR */}
          </div>
        </div>
      </div>
    </section>
  );
}
