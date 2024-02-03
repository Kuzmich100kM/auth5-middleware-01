import { headers } from "next/headers"
import Link from "next/link"
import { auth } from "../../app/api/auth/auth"
import NavLinks from "./NavLinks"
import NavUser from "./NavUser"

export default async function Nav() {
  const session = await auth()

  return (
    <nav className="nav">
      <div className="nav-item">
        <Link href="/" className="">
          LOGO
        </Link>
      </div>
      <NavLinks session={session} />
      <NavUser session={session} />
    </nav>
  )
}
