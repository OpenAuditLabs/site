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

  useEffect(() => {
    setMounted(true);
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
      className="block sticky top-0 z-50 w-full bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              aria-label="OpenAudit home"
            >
              OpenAudit
            </Link>
          </div>

          {/* Right: Desktop nav links + actions, mobile controls stay visible on small screens */}
          <div className="flex items-center space-x-3">
            {/* Desktop group: moves to the right of the navbar */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>

              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              >
                <Link href="/#contact">Get Started</Link>
              </Button>

              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                aria-label={
                  mounted
                    ? `Switch to ${
                        resolvedTheme === "dark" ? "light" : "dark"
                      } mode`
                    : "Toggle theme"
                }
                title={
                  mounted
                    ? `Switch to ${
                        resolvedTheme === "dark" ? "light" : "dark"
                      } mode`
                    : "Toggle theme"
                }
                className="p-2"
                type="button"
                aria-pressed={resolvedTheme === "dark"}
                disabled={!mounted}
                aria-disabled={!mounted}
              >
                {mounted ? (
                  resolvedTheme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )
                ) : (
                  <Sun className="w-4 h-4 opacity-0" />
                )}
              </Button>
            </div>

            {/* Mobile menu button + mobile theme (visible on small screens) */}
            <div className="md:hidden flex items-center gap-2">
              <button
                type="button"
                aria-controls="mobile-menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <span className="sr-only">Toggle navigation</span>
                {open ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>

              {/* Mobile theme toggle to the right of menu icon */}
              <Button
                onClick={() => {
                  if (!mounted) return;
                  toggleTheme();
                }}
                variant="ghost"
                size="icon"
                aria-label={
                  mounted
                    ? `Switch to ${
                        resolvedTheme === "dark" ? "light" : "dark"
                      } mode`
                    : "Toggle theme"
                }
                title={
                  mounted
                    ? `Switch to ${
                        resolvedTheme === "dark" ? "light" : "dark"
                      } mode`
                    : "Toggle theme"
                }
                className="p-2"
                type="button"
                aria-pressed={resolvedTheme === "dark"}
                disabled={!mounted}
                aria-disabled={!mounted}
              >
                {mounted ? (
                  resolvedTheme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )
                ) : (
                  <Sun className="w-4 h-4 opacity-0" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden ${
          open ? "block" : "hidden"
        } w-full bg-background border-b border-border`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
          <a
            href="#features"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>

          <div className="pt-2">
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
            >
              <Link href="/#contact" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
