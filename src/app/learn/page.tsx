import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/learn/")({
  component: LearnPage,
});

function LearnPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">Lær mer</h1>
        <p className="text-base text-[color:var(--color-muted)]">
          Ideen til BoziPhone kom våren 2025. Vi ønsket en telefon som er enkel
          og elegant, uten at den blir et kompromiss. Vi ville lage et tydelig
          alternativ til skjermtid, overvåking og plattformer som eier brukerne
          sine.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Hvorfor nå</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Flere ønsker ro, fokus og en mer stabil digital hverdag. Samtidig er
          mange lei av at de store teknologiselskapene samler inn data og styrer
          oppmerksomheten vår. BoziPhone er et bevisst motstykke, bygget for
          mennesker som vil ha kontrollen tilbake.
        </p>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi ser at interessen for enklere telefoner vokser. Problemet er at
          dagens alternativer enten er for begrensede eller for åpne og
          distraherende. BoziPhone fyller hullet mellom disse ytterpunktene med
          en bevisst begrenset telefon som fortsatt fungerer i en norsk hverdag.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Det viktigste er på plass</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Betaling, ID og transport er ikke valgfritt i Norge. Derfor planlegger
          vi støtte for Vipps, BankID og kollektivtransport som Skyss, Ruter og
          AtB, i tillegg til telefon og meldinger.
        </p>
        <p className="text-base text-[color:var(--color-muted)]">
          BoziPhone skal være bevisst begrenset, men ikke teknologifientlig. Den
          skal være funksjonell, men ikke engasjementsdrevet. Den skal være åpen
          for modifikasjon, men ikke en appplattform.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Simpelt, trygt og pålitelig</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi bygger en opplevelse som skal være stabil og forutsigbar. Én app om
          gangen, ingen påtrengende varsler, ingen støy. Resultatet skal føles
          moderne, men rolig.
        </p>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi kommer aldri til å ha abonnement eller skjulte låsninger. Du skal
          eie telefonen din, og den skal fungere uten ekstra påslag.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Teknisk stack</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Operativsystemet bygges med Yocto Project og blir etter hvert kjent
          som BoziOS. Appene lages i Qt Quick med C++, og hele plattformen er
          modulær slik at vi kan holde den lett, sikker og effektiv.
        </p>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi bruker en bevisst enkel arkitektur og bygger alt med fokus på
          driftssikkerhet. Det gjør telefonen mer stabil, og gir bedre kontroll
          over hva som faktisk kjører på enheten.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Status</h2>
        <p className="text-base text-[color:var(--color-muted)]">
          Vi har allerede en fungerende prototype i emulering med en værapp som
          referanse. Neste steg er maskinvaretesting og videre bygging av
          kjernefunksjoner.
        </p>
      </div>
    </section>
  );
}

export default LearnPage;
