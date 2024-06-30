"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = loginService;
exports.verifyToken = verifyToken;
const userModel_1 = require("../models/userModel");
const userErrors_1 = require("../errors/userErrors");
const bcrypt_1 = __importDefault(require("bcrypt"));
const autthErrors_1 = require("../errors/autthErrors");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'RACAODECACHORRO';
async function loginService(data) {
    let user = null;
    if (data.email) {
        user = await (0, userModel_1.getUserByEmailModel)(data.email);
    }
    else if (data.userName) {
        user = await (0, userModel_1.getUserByUserNameModel)(data.userName);
    }
    if (!user) {
        throw new userErrors_1.UserNotFoundError();
    }
    const isSamePassword = await bcrypt_1.default.compare(data.password, user.password);
    if (!isSamePassword) {
        throw new autthErrors_1.WrongPassword();
    }
    //TODO: trocar a string de segurança
    const token = jsonwebtoken_1.default.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });
    return { token, user };
}
async function verifyToken(token) {
    try {
        return jsonwebtoken_1.default.verify(token, JWT_SECRET);
    }
    catch (error) {
        throw new Error('Invalid token');
    }
}
