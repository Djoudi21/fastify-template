import {Credentials, User} from "../../use-cases/registerUseCase/types";

export interface AuthRepository {
    _users?: User[]

    register(credentials: Credentials): Promise<any>

    login(credentials: Credentials): Promise<any>
}
