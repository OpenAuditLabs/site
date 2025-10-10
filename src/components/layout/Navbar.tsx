"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    // avoid toggling before client mount to prevent unintended theme flips
    if (!mounted) return;
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <nav
      aria-label="site-navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
    >
            <div
              className={`mx-4 mt-3 rounded-2xl transition-all duration-500 ease-in-out ${
                isScrolled
                  ? 'bg-background/80 backdrop-blur-md border border-border/50 shadow-lg'
                  : 'bg-background/50 backdrop-blur-sm border-b border-transparent'
              }`}
            >        <div className={`max-w-7xl mx-auto transition-all duration-500 ease-in-out ${
          isScrolled ? 'px-4 py-3' : 'px-6 py-4'
        }`}>
          <div className="relative flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className={`font-semibold text-foreground hover:text-primary transition-all duration-300 ${
                  isScrolled ? 'text-lg' : 'text-xl'
                }`}
                aria-label="OpenAudit home"
              >
                OpenAudit
              </Link>
            </div>

            {/* Right: Desktop nav links + actions, mobile controls stay visible on small screens */}
            <div className="flex items-center space-x-3">
              {/* Desktop group: moves to the right of the navbar */}
              <div className={`hidden md:flex items-center transition-all duration-300 ease-in-out ${
                isScrolled ? 'space-x-4' : 'space-x-6'
              }`}>
                <Link
                  href="/#features"
                  className={`font-medium text-foreground hover:text-primary transition-colors ${
                    isScrolled ? 'text-xs' : 'text-sm'
                  }`}
                >
                  Features
                </Link>
                <Link
                  href="/#pricing"
                  className={`font-medium text-foreground hover:text-primary transition-colors ${
                    isScrolled ? 'text-xs' : 'text-sm'
                  }`}
                >
                  Pricing
                </Link>
                <Link
                  href="/#contact"
                  className={`font-medium text-foreground hover:text-primary transition-colors ${
                    isScrolled ? 'text-xs' : 'text-sm'
                  }`}
                >
                  Contact
                </Link>

                <Button
                  asChild
                  className={`bg-primary text-white hover:bg-primary/90 font-medium transition-all duration-300 ${
                    isScrolled ? 'h-8 px-3 text-xs' : 'h-10 px-4 text-sm'
                  }`}
                >
                  <Link href="/#open-audit-action">Get Started</Link>
                </Button>

                <Button
                  onClick={toggleTheme}
                  variant="ghost"
                  size={isScrolled ? "sm" : "icon"}
                  aria-label="Toggle dark mode"
                  title="Toggle dark mode"
                  className={`transition-all duration-300 ${
                    isScrolled ? 'p-1.5' : 'p-2'
                  }`}
                  type="button"
                  aria-pressed={mounted ? resolvedTheme === "dark" : undefined}
                  disabled={!mounted}
                  aria-disabled={!mounted}
                >
                  {mounted ? (
                    resolvedTheme === "dark" ? (
                      <Sun className={`transition-all duration-300 ${
                        isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
                      }`} />
                    ) : (
                      <Moon className={`transition-all duration-300 ${
                        isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
                      }`} />
                    )
                  ) : (
                    <Sun className={`opacity-0 transition-all duration-300 ${
                      isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
                    }`} />
                  )}
                </Button>
              </div>

              {/* Mobile menu button + mobile theme (visible on small screens) */}
              <div className={`md:hidden flex items-center transition-all duration-300 ${
                isScrolled ? 'gap-1.5' : 'gap-2'
              }`}>
                <button
                  type="button"
                  aria-controls="mobile-menu"
                  aria-expanded={open}
                  onClick={() => setOpen((v) => !v)}
                  className={`inline-flex items-center justify-center rounded-md text-foreground hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 ${
                    isScrolled ? 'p-1.5' : 'p-2'
                  }`}
                >
                  <span className="sr-only">Toggle navigation</span>
                  {open ? (
                    <X className={`transition-all duration-300 ${
                      isScrolled ? 'w-4 h-4' : 'w-5 h-5'
                    }`} />
                  ) : (
                    <Menu className={`transition-all duration-300 ${
                      isScrolled ? 'w-4 h-4' : 'w-5 h-5'
                    }`} />
                  )}
                </button>

                {/* Mobile theme toggle to the right of menu icon */}
                <Button
                  onClick={toggleTheme}
                  variant="ghost"
                  size={isScrolled ? "sm" : "icon"}
                  aria-label="Toggle dark mode"
                  title="Toggle dark mode"
                  className={`transition-all duration-300 ${
                    isScrolled ? 'p-1.5' : 'p-2'
                  }`}
                  type="button"
                  aria-pressed={mounted ? resolvedTheme === "dark" : undefined}
                  disabled={!mounted}
                  aria-disabled={!mounted}
                >
                  {mounted ? (
                    resolvedTheme === "dark" ? (
                      <Sun className={`transition-all duration-300 ${
                        isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
                      }`} />
                    ) : (
                      <Moon className={`transition-all duration-300 ${
                        isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
                      }`} />
                    )
                  ) : (
                    <Sun className={`opacity-0 transition-all duration-300 ${
                      isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
                    }`} />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden ${
          open ? "block" : "hidden"
        } ${
          isScrolled 
            ? 'mx-4 mt-2 rounded-xl bg-background/90 backdrop-blur-md border border-border/50 shadow-lg' 
            : 'w-full bg-background border-b border-border'
        } transition-all duration-300 ease-in-out`}
      >
        <div className={`transition-all duration-300 ease-in-out ${
          isScrolled ? 'max-w-4xl mx-auto px-4 py-3' : 'max-w-7xl mx-auto px-6 py-4'
        } space-y-3`}>
          <Link
            href="/#features"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>

          <div className="pt-2">
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
            >
              <Link href="/#open-audit-action" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}