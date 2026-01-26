import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/features/")({
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">Funksjoner</h1>
        <p className="text-base text-[color:var(--color-muted)]">
          BoziPhone er laget for funksjonell minimalisme. Du får det viktigste,
          uten støy og distraksjoner.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Knappebasert kontroll</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Telefonen styres fullt og helt med fysiske knapper. Numerisk tastatur,
          navigasjonsknapp og funksjonstaster gjør at den kan brukes med én hånd,
          og at den er enkel å lære for alle aldersgrupper.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Grunnleggende funksjoner</h2>
        <ul className="flex list-disc flex-col gap-2 pl-5 text-base text-[color:var(--color-muted)]">
          <li>Taleanrop med anropslogg og hurtigvalg.</li>
          <li>SMS med trådvisning og enkel håndtering.</li>
          <li>Kontakter med import og eksport.</li>
          <li>Alarm, klokke og enkle notater.</li>
          <li>Enkel navigasjon og posisjon.</li>
          <li>Musikkavspilling med lokale filer.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Viktige tjenester</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi planlegger egne apper for kollektivtransport og andre tjenester som
          gjør hverdagen mulig uten smarttelefon. Vipps og BankID er viktige, men
          er ikke med i første versjon. Vi bygger plattformen slik at de kan
          legges til når det blir mulig.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Ingen app-butikk</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          BoziPhone har ingen app-butikk og ingen tredjepartsinstallasjoner som
          standard. Systemet er lukket for distraksjoner, men åpent for det som
          er nødvendig.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Lang batterilevetid</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          BoziPhone er designet for å bruke lite strøm. Skjermen dimmes når den
          ikke er i bruk, radiosignaler kan slås av, og systemet prioriterer
          stabilitet fremfor bakgrunnsaktivitet.
        </p>
      </div>
    </section>
  );
}

export default FeaturesPage;
