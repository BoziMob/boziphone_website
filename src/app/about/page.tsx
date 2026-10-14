import { createFileRoute } from "@tanstack/react-router";
import crewImage from "../../assets/crew.jpg";
import InfoSection from "../../components/InfoSection";
import Reveal from "../../components/Reveal";
import TextLink from "../../components/TextLink";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <Reveal>
        <InfoSection
          title="Om oss"
          headingLevel={1}
          body="Vi er tre studenter som bygger BoziPhone. Ideen startet våren 2025, med et ønske om en enklere telefon som fortsatt kunne være nyttig i den norske hverdagen."
          imageSrc={crewImage}
          imageAlt="Arbeidsøkt med BoziPhone-prosjektet rundt et bord med datamaskiner"
          imageClassName="border border-[color:var(--color-border)] object-[50%_25%]"
          imageSizeClassName="aspect-[2/1]"
        />
      </Reveal>
      <Reveal delayMs={100}>
        <div className="flex flex-col gap-4">
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Marius Claudey jobber med maskinvaren og studerer elektroingeniør
            ved Høgskulen på Vestlandet. Johannes Aamot-Skeidsvoll og Sindre
            Mjøs jobber med programvaren og studerer dataingeniør ved NTNU i
            Trondheim.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Vi er fortsatt tidlig i utviklingen og har både maskinvare og
            programvare å få på plass. Har du spørsmål eller lyst til å bidra,
            hører vi gjerne fra deg.
          </p>
          <div className="flex flex-col items-start gap-2">
            <TextLink to="/support">Ta kontakt med oss</TextLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default AboutPage;
