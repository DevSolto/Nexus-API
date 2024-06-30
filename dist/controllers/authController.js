"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = authController;
const userSchemas_1 = require("../schemas/userSchemas");
const userService_1 = require("../services/userService");
const zod_1 = require("zod");
const authService_1 = require("../services/authService");
async function authController(app) {
    app.post('/api/register', async (req, res) => {
        try {
            const validatedData = userSchemas_1.createUserSchema.parse(req.body);
            const user = await (0, userService_1.createUserService)(validatedData);
            res.status(201).send(user);
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                res.status(400).send({
                    message: "Validation Error",
                    errors: error.errors,
                });
            }
            else {
                res.status(500).send({
                    message: "Internal Server Error",
                    error: error,
                });
            }
        }
    });
    app.post('/api/auth/login', async (req, res) => {
        try {
            const validatedData = userSchemas_1.validateUserSchema.parse(req.body);
            res.status(201).send(await (0, authService_1.loginService)(validatedData));
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                res.status(400).send({
                    message: "Validation Error",
                    errors: error.errors,
                });
            }
            else {
                res.status(500).send({
                    message: "Internal Server Error",
                    error: error,
                });
            }
        }
    });
}
