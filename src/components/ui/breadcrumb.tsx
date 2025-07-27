import React, { useMemo } from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  className = '',
}) => {
  const memoizedItems = useMemo(() => items, [items]);

  return (
    <nav className={`flex items-center text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1">
        {memoizedItems.map((item, idx) => (
          <li key={idx} className="inline-flex items-center">
            {item.href && idx !== memoizedItems.length - 1 ? (
              <a
                href={item.href}
                className="text-blue-600 hover:underline"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
            {idx < memoizedItems.length - 1 && (
              <span className="mx-2 text-gray-400">{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
