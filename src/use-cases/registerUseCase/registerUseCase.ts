import {AuthRepository} from "../../repositories/interfaces/authRepository";
import {Credentials, User} from "./types";

export class RegisterUseCase  {
    private authRepository: AuthRepository;

    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository;
    }


    async execute(credentials: Credentials) {
        await this.authRepository.register(credentials)
    }
}
