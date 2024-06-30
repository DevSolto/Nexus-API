import { FastifyRequest, FastifyReply } from 'fastify'
import { verifyToken } from '../services/authService'
import { UserPayload } from '../types/userTypes'


export const authenticate = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const token = request.headers.authorization
    
    if (!token) {
      reply.status(401).send({ error: 'Token is missing' })
      return
    }

    const decoded = await verifyToken(token)
    request.user = decoded as UserPayload
  } catch (error) {
    reply.status(401).send({ error: 'Invalid token' })
  }
}
