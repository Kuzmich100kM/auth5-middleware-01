const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="login">
      <h4 style={{ textAlign: "center" }}>
        Enter any email and password for the test
      </h4>
      {children}
    </div>
  )
}

export default LoginLayout
