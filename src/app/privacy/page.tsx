import React from "react";

export const metadata = {
  title: "Privacy Policy | OpenAudit",
  description: "OpenAudit Privacy Policy",
};

export default function PrivacyPolicyPage(): React.JSX.Element {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <section className="relative mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-0">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: September 17, 2025</p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-24">
          <p>
            This Privacy Policy explains how OpenAudit (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects,
            uses, and protects your information when you use our websites, products, and
            services (collectively, the &quot;Services&quot;). We are committed to safeguarding your
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
              configuration and context you share to perform an analysis (&quot;Audit Data&quot;).
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
            <a className="underline decoration-dotted underline-offset-4" href="mailto:privacy@openaudits.xyz"> privacy@openaudits.xyz</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
