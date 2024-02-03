import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { ILogin } from "types/next-auth"
import { fetchLogin } from "../../../lib/authAPI"
import { authConfig } from "./auth.config"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials: ILogin) {
        try {
          const user = await fetchLogin(credentials)
          if (user) return user
          return null
        } catch (e) {
          return null
        }
      },
    }),
  ],
})
