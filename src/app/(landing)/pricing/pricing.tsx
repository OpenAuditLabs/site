import { Card } from "@/components/ui/card";

export default function PricingSection() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Pricing Plans
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Choose the perfect plan for your needs
        </p>

        <Card className="max-w-md mx-auto p-8 border-dashed border-2 border-border bg-card">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <span className="text-2xl">🚧</span>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">
              Pricing Section
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              This is a placeholder component. Pricing plans and features will
              be added here.
            </p>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
              🔨 Under Construction
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
