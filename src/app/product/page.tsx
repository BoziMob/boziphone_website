import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/product/")({
  component: ProductPage,
});

function ProductPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">Produkt</h1>
        <p className="text-base text-[color:var(--color-muted)]">
          BoziPhone er en norsk, knappestyrt mobil designet for å gi deg ro og
          kontroll i en travel digital hverdag. Den er enkel å bruke, men dekker
          det viktigste du faktisk trenger.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Funksjonell minimalisme</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi bygger en telefon som gir deg nødvendige tjenester uten at du drukner
          i apper og varsler. Målet er å gi deg mer tilstedeværelse, mindre
          skjermtid og et verktøy som fungerer når du trenger det.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Elegant og moderne</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          BoziPhone skal føles som et bevisst valg, ikke et kompromiss. Den skal
          være stilren, solid og laget for en målgruppe som vil ha enkelhet uten
          å gi opp uttrykk og kvalitet.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Bygget for Norge</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi tar utgangspunkt i en norsk hverdag med BankID, Vipps og
          kollektivtransport. Derfor planlegger vi støtte for tjenester som gjør
          at du ikke faller utenfor, selv om du velger en enklere telefon.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Hvem den er for</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Primært unge voksne som ønsker balanse, men også relevant for barn og
          eldre som trenger en trygg og oversiktlig telefon.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Status</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi er tidlig i utviklingen og bygger både programvare og maskinvare.
          Målet er å lage et robust produkt som kan vare lenge.
        </p>
      </div>
    </section>
  );
}

export default ProductPage;
