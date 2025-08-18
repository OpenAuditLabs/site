import React from "react";
import { Shield, FileText, Users, Columns } from "lucide-react";

type Feature = {
  id: string;
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href?: string;
};

const DEFAULT_FEATURES: Feature[] = [
  { id: "open-source", title: "Open Source", Icon: Shield },
  { id: "transparent-reports", title: "Transparent Reports", Icon: FileText },
  { id: "community-driven", title: "Community-Driven", Icon: Users },
  { id: "evm-focused", title: "EVM Focused", Icon: Columns },
];

export function FeaturePills({
  features = DEFAULT_FEATURES,
}: {
  features?: Feature[];
}) {
  return (
    <div className="w-full flex justify-center -mt-20 sm:-mt-24 lg:-mt-28">
      <ul
        role="list"
        aria-label="Feature highlights"
        className="flex flex-wrap gap-6 items-center justify-center max-w-5xl px-4"
      >
        {features.map((f) => (
          <li key={f.id}>
            <a
              href={f.href ?? "#"}
              className="feature-pill-link inline-flex items-center gap-3 px-6 py-3 rounded-lg border shadow-feature-pill transition-shadow transform duration-200 ease-out hover:shadow-feature-pill-hover hover:-translate-y-1 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background: "var(--feature-pill-bg)",
                borderColor: "var(--feature-pill-border)",
                color: "var(--feature-pill-text)",
                minHeight: 44,
              }}
              aria-label={f.title}
            >
              <span
                className="flex items-center justify-center"
                aria-hidden="true"
              >
                <f.Icon
                  width={18}
                  height={18}
                  aria-hidden="true"
                  className="feature-pill-icon"
                />
              </span>
              <span className="text-sm font-medium leading-none">
                {f.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturePills;
