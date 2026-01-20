import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resources/")({
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">Ressurser</h1>
      <p className="text-base text-[color:var(--color-muted)]">
        Denne siden er under arbeid.
      </p>
    </section>
  );
}

export default ResourcesPage;
