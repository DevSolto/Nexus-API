export class EmailInUseError extends Error {
  constructor() {
    super('The email is already in use')
    this.name = 'EmailInUseError'
  }
}
export class UsernameInUseError extends Error {
  constructor() {
    super('The user name is already in use')
    this.name = 'UsernameInUseError'
  }
}
export class UserNotFoundError extends Error {
  constructor() {
    super('User not found')
    this.name = 'UserNotFoundError'
  }
}
