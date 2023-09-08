import { AuthRepository } from '../../repositories/interfaces/authRepository'
import { Credentials } from './types'

const jwt = require('jsonwebtoken')

export class LoginUseCase {
  private authRepository: AuthRepository

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  async execute(credentials: Credentials): Promise<any> {
    try {
      const user = await this.authRepository.login(credentials)

      const data = {
        id: user.id,
        email: user.email,
      }
      const accessToken = jwt.sign(data, process.env.JWT_SECRET)
      return {
        status: 200,
        data,
        tokens: {
          accessToken,
          refreshToken: null,
        },
      }
    } catch (error) {
      return
    }
  }
}
