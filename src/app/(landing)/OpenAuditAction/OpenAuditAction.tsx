import Image from "next/image";
import React from "react";

export default function OpenAuditAction(): React.ReactElement {
  return (
    <section id="open-audit-action" className="max-w-6xl mx-auto py-12 px-6">
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

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="rounded-lg">
            <Image
              src="/image/contractCode.svg"
              alt="Smart contract code with vulnerabilities"
              width={1200}
              height={1000}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div className="text-foreground">
            <h3 className="mb-4 text-3xl font-bold">From Code to Clarity</h3>
            <p className="mb-4 text-muted-foreground">
              Our analysis engine scans smart contract code end-to-end, flagging
              risky patterns like reentrancy, improper access control, unchecked
              external calls, and arithmetic mistakes. Findings are grouped by
              severity and accompanied by concise explanations, so engineers can
              quickly understand the root cause and impact without digging
              through stack traces.
            </p>
            <p className="text-muted-foreground">
              Results include prioritized remediation steps, example fixes, and
              gas-optimization suggestions to reduce costs while preserving
              security. Designed for developer workflows, the output is
              machine-readable for CI integration and human-friendly for code
              review — enabling continuous auditing, faster triage, and fewer
              false positives as the model learns from project-specific context.
              Replace this copy with the final marketing or product content when
              ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
