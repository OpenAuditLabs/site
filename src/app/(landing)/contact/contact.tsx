export default function Contact() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-2xl mx-auto" style={{ color: "var(--foreground)" }}>
        <h1 className="text-2xl font-semibold mb-2">Contact</h1>
        <p
          className="text-sm mb-4"
          style={{ color: "var(--muted-foreground)" }}
        >
          A simple contact skeleton. Content coming soon.
        </p>

        <form action="#" className="space-y-3">
          <input
            aria-label="Email"
            name="email"
            type="email"
            placeholder="you@company.com"
            className="w-full px-3 py-2 rounded-md border"
            style={{
              background: "var(--input)",
              borderColor: "var(--border)",
              color: "var(--foreground)",
            }}
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
