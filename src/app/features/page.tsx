import { createFileRoute } from "@tanstack/react-router";
import Reveal from "../../components/Reveal";
import TextLink from "../../components/TextLink";

export const Route = createFileRoute("/features/")({
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <Reveal>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">Funksjoner</h1>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Vi velger funksjoner ut fra hva som er nyttig å ha i lommen. Du skal
            kunne holde kontakten, finne frem og høre på musikk uten at
            telefonen stadig pirrer deg. Funksjonene nedenfor er planlagt, men
            merk vi fortsatt er tidlig i utviklingen.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={100}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Knapper og kontakt</h2>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Telefonen skal styres med et numerisk tastatur, en navigasjonsknapp
            og funksjonstaster. Vi vil gjøre det enkelt å finne frem med én
            hånd, med tydelige valg og uten å måtte sveipe gjennom mange menyer.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Anrop, SMS og kontakter er kjernen. Vi planlegger anropslogg og
            hurtigvalg, meldinger samlet i samtaler og mulighet til å importere
            og eksportere kontaktene dine.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={150}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Det praktiske i hverdagen</h2>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Vi planlegger alarm, klokke, notater og navigasjon med posisjon. Du
            skal også kunne spille av musikk fra lokale filer. For
            kollektivtransport ønsker vi egne apper, slik at du kan reise uten å
            være avhengig av en smarttelefon.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            BankID og Vipps kommer ikke i første versjon. Vi ønsker å støtte dem
            senere, men vet ikke enda når det blir mulig.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={200}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">
            Færre ting som krever oppmerksomhet
          </h2>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            BoziPhone skal ikke ha en vanlig appbutikk eller
            tredjepartsinstallasjoner som standard. Vi velger et begrenset sett
            med apper for vanlig bruk. For deg som vil bygge og installere din
            egen versjon av operativsystemet, planlegger vi en egen
            byggeveiledning.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Vi jobber også for lavt strømforbruk: skjermen skal dimmes når den
            ikke brukes, og radiosignaler skal kunne slås av. Batterilevetiden
            må vi måle på maskinvaren før vi kan si hvor lenge telefonen holder
            mellom ladingene.
          </p>
          <div className="flex flex-col items-start gap-2">
            <TextLink to="/resources">
              Les om operativsystemet og maskinvaren
            </TextLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default FeaturesPage;
