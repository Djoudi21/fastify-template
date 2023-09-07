import {AuthRepository} from "./interfaces/authRepository";
import {
    CreatedUserResponse,
    CreatedUserResponseError,
    Credentials,
    User,
    UserWithCredentials
} from "../use-cases/registerUseCase/types";
import {LoggedUserResponse, LoggedUserResponseError} from "../use-cases/loginUseCase/types";

export class InMemoryAuthRepository implements AuthRepository {
    _users: UserWithCredentials[] = []
    register(credentials: Credentials): Promise<CreatedUserResponse | CreatedUserResponseError> {
        try {

            const IsAlreadyUser = this._users.find(user => user.email === credentials.email)

            if(!!IsAlreadyUser) {
                const response: CreatedUserResponseError = {
                    status: 400,
                    data: {
                        message: 'User already exists'
                    }
                }

                return Promise.resolve(response)
            }
            const newUser: UserWithCredentials = {
                id: '1',
                email: credentials.email,
                password: credentials.password
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

    login(credentials: Credentials): Promise<LoggedUserResponse | LoggedUserResponseError> {
        try {
            const existingUser = this._users.find(user => user.email === credentials.email)
            if(!existingUser) {
                const response: LoggedUserResponseError = {
                    status: 400,
                    data: {
                        message: 'No user found'
                    }
                }

                return Promise.resolve(response)
            }
            const newUser: UserWithCredentials = {
                id: '1',
                email: credentials.email,
                password: credentials.password
            }
            this._users.push(newUser)

            const response: CreatedUserResponse = {
                status: 200,
                data: {
                    id: existingUser.id,
                    email: existingUser.email,
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
