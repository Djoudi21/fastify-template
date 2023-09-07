import {AuthRepository} from "../../repositories/interfaces/authRepository";
import {Credentials, LoggedUserResponse, LoggedUserResponseError} from "./types";

export class LoginUseCase  {
    private authRepository: AuthRepository;

    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository;
    }

    async execute(credentials: Credentials): Promise<LoggedUserResponse | LoggedUserResponseError> {
        return await this.authRepository.login(credentials)
    }
}
