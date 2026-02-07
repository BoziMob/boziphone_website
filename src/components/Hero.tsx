import Button from "./Button";

function Hero() {
  return (
    <section className="flex flex-col items-center gap-5 text-center">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="meta-chip">Bygget i Norge</span>
        <span className="meta-chip">Åpen kildekode</span>
      </div>
      <h1 className="text-4xl font-semibold text-[color:var(--color-ink)] sm:text-5xl">
        BoziPhone.
      </h1>
      <p className="text-base text-[color:var(--color-muted)]">
        For en enklere hverdag
      </p>
      <div className="glass-panel tech-surface lift-on-hover w-full rounded-2xl p-3 sm:w-auto sm:p-4">
        <div className="relative z-[1] flex w-full flex-col items-center gap-2 sm:w-auto sm:flex-row">
          <Button className="w-full sm:w-auto" to="/product">
            Se produkt
          </Button>
          <Button className="w-full sm:w-auto" variant="secondary" to="/pricing">
            Se priser
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
