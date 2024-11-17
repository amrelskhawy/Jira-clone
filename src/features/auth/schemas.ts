import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().trim().min(1, "Required").email(),
    password: z.string().min(8, "Minimum 8 Charachters")
})