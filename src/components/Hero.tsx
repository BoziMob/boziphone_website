import Button from "./Button";

function Hero() {
  return (
    <section className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-4xl font-semibold text-neutral-900 sm:text-5xl">
        BoziPhone.
      </h1>
      <p className="text-base text-neutral-600">For en enklere hverdag</p>
      <div className="flex w-full flex-col items-center gap-2 sm:w-auto sm:flex-row">
        <Button className="w-full sm:w-auto">Lær mer</Button>
        <Button className="w-full sm:w-auto" variant="secondary">
          Se priser
        </Button>
      </div>
    </section>
  );
}

export default Hero;
