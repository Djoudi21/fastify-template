import {beforeEach, describe, expect, it} from 'vitest'
import {AuthRepository} from "../repositories/interfaces/authRepository";
import {InMemoryAuthRepository} from "../repositories/inMemoryAuthRepository";
import {RegisterUseCase} from "../use-cases/registerUseCase/registerUseCase";

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
          const {data} = await registerUseCase.execute(newUser)

          expect(users.length).toBe(1)
          expect(users[0].id).toBeDefined()

          if ('tokens' in data) {
              expect(data.tokens).toBeDefined();
          }
      })

    it('should return an error if the user already exist', async () => {
        const alreadyExistingUser = {
            id: '1',
            email: 'new user email',
            password: 'new user password'
        }

        const newUser = {
            email: 'new user email',
            password: 'new user password'
        }

        authRepository._users.push(alreadyExistingUser)
        const users = authRepository._users
        const {data} = await registerUseCase.execute(newUser)

        expect(users.length).toBe(1)

        if ('message' in data) {
            expect(data.message).toBeDefined()
        }

    })
})
