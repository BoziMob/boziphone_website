import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <h1 className="text-3xl font-semibold">Om oss</h1>
      <p className="text-base text-[color:var(--color-muted)]">
        Vi er et lite, norsk team som bygger BoziPhone.
      </p>
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Bakgrunn</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Ideen til BoziPhone startet våren 2025: en mobil som er enkel, tydelig
          og rolig i bruk, uten å bli et kompromiss i norsk hverdag.
        </p>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi bygger med åpen teknologi og fokus på lang levetid, driftssikkerhet
          og kontroll over hva som faktisk kjører på enheten.
        </p>
      </div>
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
      <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)] p-5">
        <h2 className="text-lg font-semibold">Investering og videre informasjon</h2>
        <p className="mt-2 text-base text-[color:var(--color-muted)]">
          Vi publiserer mer informasjon om investering når selskapsstrukturen er
          på plass. Frem til da deler vi løpende oppdateringer om produkt og
          utvikling.
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
