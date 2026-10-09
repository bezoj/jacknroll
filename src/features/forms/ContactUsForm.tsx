import { useRef, useState, type ReactNode } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactUsSchema, ContactUsSchemaType } from "@/schemas";
import { cn } from "@/lib/utils";

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
    defaultValues: {
      fromNameSurname: "",
      emailFrom: "",
      event: "",
      location: "",
      date: "",
      message: "",
      terms: false,
    },
  });

  const sendEmail = async () => {
    if (!formRef.current) return;
    setStatus("idle");

    try {
      await emailjs.sendForm(
        "service_83d6mrj",
        "template_93etrmt",
        formRef.current,
        { publicKey: "8k0wIX06zPUVCY2PS" }
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
      <Field
        id="fromNameSurname"
        label="Ime in priimek"
        required
        error={errors.fromNameSurname?.message}
      >
        <Input
          id="fromNameSurname"
          placeholder="Ime in priimek"
          autoComplete="name"
          aria-invalid={Boolean(errors.fromNameSurname)}
          aria-describedby={
            errors.fromNameSurname ? "fromNameSurname-error" : undefined
          }
          {...register("fromNameSurname")}
        />
      </Field>

      <Field
        id="emailFrom"
        label="Email"
        required
        error={errors.emailFrom?.message}
      >
        <Input
          id="emailFrom"
          type="email"
          placeholder="Vaš email"
          autoComplete="email"
          aria-invalid={Boolean(errors.emailFrom)}
          aria-describedby={errors.emailFrom ? "emailFrom-error" : undefined}
          {...register("emailFrom")}
        />
      </Field>

      <Field id="event" label="Dogodek" required error={errors.event?.message}>
        <Input
          id="event"
          placeholder="Dogodek"
          aria-invalid={Boolean(errors.event)}
          aria-describedby={errors.event ? "event-error" : undefined}
          {...register("event")}
        />
      </Field>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field id="location" label="Lokacija" error={errors.location?.message}>
          <Input
            id="location"
            placeholder="Lokacija"
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "location-error" : undefined}
            {...register("location")}
          />
        </Field>
        <Field id="date" label="Datum" error={errors.date?.message}>
          <Input
            id="date"
            placeholder="Datum"
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "date-error" : undefined}
            {...register("date")}
          />
        </Field>
      </div>

      <Field
        id="message"
        label="Vaše sporočilo"
        required
        error={errors.message?.message}
      >
        <Textarea
          id="message"
          placeholder="Vaše sporočilo"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="terms"
                checked={field.value}
                onCheckedChange={(value) => field.onChange(value === true)}
                onBlur={field.onBlur}
                ref={field.ref}
                aria-invalid={Boolean(errors.terms)}
                aria-describedby={errors.terms ? "terms-error" : undefined}
              />
            )}
          />
          <div className="space-y-2">
            <Label
              htmlFor="terms"
              className="cursor-pointer font-sans text-sm normal-case tracking-normal text-foreground"
            >
              Strinjam se z poslanimi podatki in njihovo obdelavo
            </Label>
            <Link
              to="/privacy-policy"
              className="block text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Politika zasebnosti
            </Link>
          </div>
        </div>
        {errors.terms?.message ? (
          <p id="terms-error" className="text-xs uppercase tracking-[0.12em]">
            {errors.terms.message}
          </p>
        ) : null}
      </div>

      {status === "success" ? (
        <p role="status" className="border border-foreground px-4 py-3 text-sm">
          Sporočilo je poslano. Hvala, oglasimo se.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="border border-foreground px-4 py-3 text-sm">
          Pošiljanje ni uspelo. Piši nam na jackroll2019@gmail.com.
        </p>
      ) : null}

      <Button type="submit" className="sm:self-end" disabled={isSubmitting}>
        {isSubmitting ? "Pošiljam" : "Pošlji"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-xs uppercase tracking-[0.12em]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
