import { Dispatch, SetStateAction } from 'react'

import SignupFormValues from '@@/features/signup/types/SignupFormValues'

// 🌐 サインアップフォーム値ステートの型
type SignupFormState = {
  signupFormValues: SignupFormValues
  setSignupFormValues: Dispatch<SetStateAction<SignupFormValues>>
}

export default SignupFormState
