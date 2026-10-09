import { Rider } from "@/assets/files";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ContactUsForm } from "@/features/forms";
import { contactDetails } from "@/lib/site";

export function ContactUsPage() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border">
      <div className="content-frame grid lg:grid-cols-2">
        <div className="px-5 py-16 md:px-10 lg:px-14 lg:py-24">
          <p className="font-condensed text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Kontakt
          </p>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(2.8rem,5vw,4.6rem)] leading-[0.9]">
            Piši nam če želiš pravo dozo rokenrola in mainstream muzike!
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/80">
            Izpolni obrazec tukaj, ali pa nam piši ter sledi na socialnih
            omrežjih
          </p>

          <Separator className="my-10" />

          <ul className="space-y-3 text-lg">
            <li>
              <a
                href={`tel:${contactDetails.phone}`}
                className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
              >
                {contactDetails.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactDetails.email}`}
                className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
              >
                {contactDetails.email}
              </a>
            </li>
          </ul>
          <SocialLinks labelled className="mt-6" />

          <div className="mt-14">
            <h3 className="font-display text-4xl leading-none">
              Dokumenti za organizatorje
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Prenesi si tehnične in hospitality zahteve skupine
            </p>
            <Button variant="outline" className="mt-6" asChild>
              <a href={Rider} download>
                Rider
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border px-5 py-16 md:px-10 lg:border-l lg:border-t-0 lg:px-14 lg:py-24">
          <ContactUsForm className="max-w-xl" />
        </div>
      </div>
    </section>
  );
}
