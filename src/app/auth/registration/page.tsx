import FormRegistration from "@/components/Auth/FormRegistration"

export default async function RegistrationPage() {
  return (
    <div className="auth__card auth__card--reg">
      <h2 className="auth__title">Create an account</h2>
      <FormRegistration />
    </div>
  )
}
