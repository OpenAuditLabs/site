export default function About() {
  return (
    <section className="container mx-auto py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">About Us</h2>
        <p className="text-xl text-foreground mb-6">
          We build thoughtful, well-crafted products that help teams ship faster
          and with more confidence. This is a starter About section to be
          replaced with your project&apos;s real content when ready.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Our mission</h3>
          <p className="text-muted-foreground">
            Make developer tooling and design accessible to teams of all sizes.
            We focus on clarity, performance, and developer experience.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Core values</h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Clarity: simple APIs and clear docs</li>
            <li>Reliability: predictable behavior and strong defaults</li>
            <li>Empathy: build for real users and workflows</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-3">Team</h3>
        <p className="text-muted-foreground mb-4">
          A small group of engineers and designers.
        </p>
        <a
          href="#contact"
          className="inline-block rounded bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:opacity-95"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}
