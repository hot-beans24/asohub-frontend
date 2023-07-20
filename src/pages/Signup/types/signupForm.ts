import { Dispatch, SetStateAction } from 'react'

export type SignupFormValues = {
  email: string
  username: string
  password: string
  department: number
  grade: number
}

export type SignupFormState = {
  signupFormValues: SignupFormValues
  setSignupFormValues: Dispatch<SetStateAction<SignupFormValues>>
}