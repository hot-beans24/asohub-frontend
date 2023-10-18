import { useState } from 'react'

import { SignupFormValues } from '@@/features/signup/types/formValues'

export const useSignupFormState = () => {
  const [signupFormValues, setSignupFormValues] = useState<SignupFormValues>({
    email: '',
    username: '',
    password: '',
    departmentID: 1,
    grade: 1
  })

  return { signupFormValues, setSignupFormValues }
}
