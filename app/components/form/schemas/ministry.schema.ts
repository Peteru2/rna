import { z } from "zod";

export const ministrySchema = z.object({
  eventHost: z
    .string()
    .min(2, "Event host is required"),

  position: z
    .string()
    .min(2, "Position is required"),

 hostPastor: z
    .string()
    .min(2, "Host pastor name is required"),
    
    phone: z
    .string()
    .min(10, "Phone number is required"),
});

export type MinistryFormData = z.infer<
  typeof ministrySchema
>;