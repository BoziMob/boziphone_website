import { createFileRoute } from "@tanstack/react-router";
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
          body="BoziPhone er en telefon designet for å redusere skjermbruk, ved å kun ha tjenestene du faktisk trenger. Se hvordan BoziPhone kan hjelpe deg."
          buttonLabel="Lær mer"
          buttonTo="/learn"
          imageClassName="border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)]"
          imageSizeClassName="h-44 sm:h-64"
        />
      </Reveal>
      <Reveal delayMs={200}>
        <InfoSection
          title="Open source teknologi"
          body="Vi er for en mer åpen verden. Derfor er BoziPhone open source."
          buttonLabel="Om open source"
          buttonTo="/resources"
          imageClassName="border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)]"
          imageSizeClassName="h-44 sm:h-64"
          reverse
        />
      </Reveal>
      <Reveal delayMs={250}>
        <FeatureList />
      </Reveal>
    </>
  );
}

export default HomePage;
