export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className="mb-3 flex items-center gap-3">
          {align === "center" && <span className="h-px flex-1 bg-border" />}
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-ember">
            {eyebrow}
          </span>
          {align === "center" && <span className="h-px flex-1 bg-border" />}
        </div>
      )}
      <h2 className="text-3xl leading-[1.05] sm:text-4xl md:text-5xl">{title}</h2>
      {intro && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{intro}</p>
      )}
    </div>
  );
}
