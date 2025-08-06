"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggleDropdown } from "@/components/ui";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/audits", label: "Audits" },
    { href: "/process", label: "Process" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Site Title */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-foreground">
              OpenAuditLabs
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggleDropdown />
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
          <div className="md:hidden">
            <ThemeToggleDropdown />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Slide-in Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">
                OpenAuditLabs
              </h2>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={toggleMenu}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <ThemeToggleDropdown />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
