"use server"

import { signIn, signOut } from "../app/api/auth/auth"
import { fetchRegistration } from "../lib/authAPI"

export const handleLoginGithub = async () => {
  await signIn("github")
}

export const handleLoginGoogle = async () => {
  await signIn("google")
}

export const loginAction = async (_: undefined, formData: FormData) => {
  const { email, password } = Object.fromEntries(formData)
  console.log("email:>> ", email)
  console.log("password:>> ", password)
  try {
    await signIn("credentials", { email, password, redirect: true })
  } catch (e) {
    if (e instanceof Error) {
      if (e.message.includes("NEXT_REDIRECT")) {
        throw e
      } else if (e.message.includes("CredentialsSignin")) {
        return { error: "Wrong authorization" }
      } else {
        return { error: e.message }
      }
    }
    throw e
  }
}

export const registrationAction = async (_: undefined, formData: FormData) => {
  const { email, password } = Object.fromEntries(formData)

  try {
    const res = await fetchRegistration({ email, password })
    if (res?.email) {
      await loginAction(_, formData)
    }
  } catch (e) {
    if (e instanceof Error) {
      if (e.message.includes("NEXT_REDIRECT")) {
        throw e
      } else if (e.message.includes("CredentialsSignin")) {
        return { error: "Wrong authorization" }
      } else {
        return { error: e.message }
      }
    }
    throw e
  }
}

export const handleLogout = async () => {
  await signOut()
}
