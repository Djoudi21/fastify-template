import {AuthRepository} from "./interfaces/authRepository";
import {Credentials, User} from "../use-cases/registerUseCase/types";

export class InMemoryAuthRepository implements AuthRepository {
    _users: User[] = []
    register(credentials: Credentials) {
        try {
            const newUser: User = {
                id: '1',
                email: credentials.email
            }
            this._users.push(newUser)
            const response = {
                status: 201,
                data: {
                    id: this._users[0],
                    email: this._users[0].email,
                }
            }
            return Promise.resolve(response)
        } catch(e) {
            return Promise.reject(e)

        }

    }
}
