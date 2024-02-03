import NextAuth from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { authConfig } from "./app/api/auth/auth.config"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl, auth, cookies } = req
  console.log("\n\n auth:>> ", auth)

  /// This block dont work (req.cookies === undefined)
  // Update or delete Cookies
  console.log("cookies:>> ", cookies) // undefined

  let response = NextResponse.next()

  if (auth && new Date().getTime() / 1000 > auth.tokens.accessTokenExp) {
    response = deleteCookie(req, response)
    return response
  }

  /// What below works (if remove cookies block after)
  const user = auth?.user
  const isAuthPage = nextUrl?.pathname.startsWith("/auth")

  // Redirect after Logged in
  if (isAuthPage) {
    if (user) {
      const callbackUrl = nextUrl.searchParams.get("callbackUrl") || "/"
      return Response.redirect(new URL(callbackUrl, nextUrl))
    }
    return null
  }

  // Protect Private pages (/dashboard, /admin)
  const isAdminPage = nextUrl?.pathname.startsWith("/admin")
  const isUserPage = nextUrl?.pathname.startsWith("/dashboard")

  // Redirect with callback then Unlogin
  if (!user && (isUserPage || isAdminPage)) {
    const cb = nextUrl.pathname + nextUrl.search
    const encodedCallbackUrl = encodeURIComponent(cb)

    return Response.redirect(
      new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    )
  }

  // Redirect if not ADMIN
  if (isAdminPage && !user?.roles.includes("ADMIN")) {
    return Response.redirect(new URL("/", nextUrl))
  }

  return null
})

function deleteCookie(request: NextRequest, response: NextResponse) {
  const sessionCookie = process.env.API_BASE?.startsWith("https://")
    ? "__Secure-next-auth.session-token"
    : "next-auth.session-token"

  response = NextResponse.next({ request: { headers: request.headers } })
  request.cookies.delete(sessionCookie)
  response.cookies.delete(sessionCookie)
  return response
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
