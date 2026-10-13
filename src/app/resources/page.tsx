import { createFileRoute } from "@tanstack/react-router";
import Reveal from "../../components/Reveal";
import TextLink from "../../components/TextLink";

export const Route = createFileRoute("/resources/")({
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-10">
      <Reveal>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">Open source</h1>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Vi vil at du skal kunne se hvordan BoziPhone fungerer, fra
            operativsystemet til maskinvaren. Du trenger ikke kunne programmere
            for å bruke telefonen, men hvis du vil undersøke den eller bygge
            videre på arbeidet vårt, skal du ha tilgang til det du trenger.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={100}>
        <div className="border-l-2 border-[color:var(--color-border)] py-1 pl-5">
          <p className="text-base leading-relaxed text-[color:var(--color-ink)]">
            Kildekoden, byggeveiledningen og maskinvarefilene er ikke publisert
            ennå. Det vi beskriver her, er planene våre for hva vi skal åpne.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={150}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Operativsystem og apper</h2>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Vi bygger et eget Linux-basert embedded operativsystem med Yocto
            Project, og lager appene med Qt Quick og C++. Operativsystemet skal
            publiseres under GPLv3, sammen med en veiledning for å bygge det
            selv.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Planen er at om du vil, skal du ha muligheten for å endre koden,
            bygge din egen versjon og installere den på telefonen. Du skal også
            kunne bruke operativsystemet som utgangspunkt på egen maskinvare.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={200}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">
            Åpen, men begrenset maskinvare
          </h2>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Maskinvaren skal også være åpen. Vi skal publisere designfilene,
            slik at andre kan undersøke løsningen, gjøre endringer eller bygge
            sin egen maskinvare basert på den og installere operativsystemet
            der.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Vi vil holde maskinvaren så begrenset som mulig, med det som trengs
            til oppgavene telefonen skal løse. Et enklere operativsystem krever
            mindre ressurser, og det gir oss mulighet til å bruke rimeligere
            maskinvare og holde prisen så lav som mulig.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Begrensningene er også en del av hensikten med telefonen. Vi ønsker
            at endeløs scrolling og bruk av sosiale medier ikke skal være mulig
            på telefonen slik vi leverer den. Derfor skal vi begrense både
            programvaren og hva maskinvaren er egnet til å kjøre.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={230}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Følg arbeidet</h2>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Har du ideer eller spørsmål om teknologien, vil vi gjerne høre fra
            deg. Du kan følge prosjektet på GitHub eller sende oss en e-post.
            Når vi publiserer kode og designfiler, vil vi også gjøre det enklere
            å bidra med endringer og feilrapporter.
          </p>
          <div className="flex flex-col items-start gap-2">
            <TextLink
              href="https://github.com/BoziMob"
              rel="noreferrer"
              target="_blank"
            >
              Følg BoziMob på GitHub
            </TextLink>
            <TextLink href="mailto:kontakt@bozi.no">kontakt@bozi.no</TextLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default ResourcesPage;
