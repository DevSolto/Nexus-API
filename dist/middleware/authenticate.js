"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const authService_1 = require("../services/authService");
const authenticate = async (request, reply) => {
    try {
        const token = request.headers.authorization;
        if (!token) {
            reply.status(401).send({ error: 'Token is missing' });
            return;
        }
        const decoded = await (0, authService_1.verifyToken)(token);
        request.user = decoded;
    }
    catch (error) {
        reply.status(401).send({ error: 'Invalid token' });
    }
};
exports.authenticate = authenticate;
