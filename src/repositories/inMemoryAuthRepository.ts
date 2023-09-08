import { AuthRepository } from './interfaces/authRepository'
import { Credentials, UserWithCredentials } from '../use-cases/registerUseCase/types'

export class InMemoryAuthRepository implements AuthRepository {
  _users: UserWithCredentials[] = []

  register(credentials: Credentials): Promise<any> {
    try {
      const IsAlreadyUser = this._users.find((user) => user.email === credentials.email)

      if (IsAlreadyUser) {
        const response: any = {
          status: 400,
          data: {
            message: 'User already exists',
          },
        }

        return Promise.resolve(response)
      }
      const newUser: UserWithCredentials = {
        id: '1',
        email: credentials.email,
        password: credentials.password,
      }

      this._users.push(newUser)

      const response: any = {
        status: 201,
        data: {
          id: Number(this._users[0].id),
          email: this._users[0].email,
        },
      }

      return Promise.resolve(response)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  login(credentials: Credentials): Promise<any> {
    try {
      const existingUser = this._users.find((user) => user.email === credentials.email)
      if (!existingUser) {
        const response: any = {
          status: 400,
          data: {
            message: 'No user found',
          },
        }

        return Promise.resolve(response)
      }
      const newUser: UserWithCredentials = {
        id: '1',
        email: credentials.email,
        password: credentials.password,
      }
      this._users.push(newUser)

      const response: any = {
        status: 200,
        data: {
          id: Number(existingUser.id),
          email: existingUser.email,
        },
      }
      return Promise.resolve(response)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
