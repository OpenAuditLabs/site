"use client";

import React from "react";
import { Github, Twitter, MessageSquare, Mail } from "lucide-react";

type FooterLink = { label: string; href: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Methodology", href: "/methodology" },
      { label: "Reports", href: "/reports" },
      { label: "Docs", href: "/docs" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/OpenAuditLabs" },
      { label: "Contribute", href: "/contribute" },
      { label: "Security Policy", href: "/security-policy" },
      { label: "Disclosure", href: "/disclosure" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Media Kit", href: "/media-kit" },
    ],
  },
];

const socialLinks: {
  Icon: React.ComponentType<any>;
  url: string;
  label: string;
}[] = [
  { Icon: Github, url: "https://github.com/OpenAuditLabs", label: "GitHub" },
  { Icon: Twitter, url: "https://twitter.com/OpenAuditLabs", label: "Twitter" },
  {
    Icon: MessageSquare,
    url: "https://discord.gg/OpenAuditLabs",
    label: "Discord",
  },
  { Icon: Mail, url: "mailto:info@openauditlabs.xyz", label: "Email" },
];

const linkClass =
  "text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h4 className="font-semibold text-[var(--foreground)] mb-4">{title}</h4>
      <ul className="space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={linkClass}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[var(--navbar-bg)] text-[var(--foreground)] border-t border-[var(--border)] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-[var(--foreground)]">
                Open
                <span style={{ color: "var(--navbar-logo-blue)" }}>Audit</span>
                Labs
              </span>
            </div>
            <p className="text-[var(--muted-foreground)] text-sm mb-6 max-w-md">
              Open-source smart contract security auditing.
            </p>
          </div>

          {columns.map((col) => (
            <FooterColumn key={col.title} title={col.title} links={col.links} />
          ))}
        </div>

        <div className="border-t border-[var(--border)] mt-12 pt-8">
          <div className="flex w-full flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3 order-1 md:order-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.url.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={s.label}
                  className={linkClass}
                >
                  <s.Icon size={20} />
                </a>
              ))}
            </div>

            <div className="text-sm text-[var(--muted-foreground)] order-2 md:order-2 text-left md:text-right">
              © 2025 OpenAuditLabs. Open-source under permissive licenses where
              noted.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
