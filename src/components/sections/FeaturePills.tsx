import React, { memo } from "react";
import { Shield, FileText, Users, Columns } from "lucide-react";
import { cn } from "@/lib/utils";

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

const FeaturePill = ({ feature }: { feature: Feature }) => {
  const { id, title, Icon, href } = feature;

  return (
    <li key={id}>
      <a
        href={href ?? "#"}
        aria-label={title}
        className={cn(
          "feature-pill-link inline-flex items-center gap-3 px-6 py-3 rounded-lg border shadow-feature-pill"
        )}
        // Keep visual tokens as inline style so theming variables remain easy to override
        style={{
          background: "var(--feature-pill-bg)",
          borderColor: "var(--feature-pill-border)",
          color: "var(--feature-pill-text)",
          minHeight: 44,
        }}
      >
        <span className="flex items-center justify-center" aria-hidden="true">
          <Icon
            width={18}
            height={18}
            className="feature-pill-icon"
            aria-hidden="true"
          />
        </span>

        <span className="text-sm font-medium leading-none">{title}</span>
      </a>
    </li>
  );
};

export const FeaturePills = memo(function FeaturePills({
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
          <FeaturePill key={f.id} feature={f} />
        ))}
      </ul>
    </div>
  );
});

export default FeaturePills;
