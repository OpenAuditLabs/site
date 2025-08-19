import React from "react";
import { Square, Repeat, Cpu } from "lucide-react";

type Process = {
  id: string;
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const ITEMS: Process[] = [
  {
    id: "open-by-default",
    title: "Open by Default",
    description: "Transparent processes, public reports, and community review.",
    Icon: Square,
  },
  {
    id: "reproducible-audits",
    title: "Reproducible Audits",
    description: "PoCs, scripts, and steps you can run yourself.",
    Icon: Repeat,
  },
  {
    id: "continuous-hardening",
    title: "Continuous Hardening",
    description: "Post-audit guidance and verification, not one-off PDFs.",
    Icon: Cpu,
  },
];

export default function WorkingProcessSection() {
  return (
    <section
      aria-label="Working process"
      className="working-process w-full my-20 py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="working-process__wrp">
          {/* Animated border (dark-mode only) */}
          <div className="working-process__border" aria-hidden="true" />

          {/* Accessible heading for screen readers */}
          <h2 className="sr-only">How we work</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ITEMS.map((item) => (
              <article
                key={item.id}
                tabIndex={0}
                aria-labelledby={`${item.id}-title`}
                className="feature-card bg-card border border-border rounded-lg p-6 shadow-sm transition-transform duration-300 will-change-transform focus:outline-none focus-visible:ring"
                style={{
                  background: "var(--feature-pill-bg)",
                  boxShadow: "var(--feature-pill-shadow)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <div className="flex flex-col gap-4 h-full">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-md feature-card-icon-bg"
                    style={{ background: "var(--feature-card-icon-bg)" }}
                    aria-hidden="true"
                  >
                    <item.Icon
                      className="feature-icon"
                      width={20}
                      height={20}
                      aria-hidden="true"
                      style={{ color: "var(--feature-pill-icon)" }}
                    />
                  </div>

                  <div className="flex-1">
                    <h3
                      id={`${item.id}-title`}
                      className="text-lg font-semibold leading-6"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-6 max-w-prose"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
