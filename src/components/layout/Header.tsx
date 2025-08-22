"use client";

import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { Button, ThemeToggleDropdown } from "@/components/ui";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/audits", label: "Audits" },
  { href: "/process", label: "Process" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 bg-[var(--navbar-bg)] w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Homepage"
          >
            <span className="font-extrabold text-[1.5rem] leading-none text-[var(--foreground)] tracking-tight">
              Open
              <span
                style={{
                  color: "var(--navbar-btn-bg)",
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                }}
              >
                Audit
              </span>
              Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="navbar__link px-0 py-0 text-base font-medium text-[var(--navbar-link)] hover:text-[var(--navbar-link-hover)] focus:text-[var(--navbar-link-hover)] transition-colors duration-150"
                style={{ padding: "0 0.75rem" }}
              >
                {link.label}
              </Link>
            ))}
            {/* GitHub Button */}
            <a
              href="https://github.com/OpenAuditLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__github flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--navbar-github-bg)] text-[var(--foreground)] font-medium text-base hover:text-[var(--navbar-link-hover)] focus:text-[var(--navbar-link-hover)] transition-colors duration-150"
              style={{
                border: "none",
                boxShadow: "var(--navbar-github-shadow)",
              }}
            >
              <Github size={20} aria-hidden="true" />
              GitHub
            </a>
            {/* Request Audit Button */}
            <Link
              href="/requestAudit"
              className="navbar__cta ml-2 shadow-sm transition-colors duration-150"
              style={{
                background: "var(--navbar-btn-bg)",
                color: "var(--navbar-btn-text)",
              }}
            >
              Request an Audit
            </Link>
            <ThemeToggleDropdown />
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--navbar-link)] hover:text-[var(--navbar-link-hover)] focus:text-[var(--navbar-link-hover)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--navbar-link-hover)]"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
            <ThemeToggleDropdown />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto bg-[var(--navbar-bg)] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[var(--navbar-github-border)]">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-extrabold text-[var(--foreground)]">
                Open
                <span
                  style={{
                    color: "var(--navbar-btn-bg)",
                    fontWeight: 800,
                    letterSpacing: "-0.5px",
                  }}
                >
                  Audit
                </span>
                Labs
              </h2>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md p-2.5 text-[var(--navbar-link)] hover:text-[var(--navbar-link-hover)] focus:text-[var(--navbar-link-hover)]"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium leading-7 text-[var(--navbar-link)] hover:text-[var(--navbar-link-hover)] focus:text-[var(--navbar-link-hover)] transition-colors duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://github.com/OpenAuditLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--navbar-github-bg)] text-[var(--foreground)] font-medium text-base mt-2 hover:text-[var(--navbar-link-hover)] focus:text-[var(--navbar-link-hover)] transition-colors duration-150"
                style={{
                  border: "none",
                  boxShadow: "var(--navbar-github-shadow)",
                }}
              >
                <Github size={20} aria-hidden="true" />
                GitHub
              </a>
              <Link
                href="/requestAudit"
                className="w-full mt-2 px-5 py-2 shadow-sm transition-colors duration-150"
                style={{
                  minWidth: "160px",
                  textAlign: "center",
                  background: "var(--navbar-btn-bg)",
                  color: "var(--navbar-btn-text)",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  letterSpacing: "-0.2px",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Request an Audit
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
