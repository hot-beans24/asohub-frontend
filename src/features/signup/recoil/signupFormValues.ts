import { atom } from 'recoil'

import SignupFormValues from '@@/features/signup/types/SignupFormValues'

// 🌐 Recoilで管理するサインアップフォーム値
const signupFormValues = atom<SignupFormValues>({
  key: 'signupFormValues',
  default: {
    email: '',
    username: '',
    password: '',
    departmentID: 1,
    grade: 1,
  },
})

export default signupFormValues
