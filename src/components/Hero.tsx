import Button from "./Button";

function Hero() {
  return (
    <section className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-4xl font-semibold text-[color:var(--color-ink)] sm:text-5xl">
        BoziPhone.
      </h1>
      <p className="text-lg text-[color:var(--color-muted)] sm:text-xl">
        En dumtelefon for den norske hverdagen
      </p>
      <p className="max-w-xl text-base leading-relaxed text-[color:var(--color-muted)]">
        Vi bygger en knappestyrt mobil for samtaler, meldinger og det praktiske i
        hverdagen, uten sosiale medier. Telefonen er fortsatt under utvikling.
      </p>
      <div className="flex w-full flex-col items-center gap-2 sm:w-auto sm:flex-row">
        <Button className="w-full sm:w-auto" to="/product">
          Om telefonen
        </Button>
        <Button className="w-full sm:w-auto" variant="secondary" to="/pricing">
          Se priser
        </Button>
      </div>
    </section>
  );
}

export default Hero;
