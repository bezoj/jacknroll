import { Link } from "react-router-dom";
import { Rider, Setlist } from "@/assets/files";
import { Separator } from "@/components/ui/separator";
import { contactDetails, navItems } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";

const footerLinkClass =
  "text-sm text-foreground/80 transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="content-frame grid gap-12 px-5 py-16 md:grid-cols-3 md:px-10 lg:px-14">
        <div>
          <p className="font-condensed text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Strani
          </p>
          <ul className="mt-6 space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link to={item.href} className={footerLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-condensed text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Dokumenti
          </p>
          <ul className="mt-6 space-y-3">
            <li>
              <Link to="/privacy-policy" className={footerLinkClass}>
                Politika zasebnosti
              </Link>
            </li>
            <li>
              <a href={Rider} download className={footerLinkClass}>
                Rider
              </a>
            </li>
            <li>
              <a href={Setlist} download className={footerLinkClass}>
                Setlista
              </a>
            </li>
            <li>
              <span className="text-sm text-foreground/55">Promo kit</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-condensed text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Kontakt
          </p>
          <ul className="mt-6 space-y-3">
            <li>
              <a href={`tel:${contactDetails.phone}`} className={footerLinkClass}>
                {contactDetails.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactDetails.email}`}
                className={footerLinkClass}
              >
                {contactDetails.email}
              </a>
            </li>
          </ul>
          <SocialLinks labelled className="mt-6" />
        </div>
      </div>

      <Separator />

      <div className="content-frame overflow-hidden px-5 md:px-10 lg:px-14">
        <p
          aria-hidden="true"
          className="select-none font-display text-[clamp(3.4rem,13.5vw,16rem)] leading-[0.78] tracking-tight"
        >
          JACK &apos;N&apos; ROLL
        </p>
      </div>

      <p className="content-frame px-5 pb-8 text-center text-xs tracking-wide text-muted-foreground md:px-10">
        © Jacknroll band | vse pravice pridržane | Powered by Bezo
      </p>
    </footer>
  );
}
