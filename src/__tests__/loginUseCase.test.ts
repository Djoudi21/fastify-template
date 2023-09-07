import {beforeEach, describe, expect, it} from 'vitest'
import {AuthRepository} from "../repositories/interfaces/authRepository";
import {InMemoryAuthRepository} from "../repositories/inMemoryAuthRepository";
import {LoginUseCase} from "../use-cases/loginUseCase/loginUseCase";

describe('login use case', () => {
    let authRepository: AuthRepository
    let loginUseCase: LoginUseCase
    beforeEach(() => {
        authRepository = new InMemoryAuthRepository()
        loginUseCase = new LoginUseCase(authRepository);
    })
      it('should login a user', async () => {
          const existingUser = {
              id: '1',
              email: 'existing user email',
              password: 'existing user password'
          }

          const toto = {
              email: 'existing user email',
              password: 'existing user password'
          }
          const users = authRepository._users.push(existingUser)
          const {data} = await loginUseCase.execute(toto)
          if ('email' in data) {
              expect(data.email).toBeDefined()
          }
          if ('tokens' in data) {
              expect(data.tokens).toBeDefined();
          }
      })
})
