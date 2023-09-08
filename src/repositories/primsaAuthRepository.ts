import { Credentials } from '../use-cases/registerUseCase/types'
import { AuthRepository } from './interfaces/authRepository'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class PrismaAuthRepository implements AuthRepository {
  async register(credentials: Credentials): Promise<any> {
    return prisma.user.create({
      data: {
        email: credentials.email,
        password: credentials.password,
      },
    })
  }

  async login(credentials: Credentials): Promise<any> {
    return prisma.user.findUnique({
      where: { email: credentials.email },
    })
  }
}
