export type Credentials = {
    email: string
    password: string
}

export type User = {
    id: string
    email: string
}


export type CreatedUserResponse = {
    status: number,
    data: {
        id: User['id'],
        email: string,
        tokens: {
            accessToken: string
            refreshToken: string
        }
    },
}

export type CreatedUserResponseError = {
    status: number,
    data: {
        message: string
    },
}
