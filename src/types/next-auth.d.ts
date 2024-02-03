import { DefaultJWT } from "@auth/core/jwt"
import NextAuth, { DefaultSession, User } from "next-auth"

export type ILogin = { email: FormDataEntryValue; password: FormDataEntryValue }

declare module "@auth/core/jwt" {
  interface JWT extends DefaultJWT {
    uid: string
    email: string
    roles: string[]
    status: string
    accessToken: string
    refreshToken: string
    accessTokenExp: number
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string
      uid: string
      email: string
      roles: string[]
      status: string
    }
    tokens: {
      accessToken: string
      refreshToken: string
      accessTokenExp: number // Remove this after realization Refresh token
    }
  }

  interface User extends User {
    id?: string
    accessToken: string
    refreshToken: string
  }
}
