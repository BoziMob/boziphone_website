import { createFileRoute } from "@tanstack/react-router";
import Reveal from "../../components/Reveal";
import TextLink from "../../components/TextLink";

export const Route = createFileRoute("/learn/")({
  component: LearnPage,
});

function LearnPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <Reveal>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">Lær mer</h1>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Ideen til BoziPhone kom våren 2025. Vi ønsket oss en telefon som
            kunne gjøre de praktiske tingene vi trenger, uten at resten av dagen
            forsvant inn i den. Det ble utgangspunktet for å bygge vår egen.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={100}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Hvorfor en egen telefon?</h2>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            En enkel mobil er til liten hjelp hvis du må ta med en smarttelefon
            likevel. Derfor tar vi utgangspunkt i en norsk hverdag, der
            transport, betaling og innlogging skjer på mobilen. Vi planlegger
            apper for kollektivtransport og ønsker støtte for BankID og Vipps på
            sikt. De to siste blir mest sansynlig ikke med i første versjon.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Vi vil unngå å bygge enda en telefon som konkurrerer om
            oppmerksomheten din. Vi velger bort sosiale medier og en vanlig
            appbutikk, og bygger et enklere operativsystem til de oppgavene
            telefonen skal løse.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={150}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">
            En telefon du kan eie og forstå
          </h2>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Vi vil at du skal kunne undersøke hvordan telefonen fungerer, og
            gjøre egne endringer hvis du ønsker det. Derfor skal
            operativsystemet og maskinvaredesignet være åpne. Du finner mer om
            teknologien og planene for publisering på siden om åpen kildekode.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Sikkerhet er noe vi prioriterer mens vi utvikler telefonen. Vi vil
            gjøre den så sikker vi kan, og arbeider samtidig for et system som
            er enkelt å vedlikeholde.
          </p>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Vi planlegger ikke abonnement eller ekstra betaling for å bruke
            selve telefonen.
          </p>
          <div className="flex flex-col items-start gap-2">
            <TextLink to="/resources">Les om åpen kildekode</TextLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default LearnPage;
