import { createFileRoute } from "@tanstack/react-router";
import FeatureList from "../components/FeatureList";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <div className="h-48 w-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)] sm:h-64" />
      <InfoSection
        title="Reduser stress i hverdagen"
        body="BoziPhone er en telefon designet for å redusere skjermbruk, ved å kun ha tjenestene du faktisk trenger. Se hvordan BoziPhone kan hjelpe deg."
        buttonLabel="Lær mer"
        imageClassName="border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)]"
        imageSizeClassName="h-44 sm:h-64"
      />
      <InfoSection
        title="Open source teknologi"
        body="Vi er for en mer åpen verden. Derfor er BoziPhone open source."
        buttonLabel="Om open source"
        imageClassName="border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)]"
        imageSizeClassName="h-44 sm:h-64"
        reverse
      />
      <FeatureList />
    </>
  );
}

export default HomePage;
