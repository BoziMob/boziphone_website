const features = [
  {
    title: "Enkel og intuitiv",
    description:
      "Minimalistisk og stilfullt grensesnitt med fysiske knapper som alle kan forstå uten opplæring.",
  },
  {
    title: "Rimelig pris",
    description: "Vi tilbyr en rimelig pris.",
  },
  {
    title: "Tilpasset dagens samfunn",
    description:
      "BoziPhone har de viktige tjenestene man trenger i hverdagen, som apper for kollektivtransport og musikk.",
  },
];

function FeatureList() {
  return (
    <section className="relative left-1/2 right-1/2 w-screen -mx-[50vw] bg-[color:var(--color-surface-muted)] py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 border-t border-[color:var(--color-border)] pt-8 text-sm text-[color:var(--color-muted)] sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-[color:var(--color-ink)]">
                {feature.title}
              </h3>
              <p className="leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureList;
