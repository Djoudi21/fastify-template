import {beforeEach, describe, expect, it} from 'vitest'
import {AuthRepository} from "../repositories/interfaces/authRepository";
import {InMemoryAuthRepository} from "../repositories/inMemoryAuthRepository";
import {RegisterUseCase} from "../use-cases/registerUseCase/registerUseCase";

// The two tests marked with concurrent will be run in parallel
describe('register use case', () => {
    let authRepository: AuthRepository
    let registerUseCase: RegisterUseCase
    beforeEach(() => {
        authRepository = new InMemoryAuthRepository()
        registerUseCase = new RegisterUseCase(authRepository);
    })
      it('should register a user', async () => {
          const newUser = {
              email: 'new user email',
              password: 'new user password'
          }
          const users = authRepository._users
          await registerUseCase.execute(newUser)
          expect(users.length).toBe(1)
          expect(users[0].id).toBeDefined()
      })
})
