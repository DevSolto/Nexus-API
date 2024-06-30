import { User } from "@prisma/client";
import { Login } from "../types/euthTypes";
import { getUserByEmailModel, getUserByUserNameModel } from "../models/userModel";
import { UserNotFoundError } from "../errors/userErrors";
import bcrypt from 'bcrypt'
import { WrongPassword } from "../errors/autthErrors";
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'RACAODECACHORRO'

export async function loginService(data:Login) {
  let user:User | null = null
  if(data.email){
    user = await getUserByEmailModel(data.email)
  }else if(data.userName){
    user = await getUserByUserNameModel(data.userName)
  }

  if(!user){
    throw new UserNotFoundError()
  }

  const isSamePassword = await bcrypt.compare(data.password, user.password)

  if(!isSamePassword){
    throw new WrongPassword()
  }

  //TODO: trocar a string de segurança
  const token = jwt.sign({id:user.id}, JWT_SECRET,{expiresIn:'1d'})
  return {token,user}
}

export async function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    throw new Error('Invalid token')
  }
}