import { createFileRoute } from "@tanstack/react-router";
import Reveal from "../../components/Reveal";

export const Route = createFileRoute("/pricing/")({
  component: PricingPage,
});

function PricingPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <Reveal>
        <h1 className="text-3xl font-semibold">Priser</h1>
      </Reveal>
      <Reveal delayMs={100}>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi har ikke fastsatt en pris ennå ettersom vi er tidlig i utviklingen,
          men vi planlegger at prisen vil ligge på under 1000 kr.
        </p>
      </Reveal>
      <Reveal delayMs={150}>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi ønsker at prisen er så lav som mulig. Det gjør vi ved å designe
          telefonen til å bruke lite ressurser.
        </p>
      </Reveal>
      <Reveal delayMs={200}>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Hva prisen skal dekke</h2>
          <p className="text-base text-[color:var(--color-muted)]">
            Vi prioriterer det viktigste: drift, sikkerhet og et stabilt system som
            varer lenge. Målet er en telefon du kan stole på uten unødvendige
            ekstrakostnader.
          </p>
        </div>
      </Reveal>
      <Reveal delayMs={230}>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Åpenhet</h2>
          <p className="text-base text-[color:var(--color-muted)]">
            Vi vil være åpne om pris og innhold før lansering. Når mer er klart,
            deler vi detaljer om hva som er inkludert og hvordan prisen er satt.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default PricingPage;
