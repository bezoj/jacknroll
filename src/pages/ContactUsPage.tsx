import { useForm } from "react-hook-form";
import { Button } from "../components/buttons";
import { Flex, FlexColumn } from "../components/containers";
import { TextAreaInput } from "../components/inputs";
import { TextInput } from "../components/inputs/TextInput";
import { Section } from "../components/page-sections";
import { Text } from "../components/typography";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUsSchema, ContactUsSchemaType } from "../schemas";

export function ContactUsPage() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsSchemaType>({
    resolver: zodResolver(contactUsSchema),
  });

  const sendEmail = async (
    //when you will need data in future for BE
    data: ContactUsSchemaType,
    e: any
  ) => {
    try {
      const response = await emailjs.sendForm(
        "service_83d6mrj",
        "template_93etrmt",
        e.target,
        { publicKey: "8k0wIX06zPUVCY2PS" }
      );

      alert(`SUCCESS! ${response}`);
    } catch (error) {
      alert(`FAILED... ${error?.text || error}`);
    }
    reset();
  };

  return (
    <Section
      className="text-center gap-[20px] items-center"
      bgColor="secondary"
      elementId="contact"
    >
      <Text textVariant="title" colorVariant="primary">
        Kontakt
      </Text>
      <form
        onSubmit={handleSubmit(sendEmail)}
        className="w-full flex justify-center"
      >
        <FlexColumn className="w-full max-w-[900px] p-4 gap-8">
          <TextInput
            {...register("fromNameSurname")}
            title="Ime in priimek"
            placeholder="Ime in priimek"
            required
            errors={errors.fromNameSurname?.message}
          />
          <TextInput
            {...register("emailFrom")}
            title="Email"
            type="email"
            placeholder="Vaš email"
            required
            errors={errors.emailFrom?.message}
          />
          <TextInput
            {...register("event")}
            title="Dogodek"
            placeholder="Dogodek"
            required
            errors={errors.event?.message}
          />
          <Flex className="w-full justify-stretch flex-wrap gap-8">
            <TextInput
              {...register("location")}
              title="Lokacija"
              placeholder="Lokacija"
              containerProps="flex-1"
              errors={errors.location?.message}
            />
            <TextInput
              {...register("date")}
              title="Datum"
              placeholder="Datum"
              containerProps="flex-1"
              errors={errors.date?.message}
            />
          </Flex>
          <TextAreaInput
            {...register("message")}
            title="Vaše sporočilo"
            placeholder="Vaše sporočilo"
            containerProps="flex-1"
            rows={5}
            required
            errors={errors.message?.message}
          />
          <Button
            className="md:self-end"
            title="Pošlji!"
            type="submit"
            disabled={isSubmitting}
          />
        </FlexColumn>
      </form>
    </Section>
  );
}
