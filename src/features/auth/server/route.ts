import { Hono } from "hono"
import { zValidator } from "@hono/zod-validator"
import { loginSchema, registerSchema } from "../schemas"

export const app = new Hono()
    .post("/login", zValidator("json", loginSchema), async (c: any) => {

        // Destruct the Form Data
        const { email, password } = c.req.valid("json")
        console.log({ email, password })
        return c.json({ success: { email, password } })
    })
    .post("/register", zValidator("json", registerSchema ), async (c: any) => {
        // Destruct the Form Data
        const { name, email, password, confirm_password } = c.req.valid("json")
        console.log({ name, email, password, confirm_password })
        return c.json({ success: { name, email, password, confirm_password } })
    } )


export default app