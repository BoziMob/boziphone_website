import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy/")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">Personvern</h1>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi samler minst mulig data. Denne siden forklarer hva som behandles når
          du kontakter oss.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Hvilke data vi behandler</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Når du sender e-post til oss, behandler vi normalt navn, e-postadresse
          og innholdet i meldingen for å kunne svare deg.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Formål</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Data brukes kun til support, dialog og oppfølging av henvendelser om
          BoziPhone.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Lagringstid</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi lagrer e-post så lenge det er nødvendig for å håndtere saken din, og
          sletter den når den ikke lenger trengs.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Cookies og analyse</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi bruker for øyeblikket ikke tredjeparts annonsering eller
          sporingsverktøy for profilering.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Dine rettigheter</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Du kan be om innsyn, retting eller sletting av informasjon vi har om
          deg ved å kontakte oss på kontakt@bozi.no.
        </p>
      </div>
    </section>
  );
}

export default PrivacyPage;
