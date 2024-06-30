export class WrongPassword extends Error {
  constructor() {
    super('The password is wrong')
    this.name = 'ProngPassword'
  }
}

export class InvalidToken extends Error {
  constructor() {
    super('The token is invalid')
    this.name = 'InvalidToken'
  }
}