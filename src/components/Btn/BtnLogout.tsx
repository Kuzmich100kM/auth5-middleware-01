import { handleLogout } from "action/authAction"

export default function BtnLogout() {
  return (
    <form action={handleLogout}>
      <button>Logout</button>
    </form>
  )
}
