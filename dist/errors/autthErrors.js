"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidToken = exports.WrongPassword = void 0;
class WrongPassword extends Error {
    constructor() {
        super('The password is wrong');
        this.name = 'ProngPassword';
    }
}
exports.WrongPassword = WrongPassword;
class InvalidToken extends Error {
    constructor() {
        super('The token is invalid');
        this.name = 'InvalidToken';
    }
}
exports.InvalidToken = InvalidToken;
