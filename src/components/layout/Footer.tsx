"use client";

import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: <Github size={22} />,
    url: "https://github.com/OpenTestingLabs",
    label: "GitHub",
  },
  {
    icon: <Twitter size={22} />,
    url: "https://twitter.com/OpenTestingLabs",
    label: "Twitter",
  },
  {
    icon: <Linkedin size={22} />,
    url: "https://linkedin.com/company/OpenTestingLabs",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={22} />,
    url: "mailto:info@opentestinglabs.com",
    label: "Email",
  },
];

const Footer = () => {
  return (
    <footer
      className="w-full bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--border)] py-10 px-4"
      style={{ fontFamily: "inherit" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          <div className="flex-1 min-w-[220px] pr-4 md:pr-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block">
                {/* Logo icon, you can replace with your SVG or image */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7v7c0 5 5 8 10 8s10-3 10-8V7L12 2z"
                    fill="var(--primary)"
                  />
                </svg>
              </span>
              <span className="text-xl font-semibold">OpenTestingLabs</span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mb-6">
              Transparent smart contract audits built on open-source best
              practices. Securing the future of decentralized finance, one
              contract at a time.
            </p>
            <div className="flex gap-5 mt-2 mb-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-lg p-2 bg-[var(--card)] border border-[var(--border)] transition-colors group"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="transition-colors"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    {React.cloneElement(link.icon, {
                      color: "currentColor",
                      className:
                        "group-hover:text-[var(--primary)] group-hover:!text-[var(--icon-hover)]",
                    })}
                  </span>
                  <style jsx>{`
                    .group:hover svg {
                      color: var(--primary);
                    }
                    @media (prefers-color-scheme: dark) {
                      .group:hover svg {
                        color: var(--primary);
                        filter: drop-shadow(0 0 2px var(--primary));
                      }
                    }
                  `}</style>
                </a>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-8">
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="/about"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/our-team"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/press-kit"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Services</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="/audits"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Smart Contract Audits
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Security Consulting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Emergency Response
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Training Programs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Security Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Research Papers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Tools & Libraries
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Security Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row md:justify-between items-center text-xs text-[var(--muted-foreground)] gap-4 mt-4">
          <span>© 2024 OpenTestingLabs. All rights reserved.</span>
          <span>
            <a
              href="https://www.gnu.org/licenses/agpl-3.0.html"
              className="text-[var(--primary)] hover:underline"
            >
              Licensed under AGPL-3.0
            </a>{" "}
            <span className="text-red-500">♥</span> for the blockchain community
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
