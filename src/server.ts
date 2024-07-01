import fastify from 'fastify';
import { userController } from './controllers/userController';
import { authController } from './controllers/authController';

const server = fastify();

const port = Number(process.env.PORT) || 4000;

server.register(userController);
server.register(authController);

server.listen({ port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running at ${address}`);
});
