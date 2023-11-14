import { atom } from 'recoil'

import SignupFormValues from '@@/features/signup/types/SignupFormValues'

// 🌐 Recoilで管理するサインアップフォーム値
const signupFormValues = atom<SignupFormValues>({
  key: 'signupFormValues',
  default: {
    email: null,
    username: null,
    password: null,
    departmentID: null,
    grade: null,
  },
})

export default signupFormValues
