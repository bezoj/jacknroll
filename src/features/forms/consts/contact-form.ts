import type { ContactUsSchemaType } from "@/schemas";

export const emailJsConfig = {
  serviceId: "service_83d6mrj",
  templateId: "template_93etrmt",
  publicKey: "8k0wIX06zPUVCY2PS",
} as const;

export const contactFormDefaults: ContactUsSchemaType = {
  fromNameSurname: "",
  emailFrom: "",
  event: "",
  location: "",
  date: "",
  message: "",
  terms: false,
};

export const formStatusCopy = {
  success: "Sporočilo je poslano. Hvala, oglasimo se.",
  error: "Pošiljanje ni uspelo. Piši nam na jackroll2019@gmail.com.",
} as const;

export const contactTextFields = [
  {
    id: "fromNameSurname",
    label: "Ime in priimek",
    placeholder: "Ime in priimek",
    autoComplete: "name",
  },
  {
    id: "emailFrom",
    label: "Email",
    placeholder: "Vaš email",
    type: "email",
    autoComplete: "email",
  },
  {
    id: "event",
    label: "Dogodek",
    placeholder: "Dogodek",
  },
] as const;

export const contactPairFields = [
  { id: "location", label: "Lokacija", placeholder: "Lokacija" },
  { id: "date", label: "Datum", placeholder: "Datum" },
] as const;

export const messageField = {
  id: "message",
  label: "Vaše sporočilo",
  placeholder: "Vaše sporočilo",
} as const;
