import { createFileRoute } from "@tanstack/react-router";
import Reveal from "../../components/Reveal";

export const Route = createFileRoute("/pricing/")({
  component: PricingPage,
});

function PricingPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <Reveal>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">Priser</h1>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Målet vårt er at BoziPhone skal koste under 1000 kr. Prisen er ikke
            enda fastsatt, da vi fortsatt er tidlig i utviklingen.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Vi prøver å holde kostnadene nede ved å bygge et enkelt
            operativsystem som kan kjøre på rimelig maskinvare. Vi velger ut fra
            det telefonen faktisk skal brukes til, fremfor å gi den kapasitet
            til alt en smarttelefon kan gjøre.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Før lansering vil vi oppgi endelig pris og hva som følger med. Vi
            planlegger ikke abonnement eller ekstra betaling for å bruke selve
            telefonen.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default PricingPage;
