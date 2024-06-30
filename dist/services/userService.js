"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = createUserService;
exports.getUserService = getUserService;
const userErrors_1 = require("../errors/userErrors");
const userModel_1 = require("../models/userModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
async function createUserService(data) {
    const emailInUse = await (0, userModel_1.getUserByEmailModel)(data.email);
    if (emailInUse) {
        throw new userErrors_1.EmailInUseError();
    }
    const userNameInUse = await (0, userModel_1.getUserByUserNameModel)(data.userName);
    if (userNameInUse) {
        throw new userErrors_1.UsernameInUseError();
    }
    const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
    return await (0, userModel_1.createUserModel)({
        ...data,
        password: hashedPassword
    });
}
async function getUserService(id) {
    return await (0, userModel_1.getUserByIdModel)(id);
}
