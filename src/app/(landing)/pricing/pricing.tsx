export default function PricingSection() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="px-6">
          <div className="text-center">
            <h2
              className="mx-auto font-extrabold leading-tight"
              style={{
                color: "var(--foreground)",
                fontSize: "clamp(28px, 6.4vw, 48px)",
                maxWidth: "900px",
              }}
            >
              Choose The Best Pack for You
            </h2>

            <p
              className="mt-4 mx-auto max-w-2xl text-base leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Use credits to scan your documents. 1 credit ≈ 1,000 characters.
            </p>
          </div>

          <div className="mt-12">
            {/* here pricing cards will be implemented */}
          </div>
        </div>
      </div>
    </section>
  );
}
