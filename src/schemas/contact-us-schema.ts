import {z, ZodType} from "zod"
import { IContactUs } from "../types/interfaces"

export const contactUsSchema = z.object({
    fromNameSurname: z.string().min(1, "Ime in priimek sta obvezna"),
    emailFrom: z.string().email("Napačen email"),
    event: z.string().min(1, "Dogodek je obvezen"),
    location: z.string(),
    date: z.string(),
    message: z.string().min(5, "Sporočilo je obvezno"),
}) satisfies ZodType<IContactUs>

export type ContactUsSchemaType = z.infer<typeof contactUsSchema>