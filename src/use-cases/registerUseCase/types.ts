export type Credentials = {
    email: string
    password: string
}

export type User = {
    id: string
    email: string
}

export type UserWithCredentials = User & {
    password: string
}


export type CreatedUserResponse = {
    status: number,
    data: {
        id: number
        email: string
        accessToken: string
        refreshToken: string
    },
}

export type CreatedUserResponseError = {
    status: number,
    data: {
        message: string
    },
}
