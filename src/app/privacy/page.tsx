import React from "react";
import SectionHeading from "@/components/common/SectionHeading";

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

          <nav className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Table of Contents</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><a href="#summary" className="text-blue-600 hover:underline dark:text-blue-400">1. Summary</a></li>
              <li><a href="#data-we-collect" className="text-blue-600 hover:underline dark:text-blue-400">2. Information We Collect</a></li>
              <li><a href="#how-we-use" className="text-blue-600 hover:underline dark:text-blue-400">3. How We Use Information</a></li>
              <li><a href="#legal-bases" className="text-blue-600 hover:underline dark:text-blue-400">4. Legal Bases (EEA/UK)</a></li>
              <li><a href="#sharing" className="text-blue-600 hover:underline dark:text-blue-400">5. How We Share Information</a></li>
              <li><a href="#ai-llm" className="text-blue-600 hover:underline dark:text-blue-400">6. AI, Model Providers, and Code Privacy</a></li>
              <li><a href="#data-retention" className="text-blue-600 hover:underline dark:text-blue-400">7. Data Retention</a></li>
              <li><a href="#security" className="text-blue-600 hover:underline dark:text-blue-400">8. Security</a></li>
              <li><a href="#international" className="text-blue-600 hover:underline dark:text-blue-400">9. International Transfers</a></li>
              <li><a href="#your-rights" className="text-blue-600 hover:underline dark:text-blue-400">10. Your Rights</a></li>
              <li><a href="#cookies" className="text-blue-600 hover:underline dark:text-blue-400">11. Cookies</a></li>
              <li><a href="#children" className="text-blue-600 hover:underline dark:text-blue-400">12. Children’s Privacy</a></li>
              <li><a href="#changes" className="text-blue-600 hover:underline dark:text-blue-400">13. Changes to This Policy</a></li>
              <li><a href="#contact" className="text-blue-600 hover:underline dark:text-blue-400">14. Contact Us</a></li>
            </ul>
          </nav>

            <SectionHeading title="1. Summary" id="summary" />
            <p>
              We collect only what we need to deliver AI-driven smart contract auditing:
              contact information you provide (e.g., name, email, company), project details you
              submit for audits, and limited analytics to improve the Services. We don’t sell
              your data. We share data with service providers strictly to operate and improve
              the Services.
            </p>

            <SectionHeading title="2. Information We Collect" id="data-we-collect" />
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

            <SectionHeading title="3. How We Use Information" id="how-we-use" />
            <ul>
              <li>Provide, operate, and improve the Services and audit results.</li>
              <li>Communicate with you about audits, updates, security, and support.</li>
              <li>Personalize features and content, including recommendations.</li>
              <li>Monitor performance, debug issues, and maintain reliability and security.</li>
              <li>Comply with legal obligations and enforce our Terms of Service.</li>
            </ul>

          <section>
            <SectionHeading title="4. Legal Bases (EEA/UK)" id="legal-bases" />
            <p>
              Where applicable, we process personal data on the following legal bases: (a)
              performance of a contract (to provide the Services); (b) legitimate interests
              (to secure and improve the Services); (c) consent (where required, e.g., certain
              cookies or marketing); and (d) legal obligations.
            </p>
          </section>

          <section>
            <SectionHeading title="5. How We Share Information" id="sharing" />
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
          </section>

          <section>
            <SectionHeading title="6. AI, Model Providers, and Code Privacy" id="ai-llm" />
            <p>
              Our analysis may use large language models (LLMs) and static analysis engines.
              We take measures to restrict Audit Data exposure: we minimize prompts to relevant
              context, avoid sending secrets, and use secure channels. When third-party model
              APIs are used, we contractually require that data is not used to train or
              improve their models (where supported) and set minimal retention.
            </p>
          </section>

          <section>
            <SectionHeading title="7. Data Retention" id="data-retention" />
            <p>
              We retain personal data only as long as necessary to provide the Services, comply
              with legal obligations, resolve disputes, and enforce agreements. Audit Data is
              retained for the duration of the engagement and a reasonable period thereafter to
              support follow-ups, unless you request earlier deletion where applicable.
            </p>
          </section>

          <section>
            <SectionHeading title="8. Security" id="security" />
            <p>
              We implement technical and organizational measures designed to protect your
              information, including encryption in transit, access controls, and monitoring.
              No system is 100% secure; you are responsible for maintaining the secrecy of any
              credentials associated with your use of the Services.
            </p>
          </section>

          <section>
            <SectionHeading title="9. International Transfers" id="international" />
            <p>
              We may process and store information in countries other than yours. Where required,
              we use appropriate safeguards (e.g., standard contractual clauses) for cross-border
              data transfers.
            </p>
          </section>

          <section>
            <SectionHeading title="10. Your Rights" id="your-rights" />
            <p>
              Depending on your location, you may have rights to access, correct, delete, or
              restrict processing of your personal data, and to portability. You may also object
              to certain processing or withdraw consent where processing is based on consent.
              To exercise rights, see Contact Us below. We may verify your identity before acting
              on a request.
            </p>
          </section>

          <section>
            <SectionHeading title="11. Cookies" id="cookies" />
            <p>
              We use essential cookies to enable core functionality and may use optional cookies
              or similar technologies (subject to your consent where required) to measure and
              improve performance. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <SectionHeading title="12. Children’s Privacy" id="children" />
            <p>
              The Services are not directed to children under 16. We do not knowingly collect
              personal data from children. If you believe a child has provided us with personal
              data, please contact us and we will take appropriate steps to remove the data.
            </p>
          </section>

          <section>
            <SectionHeading title="13. Changes to This Policy" id="changes" />
            <p>
              We may update this Privacy Policy from time to time. When we make material changes,
              we will update the “Last updated” date and, where appropriate, provide additional
              notice. Your continued use of the Services after changes take effect constitutes
              acceptance of the updated Policy.
            </p>
          </section>

          <SectionHeading title="14. Contact Us" id="contact" />
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