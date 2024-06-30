"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email().optional(),
        userName: zod_1.z.string().optional(),
        password: zod_1.z.string().min(6),
    }).refine((data) => data.email || data.userName, {
        message: "Either email or userName must be provided",
        path: ["body"],
    }),
});
