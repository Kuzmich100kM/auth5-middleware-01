"use client"

import { loginAction } from "action/authAction"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useFormState } from "react-dom"

const FormLogin = () => {
  const callbackUrl = useSearchParams()?.get("callbackUrl") || "/"
  const cbUrl = encodeURIComponent(callbackUrl)

  const [msg, formAction] = useFormState(loginAction, undefined)

  return (
    <form className="auth__form" action={formAction}>
      <input
        name="email"
        type="text"
        placeholder="email"
        autoComplete="email"
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        autoComplete="current-password"
      />
      <button className="btn btn-submit">Login</button>
      {msg?.error && <div className="auth__error">{msg?.error}</div>}
      <div className="auth__btn-wrap">
        <div className="auth__btn-text">{"Don't have an account?"}</div>
        <Link
          href={`/auth/registration?callbackUrl=${cbUrl}`}
          className="auth__change-btn"
        >
          Register
        </Link>
      </div>
    </form>
  )
}

export default FormLogin
