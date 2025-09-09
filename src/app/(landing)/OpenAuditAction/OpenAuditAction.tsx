import React from "react";

export default function OpenAuditAction(): React.ReactElement {
  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
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
            See OpenAudit In Action
          </h2>

          <p
            className="mt-4 mx-auto max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Watch how our AI engine instantly identifies vulnerabilities in
            smart contracts.
          </p>
        </div>

        {/* Placeholder area for interactive demo + report */}
        {/* that will be implemented here */}
        <div className="mt-12">
          {/* Demo UI (code editor + report) will be added here in a follow-up PR. */}
        </div>
      </div>
    </section>
  );
}
