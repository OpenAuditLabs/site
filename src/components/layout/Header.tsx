"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Site Title */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-gray-900">
              OpenAuditLabs
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex space-x-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
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
        </div>
      </div>

      {/* Mobile Navigation Slide-in Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                OpenAuditLabs
              </h2>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={toggleMenu}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </a>
                  ))}
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
