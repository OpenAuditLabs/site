import React from 'react';
import { FileText, Pen, GitMerge, Shield } from 'lucide-react';

type Feature = {
  id: string;
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const FEATURES: Feature[] = [
  {
    id: 'public-reports',
    title: 'Public Reports',
    description:
      'Every audit includes reproducible steps and proof-of-concept validations.',
    Icon: FileText,
  },
  {
    id: 'battle-tested',
    title: 'Battle-Tested Methods',
    description: 'From static analysis to manual review and fuzzing, we cover what matters.',
    Icon: Pen,
  },
  {
    id: 'community',
    title: 'Community Collaboration',
    description: 'Engage via issues and PRs to continuously improve security posture.',
    Icon: GitMerge,
  },
  {
    id: 'secure-by-default',
    title: 'Secure by Default',
    description: 'Practical recommendations to harden deployments and operations.',
    Icon: Shield,
  },
];

export default function FeatureCardsSection() {
  return (
    <section aria-label="Feature cards" className="w-full my-20 py-12 md:py-20" style={{ background: 'var(--feature-cards-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <article
              key={f.id}
              className="feature-card bg-card border border-border rounded-lg p-6 shadow-sm transition-transform duration-300 will-change-transform min-h-56 md:min-h-64"
              style={{
                background: 'var(--feature-pill-bg)',
                boxShadow: 'var(--feature-pill-shadow)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <div className="flex flex-col gap-4 h-full" aria-hidden={false}>
                <div className="w-10 h-10 flex items-center justify-center rounded-md feature-card-icon-bg">
                  <f.Icon className="feature-icon" width={20} height={20} aria-hidden="true" style={{ color: 'var(--feature-pill-icon)' }} />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold leading-6" style={{ color: 'var(--foreground)' }}>
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 max-w-prose" style={{ color: 'var(--muted-foreground)' }}>
                    {f.description}
                  </p>
                </div>
              </div>
              {/* Hover handled via global classes in globals.css */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
