"use client"

import { useSession } from "next-auth/react"

export default function DashboardPage() {
  const { data: session, status } = useSession()

  if (!session) return null

  const getTable = () => {
    const arr = Object.entries(session.user)
    return arr.map((el) => (
      <div className="session-table" key={el[0]}>
        <div className="session-key">{el[0]}</div>
        <div className="session-value">{el[1].toString()}</div>
      </div>
    ))
  }

  return (
    <div className="admin-page">
      <h4>Data from Client Session</h4>
      {getTable()}
    </div>
  )
}
