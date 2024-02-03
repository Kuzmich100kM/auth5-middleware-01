import { NextAuthConfig } from "next-auth"

export const authConfig = {
  pages: { signIn: "/login" },
  providers: [],
  callbacks: {
    async jwt({ token, user, trigger, session, account, profile }) {
      if (user) {
        const payload = JSON.parse(
          Buffer.from(user?.accessToken.split(".")[1], "base64").toString()
        )
        token.uid = payload.uid
        token.email = payload.email
        token.roles = payload.roles
        token.status = payload.status
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.accessTokenExp = payload.exp

        return token
      }
      return token
    },
    async session({ session, token, user, trigger, newSession }) {
      session.user.uid = token?.uid
      session.user.status = token?.status
      session.user.roles = token?.roles

      const tokens = {
        accessToken: token?.accessToken,
        refreshToken: token?.refreshToken,
        accessTokenExp: token?.accessTokenExp,
      }

      return { ...session, tokens }
    },
  },
} satisfies NextAuthConfig
