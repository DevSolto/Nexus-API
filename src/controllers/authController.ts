import { FastifyInstance } from "fastify";
import { createUserSchema, validateUserSchema } from "../schemas/userSchemas";
import { createUserService } from "../services/userService";
import { ZodError } from "zod";
import { loginService } from "../services/authService";

export async function authController(app: FastifyInstance) {
  app.post('/api/register', async (req, res) => {
    try {
      const validatedData = createUserSchema.parse(req.body);
      
      const user = await createUserService(validatedData);
      res.status(201).send(user);
    } catch (error) {
      if (error instanceof ZodError) {
        app.log.error("Validation Error: ", error.errors);
        res.status(400).send({
          message: "Validation Error",
          errors: error.errors,
        });
      } else {
        app.log.error("Internal Server Error: ", error);
        res.status(500).send({
          message: "Internal Server Error",
        });
      }
    }
  });

  app.post('/api/auth/login', async (req, res) => {
    try {
      const validatedData = validateUserSchema.parse(req.body);
      
      const loginResult = await loginService(validatedData);
      res.status(200).send(loginResult);
    } catch (error) {
      if (error instanceof ZodError) {
        app.log.error("Validation Error: ", error.errors);
        res.status(400).send({
          message: "Validation Error",
          errors: error.errors,
        });
      } else {
        app.log.error("Internal Server Error: ", error);
        res.status(500).send({
          message: "Internal Server Error",
        });
      }
    }
  });
}
