import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resources/")({
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">Open source</h1>
        <p className="text-base text-[color:var(--color-muted)]">
          BoziPhone er bygget på prinsippet om åpenhet. Vi tror at teknologi som
          påvirker hverdagen bør være forståelig, åpen og mulig å forbedre av
          fellesskapet.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Hvorfor open source?</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Åpen kildekode gjør det enklere å bygge tillit. Du kan se hva som
          faktisk skjer under panseret, hvordan data håndteres, og hvilke valg
          som er tatt.
        </p>
        <p className="text-base text-[color:var(--color-muted)]">
          Det betyr at flere kan bidra med forbedringer, feilrettinger og nye
          ideer, slik at BoziPhone blir bedre over tid.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Hva er åpent</h2>
        <ul className="flex list-disc flex-col gap-2 pl-5 text-base text-[color:var(--color-muted)]">
          <li>Kildekode for brukergrensesnitt og apper.</li>
          <li>Dokumentasjon og veiledninger.</li>
          <li>Retningslinjer for personvern og sikkerhet.</li>
        </ul>
        <p className="text-base text-[color:var(--color-muted)]">
          Koden er foreløping ikke tilgjengelig da vi fortsatt er veldig tidlig
          i utviklingen.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Bidra</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Har du lyst til å bidra? Vi tar gjerne imot forslag, feilrapporter og
          kodebidrag. Små forbedringer betyr mye.
        </p>
        <p className="text-base text-[color:var(--color-muted)]">
          Følg oss på GitHub for oppdateringer og åpne issues.
        </p>
        <a
          className="text-base font-medium"
          href="https://github.com/BoziMob"
          rel="noreferrer"
          target="_blank"
        >
          github.com/BoziMob
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Kontakt</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Har du spørsmål om open source‑arbeidet vårt? Send oss en e-post på{" "}
          <a className="font-medium" href="mailto:kontakt@bozi.no">
            kontakt@bozi.no
          </a>
          .
        </p>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi svarer vanligvis innen 1–2 virkedager.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Videre planer</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi jobber med å publisere mer dokumentasjon, designressurser og et
          tydelig roadmap. Målet er at alle kan forstå hva som kommer, og være
          med på å forme det.
        </p>
      </div>
    </section>
  );
}

export default ResourcesPage;
