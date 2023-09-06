import {AuthRepository} from "./interfaces/authRepository";
import {CreatedUserResponse, CreatedUserResponseError, Credentials, User} from "../use-cases/registerUseCase/types";

export class InMemoryAuthRepository implements AuthRepository {
    _users: User[] = []
    register(credentials: Credentials): Promise<CreatedUserResponse | CreatedUserResponseError> {
        try {
            const IsAlreadyUser = this._users.find(user => user.email === credentials.email)
            if(IsAlreadyUser) {
                const response: CreatedUserResponseError = {
                    status: 400,
                    data: {
                        message: 'User already exists'
                    }
                }

                return Promise.resolve(response)
            }
            const newUser: User = {
                id: '1',
                email: credentials.email
            }
            this._users.push(newUser)

            const response: CreatedUserResponse = {
                status: 201,
                data: {
                    id: this._users[0].id,
                    email: this._users[0].email,
                    tokens: {
                        accessToken: 'access token',
                        refreshToken: 'refresh token'
                    }
                },
            }
            return Promise.resolve(response)
        } catch(e) {
            return Promise.reject(e)
        }
    }
}
