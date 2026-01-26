import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/support/")({
  component: SupportPage,
});

function SupportPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">Support</h1>
        <p className="text-base text-[color:var(--color-muted)]">
          Trenger du hjelp med BoziPhone? Vi svarer så raskt vi kan.
        </p>
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
          <h2 className="text-lg font-semibold">Ofte stilte spørsmål</h2>
          <p className="text-base text-[color:var(--color-muted)]">
            Vi samler veiledninger og svar fortløpende.
          </p>
          <div className="flex flex-col gap-2 text-sm font-medium">
            <Link to="/learn">Lær mer om BoziPhone</Link>
            <Link to="/resources">Ressurser og dokumentasjon</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportPage;
