import Button from "./Button";

type InfoSectionProps = {
  title: string;
  headingLevel?: 1 | 2;
  body: string;
  buttonLabel?: string;
  buttonTo?: string;
  imageClassName: string;
  imageSrc?: string;
  imageAlt?: string;
  imageSizeClassName?: string;
  reverse?: boolean;
};

function InfoSection({
  title,
  headingLevel = 2,
  body,
  buttonLabel,
  buttonTo,
  imageClassName,
  imageSrc,
  imageAlt = "",
  imageSizeClassName = "h-40 sm:h-56",
  reverse = false,
}: InfoSectionProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const imageClasses = `w-full rounded-2xl ${imageSizeClassName} ${imageClassName} ${
    reverse ? "order-1 sm:col-start-1" : "order-2"
  }`;

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
        <Heading
          className={`font-semibold text-[color:var(--color-ink)] ${
            headingLevel === 1 ? "text-3xl" : "text-lg"
          }`}
        >
          {title}
        </Heading>
        <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
          {body}
        </p>
        {buttonLabel && (
          <div>
            <Button to={buttonTo}>{buttonLabel}</Button>
          </div>
        )}
      </div>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`object-cover ${imageClasses}`}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className={imageClasses} />
      )}
    </section>
  );
}

export default InfoSection;
