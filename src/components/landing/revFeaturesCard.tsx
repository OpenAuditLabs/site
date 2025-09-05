import React from "react";
import type { LucideProps } from "lucide-react";

type RevFeatureCardProps = {
  title: string;
  description: string;
  Icon?: React.ComponentType<LucideProps>;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export default function RevFeatureCard({
  title,
  description,
  Icon,
  href,
  onClick,
}: RevFeatureCardProps): React.ReactElement {
  const base =
    "group relative isolate overflow-hidden bg-card text-card-foreground rounded-2xl ring-1 ring-neutral-200 dark:ring-neutral-700 shadow-sm py-6 px-5 transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none transform-gpu will-change-transform";

  const interactive =
    base +
    " cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/15 hover:-translate-y-1 hover:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const nonInteractive = base;

  const content = (
    <>
      {/* Soft primary glow that follows theme; uses currentColor via text-primary, no hardcoded colors */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-90 dark:group-hover:opacity-100"
      >
        {/* Light mode: move glow lower to preserve title contrast */}
        <div className="absolute inset-0 rounded-2xl text-primary blur-md dark:hidden translate-y-6 bg-[radial-gradient(70%_60%_at_50%_100%,currentColor_0%,transparent_60%)]" />
        {/* Dark mode: keep glow near the top for a vivid effect */}
        <div className="absolute inset-0 rounded-2xl text-primary blur-md hidden dark:block bg-[radial-gradient(70%_60%_at_50%_0%,currentColor_0%,transparent_60%)]" />
      </div>
  <div className="flex flex-col items-start">
        <div
          className="w-12 h-12 rounded-md bg-muted flex items-center justify-center mb-4 transition-all duration-500 ease-out group-hover:bg-primary/10 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/25"
          aria-hidden
        >
          {Icon ? (
            <Icon className="w-6 h-6 text-muted-foreground transition-all duration-500 ease-out group-hover:text-primary group-hover:scale-110" />
          ) : (
            <div className="w-6 h-6 rounded-sm bg-muted transition-all duration-500 ease-out group-hover:bg-primary/20" />
          )}
        </div>

        <h3 className="m-0 text-base font-semibold leading-tight text-card-foreground transition-colors duration-500 ease-out group-hover:text-foreground dark:group-hover:text-primary">
          {title}
        </h3>

        <p className="mt-4 text-sm text-muted-foreground leading-relaxed transition-colors duration-500 ease-out group-hover:text-foreground/80">
          {description}
        </p>
      </div>
    </>
  );

  // Render an interactive element when href or onClick is provided
  if (href) {
    return (
      <a href={href} className={interactive} aria-label={title}>
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={interactive} aria-label={title}>
        {content}
      </button>
    );
  }

  // Non-interactive fallback: presentational only
  return (
    <article className={nonInteractive} role="article" aria-label={title}>
      {content}
    </article>
  );
}
