import { Controller, type Control } from "react-hook-form";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { ContactUsSchemaType } from "@/schemas";

interface TermsConsentProps {
  control: Control<ContactUsSchemaType>;
  error?: string;
}

export function TermsConsent({ control, error }: TermsConsentProps) {
  return (
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
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "terms-error" : undefined}
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
      {error ? (
        <p id="terms-error" className="text-xs uppercase tracking-[0.12em]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
