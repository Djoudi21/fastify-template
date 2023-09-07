import {
    CreatedUserResponse,
    CreatedUserResponseError,
    Credentials,
} from "../use-cases/registerUseCase/types";
import {AuthRepository} from "./interfaces/authRepository";
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient()

export class PrismaAuthRepository implements AuthRepository {

    async register(credentials: Credentials): Promise<any> {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email,
                },
            })
            console.log('USER', user)
            if(user) {
                const response: CreatedUserResponseError = {
                    status: 400,
                    data: {
                        message: 'User already exists'
                    }
                }

                return Promise.resolve(response)
            }

            const newUser = await prisma.user.create({
                data: {
                    email: credentials.email,
                    password: credentials.password,
                    accessToken: 'access token',
                    refreshToken: 'refresh token',
                },
            })

            const response: CreatedUserResponse = {
                status: 201,
                data: {
                    ...newUser,
                },
            }

            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    async login(credentials: Credentials): Promise<any> {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: 'elsa@prisma.io',
                },
            })
            if (!user) {
                const response: any = {
                    status: 400,
                    data: {
                        message: 'No user found'
                    }
                }

                return Promise.resolve(response)
            }
            const  {password, ...rest} = user
            const response: any = {
                status: 200,
                data: {
                    ...rest
                },
            }
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }
}
