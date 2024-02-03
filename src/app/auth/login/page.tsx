import FormLogin from "@/components/Auth/FormLogin"

export default async function LoginPage() {
  return (
    <div className="auth__card auth__card--login">
      <h2 className="auth__title">Login to your account</h2>
      <FormLogin />
    </div>
  )
}
