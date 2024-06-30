import { EmailInUseError, UsernameInUseError } from "../errors/userErrors";
import { createUserModel, getUserByEmailModel, getUserByIdModel, getUserByUserNameModel } from "../models/userModel";
import { CreateUserParams } from "../types/userTypes";
import bcrypt from 'bcrypt'

export async function createUserService(data:CreateUserParams) {
  const emailInUse = await getUserByEmailModel(data.email)

  if(emailInUse){
    throw new EmailInUseError()
  }

  const userNameInUse = await getUserByUserNameModel(data.userName)

  if(userNameInUse){
    throw new UsernameInUseError()
  }

  const hashedPassword = await bcrypt.hash(data.password, 10)

  return await createUserModel({
    ...data,
    password:hashedPassword
  })
}

export async function getUserService(id:string) {
  return await getUserByIdModel(id)
}