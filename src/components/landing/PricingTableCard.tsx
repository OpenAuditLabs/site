import * as React from "react";
import { Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

  const label = (badge ?? "").trim();
  const norm = label.toLowerCase();
  const isBestValue = norm.includes("best value");
  const isMostPopular = norm.includes("most popular");

  return (
    <Card
      className={`relative h-full rounded-2xl ${
        isMostPopular ? "lg:border-2 shadow-md" : ""
      }`}
      style={{ borderColor: isMostPopular ? "var(--ring)" : undefined }}
      aria-labelledby={`plan-${id}`}
    >
      {label ? (
        <Badge
          variant="outline"
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-sm font-medium border"
          style={{
            background: isBestValue ? "var(--chart-4)" : "var(--primary)",
            color: isBestValue
              ? "var(--foreground)"
              : "var(--primary-foreground)",
            borderColor: "var(--border)",
          }}
        >
          {label}
        </Badge>
      ) : null}

      <CardHeader className="items-center gap-2 pb-2">
        <CardTitle
          id={`plan-${id}`}
          className="text-center text-lg font-semibold tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          {name}
        </CardTitle>
        {subtitle ? (
          <CardDescription className="text-center">{subtitle}</CardDescription>
        ) : null}
      </CardHeader>

      <CardContent className="text-center">
        <div
          className="mb-1 text-3xl font-extrabold tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          {price}
        </div>
        <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          {computePerCredit(price, credits)}
        </div>

        <ul
          className="mt-5 space-y-2 text-sm"
          style={{ color: "var(--muted-foreground)" }}
        >
          {features.map((f, idx) => (
            <li key={idx} className="flex items-start justify-start gap-3">
              <Check
                className="mt-1 flex-shrink-0"
                size={16}
                style={{ color: "var(--primary)" }}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto">
        <Button className="w-full font-semibold">Start {name}</Button>
      </CardFooter>
    </Card>
  );
}
