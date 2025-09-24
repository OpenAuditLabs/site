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
              className="rounded-md p-4 shadow-sm bg-card text-foreground"
            >
              <h3
                className="text-lg font-semibold text-primary"
              >
                {f.title}
              </h3>
              {f.description ? (
                <p className="mt-2 text-sm text-muted-foreground">
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
