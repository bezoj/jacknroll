import { SiteShell } from "@/layout/SiteShell";
import { privacySections } from "./consts/privacy";

export function PrivacyPolicyPage() {
  return (
    <SiteShell title="Politika zasebnosti">
      <article className="mx-auto max-w-[820px] px-5 py-16 md:px-10 md:py-24">
        <p className="font-condensed text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Dokumenti
        </p>
        <h1 className="mt-4 font-display text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.84]">
          Politika zasebnosti
        </h1>

        <div className="mt-16 space-y-14">
          {privacySections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="font-display text-4xl leading-none">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="leading-relaxed text-foreground/85"
                >
                  {paragraph}
                </p>
              ))}
              {"items" in section ? (
                <ul className="list-disc space-y-2 pl-5 leading-relaxed text-foreground/85">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </SiteShell>
  );
}
