const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="admin">
      <h2>Admin (privat page for user with ADMIN role)</h2>
      {children}
    </div>
  )
}

export default AdminLayout
