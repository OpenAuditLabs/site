"use client"
import React, { useState } from "react";
import Link from "next/link";

function PrivacyPolicyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-background rounded-xl shadow-xl max-w-2xl w-full p-8 overflow-y-auto max-h-[90vh] relative">
        <button
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h1 className="text-2xl font-bold mb-2">Privacy Policy</h1>
        <p className="mb-4 text-sm text-muted-foreground">Last updated: September 17, 2025</p>
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-24">
          <p>
            This Privacy Policy explains how OpenAudit ("we", "us", or "our") collects,
            uses, and protects your information when you use our websites, products, and
            services (collectively, the "Services"). We are committed to safeguarding your
            privacy and being transparent about our data practices.
          </p>
          <h2 id="summary" className="text-xl font-semibold">1. Summary</h2>
          <p>
            We collect only what we need to deliver AI-driven smart contract auditing:
            contact information you provide (e.g., name, email, company), project details you
            submit for audits, and limited analytics to improve the Services. We don’t sell
            your data. We share data with service providers strictly to operate and improve
            the Services.
          </p>
          <h2 id="data-we-collect" className="text-xl font-semibold">2. Information We Collect</h2>
          <ul>
            <li>
              <strong>Account and Contact Information:</strong> Name, email address, company
              name, and similar details you provide via forms (e.g., our contact form).
            </li>
            <li>
              <strong>Project Inputs:</strong> Audit targets, code snippets, repository links,
              configuration and context you share to perform an analysis ("Audit Data").
            </li>
            <li>
              <strong>Usage Data:</strong> Interactions with the Services, device/browser type,
              referring/exit pages, timestamps, and general diagnostic data.
            </li>
            <li>
              <strong>Communications:</strong> Messages you send to us. For support triage,
              we may relay notifications (e.g., via Discord webhooks) to our internal team.
            </li>
            <li>
              <strong>Cookies and Similar Technologies:</strong> We may use cookies or local
              storage to maintain sessions, preferences, and gather aggregate analytics.
            </li>
          </ul>
          <h2 id="how-we-use" className="text-xl font-semibold">3. How We Use Information</h2>
          <ul>
            <li>Provide, operate, and improve the Services and audit results.</li>
            <li>Communicate with you about audits, updates, security, and support.</li>
            <li>Personalize features and content, including recommendations.</li>
            <li>Monitor performance, debug issues, and maintain reliability and security.</li>
            <li>Comply with legal obligations and enforce our Terms of Service.</li>
          </ul>
          <h2 id="legal-bases" className="text-xl font-semibold">4. Legal Bases (EEA/UK)</h2>
          <p>
            Where applicable, we process personal data on the following legal bases: (a)
            performance of a contract (to provide the Services); (b) legitimate interests
            (to secure and improve the Services); (c) consent (where required, e.g., certain
            cookies or marketing); and (d) legal obligations.
          </p>
          <h2 id="sharing" className="text-xl font-semibold">5. How We Share Information</h2>
          <ul>
            <li>
              <strong>Service Providers:</strong> Trusted vendors that assist with hosting,
              infrastructure, analytics, communications (e.g., Discord webhooks), and incident
              response. They process data on our behalf and under instructions.
            </li>
            <li>
              <strong>Security and Compliance:</strong> To comply with law or respond to valid
              legal requests; to protect rights, property, and safety of OpenAudit, our users,
              or the public.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger, acquisition, or
              asset sale, your data may be transferred, subject to this Policy.
            </li>
          </ul>
          <h2 id="ai-llm" className="text-xl font-semibold">6. AI, Model Providers, and Code Privacy</h2>
          <p>
            Our analysis may use large language models (LLMs) and static analysis engines.
            We take measures to restrict Audit Data exposure: we minimize prompts to relevant
            context, avoid sending secrets, and use secure channels. When third-party model
            APIs are used, we contractually require that data is not used to train or
            improve their models (where supported) and set minimal retention.
          </p>
          <h2 id="data-retention" className="text-xl font-semibold">7. Data Retention</h2>
          <p>
            We retain personal data only as long as necessary to provide the Services, comply
            with legal obligations, resolve disputes, and enforce agreements. Audit Data is
            retained for the duration of the engagement and a reasonable period thereafter to
            support follow-ups, unless you request earlier deletion where applicable.
          </p>
          <h2 id="security" className="text-xl font-semibold">8. Security</h2>
          <p>
            We implement technical and organizational measures designed to protect your
            information, including encryption in transit, access controls, and monitoring.
            No system is 100% secure; you are responsible for maintaining the secrecy of any
            credentials associated with your use of the Services.
          </p>
          <h2 id="international" className="text-xl font-semibold">9. International Transfers</h2>
          <p>
            We may process and store information in countries other than yours. Where required,
            we use appropriate safeguards (e.g., standard contractual clauses) for cross-border
            data transfers.
          </p>
          <h2 id="your-rights" className="text-xl font-semibold">10. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, or
            restrict processing of your personal data, and to portability. You may also object
            to certain processing or withdraw consent where processing is based on consent.
            To exercise rights, see Contact Us below. We may verify your identity before acting
            on a request.
          </p>
          <h2 id="cookies" className="text-xl font-semibold">11. Cookies</h2>
          <p>
            We use essential cookies to enable core functionality and may use optional cookies
            or similar technologies (subject to your consent where required) to measure and
            improve performance. You can control cookies through your browser settings.
          </p>
          <h2 id="children" className="text-xl font-semibold">12. Children’s Privacy</h2>
          <p>
            The Services are not directed to children under 16. We do not knowingly collect
            personal data from children. If you believe a child has provided us with personal
            data, please contact us and we will take appropriate steps to remove the data.
          </p>
          <h2 id="changes" className="text-xl font-semibold">13. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make material changes,
            we will update the “Last updated” date and, where appropriate, provide additional
            notice. Your continued use of the Services after changes take effect constitutes
            acceptance of the updated Policy.
          </p>
          <h2 id="contact" className="scroll-mt-24 text-xl font-semibold">14. Contact Us</h2>
          <p>
            If you have questions, requests, or complaints about this Privacy Policy or our
            data practices, please contact us at
            <a className="underline decoration-dotted underline-offset-4" href="mailto:demo@gmail.com"> demo@gmail.com</a>.
          </p>
        </div>
        <div className="mt-8 flex gap-4 justify-end">
          <button
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90"
            onClick={onClose}
          >
            Accept
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-muted text-foreground font-semibold shadow hover:bg-muted/80"
            onClick={onClose}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <footer
      aria-label="site-footer"
      className="relative border-t border-border/60 bg-primary"
    >
      {/* Subtle backdrop pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(80,200,160,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand column - spans more on desktop */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                  OpenAudit
                </h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md">
                  AI-Driven Auditing Solution
                </p>
              </div>

              {/* Additional brand info */}
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="h-2 rounded-full bg-primary/60" />
                Trusted by modern teams worldwide
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            {/* Quick Links column */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold tracking-wide text-foreground/90 uppercase">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {[
                  { href: "/#features", label: "Features" },
                  { href: "/#pricing", label: "Pricing" },
                  { href: "/openauditlabs", label: "OpenAuditLabs" },
                  { href: "/audits", label: "audits" },
                  { href: "/#contact", label: "Contact" },
                  { href: "/tos", label: "ToS" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center text-sm text-muted-foreground transition-all duration-300 ease-out hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background rounded-md px-1 py-0.5"
                    aria-label={link.label}
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary/60 transition-all duration-300 ease-out group-hover:w-full" />
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Socials column */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold tracking-wide text-foreground/90 uppercase">
                Connect
              </h4>
              <nav className="space-y-3">
                {[
                  { href: "https://www.facebook.com/", label: "Facebook" },
                  { href: "https://www.instagram.com/", label: "Instagram" },
                  { href: "https://zora.co/", label: "Zora" },
                  { href: "https://x.com/", label: "Twitter" },
                  { href: "https://www.youtube.com/", label: "YouTube" },
                  { href: "https://farcaster.com/", label: "Farcaster" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center text-sm text-muted-foreground transition-all duration-300 ease-out hover:text-foreground hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background rounded-md px-1 py-0.5"
                    aria-label={`Open in new tab: ${link.label}`}
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary/60 transition-all duration-300 ease-out group-hover:w-full" />
                    </span>
                    <svg
                      className="ml-1 h-3 w-3 opacity-0 transition-all duration-300 ease-out group-hover:opacity-60 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Resources column */}
            <div className="space-y-6 col-span-2 lg:col-span-1">
              <h4 className="text-sm font-semibold tracking-wide text-foreground/90 uppercase">
                Resources
              </h4>
              <nav className="space-y-3">
                <button
                  type="button"
                  className="group flex items-center text-sm text-muted-foreground transition-all duration-300 ease-out hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background rounded-md px-1 py-0.5"
                  aria-label="Privacy Policy"
                  onClick={() => setPrivacyOpen(true)}
                >
                  <span className="relative">
                    Privacy Policy
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary/60 transition-all duration-300 ease-out group-hover:w-full" />
                  </span>
                </button>
                <Link
                  href="https://www.researchgate.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-sm text-muted-foreground transition-all duration-300 ease-out hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background rounded-md px-1 py-0.5"
                  aria-label="Open in new tab: Research Gate"
                >
                  <span className="relative">
                    Research Gate
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary/60 transition-all duration-300 ease-out group-hover:w-full" />
                  </span>
                  <svg
                    className="ml-1 h-3 w-3 opacity-0 transition-all duration-300 ease-out group-hover:opacity-60 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Elegant divider with gradient */}
        <div className="mt-16 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <p className="text-sm text-muted-foreground">
              Copyright © {new Date().getFullYear()} OpenAudit
            </p>
            <span className="hidden sm:block text-muted-foreground/40">•</span>
            <p className="text-xs text-muted-foreground/80">
              All rights reserved
            </p>
          </div>

          {/* Social links or additional info */}
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground/60">Built with</span>
            <span className="text-xs text-muted-foreground/80 font-medium">:))</span>
            <span className="text-xs text-muted-foreground/60">
              for modern teams
            </span>
          </div>
        </div>
      </div>
      <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
}
