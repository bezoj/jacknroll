import { useForm } from "react-hook-form";
import { Flex, FlexColumn } from "../../components/containers";
import { Checkbox, TextAreaInput, TextInput } from "../../components/inputs";
import { contactUsSchema, ContactUsSchemaType } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Button } from "../../components/buttons";

export function ContactUsForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsSchemaType>({
    resolver: zodResolver(contactUsSchema),
  });
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async () => {
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
      alert(`FAILED... ${error}`);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className="w-full flex md:flex-1 md:w-1/2"
      ref={formRef}
    >
      <FlexColumn className="w-full max-w-[900px] gap-8">
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
        <Checkbox
          {...register("terms")}
          label="Strinjam se z poslanimi podatki in njihovo obdelavo"
          id="gdpr"
          errors={errors.terms?.message}
        />
        <Button
          className="md:self-end"
          title="Pošlji!"
          type="submit"
          disabled={isSubmitting}
        />
      </FlexColumn>
    </form>
  );
}
