"use client"

import { Session } from "next-auth"
import { usePathname } from "next/navigation"
import BtnLogin from "../Btn/BtnLogin"
import BtnLogout from "../Btn/BtnLogout"

type Props = {
  session: Session | null
}

export default function NavUser({ session }: Props) {
  const pathname = usePathname()

  return (
    <div className="nav-item nav-item--user-menu">
      {session?.user ? (
        <>
          <div className="email">{session?.user?.email}</div>
          <BtnLogout />
        </>
      ) : (
        !pathname.startsWith("/auth") && <BtnLogin />
      )}
    </div>
  )
}
