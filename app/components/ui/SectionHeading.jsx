import { Reveal } from "./Reveal";
import { Badge } from "./Badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`flex flex-col gap-4 ${
        isCenter ? "mx-auto max-w-2xl items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className="text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
