import { FastifyInstance } from 'fastify'
import { createUserSchema, userIdSchema } from '../schemas/userSchemas'
import { createUserService, getUserService } from '../services/userService'
import { ZodError } from 'zod'
import { authenticate } from '../middleware/authenticate'

export async function userController(app: FastifyInstance) {
  
  app.get('/api/users/:id', { preHandler: [authenticate] }, async (req, res) => {
    try {
      const validatedUserId = userIdSchema.parse(req.params)
      const user = await getUserService(validatedUserId.id)
      res.status(200).send(user)
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
