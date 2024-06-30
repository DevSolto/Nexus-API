import { z } from 'zod'

export const createUserSchema = z.object({
  email: z.string({ message: 'The email field is mandatory' }).email({ message: 'Invalid email' }),
  userName: z.string({ message: 'The user name field is mandatory' }).min(3, { message: 'Invalid user name' }),
  password: z.string({ message: 'The password field is mandatory' }).min(8, { message: 'Password must have at least 8 digits' }),
  avatarUrl: z.string().optional()
})
export const updateUserSchema = z.object({
  email: z.string({ message: 'The email field is mandatory' }).email({ message: 'Invalid email' }).optional(),
  username: z.string({ message: 'The user name field is mandatory' }).min(3, { message: 'Invalid user name' }).optional(),
  password: z.string({ message: 'The password field is mandatory' }).min(8, { message: 'Password must have at least 8 digits' }).optional(),
  avatarUrl: z.string().optional()
})

export const validateUserSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export const userIdSchema = z.object({
  id: z.string().uuid({ message: 'the id must be a UUID' }), 
})
