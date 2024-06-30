"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const userController_1 = require("./controllers/userController");
const authController_1 = require("./controllers/authController");
const cors_1 = __importDefault(require("@fastify/cors"));
const server = (0, fastify_1.default)();
server.register(cors_1.default, {
    origin: '*',
});
server.register(userController_1.userController);
server.register(authController_1.authController);
server.listen({
    port: 3333
}).then(() => {
    console.log('deu certo');
});
