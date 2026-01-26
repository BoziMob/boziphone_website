import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "../assets/BOZIAURA.png";
import FeatureList from "../components/FeatureList";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Reveal from "../components/Reveal";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delayMs={100}>
        <img
          src={heroImage}
          alt="BoziPhone"
          className="h-48 w-full rounded-2xl border border-[color:var(--color-border)] object-cover sm:h-64"
        />
      </Reveal>
      <Reveal delayMs={150}>
        <InfoSection
          title="Reduser stress i hverdagen"
          body="BoziPhone er laget for deg som vil være mer til stede uten å koble deg helt av. Du får det du trenger i hverdagen, men slipper det som stjeler tid og fokus."
          buttonLabel="Lær mer"
          buttonTo="/learn"
          imageClassName="border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)]"
          imageSizeClassName="h-44 sm:h-64"
        />
      </Reveal>
      <Reveal delayMs={200}>
        <InfoSection
          title="Open source, norsk og bevisst"
          body="BoziPhone er et norsk prosjekt med åpen teknologi i bunn. Vi bygger en telefon som er enkel, moderne og rimelig, uten å gi slipp på viktige tjenester som BankID og kollektivtransport."
          buttonLabel="Om open source"
          buttonTo="/resources"
          imageClassName="border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)]"
          imageSizeClassName="h-44 sm:h-64"
          reverse
        />
      </Reveal>
      <Reveal delayMs={230}>
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-[color:var(--color-ink)]">
            Hvorfor BoziPhone
          </h2>
          <p className="text-base text-[color:var(--color-muted)]">
            Fordi vi vil ha en telefon som er nyttig uten å være
            avhengighetsskapende. BoziPhone har det du <i>faktisk</i> trenger i
            hverdagen, og ingenting mer. BoziPhone er moderne i uttrykket, enkel
            i bruk og laget for norsk hverdag.
          </p>
          <Link className="text-base font-semibold" to="/features">
            Se alle funksjoner
          </Link>
        </section>
      </Reveal>
      <Reveal delayMs={240}>
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-[color:var(--color-ink)]">
            Vanlige spørsmål
          </h2>
          <div className="flex flex-col gap-4 text-base text-[color:var(--color-muted)]">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[color:var(--color-ink)]">
                Hvem passer BoziPhone for?
              </p>
              <p>
                Primært ungdom og unge voksne som ønsker å redusere skjermtid og
                øke tilstedeværelse, men den er også praktisk for barn og eldre
                som vil ha en enkel og trygg telefon.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[color:var(--color-ink)]">
                Kommer BankID og Vipps?
              </p>
              <p>
                Vi ønsker og har planer om å implementere BankID og Vipps i
                fremtiden, men ettersom BoziPhone ikke bruker et standard
                operativsystem som iOS eller Android vil dette være svært
                vanskelig og en stund inn i fremtiden.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[color:var(--color-ink)]">
                Når lanseres telefonen?
              </p>
              <p>
                Vi er tidlig i utviklingen og deler mer informasjon etter hvert
                som vi kommer nærmere produksjon.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
      <Reveal delayMs={250}>
        <FeatureList />
      </Reveal>
    </>
  );
}

export default HomePage;
