import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <h1 className="text-3xl font-semibold">Om oss</h1>
      <p className="text-base text-[color:var(--color-muted)]">
        Vi er et lite, norsk team som bygger BoziPhone.
      </p>
      <div className="flex flex-col gap-3 text-base text-[color:var(--color-muted)]">
        <p>
          <i>Marius Claudey</i> jobber med hardware og studerer elektroingeniør
          ved Høgskulen på Vestlandet.
        </p>
        <p>
          <i>Johannes Aamot-Skeidsvoll</i> jobber med software og studerer
          dataingeniør ved NTNU i Trondheim.
        </p>
        <p>
          <i>Sindre Mjøs</i> jobber med software og studerer dataingeniør ved
          NTNU i Trondheim.
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
