import Image from "next/image";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function OpenAuditAction(): React.ReactElement {
  return (
  <section id="open-audit-action" className="scroll-mt-24 max-w-6xl mx-auto py-12 px-6">
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

        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
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
            <Card
              className="rounded-xl shadow-md overflow-hidden py-0 max-w-[560px] w-full mx-auto"
              style={{
                backgroundColor: "var(--report-panel-bg)",
              }}
            >
              <CardHeader
                className="py-4 rounded-t-xl"
                style={{ backgroundColor: "var(--report-panel-header-bg)" }}
              >
                <CardTitle style={{ color: "var(--foreground)" }}>
                  Security Analysis Report
                </CardTitle>
                <CardDescription>Found 3 issues in your code</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 pt-6">
                {/* Critical */}
                <div
                  className="rounded-2xl border p-5"
                  style={{
                    backgroundColor: "var(--report-critical-bg)",
                    borderColor: "var(--report-critical-stroke)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span>
                        Critical
                      </span>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: "var(--foreground)" }}
                      >
                        Reentrancy Vulnerability
                      </div>
                      <p className="text-sm text-muted-foreground">
                        External call before state update allows reentrancy attacks
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      Line 11
                    </span>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="rounded-2xl border p-5"
                  style={{
                    backgroundColor: "var(--report-medium-bg)",
                    borderColor: "var(--report-medium-stroke)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span>Medium</span>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: "var(--foreground)" }}
                      >
                        Missing Access Control
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Function lacks proper access control modifiers
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      Line 8
                    </span>
                  </div>
                </div>

                {/* Small */}
                <div
                  className="rounded-2xl border p-5"
                  style={{
                    backgroundColor: "var(--report-small-bg)",
                    borderColor: "var(--report-small-stroke)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span>Small</span>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: "var(--foreground)" }}
                      >
                        Gas Optimization
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Consider using unchecked block for gas savings
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      Line 15
                    </span>
                  </div>
                </div>

                <p className="pt-6 text-sm text-muted-foreground mb-8">
                  Analysis completed in 0.8s
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
