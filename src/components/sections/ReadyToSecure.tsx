import React from "react";
import { Github } from "lucide-react";

export function ReadyToSecure() {
  return (
    <section className="py-8 px-4 mb-[100px]">
      <div className="feature-cards-bg max-w-7xl mx-auto w-full rounded-xl p-8 sm:p-12 shadow-sm">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 text-[var(--foreground)]">
            Ready to secure your protocol?
          </h2>

          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <a
              href="/requestAudit"
              className="navbar__cta w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-base shadow-sm transition-colors duration-150 flex items-center justify-center"
              style={{
                background: "var(--navbar-btn-bg)",
                color: "var(--navbar-btn-text)",
              }}
            >
              Request an Audit
            </a>

            <a
              href="https://github.com/OpenAuditLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="ready-secure-github w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-base border border-[var(--navbar-github-border)] bg-[var(--navbar-github-bg)] text-[var(--foreground)] shadow-sm transition-colors duration-150 flex items-center gap-2 justify-center"
              style={{ boxShadow: "var(--navbar-github-shadow)" }}
            >
              <Github size={20} aria-hidden="true" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
