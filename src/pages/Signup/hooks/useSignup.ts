import { SignupFormValues } from "../types/signupForm"

export const useSignup = () => {
  type Body = {
    user_id: string
  }

  const signup = async (formValues: SignupFormValues) => {
    const res = await fetch(`${import.meta.env.VITE_API}/api/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: formValues.email,
        password: formValues.password,
        name: formValues.username,
        department_id: formValues.department,
        grade: formValues.grade
       })
    })
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { user_id }: Body = await res.json()
    return user_id
  }

  return { signup }
}