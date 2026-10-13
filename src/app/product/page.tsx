import { createFileRoute } from "@tanstack/react-router";
import Reveal from "../../components/Reveal";
import TextLink from "../../components/TextLink";

export const Route = createFileRoute("/product/")({
  component: ProductPage,
});

function ProductPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <Reveal>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">Produkt</h1>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            BoziPhone er en knappestyrt mobil vi bygger for deg som vil bruke
            mindre tid på telefonen, men fortsatt vil kunne ringe, sende
            meldinger og ordne de vanlige praktiske tingene man vanligvis gjør i
            hverdagen. Vi tar utgangspunkt i kun det du trenger å ha med deg og
            ingenting mer. Mobilen kommer ikke til å ha en lang katalog av ulike
            spesielle tjenester.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Du skal kunne bruke telefonen uten å vite noe om teknologien bak. Er
            du nysgjerrig på hvordan den fungerer, eller vil endre den selv,
            planlegger vi å åpne både operativsystemet og maskinvaredesignet.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={100}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Passer den for deg?</h2>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Vi lager først og fremst BoziPhone for unge voksne som ønsker en
            enklere mobilhverdag. Den kan også være aktuell for barn og eldre
            som foretrekker fysiske knapper og færre funksjoner å forholde seg
            til.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Det kommer ingen vanlig appbutikk. Vi planlegger egne apper for
            blant annet kollektivtransport, men BankID og Vipps blir ikke med i
            første versjon. Hvis du er avhengig av disse på mobilen, er det
            viktig å ta med i vurderingen.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={150}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Hvor langt har vi kommet?</h2>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Telefonen er fortsatt under utvikling. Vi har en fungerende
            prototype av programvaren som kjører både i emulering og på fysisk
            maskinvare. Nå jobber vi videre med telefonens maskinvare og
            grunnleggende funksjoner. Det du leser her, beskriver derfor hva vi
            planlegger for den ferdige telefonen.
          </p>
          <div className="flex flex-col items-start gap-2">
            <TextLink to="/features">Se planlagte funksjoner</TextLink>
            <TextLink to="/resources">Les om åpen kildekode</TextLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default ProductPage;
