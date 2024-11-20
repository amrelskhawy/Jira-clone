import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().trim().min(1, "Required").email(),
    password: z.string().min(8, "Minimum 8 Charachters")
})

export const registerSchema = z.object({
    name: z.string().trim().min(1, "Required"),
    email: z.string().trim().min(1, "Required").email(),
    password: z.string().min(8, "Minimum 8 Charachters"),
    confirm_password: z.string().min(8, "Minimum 8 Charachters")
  }).refine((data) => data.password === data.confirm_password, {
    message: "Passwords must match",
    path: ["confirm_password"], // Specifies the path of the error
  });
  