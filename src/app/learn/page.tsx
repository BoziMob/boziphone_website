import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/learn/")({
  component: LearnPage,
});

function LearnPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">Lær mer</h1>
        <p className="text-base text-[color:var(--color-muted)]">
          BoziPhone er bygget for å gi deg det nødvendige uten å slippe inn
          resten. Vi tar utgangspunkt i norsk hverdag og de tjenestene som faktisk
          brukes.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Det viktigste er på plass</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Betaling, ID og transport er ikke valgfritt i Norge. Derfor planlegger
          vi støtte for Vipps, BankID og kollektivtransport som Skyss, Ruter og
          AtB, i tillegg til telefon og meldinger.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">En bevisst plattform</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Systemet er bygget for fokus. Én app om gangen, ingen masete varsler og
          ingen appbutikk som drar deg i nye retninger. Opplevelsen skal være
          stabil og forutsigbar.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Status</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi har allerede en fungerende prototype i emulering med en værapp som
          referanse. Neste steg er maskinvaretesting og videre bygging av
          kjernefunksjoner.
        </p>
      </div>
    </section>
  );
}

export default LearnPage;
