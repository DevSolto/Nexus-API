export interface CreateUserParams {
  email: string
  userName: string
  password: string
  avatarUrl?: string
}

export interface UserPayload {
  id: string
}
