import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactUsSchema, type ContactUsSchemaType } from "@/schemas";
import { cn } from "@/lib/utils";
import {
  contactFormDefaults,
  contactPairFields,
  contactTextFields,
  emailJsConfig,
  formStatusCopy,
  messageField,
} from "./consts";
import { Field } from "./Field";
import { TermsConsent } from "./TermsConsent";

interface ContactUsFormProps {
  className?: string;
}

export function ContactUsForm({ className }: ContactUsFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsSchemaType>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: contactFormDefaults,
  });

  const sendEmail = async () => {
    if (!formRef.current) return;
    setStatus("idle");

    try {
      await emailjs.sendForm(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        formRef.current,
        { publicKey: emailJsConfig.publicKey },
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={handleSubmit(sendEmail)}
      className={cn("flex flex-col gap-8", className)}
    >
      {contactTextFields.map((field) => (
        <Field
          key={field.id}
          id={field.id}
          label={field.label}
          required
          error={errors[field.id]?.message}
        >
          <Input
            id={field.id}
            type={"type" in field ? field.type : "text"}
            placeholder={field.placeholder}
            autoComplete={"autoComplete" in field ? field.autoComplete : undefined}
            aria-invalid={Boolean(errors[field.id])}
            aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
            {...register(field.id)}
          />
        </Field>
      ))}

      <div className="grid gap-8 sm:grid-cols-2">
        {contactPairFields.map((field) => (
          <Field key={field.id} id={field.id} label={field.label} error={errors[field.id]?.message}>
            <Input
              id={field.id}
              placeholder={field.placeholder}
              aria-invalid={Boolean(errors[field.id])}
              aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
              {...register(field.id)}
            />
          </Field>
        ))}
      </div>

      <Field id={messageField.id} label={messageField.label} required error={errors.message?.message}>
        <Textarea
          id={messageField.id}
          placeholder={messageField.placeholder}
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${messageField.id}-error` : undefined}
          {...register(messageField.id)}
        />
      </Field>

      <TermsConsent control={control} error={errors.terms?.message} />

      {status === "success" ? (
        <p role="status" className="border border-foreground px-4 py-3 text-sm">
          {formStatusCopy.success}
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="border border-foreground px-4 py-3 text-sm">
          {formStatusCopy.error}
        </p>
      ) : null}

      <Button type="submit" className="sm:self-end" disabled={isSubmitting}>
        {isSubmitting ? "Pošiljam" : "Pošlji"}
      </Button>
    </form>
  );
}
