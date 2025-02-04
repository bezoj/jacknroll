import {z, ZodType} from "zod"
import { IContactUs } from "../types/interfaces"

export const contactUsSchema = z.object({
    fromNameSurname: z.string().min(1, "ime in priimek obvezen"),
    emailFrom: z.string().email(),
    location: z.string(),
    date: z.string(),
    message: z.string(),
    event: z.string()
}) satisfies ZodType<IContactUs>

export type ContactUsSchemaType = z.infer<typeof contactUsSchema>