import {RegisterUseCase} from "../use-cases/registerUseCase/registerUseCase";
import {CreatedUserResponse, CreatedUserResponseError} from "../use-cases/registerUseCase/types";
import {InMemoryAuthRepository} from "../repositories/inMemoryAuthRepository";

export class AuthController {
    async register(req: any, res: any): Promise<CreatedUserResponse | CreatedUserResponseError> {
        const authRepository = new InMemoryAuthRepository()
        const registerUseCase = new RegisterUseCase(authRepository)

        return await registerUseCase.execute(req.body.data)
    }
}
