import Button from "./Button";

type InfoSectionProps = {
  title: string;
  body: string;
  buttonLabel: string;
  imageClassName: string;
  imageSizeClassName?: string;
  reverse?: boolean;
};

function InfoSection({
  title,
  body,
  buttonLabel,
  imageClassName,
  imageSizeClassName = "h-40 sm:h-56",
  reverse = false,
}: InfoSectionProps) {
  return (
    <section
      className={`grid items-center gap-6 sm:grid-cols-2 ${
        reverse ? "sm:grid-flow-col-dense" : ""
      }`}
    >
      <div
        className={`flex flex-col gap-3 ${
          reverse ? "order-2 sm:col-start-2" : "order-1"
        }`}
      >
        <h2 className="text-lg font-semibold text-[color:var(--color-ink)]">
          {title}
        </h2>
        <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
          {body}
        </p>
        <div>
          <Button>{buttonLabel}</Button>
        </div>
      </div>
      <div
        className={`w-full rounded-2xl ${imageSizeClassName} ${imageClassName} ${
          reverse ? "order-1 sm:col-start-1" : "order-2"
        }`}
      />
    </section>
  );
}

export default InfoSection;
