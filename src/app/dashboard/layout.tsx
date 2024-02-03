const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard">
      <h2>Dashboard (private page)</h2>
      {children}
    </div>
  )
}

export default DashboardLayout
