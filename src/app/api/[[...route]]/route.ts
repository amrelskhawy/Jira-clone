import { Hono } from "hono"
import { handle } from "hono/vercel"

const app = new Hono().basePath("/api")

app.get("/hello", (c: any) => {
    return c.json({
        "Hello": "world"
    })
})

export const GET = handle(app)