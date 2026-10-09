import { SiteShell } from "@/components/layout/SiteShell";

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
          <section className="space-y-4">
            <h2 className="font-display text-4xl leading-none">Splošno</h2>
            <p className="leading-relaxed text-foreground/85">
              Zasebnost uporabnikov nam je zelo pomembna. Ta politika zasebnosti
              opisuje, katere podatke zbiramo, kako jih uporabljamo, hranimo in
              varujemo, ter katere pravice imate kot uporabnik naše spletne
              strani.
            </p>
            <p className="leading-relaxed text-foreground/85">
              Ta politika zasebnosti se lahko kadarkoli spremeni ali dopolni,
              brez predhodnega opozorila ali obvestila. Z uporabo spletnih
              strani ponudnika po spremembi ali dopolnitvi posameznik potrjuje,
              da soglaša s spremembami in dopolnitvami. Z uporabo spletne strani
              uporabnik potrjuje, da sprejema in soglaša s celotno vsebino te
              politike zasebnosti, v kolikor niso za posamezne primere potrebne
              dodatne oblike privolitve.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-4xl leading-none">
              Osebni podatki
            </h2>
            <p className="leading-relaxed text-foreground/85">
              Skupina Jack &apos;n&apos; Roll obravnava vse osebne podatke v
              skladu z veljavno zakonodajo ter internimi pravili in obvestili.
              Vsi posredovani osebni podatki so obravnavani zaupno in
              uporabljeni izključno za namen, zaradi katerega so bili
              posredovani. Z osebnimi podatki ravnamo odgovorno in skrbno, pri
              čemer upoštevamo vse zakonske zahteve glede varstva osebnih
              podatkov. Za zaščito podatkov uporabljamo ustrezne organizacijske
              ukrepe, delovne postopke in sodobne tehnološke rešitve, pogosto
              tudi s pomočjo zunanjih strokovnjakov, z namenom zagotavljanja
              visoke ravni varnosti.
            </p>
            <p className="leading-relaxed text-foreground/85">
              Skupina Jack &apos;n&apos; roll preko kontaktnega obrazca zbira
              naslednje podatke:
            </p>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-foreground/85">
              <li>Ime in priimek</li>
              <li>Email</li>
              <li>Telefonska številka</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-4xl leading-none">
              Hramba osebnih podatkov
            </h2>
            <p className="leading-relaxed text-foreground/85">
              Skupina Jack &apos;n&apos; Roll osebne podatke hrani le toliko
              časa, kolikor je to potrebno za izpolnitev namena, za katerega so
              bili podatki zbrani, oziroma v obdobju, ki ga določajo veljavni
              predpisi. Ko podatki niso več potrebni za namen, zaradi katerega
              so bili zbrani, jih varno izbrišemo, uničimo ali anonimiziramo,
              razen če zakon ne določa drugače (npr. v primerih, ko zakonodaja
              zahteva daljšo hrambo določenih podatkov).
            </p>
            <p className="leading-relaxed text-foreground/85">
              Zavezani smo k temu, da osebne podatke varujemo tudi v času
              hrambe, s skrbno izbiro varnostnih ukrepov in ustreznim nadzorom
              nad dostopom.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-4xl leading-none">Piškotki</h2>
            <p className="leading-relaxed text-foreground/85">
              Spletna stran Jack &apos;n&apos; Roll uporablja piškotke za
              zagotavljanje boljše uporabniške izkušnje, analizo prometa in
              omogočanje določenih funkcionalnosti spletnega mesta.
            </p>
            <p className="leading-relaxed text-foreground/85">
              Piškotki so majhne besedilne datoteke, ki jih spletna stran shrani
              v napravo uporabnika ob obisku. Z njihovo pomočjo si spletno mesto
              zapomni uporabnikove nastavitve, dejanja in preference (kot so
              jezik, prijava, vsebine v košarici ipd.), tako da jih ni treba
              znova nastavljati ob vsakem obisku.
            </p>
            <p className="leading-relaxed text-foreground/85">
              Uporabnik lahko uporabo piškotkov nadzira in po želji spremeni
              nastavitve v svojem brskalniku. Večina brskalnikov omogoča
              sprejemanje, zavrnitev ali brisanje piškotkov. Pomembno je vedeti,
              da lahko zavrnitev piškotkov vpliva na delovanje določenih delov
              spletne strani.
            </p>
            <p className="leading-relaxed text-foreground/85">
              Uporabo piškotkov v Evropski uniji (EU) določa Direktiva o
              zasebnosti in elektronskih komunikacijah 2002/58/ES, katere člen,
              ki se nanaša na piškotke in podobne tehnologije, je bil spremenjen
              z Direktivo 136/2009.
            </p>
          </section>
        </div>
      </article>
    </SiteShell>
  );
}
