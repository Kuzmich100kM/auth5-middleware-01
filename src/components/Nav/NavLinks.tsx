"use client"

import { Session } from "next-auth"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
  session: Session | null
}

export default function NavLinks({ session }: Props) {
  const pathname = usePathname()
  const isAdmin = session?.user?.roles?.includes("ADMIN")

  const links = [{ title: "Dashboard", slug: "dashboard" }]

  const addCls = (slug: string) => {
    return `${pathname.startsWith(`/${slug}`) ? "nav-link--active" : ""}`
  }

  const getTag = ({ title, slug }: { title: string; slug: string }) => {
    return (
      <Link href={`/${slug}`} className={`nav-link ${addCls(slug)}`} key={slug}>
        {title}
      </Link>
    )
  }

  return (
    <>
      {links.map((link) => getTag(link))}
      {isAdmin && getTag({ title: "Admin", slug: "admin" })}
      {!isAdmin && (
        <div className={`nav-link nav-link--opacity`} key="admin">
          Admin(hidden)
        </div>
      )}
    </>
  )
}
