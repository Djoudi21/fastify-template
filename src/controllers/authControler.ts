import { RegisterUseCase } from '../use-cases/registerUseCase/registerUseCase'
import { LoginUseCase } from '../use-cases/loginUseCase/loginUseCase'
import { PrismaAuthRepository } from '../repositories/primsaAuthRepository'

const jwt = require('jsonwebtoken')

export class AuthController {
  async register(req: any, reply: any): Promise<any> {
    const authRepository = new PrismaAuthRepository()
    const registerUseCase = new RegisterUseCase(authRepository)
    return await registerUseCase.execute(req.body.data)
  }

  async login(req: any, reply: any): Promise<any> {
    const authRepository = new PrismaAuthRepository()
    const loginUseCase = new LoginUseCase(authRepository)
    const user = await loginUseCase.execute(req.body.data)
    const data = {
      id: user.id,
      email: user.email,
    }
    const token = jwt.sign(data, process.env.JWT_SECRET)
    reply.send({ token })
  }
}
