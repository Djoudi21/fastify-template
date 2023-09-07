export type Credentials = {
    email: string
    password: string
}

export type User = {
    id: string
    email: string
}


export type LoggedUserResponse = {
    status: number,
    data: {
        id: number,
        email: string,
        accessToken: string
        refreshToken: string
    },
}

export type LoggedUserResponseError = {
    status: number,
    data: {
        message: string
    },
}
