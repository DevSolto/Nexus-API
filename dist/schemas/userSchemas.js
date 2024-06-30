"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userIdSchema = exports.validateUserSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    email: zod_1.z.string({ message: 'The email field is mandatory' }).email({ message: 'Invalid email' }),
    userName: zod_1.z.string({ message: 'The user name field is mandatory' }).min(3, { message: 'Invalid user name' }),
    password: zod_1.z.string({ message: 'The password field is mandatory' }).min(8, { message: 'Password must have at least 8 digits' }),
    avatarUrl: zod_1.z.string().optional()
});
exports.updateUserSchema = zod_1.z.object({
    email: zod_1.z.string({ message: 'The email field is mandatory' }).email({ message: 'Invalid email' }).optional(),
    username: zod_1.z.string({ message: 'The user name field is mandatory' }).min(3, { message: 'Invalid user name' }).optional(),
    password: zod_1.z.string({ message: 'The password field is mandatory' }).min(8, { message: 'Password must have at least 8 digits' }).optional(),
    avatarUrl: zod_1.z.string().optional()
});
exports.validateUserSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string()
});
exports.userIdSchema = zod_1.z.object({
    id: zod_1.z.string().uuid({ message: 'the id must be a UUID' }),
});
