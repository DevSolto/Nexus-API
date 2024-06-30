"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundError = exports.UsernameInUseError = exports.EmailInUseError = void 0;
class EmailInUseError extends Error {
    constructor() {
        super('The email is already in use');
        this.name = 'EmailInUseError';
    }
}
exports.EmailInUseError = EmailInUseError;
class UsernameInUseError extends Error {
    constructor() {
        super('The user name is already in use');
        this.name = 'UsernameInUseError';
    }
}
exports.UsernameInUseError = UsernameInUseError;
class UserNotFoundError extends Error {
    constructor() {
        super('User not found');
        this.name = 'UserNotFoundError';
    }
}
exports.UserNotFoundError = UserNotFoundError;
