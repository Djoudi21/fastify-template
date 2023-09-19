export type Credentials = {
  email: string
  password: string
}

export type User = {
  id: number | string
  email: string
}

export type UserWithCredentials = User & {
  password: string
}
