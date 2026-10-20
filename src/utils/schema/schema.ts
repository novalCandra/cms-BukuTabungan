import * as z from "zod"

export const SchemaZodAuthLogin = z.object({
    email: z.string().max(255, {
        message: "maximal 255 karakter"
    }).min(1, "wajib mengisi email"),
    password: z.string().max(255, {
        message: "message 255 karakter"
    }).min(1, "wajib mengisi password")
})
export const SchemaRegister = z.object({
    name: z.string().max(255, {
        message: "maximal 255 karakter"
    }).min(1, "wajib mengisi name"),
    email: z.string().max(255, {
        message: "maximal 255 karakter"
    }).min(1, "wajib mengisi email"),
    phone: z.string().max(255, {
        message: "maximal 255 karakter"
    }).min(1, "wajib mengisi phone"),
    password: z.string().max(255, {
        message: "message 255 karakter"
    }).min(1, "wajib mengisi password")
}) 