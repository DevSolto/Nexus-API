import fastify from 'fastify';
import { userController } from './controllers/userController';
import { authController } from './controllers/authController';

const server = fastify();

const port = process.env.PORT || 4000;

server.register(userController);
server.register(authController);

server.listen({ port: Number(port) }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running at ${address}`);
});
