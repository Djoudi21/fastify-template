import { AuthRepository } from '../../repositories/interfaces/authRepository'
import { Credentials } from './types'

export class LoginUseCase {
  private authRepository: AuthRepository

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  async execute(credentials: Credentials): Promise<any> {
    try {
      return await this.authRepository.login(credentials)
    } catch (e) {
      console.log('ICICICICICIIC')
      return null
    }
  }
}
