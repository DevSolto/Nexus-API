"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = userController;
const userSchemas_1 = require("../schemas/userSchemas");
const userService_1 = require("../services/userService");
const zod_1 = require("zod");
const authenticate_1 = require("../middleware/authenticate");
async function userController(app) {
    app.get('/api/users/:id', { preHandler: [authenticate_1.authenticate] }, async (req, res) => {
        try {
            const validatedUserId = userSchemas_1.userIdSchema.parse(req.params);
            const user = await (0, userService_1.getUserService)(validatedUserId.id);
            res.status(200).send(user);
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
