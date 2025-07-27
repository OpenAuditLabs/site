"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#technology", label: "Technology" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="w-full bg-background border-b border-border px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="text-xl font-bold">
        <Link href="/">Hashpalk</Link>
      </div>
      {/* Desktop nav */}
      <ul className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>
      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex">
          <div className="w-64 bg-background h-full shadow-lg p-6 flex flex-col gap-6 animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold">Hashpalk</span>
              <button
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground hover:text-primary text-lg transition-colors"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Overlay click closes drawer */}
          <div
            className="flex-1"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu overlay"
          />
        </div>
      )}
    </nav>
  );
}
