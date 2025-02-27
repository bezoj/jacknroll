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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { ColumnDivider } from "../components/dividers";
import { useRef } from "react";

export function ContactUsPage() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsSchemaType>({
    resolver: zodResolver(contactUsSchema),
  });
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e) => {
    try {
      if (!formRef.current) return;

      const response = await emailjs.sendForm(
        "service_83d6mrj",
        "template_93etrmt",
        formRef.current,
        { publicKey: "8k0wIX06zPUVCY2PS" }
      );

      alert(`SUCCESS! ${response}`);
      reset();
    } catch (error) {
      alert(`FAILED... ${error?.text || error}`);
    }
  };

  return (
    <Section
      className="text-center gap-[50px] p-[50px] items-center"
      bgColor="secondary"
      elementId="contact"
    >
      <Text textVariant="title" colorVariant="primary">
        Kontakt
      </Text>
      <Flex className="flex-col gap-[40px] md:flex-row md:justify-between md:w-full ">
        <FlexColumn className="md:flex-1 md:w-1/2 md:py-[200px] md:justify-center items-center gap-4">
          <Text textVariant="subtitle">
            Piši nam če želiš pravo dozo rokenrola in mainstream muzike!
          </Text>
          <Text>
            Izpolni obrazec tukaj, ali pa nam piši ter sledi na socialnih
            omrežjih
          </Text>
          <Flex className="gap-4">
            <a href="https://www.instagram.com/_jacknroll_/">
              <FontAwesomeIcon
                icon={faInstagram}
                color="black"
                className="size-[40px] cursor-pointer"
              />
            </a>
            <a href="https://www.facebook.com/Jacknroll4">
              <FontAwesomeIcon
                icon={faFacebook}
                color="black"
                className="size-[38px] cursor-pointer"
              />
            </a>
          </Flex>
        </FlexColumn>
        <ColumnDivider borderColorVariant="primary" />
        <form
          onSubmit={handleSubmit(sendEmail)}
          className="w-full flex md:flex-1 md:w-1/2"
          ref={formRef}
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
      </Flex>
    </Section>
  );
}
