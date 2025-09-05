import React from "react";
import type { LucideProps } from "lucide-react";

type RevFeatureCardProps = {
  title: string;
  description: string;
  Icon?: React.ComponentType<LucideProps>;
};

export default function RevFeatureCard({
  title,
  description,
  Icon,
}: RevFeatureCardProps): React.ReactElement {
  return (
    <article
      className="bg-card text-card-foreground rounded-xl border border-border shadow-xs py-6 px-5"
      role="article"
      aria-label={title}
    >
      <div className="flex flex-col items-start">
        <div
          className="w-12 h-12 rounded-md bg-muted flex items-center justify-center mb-4"
          aria-hidden
        >
          {Icon ? (
            <Icon className="w-6 h-6 text-muted-foreground" />
          ) : (
            <div className="w-6 h-6 rounded-sm bg-muted" />
          )}
        </div>

        <h3 className="m-0 text-base font-semibold leading-tight text-card-foreground">
          {title}
        </h3>

        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}
