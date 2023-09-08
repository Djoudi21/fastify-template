import { AuthRepository } from '../../repositories/interfaces/authRepository'
import { Credentials } from './types'

export class RegisterUseCase {
  private authRepository: AuthRepository

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  async execute(credentials: Credentials): Promise<any> {
    try {
      const { password, ...rest } = await this.authRepository.register(credentials)
      return {
        status: 201,
        data: rest,
      }
    } catch (e) {
      return null
    }
  }
}
