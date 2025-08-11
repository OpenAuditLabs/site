import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
            <span className="block ">Secure Your</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Smart Contracts
            </span>
            <span className="block">with</span>
            <span className="block">OpenTestingLabs</span>
          </h1>
          <p className="mt-8 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl space-y-2">
            <span className="block">
              Transparent audits built on open-source best practices.
            </span>
            <span className="block">
              Protect your blockchain projects with comprehensive security
              analysis.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
