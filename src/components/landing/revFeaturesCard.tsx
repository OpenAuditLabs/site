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
      className="group bg-card text-card-foreground rounded-xl border border-border shadow-xs py-6 px-5 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 hover:-translate-y-1 cursor-pointer"
      role="article"
      aria-label={title}
    >
      <div className="flex flex-col items-start">
        <div
          className="w-12 h-12 rounded-md bg-muted flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:bg-primary/10 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20"
          aria-hidden
        >
          {Icon ? (
            <Icon className="w-6 h-6 text-muted-foreground transition-all duration-300 ease-out group-hover:text-primary group-hover:scale-110" />
          ) : (
            <div className="w-6 h-6 rounded-sm bg-muted transition-all duration-300 ease-out group-hover:bg-primary/20" />
          )}
        </div>

        <h3 className="m-0 text-base font-semibold leading-tight text-card-foreground transition-colors duration-300 ease-out group-hover:text-primary">
          {title}
        </h3>

        <p className="mt-4 text-sm text-muted-foreground leading-relaxed transition-colors duration-300 ease-out group-hover:text-foreground/80">
          {description}
        </p>
      </div>
    </article>
  );
}
