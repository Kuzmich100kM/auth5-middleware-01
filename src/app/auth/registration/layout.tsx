const RegistrationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="registration">
      <h4 style={{ textAlign: "center" }}>
        Enter any email and password for the test
      </h4>
      {children}
    </div>
  )
}

export default RegistrationLayout
