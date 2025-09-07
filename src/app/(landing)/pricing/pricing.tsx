export default function PricingSection() {
  const plans = [
    { id: "p1", name: "Basic", price: "$0.99", credits: 1 },
    { id: "p2", name: "Pro", price: "$5.49", credits: 5 },
    { id: "p3", name: "Plus", price: "$9.49", credits: 12 },
    { id: "p4", name: "Enterprise", price: "$18.49", credits: 25 },
  ];

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="px-6">
          <div className="text-center">
            <h2
              id="pricing-heading"
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
            {/* Pricing cards grid: 1col on mobile, 2 on tablet, 4 on desktop */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan) => (
                <article
                  key={plan.id}
                  className="flex flex-col rounded-2xl border p-6 shadow-sm"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                  }}
                  aria-labelledby={`plan-${plan.id}`}
                >
                  <h3
                    id={`plan-${plan.id}`}
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    {plan.name}
                  </h3>

                  <div className="mb-4">
                    <div
                      className="text-3xl font-extrabold"
                      style={{ color: "var(--foreground)" }}
                    >
                      {plan.price}
                    </div>
                    <div
                      className="text-sm mt-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {`${plan.credits} ${
                        plan.credits === 1 ? "Credit" : "Credits"
                      }`}
                    </div>
                  </div>

                  <ul
                    className="mb-6 space-y-2 text-sm"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    <li>Placeholder benefit 1</li>
                    <li>Placeholder benefit 2</li>
                    <li>Placeholder benefit 3</li>
                  </ul>

                  <div className="mt-auto w-full">
                    <button
                      type="button"
                      className="w-full rounded-md px-4 py-2 font-semibold"
                      style={{
                        background: "var(--primary)",
                        color: "var(--primary-foreground)",
                      }}
                    >
                      Start {plan.name}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
