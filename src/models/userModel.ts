import { prisma } from "../lib/prisma";
import { CreateUserParams } from "../types/userTypes";

export async function createUserModel(data:CreateUserParams) {
  return prisma.user.create({
    data
  })
}

export async function getUserByEmailModel(email:string) {
  return prisma.user.findUnique({
    where:{
      email
    }
  })
}
export async function getUserByIdlModel(email:string) {
  return prisma.user.findUnique({
    where:{
      email
    }
  })
}

export async function getUserByUserNameModel(userName:string) {
  return prisma.user.findUnique({
    where:{
      userName
    }
  })
}

export async function getUserByIdModel(id:string) {
  return prisma.user.findUnique({
    where:{
      id
    }
  })
}

