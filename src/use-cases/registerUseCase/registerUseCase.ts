import {AuthRepository} from "../../repositories/interfaces/authRepository";
import {CreatedUserResponse, CreatedUserResponseError, Credentials, User} from "./types";

export class RegisterUseCase  {
    private authRepository: AuthRepository;

    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository;
    }

    async execute(credentials: Credentials): Promise<CreatedUserResponse | CreatedUserResponseError> {
        return await this.authRepository.register(credentials)
    }
}
