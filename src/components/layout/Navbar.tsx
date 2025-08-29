"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      aria-label="site-navigation"
      className="block sticky top-0 z-50 w-full bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Left: Logo/Brand */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              aria-label="OpenAudit home"
            >
              OpenAudit
            </Link>
          </div>

          {/* Center links: absolutely centered on md+ */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
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
          </div>

          {/* Right: actions (Get Started + mobile toggle) */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button: visible on small screens */}
            <div className="md:hidden">
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
              onClick={() => setOpen(false)}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
