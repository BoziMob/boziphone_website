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
        <h2 className="text-lg font-semibold">Hva den er</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          En kompakt telefon med fysiske knapper, tydelig skjerm og et bevisst
          operativsystem som holder fokus der det skal være. Målet er ikke
          nostalgi, men funksjonell minimalisme tilpasset norsk hverdag.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Hva den ikke er</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          BoziPhone er ikke en smarttelefon med appbutikk og konstant distraksjon.
          Den er laget for å redusere skjermbruk, ikke for å konkurrere om tiden
          din.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">For hvem</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Primært for unge voksne som ønsker balanse, men også relevant for barn
          og eldre som trenger en trygg og oversiktlig telefon.
        </p>
      </div>
    </section>
  );
}

export default ProductPage;
