import { Credentials, UserWithCredentials } from '../../use-cases/registerUseCase/types'

export interface AuthRepository {
  _users?: UserWithCredentials[]

  register(credentials: Credentials): Promise<any>

  login(credentials: Credentials): Promise<any>
}
