import { atom } from 'recoil'

type SignupFormType = {
  email: string
  username: string
  password: string
  department: number
  grade: number
}

export const signupFormState = atom<SignupFormType>({
  key: 'signupFormState',
  default: {
    email: '',
    username: '',
    password: '',
    department: 1,
    grade: 1
  }
})