import fastify from 'fastify';
import cors from '@fastify/cors';
import { userController } from './controllers/userController';
import { authController } from './controllers/authController';

const server = fastify({
  logger: true, // Habilitar logs
});

const port = Number(process.env.PORT) || 4000;

// Configure CORS
server.register(cors, {
  origin: true, // Permite qualquer origem, ajuste conforme necessário
});

server.register(userController);
server.register(authController);

server.listen({ port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    server.log.error(err); // Use o logger do Fastify
    process.exit(1);
  }
  server.log.info(`Server is running at ${address}`);
});
