import {RegisterUseCase} from "../use-cases/registerUseCase/registerUseCase";
import {CreatedUserResponse, CreatedUserResponseError} from "../use-cases/registerUseCase/types";
import {InMemoryAuthRepository} from "../repositories/inMemoryAuthRepository";
import {LoggedUserResponse, LoggedUserResponseError} from "../use-cases/loginUseCase/types";
import {LoginUseCase} from "../use-cases/loginUseCase/loginUseCase";

export class AuthController {
    async register(req: any, res: any): Promise<CreatedUserResponse | CreatedUserResponseError> {
        const authRepository = new InMemoryAuthRepository()
        const registerUseCase = new RegisterUseCase(authRepository)

        return await registerUseCase.execute(req.body.data)
    }

    async login(req: any, res: any): Promise<LoggedUserResponse | LoggedUserResponseError> {
        const authRepository = new InMemoryAuthRepository()
        const loginUseCase = new LoginUseCase(authRepository)

        return await loginUseCase.execute(req.body.data)
    }
}
