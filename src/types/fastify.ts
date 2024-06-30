import 'fastify'
import { UserPayload } from './userTypes'

declare module 'fastify' {
  interface FastifyRequest {
    user?: UserPayload
  }
}
