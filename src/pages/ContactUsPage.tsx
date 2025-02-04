import { Button } from "../components/buttons";
import { Flex, FlexColumn } from "../components/containers";
import { TextAreaInput } from "../components/inputs";
import { TextInput } from "../components/inputs/TextInput";
import { Section } from "../components/page-sections";
import { Text } from "../components/typography";

export function ContactUsPage() {
  return (
    <Section
      className="text-center gap-[20px] items-center"
      bgColor="secondary"
    >
      <Text textVariant="title" colorVariant="primary">
        Kontakt
      </Text>
      <FlexColumn className="w-full max-w-[900px] p-4 gap-8">
        <TextInput
          title="Ime in priimek"
          required
          placeholder="Ime in priimek"
        />
        <TextInput title="Email" required placeholder="Vaš email" />
        <TextInput title="Dogodek" required placeholder="Dogodek" />
        <Flex className="w-full justify-stretch flex-wrap gap-8">
          <TextInput
            title="Lokacija"
            required
            placeholder="Lokacija"
            containerProps="flex-1"
          />
          <TextInput
            title="Datum"
            required
            placeholder="Datum"
            containerProps="flex-1"
          />
        </Flex>
        <TextAreaInput
          title="Vaše sporočilo"
          placeholder="Vaše sporočilo"
          containerProps="flex-1"
          rows={5}
        />
        <Button className="self-end" title="Pošlji!" type="submit" />
      </FlexColumn>
    </Section>
  );
}
