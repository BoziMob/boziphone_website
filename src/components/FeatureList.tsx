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
    <section className="grid gap-6 border-t border-neutral-200 pt-8 text-sm text-neutral-600 sm:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.title} className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-neutral-900">
            {feature.title}
          </h3>
          <p className="leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default FeatureList;
