import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav
      aria-label="site-navigation"
      className="block sticky top-0 z-50 w-full bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-self-start">
            <Link
              href="/"
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              aria-label="OpenAudit home"
            >
              OpenAudit
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-self-center space-x-8">
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

          {/* Get Started Button */}
          <div className="flex items-center justify-self-end">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
