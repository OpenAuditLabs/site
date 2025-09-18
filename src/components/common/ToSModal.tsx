"use client";
import React from "react";

export default function ToSModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (open) {
      // Trap focus inside modal
      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable?.[0];
      const last = focusable?.[focusable.length - 1];
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab' && focusable && focusable.length > 0) {
          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last?.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first?.focus();
            }
          }
        }
        if (e.key === 'Escape') {
          onClose();
        }
      };
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      first?.focus();
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className="bg-background rounded-xl shadow-xl max-w-2xl w-full p-8 overflow-y-auto max-h-[90vh] relative"
      >
        <button
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h1 className="text-2xl font-bold mb-2">Terms of Service</h1>
        <p className="mb-4 text-sm text-muted-foreground">Last updated: September 17, 2025</p>
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-24">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of OpenAudit (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) websites, products, and services (collectively, the &quot;Services&quot;). By accessing or using the Services, you agree to these Terms. If you do not agree, do not use the Services.
          </p>
          <h2 id="eligibility" className="text-xl font-semibold">1. Eligibility</h2>
          <p>
            You must be at least 16 years old and have the legal capacity to enter into contracts to use the Services. By using the Services, you represent and warrant that you meet these requirements.
          </p>
          <h2 id="account" className="text-xl font-semibold">2. Account Registration</h2>
          <p>
            You may need to provide certain information to access some features. You agree to provide accurate, complete, and up-to-date information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
          </p>
          <h2 id="use" className="text-xl font-semibold">3. Acceptable Use</h2>
          <ul>
            <li>Do not use the Services for unlawful, harmful, or fraudulent purposes.</li>
            <li>Do not attempt to gain unauthorized access to systems or data.</li>
            <li>Do not interfere with or disrupt the integrity or performance of the Services.</li>
            <li>Do not submit content that is illegal, offensive, or violates third-party rights.</li>
          </ul>
          <h2 id="audit-data" className="text-xl font-semibold">4. Audit Data &amp; Privacy</h2>
          <p>
            You retain ownership of code and materials you submit for audit (&quot;Audit Data&quot;). By submitting Audit Data, you grant us a limited right to use it solely to perform the requested analysis and improve the Services. See our Privacy Policy for details.
          </p>
          <h2 id="ai" className="text-xl font-semibold">5. AI, Model Providers, and Code Privacy</h2>
          <p>
            Our analysis may use large language models (LLMs) and static analysis engines. We take measures to restrict Audit Data exposure and contractually require third-party model providers not to use your data for training (where supported).
          </p>
          <h2 id="fees" className="text-xl font-semibold">6. Fees &amp; Payment</h2>
          <p>
            Some Services may require payment. Fees, payment terms, and refund policies will be disclosed before you commit. You agree to pay all applicable charges.
          </p>
          <h2 id="intellectual-property" className="text-xl font-semibold">7. Intellectual Property</h2>
          <p>
            All content, trademarks, and technology in the Services (except your Audit Data) are owned by OpenAudit or its licensors. You may not copy, modify, or distribute our content without permission.
          </p>
          <h2 id="disclaimers" className="text-xl font-semibold">8. Disclaimers</h2>
          <p>
            The Services are provided &quot;as is&quot; without warranties of any kind. We do not guarantee that audits will find all vulnerabilities or that the Services will be error-free or uninterrupted.
          </p>
          <h2 id="limitation" className="text-xl font-semibold">9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, OpenAudit is not liable for indirect, incidental, or consequential damages, or for loss of data, profits, or business arising from your use of the Services.
          </p>
          <h2 id="indemnity" className="text-xl font-semibold">10. Indemnity</h2>
          <p>
            You agree to indemnify and hold harmless OpenAudit and its affiliates from any claims, damages, or expenses arising from your use of the Services or violation of these Terms.
          </p>
          <h2 id="changes" className="text-xl font-semibold">11. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Material changes will be communicated, and your continued use of the Services after changes take effect constitutes acceptance.
          </p>
          <h2 id="termination" className="text-xl font-semibold">12. Termination</h2>
          <p>
            We may suspend or terminate your access to the Services at any time for violation of these Terms or for other reasons. You may stop using the Services at any time.
          </p>
          <h2 id="governing-law" className="text-xl font-semibold">13. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the jurisdiction where OpenAudit is established, without regard to conflict of law principles.
          </p>
          <h2 id="contact" className="scroll-mt-24 text-xl font-semibold">14. Contact Us</h2>
          <p>
            For questions or concerns about these Terms, contact us at <a className="underline decoration-dotted underline-offset-4" href="mailto:demo@gmail.com"> demo@gmail.com</a>.
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
