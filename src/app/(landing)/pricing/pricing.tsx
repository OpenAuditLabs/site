import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      id: "p1",
      name: "Basic",
      subtitle: "Perfect for quick tasks",
      price: "$0.99",
      credits: 1,
      badge: null,
      features: [
        "Instant Credit Delivery",
        "No Expiration Date",
        "24/7 support included",
      ],
    },
    {
      id: "p2",
      name: "Pro",
      subtitle: "Great for regular users",
      price: "$5.49",
      credits: 5,
      badge: null,
      features: [
        "Instant Credit Delivery",
        "No Expiration Date",
        "24/7 support included",
      ],
    },
    {
      id: "p3",
      name: "Plus",
      subtitle: "Most popular choice",
      price: "$9.49",
      credits: 12,
      badge: "Most Popular",
      features: [
        "Instant Credit Delivery",
        "No Expiration Date",
        "24/7 support included",
      ],
    },
    {
      id: "p4",
      name: "Enterprise",
      subtitle: "Best value for power users",
      price: "$18.49",
      credits: 25,
      badge: "Best Value",
      features: [
        "Instant Credit Delivery",
        "No Expiration Date",
        "24/7 support included",
      ],
    },
  ];

  function computePerCredit(priceStr: string, credits: number) {
    // priceStr like "$5.49" -> parse number 5.49
    const n = Number(priceStr.replace(/[^0-9.]/g, ""));
    if (!isFinite(n) || credits <= 0) return "";
    const per = n / credits;
    return `$${per.toFixed(2)} per credit`;
  }

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
              {plans.map((plan) => {
                const isHighlighted = !!plan.badge;
                return (
                  <article
                    key={plan.id}
                    className={`flex flex-col rounded-2xl border p-6 shadow-sm relative ${
                      isHighlighted ? "lg:border-2" : ""
                    }`}
                    style={{
                      backgroundColor: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                    aria-labelledby={`plan-${plan.id}`}
                  >
                    {plan.badge ? (
                      <span
                        className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          background: "var(--primary)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        {plan.badge}
                      </span>
                    ) : null}

                    <h3
                      id={`plan-${plan.id}`}
                      className="text-lg font-semibold mb-2 text-center"
                      style={{ color: "var(--foreground)" }}
                    >
                      {plan.name}
                    </h3>
                    {plan.subtitle ? (
                      <div
                        className="text-sm text-center mb-3"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {plan.subtitle}
                      </div>
                    ) : null}

                    <div className="mb-4 text-center">
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
                        {computePerCredit(plan.price, plan.credits)}
                      </div>
                    </div>

                    <ul
                      className="mb-6 space-y-2 text-sm"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check
                            className="mt-1 flex-shrink-0"
                            size={16}
                            style={{ color: "var(--primary)" }}
                          />
                          <span>{f}</span>
                        </li>
                      ))}
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
