import React from "react";
import { Button } from "@/components/ui/button";

export function JoinMission() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center ">
        <div className="bg-card border border-border rounded-lg p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We're always looking for talented security researchers and
            blockchain experts to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="link"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Open Positions →
            </Button>
            <Button
              variant="link"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Get In Touch →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
