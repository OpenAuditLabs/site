import React from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav
      aria-label="site-navigation"
      className="hidden md:block w-full bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className="text-xl font-semibold text-foreground">
              OpenAudit
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
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
          <div className="flex items-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
