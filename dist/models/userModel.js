"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserModel = createUserModel;
exports.getUserByEmailModel = getUserByEmailModel;
exports.getUserByIdlModel = getUserByIdlModel;
exports.getUserByUserNameModel = getUserByUserNameModel;
exports.getUserByIdModel = getUserByIdModel;
const prisma_1 = require("../lib/prisma");
async function createUserModel(data) {
    return prisma_1.prisma.user.create({
        data
    });
}
async function getUserByEmailModel(email) {
    return prisma_1.prisma.user.findUnique({
        where: {
            email
        }
    });
}
async function getUserByIdlModel(email) {
    return prisma_1.prisma.user.findUnique({
        where: {
            email
        }
    });
}
async function getUserByUserNameModel(userName) {
    return prisma_1.prisma.user.findUnique({
        where: {
            userName
        }
    });
}
async function getUserByIdModel(id) {
    return prisma_1.prisma.user.findUnique({
        where: {
            id
        }
    });
}
