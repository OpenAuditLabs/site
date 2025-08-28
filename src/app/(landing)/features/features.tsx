type Feature = {
  id?: string;
  title: string;
  description?: string;
};

type Props = {
  features: Feature[];
};

export default function Features({ features }: Props) {
  return (
    <section aria-label="Features" className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={f.id ?? i}
              className="rounded-md p-4 shadow-sm"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--foreground)",
              }}
            >
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--primary)" }}
              >
                {f.title}
              </h3>
              {f.description ? (
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {f.description}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
