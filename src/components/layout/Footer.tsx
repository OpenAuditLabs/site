import React from "react";

export default function Footer() {
  return (
    <footer aria-label="site-footer" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand / description column */}
          <div>
            <h3 className="text-2xl font-medium">OpenAudit</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              AI-Driven auditing solution
            </p>
          </div>

          {/* Link column 1 (placeholder structure) */}
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="cursor-default">Features</li>
              <li className="cursor-default">Pricing</li>
              <li className="cursor-default">OpenAuditLabs</li>
            </ul>
          </div>

          {/* Link column 2 (placeholder structure) */}
          <div>
            <h4 className="text-sm font-semibold">Socials</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="cursor-default">Twitter</li>
              <li className="cursor-default">YouTube</li>
              <li className="cursor-default">Research Gate</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} OpenAudit — All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">Privacy · Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
