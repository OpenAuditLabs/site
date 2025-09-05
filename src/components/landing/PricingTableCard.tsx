import * as React from "react";
import { Check } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  subtitle?: string | null;
  price: string;
  credits: number;
  badge?: string | null;
  features: string[];
};

export default function PricingCard({
  id,
  name,
  subtitle,
  price,
  credits,
  badge,
  features,
}: Plan) {
  function computePerCredit(priceStr: string, credits: number) {
    const n = Number(priceStr.replace(/[^0-9.]/g, ""));
    if (!isFinite(n) || credits <= 0) return "";
    const per = n / credits;
    return `$${per.toFixed(2)} per credit`;
  }

  const isHighlighted = !!badge;

  return (
    <article
      className={`flex flex-col rounded-2xl border p-6 shadow-sm relative ${
        isHighlighted ? "lg:border-2" : ""
      }`}
      style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
      aria-labelledby={`plan-${id}`}
    >
      {badge ? (
        <span
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-sm font-medium"
          style={{
            background: "var(--primary)",
            color: "var(--primary-foreground)",
          }}
        >
          {badge}
        </span>
      ) : null}

      <h3
        id={`plan-${id}`}
        className="text-lg font-semibold mb-2 text-center"
        style={{ color: "var(--foreground)" }}
      >
        {name}
      </h3>

      {subtitle ? (
        <div
          className="text-sm text-center mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          {subtitle}
        </div>
      ) : null}

      <div className="mb-4 text-center">
        <div
          className="text-3xl font-extrabold"
          style={{ color: "var(--foreground)" }}
        >
          {price}
        </div>
        <div
          className="text-sm mt-1"
          style={{ color: "var(--muted-foreground)" }}
        >
          {computePerCredit(price, credits)}
        </div>
      </div>

      <ul
        className="mb-6 space-y-2 text-sm"
        style={{ color: "var(--muted-foreground)" }}
      >
        {features.map((f, idx) => (
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
          Start {name}
        </button>
      </div>
    </article>
  );
}
