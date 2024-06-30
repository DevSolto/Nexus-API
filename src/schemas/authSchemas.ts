import { z } from 'zod'


export const loginSchema = z.object({
  body: z.object({
    email: z.string().email().optional(),
    userName: z.string().optional(),
    password: z.string().min(6),
  }).refine((data) => data.email || data.userName, {
    message: "Either email or userName must be provided",
    path: ["body"],
  }),
})