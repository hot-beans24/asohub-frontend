import { useState } from 'react'

import SignupFormValues from '@@/features/signup/types/SignupFormValues'

/* ⭐️ サインアップフォームステートフック ⭐️ */
const useSignupFormValuesState = () => {
  const [signupFormValues, setSignupFormValues] = useState<SignupFormValues>({
    email: '',
    username: '',
    password: '',
    departmentID: 1,
    grade: 1,
  })

  return { signupFormValues, setSignupFormValues }
}

export default useSignupFormValuesState