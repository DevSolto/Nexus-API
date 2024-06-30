import { FastifyInstance } from "fastify";
import { createUserSchema, validateUserSchema } from "../schemas/userSchemas";
import { createUserService } from "../services/userService";
import { ZodError } from "zod";
import { loginService } from "../services/authService";

export async function authController(app:FastifyInstance) {
  app.post('/api/register',async(req,res)=>{
    try {
      const validatedData = createUserSchema.parse(req.body)
      
      const user = await createUserService(validatedData)
      res.status(201).send(user)
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send({
          message: "Validation Error",
          errors: error.errors,
        })
      } else {
        res.status(500).send({
          message: "Internal Server Error",
          error: error,
        })
      }
    }
  })
  app.post('/api/auth/login',async(req,res)=>{
    try {
      const validatedData = validateUserSchema.parse(req.body)
      
      res.status(201).send(await loginService(validatedData))
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send({
          message: "Validation Error",
          errors: error.errors,
        })
      } else {
        res.status(500).send({
          message: "Internal Server Error",
          error: error,
        })
      }
    }
  })
}