import { Hono } from "hono"
import { zValidator } from "@hono/zod-validator"
import { z } from "zod"
import { loginSchema } from "../schemas"
import { handle } from "hono/vercel"



export const app = new Hono()
    .post("/login", zValidator("json", loginSchema), async (c: any) => {

        // Destruct the Form Data
        const { email, password } = c.req.valid("json")
        console.log({ email, password })
        return c.json({ success: { email, password } })
    })

export default app