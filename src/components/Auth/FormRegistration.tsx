"use client"

import { registrationAction } from "action/authAction"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import React from "react"
import { useFormState } from "react-dom"

const RegistrationForm = () => {
  const callbackUrl = useSearchParams()?.get("callbackUrl") || "/"
  const cbUrl = encodeURIComponent(callbackUrl)

  const [msg, formAction] = useFormState(registrationAction, undefined)

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
      <button className="btn btn-submit">Create</button>
      {msg?.error && <div className="auth__error">{msg?.error}</div>}
      <div className="auth__btn-wrap">
        <div className="auth__btn-text">{"Already have an account?"}</div>
        <Link
          href={`/auth/login?callbackUrl=${cbUrl}`}
          className="auth__change-btn"
        >
          Login
        </Link>
      </div>
    </form>
  )
}

export default RegistrationForm
