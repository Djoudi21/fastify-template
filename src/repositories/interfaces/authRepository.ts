import {CreatedUserResponse, CreatedUserResponseError, Credentials, User} from "../../use-cases/registerUseCase/types";
import {LoggedUserResponse, LoggedUserResponseError} from "../../use-cases/loginUseCase/types";

export interface AuthRepository {
    _users: User[]

    register(credentials: Credentials): Promise<CreatedUserResponse | CreatedUserResponseError>

    login(credentials: Credentials): Promise<LoggedUserResponse | LoggedUserResponseError>
}
