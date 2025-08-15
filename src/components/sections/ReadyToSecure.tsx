import React from "react";
import { Github } from "lucide-react";

export function ReadyToSecure() {
  return (
    <section className="ready-secure-container flex justify-center items-center py-8 px-2 bg-transparent">
      <div
        className="ready-secure-card shadow-sm flex flex-col items-center w-full"
        style={{ background: "var(--card)" }}
      >
        <h2
          className="ready-secure-title text-center text-2xl font-bold mb-6"
          style={{ color: "var(--foreground)" }}
        >
          Ready to secure your protocol?
        </h2>
        <div className="ready-secure-actions flex gap-4 justify-center mt-2">
          <a
            href="/requestAudit"
            className="navbar__cta px-6 py-3 rounded-lg font-semibold text-base shadow-sm transition-colors duration-150 flex items-center justify-center"
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
            className="ready-secure-github px-6 py-3 rounded-lg font-semibold text-base border border-[var(--navbar-github-border)] bg-[var(--navbar-github-bg)] text-[var(--foreground)] shadow-sm transition-colors duration-150 flex items-center gap-2"
            style={{ boxShadow: "var(--navbar-github-shadow)" }}
          >
            <Github size={20} aria-hidden="true" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
