import PricingCard, { type Plan } from "@/components/landing/PricingTableCard";

const plans: Plan[] = [
  {
    id: "p-lite",
    name: "Lite",
    subtitle: "Perfect for getting started",
    price: 0.99,
    credits: 1,
    badge: null,
    features: [
      "Instant Credit Delivery",
      "No Expiration Date",
      "Basic support included",
    ],
  },
  {
    id: "p-pro",
    name: "Pro",
    subtitle: "Great for regular users",
    price: 5.49,
    credits: 5,
    badge: "Most Popular",
    features: [
      "Instant Credit Delivery",
      "No Expiration Date",
      "Priority support",
    ],
  },
  {
    id: "p-plus",
    name: "Plus",
    subtitle: "For power users",
    price: 9.49,
    credits: 12,
    badge: null,
    features: [
      "Instant Credit Delivery",
      "No Expiration Date",
      "Priority support",
    ],
  },
  {
    id: "p-premium",
    name: "Premium",
    subtitle: "Best for teams and power users",
    price: 18.49,
    credits: 25,
    badge: "Best Value",
    features: [
      "Instant Credit Delivery",
      "No Expiration Date",
      "Dedicated support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
    className="scroll-mt-24 relative overflow-hidden py-16 sm:py-20"
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {plans.map((p) => (
                <PricingCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
