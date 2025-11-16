"use client";

import { useState, useEffect } from "react";
import PricingCard, { type Plan } from "@/components/landing/PricingTableCard";

type BillingCycle = "monthly" | "yearly";

const plans: Plan[] = [
  {
    id: "p-lite",
    name: "Lite",
    subtitle: "Perfect for getting started",
    monthlyPrice: 0.99,
    yearlyPrice: 0.99 * 10, // 20% discount for yearly
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
    monthlyPrice: 5.49,
    yearlyPrice: 5.49 * 10, // 20% discount for yearly
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
    monthlyPrice: 9.49,
    yearlyPrice: 9.49 * 10, // 20% discount for yearly
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
    monthlyPrice: 18.49,
    yearlyPrice: 18.49 * 10, // 20% discount for yearly
    credits: 25,
    badge: "Best Value",
    features: [
      "Instant Credit Delivery",
      "No Expiration Date",
      "Dedicated support",
    ],
  },
];

export default function PricingSection({ id }: { id: string }) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedBillingCycle = localStorage.getItem("billingCycle");
      if (savedBillingCycle === "monthly" || savedBillingCycle === "yearly") {
        setBillingCycle(savedBillingCycle);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("billingCycle", billingCycle);
    }
  }, [billingCycle]);

  return (
    <section
      id={id}
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

          {/* Billing Cycle Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center p-1 rounded-full bg-gray-200 dark:bg-gray-700">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === "yearly"
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
                onClick={() => setBillingCycle("yearly")}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {plans.map((p) => (
                <PricingCard
                  key={p.id}
                  {...p}
                  price={
                    billingCycle === "monthly" ? p.monthlyPrice : p.yearlyPrice
                  }
                />
              ))}
            </div>
          </div>

          {/* Comparison Callout Table */}
          <div className="mt-20">
            <h3 className="text-center text-2xl font-bold mb-8">Compare Features</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="p-4 border-b dark:border-gray-700">Feature</th>
                    {plans.map((p) => (
                      <th key={p.id} className="p-4 border-b dark:border-gray-700 text-center">
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700">
                    <td className="p-4">Credits per month/year</td>
                    {plans.map((p) => (
                      <td key={p.id} className="p-4 text-center">{p.credits}</td>
                    ))}
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <td className="p-4">Instant Credit Delivery</td>
                    {plans.map((p) => (
                      <td key={p.id} className="p-4 text-center">{p.features.includes("Instant Credit Delivery") ? "✅" : "❌"}</td>
                    ))}
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <td className="p-4">No Expiration Date</td>
                    {plans.map((p) => (
                      <td key={p.id} className="p-4 text-center">{p.features.includes("No Expiration Date") ? "✅" : "❌"}</td>
                    ))}
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <td className="p-4">Basic Support</td>
                    {plans.map((p) => (
                      <td key={p.id} className="p-4 text-center">{p.features.includes("Basic support included") ? "✅" : "❌"}</td>
                    ))}
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <td className="p-4">Priority Support</td>
                    {plans.map((p) => (
                      <td key={p.id} className="p-4 text-center">{p.features.includes("Priority support") ? "✅" : "❌"}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4">Dedicated Support</td>
                    {plans.map((p) => (
                      <td key={p.id} className="p-4 text-center">{p.features.includes("Dedicated support") ? "✅" : "❌"}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
