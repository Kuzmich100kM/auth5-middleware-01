import Link from "next/link"

export default function BtnLogin() {
  return (
    <Link href="/auth/login" className="btn-login">
      Login
    </Link>
  )
}
