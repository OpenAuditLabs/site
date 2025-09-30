import React from "react";
import HeroCarousel from "@/components/landing/hero/HeroCarousel";

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      {/* soft radial backdrop similar to mock */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 20% -5%, rgba(24,151,62,0.12), transparent 60%), radial-gradient(60% 40% at 80% -5%, rgba(0, 255, 136, 0.1), transparent 60%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-6 md:py-10 lg:py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight leading-tight md:text-5xl lg:text-6xl">
            Secure Your Smart Contracts with OpenAudit
          </h1>
        </div>
        <div>
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
