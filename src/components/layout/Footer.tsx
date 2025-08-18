"use client";

import React from "react";
import { Github, Twitter, MessageSquare, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: <Github size={20} />,
    url: "https://github.com/OpenAuditLabs",
    label: "GitHub",
  },
  {
    icon: <Twitter size={20} />,
    url: "https://twitter.com/OpenAuditLabs",
    label: "Twitter",
  },
  {
    icon: <MessageSquare size={20} />,
    url: "https://discord.gg/OpenAuditLabs",
    label: "Discord",
  },
  {
    icon: <Mail size={20} />,
    url: "mailto:info@openauditlabs.xyz",
    label: "Email",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--navbar-bg)] text-[var(--foreground)] border-t border-[var(--border)] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand section */}
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
            {/* social icons removed from brand section per design */}
          </div>

          {/* Product section */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/methodology"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Methodology
                </a>
              </li>
              <li>
                <a
                  href="/reports"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Reports
                </a>
              </li>
              <li>
                <a
                  href="/docs"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Community section */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">
              Community
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://github.com/OpenAuditLabs"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="/contribute"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Contribute
                </a>
              </li>
              <li>
                <a
                  href="/security-policy"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Security Policy
                </a>
              </li>
              <li>
                <a
                  href="/disclosure"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Disclosure
                </a>
              </li>
            </ul>
          </div>

          {/* Company section */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/contact"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/media-kit"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Media Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[var(--border)] mt-12 pt-8">
          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="text-sm text-[var(--muted-foreground)]">
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
