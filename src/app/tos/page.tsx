import React from "react";

export const metadata = {
  title: "Terms of Service | OpenAudit",
  description: "OpenAudit Terms of Service",
};

export default function TermsOfServicePage(): React.JSX.Element {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <section className="relative mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-0">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: September 17, 2025</p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-24">
          <p>
            These Terms of Service (the “Terms”) govern your access to and use of
            OpenAudit’s websites, products, and services (collectively, the “Services”).
            By accessing or using the Services, you agree to be bound by these Terms.
            If you are using the Services on behalf of an organization, you agree to these
            Terms on behalf of that organization and represent that you have the authority
            to do so. If you do not agree to these Terms, do not use the Services.
          </p>

          <h2 id="eligibility" className="text-xl font-semibold">1. Eligibility</h2>
          <p>
            You must be at least the age of majority in your jurisdiction to use the
            Services. If you access the Services on behalf of a company or other legal
            entity, you represent and warrant that you have the authority to bind such entity
            to these Terms.
          </p>

          <h2 id="accounts" className="text-xl font-semibold">2. Accounts and Security</h2>
          <p>
            You may need to create an account to access certain features. You are
            responsible for maintaining the confidentiality of your account credentials and
            for all activities that occur under your account. Notify us immediately of any
            unauthorized use or security breach. We are not liable for any loss or damage
            arising from unauthorized use of your account.
          </p>

          <h2 id="use" className="text-xl font-semibold">3. Acceptable Use</h2>
          <p>
            You agree not to misuse the Services or help anyone else do so. For example,
            you will not (and will not attempt to):
          </p>
          <ul>
            <li>Reverse engineer, decompile, or modify the Services;</li>
            <li>Interfere with or disrupt the integrity or performance of the Services;</li>
            <li>Access the Services using automated means not provided by us;</li>
            <li>Use the Services to infringe, violate, or misappropriate any third-party rights;</li>
            <li>Upload malware, malicious code, or content that is unlawful, harmful, or deceptive;</li>
            <li>Bypass or circumvent rate limits, security features, or access controls.</li>
          </ul>

          <h2 id="content" className="text-xl font-semibold">4. Your Content</h2>
          <p>
            You may submit content, data, or materials to the Services (“User Content”). You
            retain ownership of your User Content. By submitting User Content, you grant
            OpenAudit a worldwide, non-exclusive, royalty-free license to host, store, process,
            and display your User Content solely to provide and improve the Services. You
            represent that you have all rights necessary to submit the User Content and that
            your User Content does not violate any applicable law or rights of any third party.
          </p>

          <h2 id="ip" className="text-xl font-semibold">5. Intellectual Property</h2>
          <p>
            The Services (including all software, text, images, logos, and trademarks) are
            owned by OpenAudit or its licensors and are protected by intellectual property laws.
            Except for the limited rights expressly granted in these Terms, no rights are
            transferred to you. You may not use our trademarks or branding without our prior
            written consent.
          </p>

          <h2 id="feedback" className="text-xl font-semibold">6. Feedback</h2>
          <p>
            If you provide feedback, suggestions, or ideas regarding the Services, you grant
            us a perpetual, irrevocable, worldwide, royalty-free license to use such feedback
            for any purpose without any obligation to you.
          </p>

          <h2 id="third-party" className="text-xl font-semibold">7. Third-Party Services</h2>
          <p>
            The Services may integrate with or link to third-party products or services.
            We do not endorse or assume responsibility for third-party services. Your use of
            such services is subject to their terms and policies.
          </p>

          <h2 id="privacy" className="text-xl font-semibold">8. Privacy</h2>
          <p>
            Your use of the Services is subject to our Privacy Policy. By using the Services,
            you consent to our collection and use of information as described therein.
          </p>

          <h2 id="fees" className="text-xl font-semibold">9. Fees and Payment</h2>
          <p>
            Certain features may be offered for a fee. If you choose a paid plan, you agree to
            pay all applicable fees and taxes. Except where required by law, fees are
            non-refundable. We may change pricing upon notice as permitted by applicable law.
          </p>

          <h2 id="warranty" className="text-xl font-semibold">10. Disclaimers</h2>
          <p>
            THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY
            KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO
            NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
          </p>

          <h2 id="liability" className="text-xl font-semibold">11. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, OPENAUDIT AND ITS AFFILIATES, OFFICERS,
            EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUES,
            DATA, OR USE, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICES, EVEN IF WE
            HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR ANY
            CLAIMS ARISING FROM OR RELATING TO THE SERVICES SHALL NOT EXCEED THE AMOUNTS YOU
            PAID (IF ANY) FOR THE SERVICES IN THE 3 MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
          </p>

          <h2 id="indemnity" className="text-xl font-semibold">12. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless OpenAudit and its affiliates,
            officers, employees, and agents from and against any claims, liabilities, damages,
            losses, and expenses (including reasonable attorneys’ fees) arising out of or in any
            way connected with your use of the Services or your violation of these Terms.
          </p>

          <h2 id="termination" className="text-xl font-semibold">13. Termination</h2>
          <p>
            We may suspend or terminate your access to the Services at any time for any reason,
            including if we reasonably believe you have violated these Terms. Upon termination,
            your right to use the Services will immediately cease.
          </p>

          <h2 id="law" className="text-xl font-semibold">14. Governing Law; Dispute Resolution</h2>
          <p>
            These Terms will be governed by and construed in accordance with the laws applicable
            in your primary place of business or residence unless otherwise specified in an order
            form or separate agreement. Any dispute arising from these Terms will be resolved in the
            applicable courts having jurisdiction over such location, unless otherwise mandated by law.
          </p>

          <h2 id="changes" className="text-xl font-semibold">15. Changes to the Terms</h2>
          <p>
            We may modify these Terms from time to time. When we do, we will update the “Last
            updated” date at the top of this page. Your continued use of the Services after any
            changes become effective constitutes your acceptance of the updated Terms.
          </p>

          <h2 id="contact" className="scroll-mt-24 text-xl font-semibold">16. Contact Us</h2>
          <p>
            If you have any questions about these Terms or the Services, please contact us at
            <a className="underline decoration-dotted underline-offset-4" href="mailto:demo@gmail.com"> demo@gmail.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
