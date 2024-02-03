import { auth } from "app/api/auth/auth"

export default async function DashboardPage() {
  const session = await auth()

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
    <div className="dashboard-page">
      <h4>Data from Server Session</h4>
      {getTable()}
    </div>
  )
}
