"use client";

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

export interface Plan {
  id: string;
  name: string;
  subtitle?: string | null;
  /** Price in dollars */
  price: number;
  credits: number;
  badge?: string | null;
  features: string[];
}

const currencyFmt = new Intl.NumberFormat('en-US', {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const PricingCard = React.memo(function PricingCard({
  id,
  name,
  subtitle,
  price,
  credits,
  badge,
  features,
}: Plan) {
  const perCredit = React.useMemo(() => {
    if (!isFinite(price) || credits <= 0) return "";
    const per = price / credits;
    return `${currencyFmt.format(per)} per credit`;
  }, [price, credits]);

  const { label, isBestValue, isMostPopular } = React.useMemo(() => {
    const label = (badge ?? "").trim();
    const norm = label.toLowerCase();
    return {
      label,
      isBestValue: norm.includes("best value"),
      isMostPopular: norm.includes("most popular"),
    };
  }, [badge]);

  return (
    <Card
      className={`group relative h-full rounded-2xl ${
        isMostPopular ? "lg:border-2 shadow-md" : ""
      } transition-all duration-300 ease-out will-change-transform hover:-translate-y-0.5 hover:scale-[1.005] hover:shadow-lg ring-0 ring-transparent hover:ring-2 hover:ring-ring/20 hover:border-ring/30 hover:bg-gradient-to-b hover:from-accent/5 hover:to-transparent`}
      style={{ borderColor: isMostPopular ? "var(--ring)" : undefined }}
      onMouseMove={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        el.style.setProperty("--mx", `${(x * 100).toFixed(2)}%`);
        el.style.setProperty("--my", `${(y * 100).toFixed(2)}%`);
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.setProperty("--mx", "50%");
        el.style.setProperty("--my", "0%");
      }}
      aria-labelledby={`plan-${id}`}
    >
      {/* Soft radial glow from bottom (theme-driven, subtle) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
        style={{
          background:
            "radial-gradient(85% 55% at 50% 115%, var(--ring) 0%, transparent 60%)",
        }}
      />
      {/* Cursor-follow highlight (uses --mx/--my set by onMouseMove) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(160px 160px at var(--mx, 50%) var(--my, 0%), color-mix(in oklch, var(--ring) 18%, transparent) 0%, transparent 60%)",
        }}
      />
      {label ? (
        <Badge
          variant="outline"
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1 text-sm font-medium border transition-all duration-300 z-20 backdrop-blur-sm shadow-sm ring-1 ring-background/80 text-white"
          style={{
            background: isBestValue ? "var(--chart-4)" : "var(--primary)",
            color: "white",
            borderColor: "var(--border)",
          }}
        >
          {label}
        </Badge>
      ) : null}

      <CardHeader className="relative z-10 items-center gap-2 pb-2">
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

      <CardContent className="relative z-10 text-center">
        <div
          className="mb-1 text-3xl font-extrabold tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          {currencyFmt.format(price)}
        </div>
        <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          {perCredit}
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

      <CardFooter className="relative z-10 mt-auto">
        <Button
          className="w-full text-white font-semibold transition-all duration-300 group-hover:translate-y-[-1px] group-hover:shadow-sm"
          aria-label={`Start ${name}`}
        >
          Start {name}
        </Button>
      </CardFooter>
    </Card>
  );
});

export default PricingCard;
