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

export type Step01FormValues = {
  email: string
}

export type Step02FormValues = {
  password: string
  confirmPassword: string
}

export type Step03FormValues = {
  username: string
  department: number
  grade: number
}

export type Step04FormValues = {
  email: string
  username: string
  department: number
  grade: number
}

export type Step05FormValues = {
  iconImage: File
  profileBio: string
}
