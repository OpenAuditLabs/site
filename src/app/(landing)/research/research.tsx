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
      </div>
    </section>
  );
}
