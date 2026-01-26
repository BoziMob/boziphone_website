import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/features/")({
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <h1 className="text-3xl font-semibold">Funksjoner</h1>
      <p className="text-base text-[color:var(--color-muted)]">
        Denne siden er under arbeid.
      </p>
    </section>
  );
}

export default FeaturesPage;
