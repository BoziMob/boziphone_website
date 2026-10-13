import { createFileRoute } from "@tanstack/react-router";
import Reveal from "../../components/Reveal";
import TextLink from "../../components/TextLink";

export const Route = createFileRoute("/support/")({
  component: SupportPage,
});

function SupportPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-10">
      <Reveal>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">Support</h1>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Lurer du på om BoziPhone kan passe for deg, eller har du spørsmål
            om prosjektet? Telefonen er fortsatt under utvikling, men du kan
            gjerne ta kontakt allerede nå.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={100}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Kontakt oss</h2>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Send oss en e-post på{" "}
            <TextLink
              href="mailto:kontakt@bozi.no"
            >
              kontakt@bozi.no
            </TextLink>
            . Vi svarer vanligvis innen 1–2 virkedager.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={150}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Les mer</h2>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            På produktsiden finner du hvem vi lager telefonen for og hvor
            langt vi har kommet. Funksjonssiden beskriver det vi planlegger å
            få med. Er du interessert i å endre programvaren eller bygge
            videre på maskinvaren, kan du lese om planene for åpen kildekode.
          </p>
          <div className="flex flex-col items-start gap-2">
            <TextLink to="/product">
              Om telefonen
            </TextLink>
            <TextLink to="/features">
              Planlagte funksjoner
            </TextLink>
            <TextLink to="/resources">
              Åpen kildekode
            </TextLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default SupportPage;
