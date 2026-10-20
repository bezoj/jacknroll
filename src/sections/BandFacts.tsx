import { facts } from "./consts/landing";

export function BandFacts() {
  return (
    <div className="border-b border-border">
      <ul className="content-frame grid grid-cols-3">
        {facts.map((fact) => (
          <li
            key={fact.label}
            className="border-r border-border px-4 py-8 last:border-r-0 sm:px-8 md:py-12 lg:px-14"
          >
            <p className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-none">
              {fact.value}
            </p>
            <p className="mt-2 font-condensed text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:text-xs">
              {fact.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
