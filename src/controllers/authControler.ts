import { RegisterUseCase } from '../use-cases/registerUseCase/registerUseCase'
import { LoginUseCase } from '../use-cases/loginUseCase/loginUseCase'
import { PrismaAuthRepository } from '../repositories/primsaAuthRepository'

export class AuthController {
  async register(req: any, reply: any): Promise<any> {
    const authRepository = new PrismaAuthRepository()
    const registerUseCase = new RegisterUseCase(authRepository)
    const response = await registerUseCase.execute(req.body.data)
    reply.send(response)
  }

  async login(req: any, reply: any): Promise<any> {
    const authRepository = new PrismaAuthRepository()
    const loginUseCase = new LoginUseCase(authRepository)
    const response = await loginUseCase.execute(req.body.data)
    reply.send(response)
  }
}
