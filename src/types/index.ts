// TypeScript type definitions

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}
