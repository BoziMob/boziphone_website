import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/support/")({
  component: SupportPage,
});

const faqs = [
  {
    question: "Når lanseres BoziPhone?",
    answer:
      "Vi er fortsatt tidlig i utviklingen. Vi deler lanseringsdato så snart maskinvaretesting og kjernefunksjoner er klare.",
  },
  {
    question: "Hva blir prisen?",
    answer:
      "Målet er en pris under 1000 kr, men endelig pris fastsettes nærmere lansering.",
  },
  {
    question: "Kommer BankID og Vipps i første versjon?",
    answer:
      "Nei. Begge er viktige for oss, men er planlagt for senere faser når tekniske og avtalemessige krav er på plass.",
  },
  {
    question: "Har BoziPhone app-butikk?",
    answer:
      "Nei. BoziPhone er bevisst begrenset og har ikke en tradisjonell app-butikk.",
  },
  {
    question: "Hvem passer telefonen for?",
    answer:
      "Primært for deg som vil redusere skjermtid og støy, men også for barn og eldre som ønsker en enkel og trygg mobil.",
  },
  {
    question: "Er BoziPhone åpen kildekode?",
    answer:
      "Ja, retningen er åpen kildekode. Vi publiserer mer kode og dokumentasjon etter hvert som prosjektet modnes.",
  },
  {
    question: "Kommer dere til å selge abonnement?",
    answer:
      "Nei. Vi planlegger ingen abonnement eller skjulte påslag knyttet til selve telefonen.",
  },
  {
    question: "Kan jeg bidra i prosjektet?",
    answer:
      "Ja. Vi ønsker forslag, feilrapporter og bidrag. Følg oss på GitHub for oppdateringer.",
  },
  {
    question: "Har dere investeringsinformasjon nå?",
    answer:
      "Ikke enda. Vi deler mer om dette når selskapsstrukturen er på plass.",
  },
];

function SupportPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">FAQ og kontakt</h1>
        <p className="text-base text-[color:var(--color-muted)]">
          Har du spørsmål om BoziPhone? Her finner du korte svar på det viktigste.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {faqs.map((item) => (
          <article
            key={item.question}
            className="glass-panel lift-on-hover rounded-2xl p-5"
          >
            <h2 className="text-base font-semibold text-[color:var(--color-ink)]">
              {item.question}
            </h2>
            <p className="mt-2 text-base text-[color:var(--color-muted)]">
              {item.answer}
            </p>
          </article>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Kontakt oss</h2>
          <p className="text-base text-[color:var(--color-muted)]">
            Send oss en e-post på{" "}
            <a className="font-medium" href="mailto:kontakt@bozi.no">
              kontakt@bozi.no
            </a>
            .
          </p>
          <p className="text-sm text-[color:var(--color-muted)]">
            Normal svartid: 1–2 virkedager.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Mer informasjon</h2>
          <p className="text-base text-[color:var(--color-muted)]">
            Les mer om produktet og hvordan vi bygger BoziPhone.
          </p>
          <div className="flex flex-col gap-2 text-sm font-medium">
            <Link to="/product">Produkt</Link>
            <Link to="/features">Funksjoner</Link>
            <Link to="/privacy">Personvern</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportPage;
