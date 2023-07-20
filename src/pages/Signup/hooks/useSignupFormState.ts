import { useState } from 'react'

import { SignupFormValues } from '../types/signupForm'

export const useSignupFormState = () => {
  const [signupFormValues, setSignupFormValues] = useState<SignupFormValues>({
    email: '',
    username: '',
    password: '',
    department: 1,
    grade: 1
  })

  return { signupFormValues, setSignupFormValues }
}