import { LucideIcon, LucideProps } from 'lucide-react';
import Link from 'next/link';

type Feature = {
  id?: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  cta?: {
    href: string;
    text: string;
  };
};

type Props = {
  features: Feature[];
};

export default function Features({ features }: Props) {
  return (
    <section aria-label="Features" className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={f.id ?? i}
              className="rounded-md p-4 shadow-sm bg-card text-foreground flex flex-col h-full"
            >
              {f.icon ? (
                <f.icon
                  className="mb-4 h-8 w-8 text-primary"
                  aria-hidden="true"
                />
              ) : null}
              <h3
                className="text-lg font-semibold text-primary"
              >
                {f.title}
              </h3>
              {f.description ? (
                <p className="mt-2 text-sm text-muted-foreground flex-grow">
                  {f.description}
                </p>
              ) : null}
              {f.cta ? (
                <div className="mt-4">
                  <Link
                    href={f.cta.href}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {f.cta.text} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
