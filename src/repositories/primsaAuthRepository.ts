import { Credentials } from '../use-cases/registerUseCase/types'
import { AuthRepository } from './interfaces/authRepository'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class PrismaAuthRepository implements AuthRepository {
  async register(credentials: Credentials): Promise<any> {
    try {
      return prisma.user.create({
        data: {
          email: credentials.email,
          password: credentials.password,
        },
      })
    } catch (error) {
      throw new Error()
    }
  }

  login(credentials: Credentials): Promise<any> {
    try {
      return prisma.user.findUnique({
        where: { email: credentials.email, password: credentials.password },
      })
    } catch (e) {
      throw new Error()
    }
  }
}
