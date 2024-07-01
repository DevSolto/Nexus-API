import fastify from "fastify"
import { userController } from "./controllers/userController";
import { authController } from "./controllers/authController";

const server = fastify()

server.register(userController)
server.register(authController)

server.listen({
  port:3333
}).then(()=>{
  console.log('deu certo');
  
})