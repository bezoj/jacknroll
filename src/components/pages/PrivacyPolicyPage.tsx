import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Section } from "../page-sections";
import { Flex, FlexColumn } from "../containers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Text } from "../typography";

export function PrivacyPolicyPage() {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Flex className="bg-primary justify-center">
      <Flex className="justify-center w-full max-w-[1920px]">
        <Section
          bgColor="primary"
          className="justify-center items-center p-[30px] gap-[30px] w-full"
        >
          <Flex className="bg-primary min-h-[150px] justify-between items-center sticky top-0 w-full m-auto">
            <Link to="/">
              <FontAwesomeIcon
                icon={faArrowLeft}
                color="white"
                className="text-2xl"
              />
            </Link>
            <Text
              textVariant="title"
              colorVariant="secondary"
              className="absolute left-1/2 transform -translate-x-1/2 text-[45px] lg:text-[70px]"
            >
              Politika zasebnosti
            </Text>
          </Flex>
          <FlexColumn className="w-full items-start justify-start gap-14 min-h-screen">
            <FlexColumn className="gap-4">
              <Text textVariant="subtitle" colorVariant="secondary">
                Splošno
              </Text>
              <Text textVariant="body" colorVariant="secondary">
                Zasebnost uporabnikov nam je zelo pomembna. Ta politika
                zasebnosti opisuje, katere podatke zbiramo, kako jih
                uporabljamo, hranimo in varujemo, ter katere pravice imate kot
                uporabnik naše spletne strani.
              </Text>
              <Text textVariant="body" colorVariant="secondary">
                Ta politika zasebnosti se lahko kadarkoli spremeni ali dopolni,
                brez predhodnega opozorila ali obvestila. Z uporabo spletnih
                strani ponudnika po spremembi ali dopolnitvi posameznik
                potrjuje, da soglaša s spremembami in dopolnitvami. Z uporabo
                spletne strani uporabnik potrjuje, da sprejema in soglaša s
                celotno vsebino te politike zasebnosti, v kolikor niso za
                posamezne primere potrebne dodatne oblike privolitve.
              </Text>
            </FlexColumn>
            <FlexColumn className="gap-4">
              <Text textVariant="subtitle" colorVariant="secondary">
                Osebni podatki
              </Text>
              <Text textVariant="body" colorVariant="secondary">
                Skupina Jack 'n' Roll obravnava vse osebne podatke v skladu z
                veljavno zakonodajo ter internimi pravili in obvestili. Vsi
                posredovani osebni podatki so obravnavani zaupno in uporabljeni
                izključno za namen, zaradi katerega so bili posredovani. Z
                osebnimi podatki ravnamo odgovorno in skrbno, pri čemer
                upoštevamo vse zakonske zahteve glede varstva osebnih podatkov.
                Za zaščito podatkov uporabljamo ustrezne organizacijske ukrepe,
                delovne postopke in sodobne tehnološke rešitve, pogosto tudi s
                pomočjo zunanjih strokovnjakov, z namenom zagotavljanja visoke
                ravni varnosti.
              </Text>
              <Text textVariant="body" colorVariant="secondary">
                Skupina Jack 'n' roll preko kontaktnega obrazca zbira naslednje
                podatke:
              </Text>
              <Text textVariant="body" colorVariant="secondary">
                <li>Ime in priimek</li>
              </Text>
              <Text textVariant="body" colorVariant="secondary">
                <li>Email</li>
              </Text>
              <Text textVariant="body" colorVariant="secondary">
                <li>Telefonska številka</li>
              </Text>
            </FlexColumn>
            <FlexColumn className="gap-4">
              <Text textVariant="subtitle" colorVariant="secondary">
                Hramba osebnih podatkov
              </Text>
              <Text textVariant="body" colorVariant="secondary">
                Skupina Jack 'n' Roll osebne podatke hrani le toliko časa,
                kolikor je to potrebno za izpolnitev namena, za katerega so bili
                podatki zbrani, oziroma v obdobju, ki ga določajo veljavni
                predpisi. Ko podatki niso več potrebni za namen, zaradi katerega
                so bili zbrani, jih varno izbrišemo, uničimo ali anonimiziramo,
                razen če zakon ne določa drugače (npr. v primerih, ko zakonodaja
                zahteva daljšo hrambo določenih podatkov).
              </Text>
              <Text textVariant="body" colorVariant="secondary">
                Zavezani smo k temu, da osebne podatke varujemo tudi v času
                hrambe, s skrbno izbiro varnostnih ukrepov in ustreznim nadzorom
                nad dostopom.
              </Text>
            </FlexColumn>
            <FlexColumn className="gap-4">
              <Text textVariant="subtitle" colorVariant="secondary">
                Piškotki
              </Text>
              <Text textVariant="body" colorVariant="secondary">
                Spletna stran Jack 'n' Roll uporablja piškotke za zagotavljanje
                boljše uporabniške izkušnje, analizo prometa in omogočanje
                določenih funkcionalnosti spletnega mesta.
              </Text>
              <Text textVariant="body" colorVariant="secondary">
                Piškotki so majhne besedilne datoteke, ki jih spletna stran
                shrani v napravo uporabnika ob obisku. Z njihovo pomočjo si
                spletno mesto zapomni uporabnikove nastavitve, dejanja in
                preference (kot so jezik, prijava, vsebine v košarici ipd.),
                tako da jih ni treba znova nastavljati ob vsakem obisku.
              </Text>
              <Text textVariant="body" colorVariant="secondary">
                Uporabnik lahko uporabo piškotkov nadzira in po želji spremeni
                nastavitve v svojem brskalniku. Večina brskalnikov omogoča
                sprejemanje, zavrnitev ali brisanje piškotkov. Pomembno je
                vedeti, da lahko zavrnitev piškotkov vpliva na delovanje
                določenih delov spletne strani.
              </Text>
              <Text textVariant="body" colorVariant="secondary">
                Uporabo piškotkov v Evropski uniji (EU) določa Direktiva o
                zasebnosti in elektronskih komunikacijah 2002/58/ES, katere
                člen, ki se nanaša na piškotke in podobne tehnologije, je bil
                spremenjen z Direktivo 136/2009.
              </Text>
            </FlexColumn>
          </FlexColumn>
        </Section>
      </Flex>
    </Flex>
  );
}
